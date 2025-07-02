import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { sql } from './config/db.js';

import bookingRouter from './routes/bookingRoutes.js';
import serviceRouter from './routes/servicesRouter.js';
import userRouter from './routes/userRoutes.js';
import authRouter from './routes/authRouter.js';
import adminRoutes from './routes/adminRoutes.js';


dotenv.config();

const app = express();
const PORT = process.env.PORT
app.use(express.json());
app.use(cors({
  origin: "https://kashiobubbles.vercel.app",
  credentials: true
}));
app.use(express.urlencoded({ extended: true }));


app.use('/api/bookings', bookingRouter); 
app.use('/api/services', serviceRouter);
app.use('/api/users', userRouter);
app.use('/api/auth', authRouter);
app.use('/api/admin', adminRoutes );

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
