import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Register() {
  const [form, setForm] = useState({ name: '', email: '', password: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://kashiobubbles.onrender.com/api/auth/register', form);
      const { token, user } = response.data;

      // Store token and user info
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));

      toast.success('✅ Registration successful! Redirecting to login...', {
        position: 'top-right',
        autoClose: 2000,
      });

      setTimeout(() => {
        window.location.href = '/login';
      }, 2500);
    } catch (err) {
      const msg = err.response?.data?.message || 'Registration failed';
      toast.error(`❌ ${msg}`, {
        position: 'top-right',
        autoClose: 3000,
      });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-[#1a1a1a] px-4">
      <ToastContainer />
      <div className="bg-[#2a2a2a] p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-3xl font-bold text-center text-[#c5a880] mb-6">Create Account</h2>

        <form onSubmit={handleRegister} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-white mb-1">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded bg-[#1a1a1a] border border-[#c5a880] text-white"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-white mb-1">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded bg-[#1a1a1a] border border-[#c5a880] text-white"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-white mb-1">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded bg-[#1a1a1a] border border-[#c5a880] text-white"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#c5a880] text-black font-semibold py-2 rounded hover:bg-[#e2c899] transition"
          >
            Register
          </button>
        </form>

        <p className="text-gray-400 text-sm mt-4 text-center">
          Already have an account? <a href="/login" className="text-[#c5a880] underline">Login</a>
        </p>
      </div>
    </section>
  );
}

export default Register;
