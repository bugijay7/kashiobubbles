import React from 'react';
import {
  FaRegClock,
  FaMapMarkerAlt,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaTshirt,
  FaPhoneAlt,
  FaEnvelope,
} from 'react-icons/fa';

function About() {
  return (
    <section className="min-h-screen bg-[#1a1a1a] text-white px-6 py-20 flex items-center justify-center">
      <div className="w-full max-w-6xl bg-[#2a2a2a] rounded-2xl shadow-xl p-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#c5a880] mb-4">About Kashio Bubbles</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            We are more than a laundry service — we’re your trusted partner in freshness, convenience, and care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Section - Info */}
          <div className="space-y-6 text-base">
            <div className="flex items-start gap-4">
              <FaTshirt className="text-xl text-[#c5a880] mt-1" />
              <p>
                <strong>Kashio Bubbles</strong> began as a dream to make laundry hassle-free and elegant. We blend
                advanced care technology with heartfelt service — delivering crisp, clean results every time.
              </p>
            </div>

            <div className="flex items-start gap-4">
              <FaRegClock className="text-xl text-[#c5a880] mt-1" />
              <p>
                Open from <strong>7:00 AM – 7:00 PM</strong> every day. Drop off, relax, and pick up your laundry sparkling clean.
              </p>
            </div>

            <div className="flex items-start gap-4">
              <FaMapMarkerAlt className="text-xl text-[#c5a880] mt-1" />
              <p>
                Visit us at: <strong>Lucky Z Plaza, Kiamba Road</strong>
              </p>
            </div>

            <div className="flex items-start gap-4">
              <FaPhoneAlt className="text-xl text-[#c5a880] mt-1" />
              <p>
                Call us: <strong>+254 703 976 484</strong>
              </p>
            </div>

            <div className="flex items-start gap-4">
              <FaEnvelope className="text-xl text-[#c5a880] mt-1" />
              <p>
                Email: <strong>kashiobubbles@gmail.com</strong>
              </p>
            </div>

            {/* Social Media */}
            <div className="flex gap-6 pt-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-2xl text-blue-500 hover:text-blue-700">
                <FaFacebook />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-2xl text-pink-400 hover:text-pink-600">
                <FaInstagram />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-2xl text-sky-400 hover:text-sky-600">
                <FaTwitter />
              </a>
            </div>
          </div>

          {/* Right Section - Embedded Map */}
          <div className="rounded-lg overflow-hidden shadow-lg border-2 border-[#c5a880]/20">
            <iframe
              title="Kashio Bubbles Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63823.33702422492!2d36.6641152!3d-1.1894783999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f18af66ecf92b%3A0x3e2c74a0bca0e2a!2sKingeero%20juction!5e0!3m2!1sen!2ske!4v1747143446227!5m2!1sen!2ske"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
