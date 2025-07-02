import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ManageServices() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchServices = async () => {
    try {
      const res = await axios.get('http://localhost:3000/api/services');
      console.log('🧺 Services:', res.data);
      setServices(res.data);
    } catch (error) {
      console.error('❌ Error fetching services:', error);
      toast.error('Failed to load services.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchServices();
  }, []);

  return (
    <section className="min-h-screen bg-[#1a1a1a] text-white px-4 py-24">
      <ToastContainer />
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-[#c5a880] text-center mb-8">Manage Services</h2>

        {loading ? (
          <p className="text-center text-gray-400">Loading...</p>
        ) : services.length === 0 ? (
          <p className="text-center text-gray-400">No services found.</p>
        ) : (
          <div className="overflow-x-auto rounded-lg border border-[#c5a880]/20 shadow-md">
            <table className="min-w-full text-left text-sm">
              <thead className="bg-[#2a2a2a] text-[#c5a880]">
                <tr>
                  <th className="py-3 px-4">Service ID</th>
                  <th className="py-3 px-4">Name</th>
                  <th className="py-3 px-4">Description</th>
                  <th className="py-3 px-4">Price (KES)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#c5a880]/10 bg-[#1a1a1a] text-white">
                {services.map((service) => (
                  <tr key={service.id} className="hover:bg-[#2a2a2a]/60">
                    <td className="py-3 px-4">{service.id}</td>
                    <td className="py-3 px-4">{service.name}</td>
                    <td className="py-3 px-4">{service.description || 'N/A'}</td>
                    <td className="py-3 px-4">KES {service.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Optional: Add service button */}
        <div className="mt-6 text-center">
          <button
            className="bg-[#c5a880] text-black px-6 py-2 rounded hover:bg-[#e2c899] transition"
            onClick={() => toast.info('Redirect to Add Service Page (Coming Soon)')}
          >
            + Add New Service
          </button>
        </div>
      </div>
    </section>
  );
}

export default ManageServices;
