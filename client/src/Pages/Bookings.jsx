import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';

function Bookings() {
  const [services, setServices] = useState([]);
  const [form, setForm] = useState({ serviceId: '', date: '', time: '' });
  const [loading, setLoading] = useState(true);

  // Fetch services from backend
  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await axios.get('http://localhost:3000/api/services');
        setServices(res.data);
      } catch (err) {
        console.error('Error fetching services:', err);
        toast.error('Failed to load services');
      } finally {
        setLoading(false);
      }
    };
    fetchServices();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    const user = JSON.parse(localStorage.getItem('user'));

    if (!token || !user) {
      toast.error('You must be logged in to book a service');
      return;
    }

    try {
      await axios.post(
        'http://localhost:3000/api/bookings',
        {
          userId: user.id,
          serviceId: form.serviceId,
          date: form.date,
          time: form.time,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      toast.success('✅ Booking successful!');
      setForm({ serviceId: '', date: '', time: '' });
    } catch (err) {
      console.error('Booking error:', err);
      const msg = err.response?.data?.message || 'Booking failed. Try again.';
      toast.error(`❌ ${msg}`);
    }
  };

  return (
    <section className="min-h-screen bg-[#1a1a1a] text-white px-4 py-16">
      <ToastContainer />
      <div className="max-w-xl mx-auto bg-[#2a2a2a] p-8 rounded-xl shadow-lg border border-[#c5a880]/20">
        <h2 className="text-3xl font-bold text-center text-[#c5a880] mb-6">Book a Laundry Service</h2>

        {loading ? (
          <p className="text-center text-gray-400">Loading services...</p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Service Select */}
            <div>
              <label className="block mb-1 text-sm">Select Service</label>
              <select
                name="serviceId"
                value={form.serviceId}
                onChange={handleChange}
                className="w-full p-2 bg-[#1a1a1a] border border-[#c5a880] rounded text-white"
                required
              >
                <option value="">-- Choose a service --</option>
                {services.map((service) => (
                  <option key={service.id} value={service.id}>
                    {service.name} - KES {service.price}
                  </option>
                ))}
              </select>
            </div>

            {/* Date Picker */}
            <div>
              <label className="block mb-1 text-sm">Select Laundry Date</label>
              <input
                type="date"
                name="date"
                value={form.date}
                onChange={handleChange}
                className="w-full p-2 bg-[#1a1a1a] border border-[#c5a880] rounded text-white"
                min={new Date().toISOString().split('T')[0]}
                required
              />
            </div>

            {/* Time Picker */}
            <div>
              <label className="block mb-1 text-sm">Select Pick-Up Time</label>
              <input
                type="time"
                name="time"
                value={form.time}
                onChange={handleChange}
                className="w-full p-2 bg-[#1a1a1a] border border-[#c5a880] rounded text-white"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#c5a880] text-black font-semibold py-2 rounded hover:bg-[#e2c899] transition"
            >
              Confirm Booking
            </button>
          </form>
        )}

        {/* View My Bookings Link */}
        <div className="text-center mt-6">
          <p className="text-sm text-gray-400">
            Want to see your previous bookings?{' '}
            <Link to="/my-bookings" className="text-[#c5a880] underline hover:text-[#e2c899]">
              View My Bookings
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Bookings;
