import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-[#222] text-white py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Brand Info */}
        <div>
          <h2 className="text-2xl font-bold mb-3">KashioBubbles</h2>
          <p className="text-sm">
            Your trusted laundromat in Kiamba. <br />
            Quality service,<br />
            Care, <br />
            Convenience at your doorstep.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-[#c5a880]">Home</Link></li>
            <li><Link to="/services" className="hover:text-[#c5a880]">Services</Link></li>
            <li><Link to="/about" className="hover:text-[#c5a880]">About</Link></li>
            <li><Link to="/contact" className="hover:text-[#c5a880]">Contact</Link></li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <div className="flex gap-4 text-[#c5a880] text-xl mb-3">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          </div>

          {/* Admin Dashboard Link */}
          <div className="mt-2">
            <Link
              to="/login"
              className="text-sm text-gray-400 hover:text-[#c5a880] underline"
            >
              Admin Dashboard
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} KashioBubbles. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
