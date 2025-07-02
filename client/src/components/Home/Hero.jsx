import React from 'react';
import { Link } from 'react-router-dom';
import heroImg from '../../assets/hero-bg.jpg';

function HeroSection() {
  return (
    <div
      className="hero min-h-[80vh] bg-cover bg-center relative top-0"
      style={{
        backgroundImage: `url(${heroImg})`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-[1000px]">
          <h1 className="mb-5 text-7xl font-bold">DO YOUR LAUNDRY SMARTLY!</h1>
          <p className="mb-5">
            Laundry done and delivered in a click.
          </p>
          <Link to="/register">
          <button className="btn btn-warning">REQUEST A SERVICE</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
