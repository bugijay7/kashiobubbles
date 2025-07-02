import React from 'react';
import founderImg from '../../assets/founder.jpg'; // Adjust path if needed

function OurStory() {
  return (
    <section className="bg-[#1a1a1a] py-20 px-6">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Image Section */}
        <div className="w-full lg:w-1/2">
          <img
            src={founderImg}
            alt="Faith Loice - Founder"
            className="w-80 h-[400px] rounded-xl shadow-lg object-cover mx-auto"
          />
        </div>

        {/* Text Section */}
        <div className="w-full lg:w-1/2 text-white">
          <h2 className="text-4xl font-bold mb-6">The Kashio Bubbles Story</h2>
          <p className="text-lg text-gray-300 leading-relaxed max-w-[500px]">
            <strong className="text-[#c5a880]">Faith Loice</strong>, a passionate entrepreneur from Kiamba, started Kashio Bubbles with a single washing machine and a bold vision.
            <br /><br />
            What began as a small idea to help her neighbors enjoy cleaner, stress-free laundry quickly grew into a beloved laundromat known for its care, affordability, and quality.
            <br /><br />
            Through dedication, community trust, and a love for cleanliness, Faith transformed Kashio Bubbles into a go-to laundry destination, proudly serving Kiamba, Sigona, Zambezi, and beyond.
          </p>
        </div>
      </div>
    </section>
  );
}

export default OurStory;
