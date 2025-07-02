import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {
  const [form, setForm] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/api/auth/login', form);
      const { token, user } = response.data;

      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));

      toast.success('✅ Login successful! Redirecting...', {
        position: 'top-right',
        autoClose: 2000,
      });

      setTimeout(() => {
        if (user.role === 'admin') {
          window.location.href = '/admin/dashboard';
        } else {
          window.location.href = '/book';
        }
      }, 2500);
    } catch (err) {
      const message = err.response?.data?.message || 'Login failed';
      toast.error(`❌ ${message}`, {
        position: 'top-right',
        autoClose: 3000,
      });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-[#1a1a1a] px-4">
      <ToastContainer />
      <div className="bg-[#2a2a2a] p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-3xl font-bold text-center text-[#c5a880] mb-6">Login to Kashio Bubbles</h2>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-white mb-1">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded bg-[#1a1a1a] border border-[#c5a880] text-white focus:outline-none"
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
              className="w-full px-4 py-2 rounded bg-[#1a1a1a] border border-[#c5a880] text-white focus:outline-none"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#c5a880] text-black font-semibold py-2 rounded hover:bg-[#e2c899] transition"
          >
            Login
          </button>
        </form>

        <p className="text-gray-400 text-sm mt-4 text-center">
          Don't have an account? <a href="/register" className="text-[#c5a880] underline">Register</a>
        </p>
      </div>
    </section>
  );
}

export default Login;
