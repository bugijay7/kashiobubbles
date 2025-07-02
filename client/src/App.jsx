import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/HomePage';
import ServicesPage from './Pages/ServicesPage';
import Book from './pages/Bookings';
import MyBookings from './pages/MyBookings';
import Login from './pages/Login';
import Register from './pages/Register';
import About from './pages/About';
import Contact from './pages/Contact';

// Admin Pages
import Dashboard from './Pages/Admin/Dashboard';
import ManageServices from './pages/Admin/ManageServices';
import ManageBookings from './pages/Admin/ManageBookings';
import ManageUsers from './pages/Admin/ManageUsers';
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
            <Route path="/" element={<Home />} />
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
