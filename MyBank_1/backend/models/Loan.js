const db = require('../config/database');

class Loan {
    // Create new loan application
    static async create(loanData) {
        const { userId, loanType, amount, interestRate, tenure, emiAmount, status = 'pending' } = loanData;
        
        const [result] = await db.execute(
            `INSERT INTO loans (user_id, loan_type, amount, interest_rate, tenure, emi_amount, status) 
             VALUES (?, ?, ?, ?, ?, ?, ?)`,
            [userId, loanType, amount, interestRate, tenure, emiAmount, status]
        );
        
        return this.findById(result.insertId);
    }

    // Find loan by ID
    static async findById(id) {
        const [rows] = await db.execute(
            `SELECT l.*, u.name as user_name, u.email, a.account_number, a.balance 
             FROM loans l 
             JOIN users u ON l.user_id = u.id 
             LEFT JOIN accounts a ON u.id = a.user_id 
             WHERE l.id = ?`, 
            [id]
        );
        return rows[0];
    }

    // Get all loans for a user
    static async getUserLoans(userId) {
        const [rows] = await db.execute(
            'SELECT * FROM loans WHERE user_id = ? ORDER BY created_at DESC',
            [userId]
        );
        return rows;
    }

    // Get all pending loans (for admin)
    static async getPendingLoans() {
        const [rows] = await db.execute(
            `SELECT l.*, u.name as user_name, u.email, a.balance 
             FROM loans l 
             JOIN users u ON l.user_id = u.id 
             LEFT JOIN accounts a ON u.id = a.user_id 
             WHERE l.status = 'pending' 
             ORDER BY l.created_at DESC`
        );
        return rows;
    }

    // Get all loans (for admin)
    static async getAllLoans() {
        const [rows] = await db.execute(
            `SELECT l.*, u.name as user_name, u.email, a.balance,
                    admin.name as approver_name
             FROM loans l 
             JOIN users u ON l.user_id = u.id 
             LEFT JOIN accounts a ON u.id = a.user_id 
             LEFT JOIN users admin ON l.approved_by = admin.id
             ORDER BY l.created_at DESC`
        );
        return rows;
    }

    // Update loan status
    static async updateStatus(loanId, status, approvedBy = null) {
        if (approvedBy) {
            await db.execute(
                'UPDATE loans SET status = ?, approved_by = ?, approved_date = NOW() WHERE id = ?',
                [status, approvedBy, loanId]
            );
        } else {
            await db.execute(
                'UPDATE loans SET status = ? WHERE id = ?',
                [status, loanId]
            );
        }
        return this.findById(loanId);
    }
}

module.exports = Loan;