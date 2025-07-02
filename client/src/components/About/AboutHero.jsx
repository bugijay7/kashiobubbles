import React from 'react';

function AboutHero() {
  return (
    <section className="bg-[#1a1a1a] text-white py-40 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
          WELCOME TO  <span className="text-[#c5a880]">KASHIO BUBBLES</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
          Where passion meets precision. Our story began in the heart of Kiamba, with a single dream: to deliver spotless laundry services with a personal touch.
        </p>
        <div className="mt-8">
          <a
            href="/services"
            className="inline-block bg-[#c5a880] text-[#1a1a1a] font-semibold px-6 py-3 rounded-full hover:bg-[#e6cfa8] transition duration-300"
          >
            Explore Our Services
          </a>
        </div>
      </div>
    </section>
  );
}

export default AboutHero;
