import { sql } from '../config/db.js';

// 🔐 Get Bookings for Logged-in User (backend/controllers/bookingController.js)
export const getMyBookings = async (req, res) => {
  const userId = req.user.id; // Comes from authMiddleware

  try {
    const result = await sql.query(
      `SELECT
         b.id,
         b.date,
         b.time,
         s.name AS service_name
       FROM bookings b
       JOIN services s ON b.service_id = s.id
       WHERE b.user_id = $1
       ORDER BY b.date DESC, b.time DESC`,
      [userId]
    );

    res.status(200).json(result); // postgres.js returns plain array
  } catch (error) {
    console.error('❌ Error fetching my bookings:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// 🔐 Get all bookings (Admin)
export const getAllBookings = async (req, res) => {
  try {
    // Optional: Check for admin role (if not enforced in middleware)
    if (req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Access denied: Admins only' });
    }

    const result = await sql`
      SELECT
        b.id,
        b.date,
        b.time,
        u.id AS user_id,
        u.name AS user_name,
        s.id AS service_id,
        s.name AS service_name
      FROM bookings b
      JOIN users u ON b.user_id = u.id
      JOIN services s ON b.service_id = s.id
      ORDER BY b.date DESC, b.time DESC
    `;

    console.log('📦 All Bookings Sent to Admin:', result);
    res.status(200).json(result);
  } catch (error) {
    console.error('❌ Error fetching all bookings:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// 🔹 Get Bookings by User ID
export const getBookingsByUserId = async (req, res) => {
  const { userId } = req.params;

  try {
    const result = await sql.query(`
      SELECT
        b.id,
        b.date,
        b.time,
        s.id AS service_id,
        s.name AS service_name
      FROM bookings b
      JOIN services s ON b.service_id = s.id
      WHERE b.user_id = $1
      ORDER BY b.date DESC, b.time DESC
    `, [userId]);

    if (!result || !Array.isArray(result.rows) || result.rows.length === 0) {
      return res.status(404).json({ message: 'No bookings found for this user' });
    }

    res.status(200).json(result.rows);
  } catch (error) {
    console.error('Error fetching bookings by user ID:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// 🔹 Get Bookings by Service ID
export const getBookingsByServiceId = async (req, res) => {
  const { serviceId } = req.params;

  try {
    const result = await sql.query(`
      SELECT
        b.id,
        b.date,
        b.time,
        u.id AS user_id,
        u.name AS user_name
      FROM bookings b
      JOIN users u ON b.user_id = u.id
      WHERE b.service_id = $1
      ORDER BY b.date DESC, b.time DESC
    `, [serviceId]);

    if (!result || !Array.isArray(result.rows) || result.rows.length === 0) {
      return res.status(404).json({ message: 'No bookings found for this service' });
    }

    res.status(200).json(result.rows);
  } catch (error) {
    console.error('Error fetching bookings by service ID:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// 🔹 Get Bookings by Date
export const getBookingsByDate = async (req, res) => {
  const { date } = req.params;

  try {
    const result = await sql.query(`
      SELECT
        b.id,
        b.time,
        u.name AS user_name,
        s.name AS service_name
      FROM bookings b
      JOIN users u ON b.user_id = u.id
      JOIN services s ON b.service_id = s.id
      WHERE b.date = $1
      ORDER BY b.time DESC
    `, [date]);

    if (!result || !Array.isArray(result.rows) || result.rows.length === 0) {
      return res.status(404).json({ message: 'No bookings found for this date' });
    }

    res.status(200).json(result.rows);
  } catch (error) {
    console.error('Error fetching bookings by date:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// 🔹 Create New Booking
// backend/controllers/bookingController.js

export const createBooking = async (req, res) => {
  const { userId, serviceId, date, time } = req.body;

  console.log('📥 Booking Attempt:', { userId, serviceId, date, time });

  // Basic validation
  if (!userId || !serviceId || !date || !time) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  try {
    const result = await sql.query(
      `INSERT INTO bookings (user_id, service_id, date, time)
       VALUES ($1, $2, $3, $4)
       RETURNING *`,
      [userId, serviceId, date, time]
    );

    console.log('✅ Booking created:', result[0]); // ← Fixed
    res.status(201).json(result[0]); // ← Fixed
  } catch (error) {
    console.error('🔥 Error creating booking:', error);
    res.status(500).json({
      message: 'Internal server error',
      error: error.message,
    });
  }
};


// 🔹 Update Booking
export const updateBooking = async (req, res) => {
  const { id } = req.params;
  const { userId, serviceId, date, time } = req.body;

  try {
    const result = await sql.query(
      `UPDATE bookings
       SET user_id = $1, service_id = $2, date = $3, time = $4
       WHERE id = $5
       RETURNING *`,
      [userId, serviceId, date, time, id]
    );

    if (!result.rows.length) {
      return res.status(404).json({ message: 'Booking not found' });
    }

    res.status(200).json(result.rows[0]);
  } catch (error) {
    console.error('Error updating booking:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// 🔹 Delete Booking
export const deleteBooking = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await sql.query(
      'DELETE FROM bookings WHERE id = $1 RETURNING *',
      [id]
    );

    if (!result.rows.length) {
      return res.status(404).json({ message: 'Booking not found' });
    }

    res.status(200).json({ message: 'Booking deleted successfully' });
  } catch (error) {
    console.error('Error deleting booking:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
