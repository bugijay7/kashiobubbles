import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ServicesPage() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get('https://kashiobubbles.onrender.com/api/services');
        if (Array.isArray(response.data)) {
          setServices(response.data);
        } else if (response.data?.services && Array.isArray(response.data.services)) {
          setServices(response.data.services);
        } else {
          console.error("Expected array but got:", response.data);
          setServices([]);
        }
      } catch (error) {
        console.error("Error fetching services:", error);
        setServices([]);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  return (
    <section className="bg-[#1a1a1a] py-40 px-6 min-h-screen">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-4 tracking-wide">OUR LAUNDRY SERVICES</h2>
        <p className="text-xs text-[#c5a880] mb-12 max-w-[300px] mx-auto">
          At KashioBubbles, we blend convenience with elegance to provide you with premium laundry services — personalized for your needs.
        </p>

        {loading ? (
          <p className="text-center text-gray-400">Loading services...</p>
        ) : (
          <>
            {!Array.isArray(services) ? (
              <p className="text-red-500 text-center">Error: Services data is not an array</p>
            ) : (
              <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
                {services.map((service) => (
                  <div
                    key={service.id}
                    className="bg-[#2a2a2a] text-white rounded-xl overflow-hidden shadow-lg hover:scale-[1.03] transition-transform duration-300"
                  >
                    {service.image && (
                      <img
                        src={`/services/${service.image}`}
                        alt={service.name}
                        className="w-full h-58 object-cover"
                      />
                    )}
                    <div className="p-5 text-left">
                      <h3 className="text-xl font-semibold text-[#c5a880] mb-2">{service.name}</h3>
                      <p className="text-gray-300 mb-3">{service.description}</p>
                      <p className="text-[#c5a880] font-bold">KES {service.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}

export default ServicesPage;
