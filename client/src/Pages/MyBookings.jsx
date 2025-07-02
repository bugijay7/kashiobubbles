import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function MyBookings() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchMyBookings = async () => {
    try {
      const token = localStorage.getItem('token');

      if (!token) {
        toast.error('Please log in to view your bookings.');
        return;
      }

      const response = await axios.get('http://localhost:3000/api/bookings/me', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setBookings(response.data);
    } catch (error) {
      console.error('Error fetching bookings:', error);
      toast.error('Failed to load bookings.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMyBookings();
  }, []);

  return (
    <section className="min-h-screen bg-[#1a1a1a] text-white px-4 py-36">
      <ToastContainer />
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-[#c5a880] text-center mb-10">
          My Bookings
        </h2>

        {loading ? (
          <p className="text-center text-gray-400">Loading...</p>
        ) : bookings.length === 0 ? (
          <p className="text-center text-gray-400">No bookings found.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {bookings.map((booking) => (
              <div
                key={booking.id}
                className="bg-[#2a2a2a] rounded-lg p-6 shadow-lg border border-[#c5a880]/30"
              >
                <h3 className="text-xl font-semibold text-[#c5a880] mb-2">
                  {booking.service_name}
                </h3>
                <p className="text-sm text-gray-300">
                  <strong>Date:</strong> {booking.date}
                </p>
                <p className="text-sm text-gray-300">
                  <strong>Time:</strong> {booking.time}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default MyBookings;
