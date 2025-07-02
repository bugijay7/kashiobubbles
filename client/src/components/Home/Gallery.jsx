import React from 'react';

// Import images
import img1 from '../../assets/gallery/image1.jpg';
import img2 from '../../assets/gallery/image2.jpg';
import img3 from '../../assets/gallery/image3.jpg';
import img4 from '../../assets/gallery/image4.jpg';

function Gallery() {
  return (
    <section className="bg-[#1a1a1a] py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-4 tracking-wide">Our Elegant Gallery</h2>
        <p className="text-lg text-[#c5a880] mb-12 max-w-xl mx-auto">
          Discover the essence of clean luxury with KashioBubbles — where every thread is treated with care and class.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[img1, img2, img3, img4].map((img, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out"
            >
              <img
                src={img}
                alt={`Laundry ${index + 1}`}
                className="w-full h-64 object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;
