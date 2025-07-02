import express from 'express';
import { getAllServices, getServiceById, createService, updateService, deleteService } from '../controllers/serviceController.js';
import { authMiddleware } from '../middlewares/authMiddleware.js';
const router = express.Router();

// Get all services
router.get('/', getAllServices);
// Get a service by ID
router.get('/:id', getServiceById);
// Create a new service
router.post('/', authMiddleware, createService);
// Update a service
router.put('/:id', authMiddleware, updateService);
// Delete a service
router.delete('/:id', authMiddleware, deleteService);

export default router;

// This code defines the routes for managing services in the application.
// It includes routes to get all services, get a service by ID, create a new service,
// update an existing service, and delete a service. The create, update, and delete
// operations are protected by authentication middleware.