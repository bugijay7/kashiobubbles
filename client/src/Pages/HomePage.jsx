import React from 'react';
import Hero from '../components/Home/Hero';
import About from '../components/Home/About'; 
import Highlight from '../components/Home/Highlight'; 
import Services from '../components/Home/Services';
import Gallery from '../components/Home/Gallery';
import Testimonials from '../components/Home/Testimonials';
import Cta from '../components/Home/Cta';


function HomePage() {
  return (
    <div>
      <Hero />
      <About />
      <Highlight />
      <Services />
      <Gallery />
      <Testimonials />
      <Cta />
    </div>
  )
}

export default HomePage