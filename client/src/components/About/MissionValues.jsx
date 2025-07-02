import React from 'react';
import { FaSoap, FaHandsHelping, FaUsers, FaClock } from 'react-icons/fa';

function MissionValues() {
  const values = [
    {
      icon: <FaSoap className="text-4xl text-[#c5a880]" />,
      title: 'Cleanliness',
      description: 'We uphold the highest hygiene standards to ensure your clothes are not just clean—but Kashio clean.',
    },
    {
      icon: <FaHandsHelping className="text-4xl text-[#c5a880]" />,
      title: 'Care',
      description: 'Every item we handle gets the personal touch and attention it deserves.',
    },
    {
      icon: <FaUsers className="text-4xl text-[#c5a880]" />,
      title: 'Community',
      description: 'We are deeply rooted in Kiamba and proud to serve our neighbors with dedication.',
    },
    {
      icon: <FaClock className="text-4xl text-[#c5a880]" />,
      title: 'Convenience',
      description: 'Our flexible pickups, deliveries, and seamless service are designed to fit your lifestyle.',
    },
  ];

  return (
    <section className="bg-[#1a1a1a] py-20 px-6 text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">What We Stand For</h2>
        <p className="text-lg text-[#c5a880] mb-12">
          Our mission is woven into every fiber we wash—serving with heart, quality, and pride.
        </p>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-[#2a2a2a] p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
            >
              <div className="mb-4">{value.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
              <p className="text-gray-300 text-sm">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MissionValues;
