const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/auth');
const db = require('../config/database');

// Helper function to generate transaction ID
const generateTransactionId = () => {
    return 'TXN' + Date.now() + Math.floor(Math.random() * 1000);
};

// @route   GET /api/account
// @desc    Get user's account
// @access  Private
router.get('/', protect, async (req, res) => {
    try {
        const [accounts] = await db.execute(
            'SELECT * FROM accounts WHERE user_id = ?',
            [req.user.id]
        );
        
        if (accounts.length === 0) {
            return res.status(404).json({ message: 'Account not found' });
        }
        
        res.json(accounts[0]);
    } catch (error) {
        console.error('Error in GET /account:', error);
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});

// @route   POST /api/account/create
// @desc    Create new account
// @access  Private
router.post('/create', protect, async (req, res) => {
    try {
        // Check if account already exists
        const [existing] = await db.execute(
            'SELECT * FROM accounts WHERE user_id = ?',
            [req.user.id]
        );
        
        if (existing.length > 0) {
            return res.status(400).json({ message: 'Account already exists' });
        }
        
        // Generate account number
        const accountNumber = 'ACC' + Date.now() + Math.floor(Math.random() * 1000);
        
        // Create account with welcome bonus
        const [result] = await db.execute(
            'INSERT INTO accounts (user_id, account_number, balance) VALUES (?, ?, ?)',
            [req.user.id, accountNumber, 1000.00]
        );
        
        // Get the created account
        const [newAccount] = await db.execute(
            'SELECT * FROM accounts WHERE id = ?',
            [result.insertId]
        );
        
        res.status(201).json(newAccount[0]);
    } catch (error) {
        console.error('Error in POST /create:', error);
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});

// @route   POST /api/account/deposit
// @desc    Deposit money
// @access  Private
router.post('/deposit', protect, async (req, res) => {
    try {
        const { amount } = req.body;
        
        if (!amount || amount <= 0) {
            return res.status(400).json({ message: 'Please provide a valid amount' });
        }
        
        // Get user's account
        const [accounts] = await db.execute(
            'SELECT * FROM accounts WHERE user_id = ?',
            [req.user.id]
        );
        
        if (accounts.length === 0) {
            return res.status(404).json({ message: 'Account not found' });
        }
        
        const account = accounts[0];
        const newBalance = parseFloat(account.balance) + parseFloat(amount);
        
        // Update balance
        await db.execute(
            'UPDATE accounts SET balance = ? WHERE id = ?',
            [newBalance, account.id]
        );
        
        // Create transaction record
        const transactionId = generateTransactionId();
        await db.execute(
            'INSERT INTO transactions (user_id, account_id, transaction_id, type, amount) VALUES (?, ?, ?, ?, ?)',
            [req.user.id, account.id, transactionId, 'deposit', amount]
        );
        
        res.json({
            message: 'Deposit successful',
            balance: newBalance
        });
    } catch (error) {
        console.error('Error in POST /deposit:', error);
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});

// @route   POST /api/account/withdraw
// @desc    Withdraw money
// @access  Private
router.post('/withdraw', protect, async (req, res) => {
    try {
        const { amount } = req.body;
        
        if (!amount || amount <= 0) {
            return res.status(400).json({ message: 'Please provide a valid amount' });
        }
        
        // Get user's account
        const [accounts] = await db.execute(
            'SELECT * FROM accounts WHERE user_id = ?',
            [req.user.id]
        );
        
        if (accounts.length === 0) {
            return res.status(404).json({ message: 'Account not found' });
        }
        
        const account = accounts[0];
        
        if (account.balance < amount) {
            return res.status(400).json({ message: 'Insufficient balance' });
        }
        
        const newBalance = parseFloat(account.balance) - parseFloat(amount);
        
        // Update balance
        await db.execute(
            'UPDATE accounts SET balance = ? WHERE id = ?',
            [newBalance, account.id]
        );
        
        // Create transaction record
        const transactionId = generateTransactionId();
        await db.execute(
            'INSERT INTO transactions (user_id, account_id, transaction_id, type, amount) VALUES (?, ?, ?, ?, ?)',
            [req.user.id, account.id, transactionId, 'withdrawal', amount]
        );
        
        res.json({
            message: 'Withdrawal successful',
            balance: newBalance
        });
    } catch (error) {
        console.error('Error in POST /withdraw:', error);
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});

// @route   GET /api/account/transactions
// @desc    Get user's transactions
// @access  Private
router.get('/transactions', protect, async (req, res) => {
    try {
        const [transactions] = await db.execute(
            'SELECT * FROM transactions WHERE user_id = ? ORDER BY created_at DESC LIMIT 10',
            [req.user.id]
        );
        
        res.json(transactions);
    } catch (error) {
        console.error('Error in GET /transactions:', error);
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});

module.exports = router;