import React from 'react';
import { MapPin } from 'lucide-react'; // Using lucide-react for modern icons

function AreasWeServe() {
  const locations = ['Kiamba', 'Sigona', 'Zambezi', 'Limuru', 'Gitaru', 'Kikuyu', 'Kinoo', 'Rungiri', '87', 'Kingeero', 'Wangige', 'Acre Tano'];

  return (
    <section className="bg-[#1a1a1a] text-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#c5a880] mb-6">
          Proudly Serving Kiamba, Sigona, Zambezi & Beyond
        </h2>
        <p className="text-lg text-gray-300 mb-12 max-w-xl mx-auto">
          Our services reach far and wide — making laundry effortless for homes and businesses across these areas.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-8">
          {locations.map((place, index) => (
            <div
              key={index}
              className="flex items-center justify-center gap-3 p-4 bg-[#2a2a2a] rounded-lg shadow hover:bg-[#3a3a3a] transition"
            >
              <MapPin className="text-[#c5a880]" size={20} />
              <span className="text-white font-medium">{place}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AreasWeServe;
