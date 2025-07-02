import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ManageBookings() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchBookings = async () => {
    try {
      const token = localStorage.getItem('token');
      const res = await axios.get('http://localhost:3000/api/bookings', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log('📦 Admin fetched bookings:', res.data);
      setBookings(res.data);
    } catch (error) {
      console.error('❌ Error fetching bookings:', error);
      if (error.response) {
        console.log('💥 Server response error:', error.response.data);
      }
      toast.error('Failed to load bookings.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  return (
    <section className="min-h-screen bg-[#1a1a1a] text-white px-4 py-24">
      <ToastContainer />
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-[#c5a880] text-center mb-8">Manage Bookings</h2>

        {loading ? (
          <p className="text-center text-gray-400">Loading...</p>
        ) : bookings.length === 0 ? (
          <p className="text-center text-gray-400">No bookings found.</p>
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
                {bookings.map((b) => (
                  <tr key={b.id} className="hover:bg-[#2a2a2a]/60">
                    <td className="py-3 px-4">{b.id}</td>
                    <td className="py-3 px-4">{b.user_name || 'N/A'}</td>
                    <td className="py-3 px-4">{b.service_name || 'N/A'}</td>
                    <td className="py-3 px-4">{b.date}</td>
                    <td className="py-3 px-4">{b.time}</td>
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

export default ManageBookings;
