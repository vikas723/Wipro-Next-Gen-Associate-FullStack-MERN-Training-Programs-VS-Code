const db = require('../config/database');

class Transaction {
    // Create new transaction
    static async create(transactionData) {
        const { userId, transactionId, type, amount, status = 'completed' } = transactionData;
        
        if (!userId || !transactionId || !type || !amount) {
            throw new Error('Missing required transaction fields');
        }
        
        const [result] = await db.execute(
            'INSERT INTO transactions (user_id, transaction_id, type, amount, status) VALUES (?, ?, ?, ?, ?)',
            [userId, transactionId, type, amount, status]
        );
        
        return this.findByTransactionId(transactionId);
    }

    // Find transaction by ID
    static async findByTransactionId(transactionId) {
        const [rows] = await db.execute('SELECT * FROM transactions WHERE transaction_id = ?', [transactionId]);
        return rows[0];
    }

    // Get user's recent transactions
    static async getUserTransactions(userId, limit = 10) {
        const [rows] = await db.execute(
            'SELECT * FROM transactions WHERE user_id = ? ORDER BY created_at DESC LIMIT ?',
            [userId, limit]
        );
        return rows;
    }

    // Get all transactions (for admin)
    static async getAllTransactions() {
        const [rows] = await db.execute(
            `SELECT t.*, u.name as user_name, u.email 
             FROM transactions t 
             JOIN users u ON t.user_id = u.id 
             ORDER BY t.created_at DESC 
             LIMIT 100`
        );
        return rows;
    }
}

module.exports = Transaction;