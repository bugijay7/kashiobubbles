import { sql } from '../config/db.js';


export const getAllServices = async (req, res) => {
  try {
    const rows = await sql.query('SELECT * FROM services');
    res.status(200).json(rows);
  } catch (error) {
    console.error('Error fetching services:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const getServiceById = async (req, res) => { 
    const { id } = req.params;
    try {
        const result = await sql.query('SELECT * FROM services WHERE id = $1', [id]);
        if (result.rows.length === 0) {
            return res.status(404).json({ message: 'Service not found' });
        }
        res.status(200).json(result.rows[0]);
    } catch (error) {
        console.error('Error fetching service:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};


export const createService = async (req, res) => { 
  const { name, description, price, image } = req.body;

  try {
    const result = await sql.query(
      'INSERT INTO services (name, description, price, image) VALUES ($1, $2, $3, $4) RETURNING *',
      [name, description, price, image]
    );

    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error('Error creating service:', error);
    res.status(500).json({ message: 'Internal server error' });
  }   
};


export const updateService = async (req, res) => {  
    const { id } = req.params;
    const { name, description, price } = req.body;
    try {
        const result = await sql.query( 
            'UPDATE services SET name = $1, description = $2, price = $3 WHERE id = $4 RETURNING *',
            [name, description, price, id]
        );      
        if (result.rows.length === 0) {
            return res.status(404).json({ message: 'Service not found' });
        }
        res.status(200).json(result.rows[0]);
    } catch (error) {
        console.error('Error updating service:', error);
        res.status(500).json({ message: 'Internal server error' });
    }   
};
export const deleteService = async (req, res) => {
    const { id } = req.params;  
    try {
        const result = await sql.query('DELETE FROM services WHERE id = $1 RETURNING *', [id]);
        if (result.rows.length === 0) {
            return res.status(404).json({ message: 'Service not found' });  
        }
        res.status(200).json({ message: 'Service deleted successfully' });
    } catch (error) {
        console.error('Error deleting service:', error);
        res.status(500).json({ message: 'Internal server error' });
    }   
};

// This code defines the controller functions for managing services in the application.
// It includes functions to get all services, get a service by ID, create a new service,
// update an existing service, and delete a service. Each function interacts with the database
// using SQL queries and handles errors appropriately. The responses are sent back to the client
// with appropriate status codes and messages.