import React from 'react';
import { Link } from 'react-router-dom';

function Services() {
  const serviceList = [
    {
      title: 'Wash and Fold',
      description: 'Clean, dry, and neatly folded clothes ready for your closet.',
    },
    {
      title: 'Dry & Steam Cleaning',
      description: 'Perfect for delicate garments needing professional care.',
    },
    {
      title: 'Ironing Services',
      description: 'Get wrinkle-free, crisp clothes for all occasions.',
    },
    {
      title: 'Express Laundry',
      description: 'Same-day laundry service for your urgent needs.',
    },
    {
      title: 'Tough Stain Removal',
      description: 'Advanced treatments to remove tough stains safely.',
    },
    {
      title: 'Curtain Cleaning',
      description: 'Deep clean your curtains and rugs for a fresh home.',
    },
    {
      title: 'Duvet Cleaning',
      description: 'Large-item cleaning for duvets and comforters.',
    },
    {
      title: 'Pickup & Delivery',
      description: 'Convenient door-to-door laundry service, always on time.',
    },
  ];

  return (
    <div className="bg-[#1a1a1a] py-20 px-4 lg:px-20 text-white">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start justify-between gap-12">
        {/* Left: Header Section */}
        <div className="w-full lg:w-1/2 px-4">
          <h2 className="text-4xl font-bold mb-6 text-[#c5a880] tracking-wide">Our Laundry Services</h2>
          <p className="text-gray-300 text-base leading-relaxed">
            At <span className="text-[#c5a880] font-semibold">KashioBubbles</span>, we offer a wide range of premium laundry services tailored to your fast-paced lifestyle — all handled with professionalism and care.
            <br /><br />
            Whether you're a student, a busy parent, or a professional, our services are designed to simplify your day. From delicate dry cleaning to tough stain removal, our experienced team uses eco-friendly detergents and modern machines to treat your garments with the luxury they deserve.
            <br /><br />
            Enjoy our convenient pickup & delivery — clean clothes, without lifting a finger.
          </p>
            <br />
            <Link
              to="/register">
          <button className="btn">REQUEST A SERVICE</button>
          </Link>
        </div>

        {/* Right: Service Cards */}
        <div className="w-full lg:w-3/4 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {serviceList.map((service, index) => (
            <div
              key={index}
              className="bg-[#2a2a2a] border border-[#c5a880]/20 rounded-xl p-6 shadow-md hover:shadow-lg transition duration-300"
            >
              <h3 className="text-lg font-semibold text-[#c5a880] mb-2">{service.title}</h3>
              <p className="text-sm text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;
