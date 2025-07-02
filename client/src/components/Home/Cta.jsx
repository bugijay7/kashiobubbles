import React from 'react';
import { Link } from 'react-router-dom';

function Cta() {
  return (
    <div className="bg-[#c5a880] text-white py-16 px-6 text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-extrabold mb-4">Ready to Experience Premium Laundry Service?</h2>
        <p className="mb-8 text-lg leading-relaxed">
          Say goodbye to laundry day stress. Enjoy fast, reliable, and affordable cleaning – all at the tap of a button.
        </p>
        <Link to="/services">
          <button className="btn bg-black text-[#c5a880] hover:bg-[#f1e2cd] font-semibold px-8 py-3 rounded-full transition-all duration-300">
            Request a Service
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Cta;
