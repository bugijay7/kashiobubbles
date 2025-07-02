import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Dashboard() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchAllBookings = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get('http://localhost:3000/api/bookings', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log('📦 Fetched Bookings:', response.data);
      setBookings(response.data);
    } catch (error) {
      console.error('❌ Error fetching all bookings:', error);
      if (error.response) {
        console.log('💥 Server response error:', error.response.data);
      }
      toast.error('Failed to fetch bookings.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllBookings();
  }, []);

  return (
    <section className="min-h-screen bg-[#1a1a1a] text-white px-4 py-24">
      <ToastContainer />

      {/* 🔹 Admin Navbar */}
      <nav className="bg-[#2a2a2a] border border-[#c5a880]/30 rounded-lg p-4 mb-10 max-w-7xl mx-auto flex gap-6 justify-center text-sm md:text-base">
        <Link to="/admin/services" className="text-[#c5a880] hover:underline">
          Manage Services
        </Link>
        <Link to="/admin/bookings" className="text-[#c5a880] hover:underline">
          Manage Bookings
        </Link>
        <Link to="/admin/users" className="text-[#c5a880] hover:underline">
          Manage Users
        </Link>
      </nav>

      {/* 🔹 Admin Dashboard Content */}
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-[#c5a880] text-center mb-10">Admin Dashboard</h2>

        {loading ? (
          <p className="text-center text-gray-400">Loading bookings...</p>
        ) : bookings.length === 0 ? (
          <p className="text-center text-gray-400">No bookings available.</p>
        ) : (
          <div className="overflow-x-auto rounded-lg border border-[#c5a880]/20 shadow-md">
            <table className="min-w-full text-left text-sm">
              <thead className="bg-[#2a2a2a] text-[#c5a880]">
                <tr>
                  <th className="py-3 px-4">Booking ID</th>
                  <th className="py-3 px-4">User</th>
                  <th className="py-3 px-4">Service</th>
                  <th className="py-3 px-4">Date</th>
                  <th className="py-3 px-4">Time</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#c5a880]/10 bg-[#1a1a1a] text-white">
                {bookings.map((booking) => (
                  <tr key={booking.id} className="hover:bg-[#2a2a2a]/60">
                    <td className="py-3 px-4">{booking.id}</td>
                    <td className="py-3 px-4">{booking.user_name || 'N/A'}</td>
                    <td className="py-3 px-4">{booking.service_name || 'N/A'}</td>
                    <td className="py-3 px-4">{booking.date}</td>
                    <td className="py-3 px-4">{booking.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </section>
  );
}

export default Dashboard;
