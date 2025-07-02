import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

export const authMiddleware = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  console.log("📥 Auth Header:", authHeader); // <- Add this

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Unauthorized: No token provided' });
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    console.log("✅ Decoded JWT:", decoded); // <- Add this
    next();
  } catch (err) {
    console.error("❌ Invalid Token:", err);
    return res.status(403).json({ message: 'Unauthorized: Invalid token' });
  }
};
