import React from 'react';
import triangle from '../../assets/clothes.png'; // Adjust the path if needed

function About() {
  return (
    <div id="about" className="bg-[#1a1a1a] py-20 px-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">

        {/* Image Section */}
        <div className="flex-1">
          <img
            src={triangle}
            alt="Laundry Illustration"
            className="w-full h-auto object-cover r"
          />
        </div>

        {/* Text Section */}
        <div className="flex-1 text-[#d1d5db]">
          <h2 className="text-4xl font-bold mb-6 text-[#c5a880]">Kashio Bubbles Story</h2>
          <p className="text-base leading-relaxed">
            Kashio Bubbles began as a humble dream by <span className="font-semibold text-white">Faith Loice</span>, a passionate and determined entrepreneur from Kiamba.
            What started with a single washing machine in a small room has blossomed into a trusted local laundromat known for reliability, care, and a personal touch.
            <br /><br />
            Faith's vision was simple: to help busy families and professionals enjoy clean clothes without the hassle.
            With hard work and a heart for service, Kashio Bubbles has grown to become a favorite in the community,
            offering quality laundry services at fair prices.
            <br /><br />
            Today, we continue to serve <span className="text-white font-medium">Kiamba, Sigona, Zambezi</span> and the environs with pride — staying true to our roots while embracing innovation to serve you better every day.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
