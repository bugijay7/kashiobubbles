export const adminMiddleware = (req, res, next) => {
  // Check if user is authenticated and has admin role
  if (req.user && req.user.role === 'admin') {
    return next(); // User is admin, proceed to next middleware/route handler
  }

  // If not admin, return unauthorized response
  return res.status(403).json({ message: 'Forbidden: Admin access required' });
}

// This middleware checks if the user is authenticated and has an admin role.
// If the user is not an admin, it returns a 403 Forbidden response.