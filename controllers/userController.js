import { sql } from '../config/db.js'

export const getAllUsers = async (req, res) => {
  try {
    const users = await sql`SELECT id, name, email, role, created_at FROM users`;
    res.json(users); // ✅ This line MUST exist
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};




export const getUserById = async (req, res) => {
  const { id } = req.params;    
    try {   
        const result = await sql.query('SELECT * FROM users WHERE id = $1', [id]);
        if (result.rows.length === 0) {
            return res.status(404).json({ message: 'User not found' });
        }   
        res.status(200).json(result.rows[0]);
    } catch (error) {
        console.error('Error fetching user:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};  

export const createUser = async (req, res) => {
  const { name, email, password } = req.body;   
    try {   
        const result = await sql.query(
            'INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *',
            [name, email, password] 
        );
        res.status(201).json(result.rows[0]);
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({ message: 'Internal server error' });
    }

};

export const updateUser = async (req, res) => { 
    const { id } = req.params;
    const { name, email, password } = req.body;
    try {
        const result = await sql.query(
            'UPDATE users SET name = $1, email = $2, password = $3 WHERE id = $4 RETURNING *',
            [name, email, password, id]
        );
        if (result.rows.length === 0) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(result.rows[0]);
    } catch (error) {
        console.error('Error updating user:', error);
        res.status(500).json({ message: 'Internal server error' });
    }   
};

export const deleteUser = async (req, res) => { 
    const { id } = req.params;
    try {   
        const result = await sql.query('DELETE FROM users WHERE id = $1 RETURNING *', [id]);
        if (result.rows.length === 0) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
        console.error('Error deleting user:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// This code defines the user controller for managing user-related operations.
// It includes functions to get all users, get a user by ID, create a new user,
// update an existing user, and delete a user. Each function interacts with the database
// and handles errors appropriately, returning relevant HTTP status codes and messages.