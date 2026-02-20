const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/auth');
const Loan = require('../models/Loan');
const Account = require('../models/Account');

// @route   POST /api/loans/calculate-emi
// @desc    Calculate EMI
// @access  Private
router.post('/calculate-emi', protect, (req, res) => {
    try {
        const { amount, rate, months } = req.body;
        
        const monthlyRate = rate / (12 * 100);
        const emi = amount * monthlyRate * Math.pow(1 + monthlyRate, months) / 
                    (Math.pow(1 + monthlyRate, months) - 1);
        
        const totalAmount = emi * months;
        const totalInterest = totalAmount - amount;

        res.json({
            loanAmount: amount,
            interestRate: rate,
            tenure: months,
            emi: Math.round(emi),
            totalAmount: Math.round(totalAmount),
            totalInterest: Math.round(totalInterest)
        });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});

// @route   POST /api/loans/apply
// @desc    Apply for loan
// @access  Private
router.post('/apply', protect, async (req, res) => {
    try {
        const { loanType, amount, interestRate, tenure, emiAmount } = req.body;
        
        // Check if user has account
        const account = await Account.findByUserId(req.user.id);
        if (!account) {
            return res.status(400).json({ message: 'Please create a bank account first' });
        }

        const loan = await Loan.create({
            userId: req.user.id,
            loanType,
            amount,
            interestRate,
            tenure,
            emiAmount
        });

        res.status(201).json(loan);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});

// @route   GET /api/loans/my-loans
// @desc    Get user's loans
// @access  Private
router.get('/my-loans', protect, async (req, res) => {
    try {
        const loans = await Loan.getUserLoans(req.user.id);
        res.json(loans);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});

module.exports = router;