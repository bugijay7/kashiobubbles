import express from 'express';
import {
  getAllBookings,
  getBookingsByUserId,
  getBookingsByServiceId,
  getBookingsByDate,
  createBooking,
  updateBooking,
  deleteBooking,
   getMyBookings
} from '../controllers/bookingController.js';

import { authMiddleware } from '../middlewares/authMiddleware.js';
import { adminMiddleware } from '../middlewares/adminMiddleware.js';

const router = express.Router();

// 🔐 Protect all routes below with `authMiddleware`
// If some routes should be public, apply selectively

// All routes require user to be authMiddlewared
router.get('/', authMiddleware, getAllBookings);
router.get('/me', authMiddleware, getMyBookings);

router.get('/user/:userId', authMiddleware, getBookingsByUserId);
router.get('/service/:serviceId', authMiddleware, getBookingsByServiceId);
router.get('/date/:date', authMiddleware, getBookingsByDate);

router.post('/', authMiddleware, createBooking);
router.put('/:id', authMiddleware, updateBooking);
router.delete('/:id', authMiddleware, deleteBooking);


// 🛡️ Admin-Only Route
router.get('/admin', authMiddleware, adminMiddleware, getAllBookings); // ✅ only admin can access

export default router;
