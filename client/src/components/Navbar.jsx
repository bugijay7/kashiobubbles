import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="navbar fixed top-0 w-full z-50 bg-transparent">
      <div className="bg-[#c5a880] max-w-[1400px] mx-auto w-full flex justify-between items-center">
        <div className="flex-1">
          <Link to="/" className="btn btn-ghost text-xl">KashioBubbles</Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li>
              <details>
                <summary>Members</summary>
                <ul className="bg-base-100 rounded-t-none p-2">
                  <li><Link to="/register">Register</Link></li>
                  <li><Link to="/login">Login</Link></li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
