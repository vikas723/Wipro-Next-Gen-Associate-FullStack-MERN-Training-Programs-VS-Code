const express = require('express');
const router = express.Router();
const { protect, admin } = require('../middleware/auth');
const User = require('../models/User');
const Account = require('../models/Account');
const Loan = require('../models/Loan');
const Transaction = require('../models/Transaction');

const generateTransactionId = () => {
    return 'TXN' + Date.now() + Math.floor(Math.random() * 1000);
};

// All admin routes require both authentication and admin role
router.use(protect, admin);

// @route   GET /api/admin/customers
// @desc    Get all customers
router.get('/customers', async (req, res) => {
    try {
        const customers = await User.getAllCustomers();
        res.json({
            success: true,
            data: customers
        });
    } catch (error) {
        console.error('Error fetching customers:', error);
        res.status(500).json({ 
            success: false,
            message: 'Server error', 
            error: error.message 
        });
    }
});

// @route   GET /api/admin/accounts
// @desc    Get all accounts
router.get('/accounts', async (req, res) => {
    try {
        const accounts = await Account.getAllAccounts();
        res.json({
            success: true,
            data: accounts
        });
    } catch (error) {
        console.error('Error fetching accounts:', error);
        res.status(500).json({ 
            success: false,
            message: 'Server error', 
            error: error.message 
        });
    }
});

// @route   GET /api/admin/loans/pending
// @desc    Get all pending loans
router.get('/loans/pending', async (req, res) => {
    try {
        const loans = await Loan.getPendingLoans();
        res.json({
            success: true,
            data: loans
        });
    } catch (error) {
        console.error('Error fetching pending loans:', error);
        res.status(500).json({ 
            success: false,
            message: 'Server error', 
            error: error.message 
        });
    }
});

// @route   GET /api/admin/loans/all
// @desc    Get all loans
router.get('/loans/all', async (req, res) => {
    try {
        const loans = await Loan.getAllLoans();
        res.json({
            success: true,
            data: loans
        });
    } catch (error) {
        console.error('Error fetching all loans:', error);
        res.status(500).json({ 
            success: false,
            message: 'Server error', 
            error: error.message 
        });
    }
});

// @route   PUT /api/admin/loans/:id/approve
// @desc    Approve loan
router.put('/loans/:id/approve', async (req, res) => {
    console.log('Loan approval request received for loan ID:', req.params.id);
    console.log('Approved by admin ID:', req.user.id);
    
    try {
        const loanId = req.params.id;
        const loan = await Loan.findById(loanId);
        
        if (!loan) {
            return res.status(404).json({ 
                success: false,
                message: 'Loan not found' 
            });
        }

        console.log('Loan details:', {
            id: loan.id,
            user_id: loan.user_id,
            amount: loan.amount,
            current_status: loan.status
        });

        // Check if loan is already processed
        if (loan.status !== 'pending') {
            return res.status(400).json({ 
                success: false,
                message: `Loan is already ${loan.status}` 
            });
        }

        // Check if user has account
        const account = await Account.findByUserId(loan.user_id);
        if (!account) {
            return res.status(400).json({ 
                success: false,
                message: 'User has no bank account' 
            });
        }

        console.log('Attempting to credit amount:', loan.amount);
        
        // Update loan status
        await Loan.updateStatus(loanId, 'approved', req.user.id);

        // Credit amount to user's account
        const credited = await Account.creditAmount(loan.user_id, loan.amount);
        
        if (!credited) {
            // Rollback loan status if credit fails
            await Loan.updateStatus(loanId, 'pending', req.user.id);
            return res.status(500).json({ 
                success: false,
                message: 'Failed to credit amount to account' 
            });
        }

        console.log('Amount credited successfully');
        console.log('Creating transaction record');

        // Create transaction record
        const transactionId = generateTransactionId();
        await Transaction.create({
            userId: loan.user_id,
            transactionId: transactionId,
            type: 'loan_credit',
            amount: loan.amount,
            status: 'completed'
        });

        // Get updated account balance
        const updatedAccount = await Account.findByUserId(loan.user_id);
        
        // Get updated loan details for response
        const updatedLoan = await Loan.findById(loanId);

        console.log('Sending success response');

        res.status(200).json({ 
            success: true,
            message: 'Loan approved successfully! Amount credited to customer account.',
            data: {
                loan: updatedLoan,
                creditedAmount: loan.amount,
                newBalance: updatedAccount.balance
            }
        });

    } catch (error) {
        console.error('Loan approval error:', error);
        res.status(500).json({ 
            success: false,
            message: 'Server error during loan approval',
            error: error.message 
        });
    }
});

// @route   PUT /api/admin/loans/:id/reject
// @desc    Reject loan
router.put('/loans/:id/reject', async (req, res) => {
    try {
        const loanId = req.params.id;
        const loan = await Loan.findById(loanId);
        
        if (!loan) {
            return res.status(404).json({ 
                success: false,
                message: 'Loan not found' 
            });
        }

        if (loan.status !== 'pending') {
            return res.status(400).json({ 
                success: false,
                message: `Loan is already ${loan.status}` 
            });
        }

        await Loan.updateStatus(loanId, 'rejected', req.user.id);
        
        const updatedLoan = await Loan.findById(loanId);
        
        res.status(200).json({ 
            success: true,
            message: 'Loan rejected successfully',
            data: { loan: updatedLoan }
        });
    } catch (error) {
        console.error('Loan rejection error:', error);
        res.status(500).json({ 
            success: false,
            message: 'Server error during loan rejection',
            error: error.message 
        });
    }
});

module.exports = router;