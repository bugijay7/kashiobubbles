import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import HomePage from './Pages/HomePage';
import ServicesPage from './Pages/ServicesPage';
import Book from './Pages/Bookings';
import MyBookings from './Pages/MyBookings';
import Login from './Pages/Login';
import Register from './Pages/Register';
import About from './Pages/About';
import Contact from './Pages/Contact';

// Admin Pages
import Dashboard from './Pages/Admin/Dashboard';
import ManageServices from './Pages/Admin/ManageServices';
import ManageBookings from './Pages/Admin/ManageBookings';
import ManageUsers from './Pages/Admin/ManageUsers';
import ScrollToTop from './components/ScrollToTop';


function App() {
  return (
    <Router>
      <div className="app">
        <ScrollToTop />
        <Navbar />

        <main style={{ minHeight: '80vh' }}>
          <Routes>
            {/* Public Pages */}
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/book" element={<Book />} />
            <Route path="/my-bookings" element={<MyBookings />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />

            {/* Admin Pages */}
            <Route path="/admin/dashboard" element={<Dashboard />} />
            <Route path="/admin/services" element={<ManageServices />} />
            <Route path="/admin/bookings" element={<ManageBookings />} />
            <Route path="/admin/users" element={<ManageUsers />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
