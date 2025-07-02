import express from 'express';
import { getAllUsers, getUserById, createUser, updateUser, deleteUser } from '../controllers/userController.js';
import { authMiddleware } from '../middlewares/authMiddleware.js';

const router = express.Router();


// Get all users
router.get('/', authMiddleware, getAllUsers); 
// Get a user by ID
router.get('/:id', authMiddleware, getUserById);
// Create a new user
router.post('/', authMiddleware, createUser);
// Update a user
router.put('/:id', authMiddleware, updateUser);
// Delete a user
router.delete('/:id', authMiddleware, deleteUser);



export default router;

// This code defines the routes for managing users in the application.
// It includes routes to get all users, get a user by ID, create a new user,
// update an existing user, and delete a user. All operations are protected by authentication middleware.