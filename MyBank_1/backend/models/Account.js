const db = require('../config/database');

class Account {
    // Create new account
    static async create(accountData) {
        const { userId, accountNumber, balance = 1000 } = accountData;
        
        const [result] = await db.execute(
            'INSERT INTO accounts (user_id, account_number, balance) VALUES (?, ?, ?)',
            [userId, accountNumber, balance]
        );
        
        return this.findByUserId(userId);
    }

    // Find account by user ID
    static async findByUserId(userId) {
        const [rows] = await db.execute('SELECT * FROM accounts WHERE user_id = ?', [userId]);
        return rows[0];
    }

    // Find account by account ID
    static async findById(id) {
        const [rows] = await db.execute('SELECT * FROM accounts WHERE id = ?', [id]);
        return rows[0];
    }

    // Update balance
    static async updateBalance(userId, newBalance) {
        await db.execute(
            'UPDATE accounts SET balance = ? WHERE user_id = ?',
            [newBalance, userId]
        );
        return this.findByUserId(userId);
    }

    // Credit amount to account (for loan approval)
    static async creditAmount(userId, amount) {
        let connection;
        try {
            connection = await db.getConnection();
            await connection.beginTransaction();
            
            const account = await this.findByUserId(userId);
            if (!account) {
                await connection.rollback();
                return false;
            }
            
            const newBalance = parseFloat(account.balance) + parseFloat(amount);
            
            // Update balance
            await connection.execute(
                'UPDATE accounts SET balance = ? WHERE user_id = ?',
                [newBalance, userId]
            );
            
            await connection.commit();
            
            console.log(`Credited ₹${amount} to user ${userId}. New balance: ₹${newBalance}`);
            return true;
            
        } catch (error) {
            if (connection) {
                await connection.rollback();
            }
            console.error('Error in creditAmount:', error);
            throw error;
        } finally {
            if (connection) {
                connection.release();
            }
        }
    }

    // Check if user has account
    static async userHasAccount(userId) {
        const [rows] = await db.execute('SELECT id FROM accounts WHERE user_id = ?', [userId]);
        return rows.length > 0;
    }

    // Get all accounts (for admin)
    static async getAllAccounts() {
        const [rows] = await db.execute(
            `SELECT a.*, u.name as user_name, u.email 
             FROM accounts a 
             JOIN users u ON a.user_id = u.id 
             ORDER BY a.created_at DESC`
        );
        return rows;
    }
}

module.exports = Account;