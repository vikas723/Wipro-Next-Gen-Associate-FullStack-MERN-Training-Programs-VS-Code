const db = require('../config/database');
const bcrypt = require('bcryptjs');

class User {
    // Create new user
    static async create(userData) {
        const { name, email, password, role = 'customer' } = userData;
        
        const hashedPassword = await bcrypt.hash(password, 10);
        
        const [result] = await db.execute(
            'INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)',
            [name, email, hashedPassword, role]
        );
        
        return this.findById(result.insertId);
    }

    // Find user by email
    static async findByEmail(email) {
        const [rows] = await db.execute('SELECT * FROM users WHERE email = ?', [email]);
        return rows[0];
    }

    // Find user by ID
    static async findById(id) {
        const [rows] = await db.execute(
            'SELECT id, name, email, role, created_at FROM users WHERE id = ?', 
            [id]
        );
        return rows[0];
    }

    // Get all customers (for admin)
    static async getAllCustomers() {
        const [rows] = await db.execute(
            `SELECT u.id, u.name, u.email, u.role, u.created_at, 
                    a.id as account_id, a.account_number, a.balance, a.status as account_status
             FROM users u 
             LEFT JOIN accounts a ON u.id = a.user_id 
             WHERE u.role = 'customer'
             ORDER BY u.created_at DESC`
        );
        return rows;
    }

    // Compare password
    static async comparePassword(plainPassword, hashedPassword) {
        return await bcrypt.compare(plainPassword, hashedPassword);
    }

    // Create admin user if not exists
    static async createAdmin() {
        const adminEmail = 'admin@myfin.com';
        const existingAdmin = await this.findByEmail(adminEmail);
        
        if (!existingAdmin) {
            const hashedPassword = await bcrypt.hash('admin123', 10);
            await db.execute(
                'INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)',
                ['Admin', adminEmail, hashedPassword, 'admin']
            );
            console.log('Admin user created successfully - Email: admin@myfin.com, Password: admin123');
        }
    }
}

module.exports = User;