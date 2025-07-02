import React from 'react';
import { FaTruck, FaMoneyBillWave, FaThumbsUp } from 'react-icons/fa';

function Highlight() {
  return (
    <div className="bg-[#1a1a1a] py-20 px-6 lg:px-20 text-[#d1d5db]">
      {/* Top Section */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#c5a880]">Why Choose Us</h2>
        <p className="text-lg text-[#d1d5db]">
          Experience the freedom of choosing your preferred laundry service with Kashio Bubbles.
          We blend convenience, affordability, and quality to make your laundry hassle-free.
        </p>
      </div>

      {/* Bottom Section - Cards */}
      <div className="grid gap-10 md:grid-cols-3 max-w-6xl mx-auto">
        {/* Card 1 */}
        <div className="bg-[#2a2a2a] p-8 rounded-xl shadow-lg hover:shadow-[#c5a880]/50 transition-shadow">
          <div className="text-[#c5a880] text-5xl mb-4">
            <FaTruck />
          </div>
          <h3 className="text-xl font-semibold mb-3 text-white">Free Pickup & Delivery</h3>
          <p className="text-[#d1d5db]">
            Enjoy our convenient door-to-door service at no extra cost. We pick up and deliver your laundry on time.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-[#2a2a2a] p-8 rounded-xl shadow-lg hover:shadow-[#c5a880]/50 transition-shadow">
          <div className="text-[#c5a880] text-5xl mb-4">
            <FaMoneyBillWave />
          </div>
          <h3 className="text-xl font-semibold mb-3 text-white">Affordable Pricing</h3>
          <p className="text-[#d1d5db]">
            High-quality laundry doesn’t have to be expensive. Our pricing is fair and transparent for everyone.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-[#2a2a2a] p-8 rounded-xl shadow-lg hover:shadow-[#c5a880]/50 transition-shadow">
          <div className="text-[#c5a880] text-5xl mb-4">
            <FaThumbsUp />
          </div>
          <h3 className="text-xl font-semibold mb-3 text-white">Quality Assurance</h3>
          <p className="text-[#d1d5db]">
            We treat every garment with care and attention to ensure your clothes come back fresh, clean, and perfectly folded.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Highlight;
