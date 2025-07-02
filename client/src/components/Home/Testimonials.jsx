import React from 'react';
import { FaStar } from 'react-icons/fa';
import reviewer1 from '../../assets/reviewers/user1.jpg';
import reviewer2 from '../../assets/reviewers/user2.jpg';
import reviewer3 from '../../assets/reviewers/user3.jpg';

function Testimonials() {
  const reviews = [
    {
      name: 'Janet Wanjiru',
      image: reviewer1,
      rating: 5,
      text: 'Kashio Bubbles has been a game changer for my busy schedule. My clothes always come back spotless and folded like magic!',
    },
    {
      name: 'Peter Kimani',
      image: reviewer2,
      rating: 4,
      text: 'Affordable, timely and professional. The pickup and delivery makes it incredibly convenient and reliable.',
    },
    {
      name: 'Faith Achieng',
      image: reviewer3,
      rating: 5,
      text: 'The staff at Kashio Bubbles treat my laundry with so much care. I never have to worry about my delicate garments!',
    },
  ];

  return (
    <div className="bg-[#1a1a1a] py-20 px-6 lg:px-20 text-[#d1d5db]">
      <h2 className="text-4xl font-bold text-center mb-16 text-[#c5a880]">Our Reviews</h2>
      
      <div className="grid gap-10 md:grid-cols-3 max-w-6xl mx-auto">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="bg-[#2a2a2a] p-6 rounded-xl shadow-md hover:shadow-[#c5a880]/50 transition-shadow"
          >
            <div className="flex items-center gap-4 mb-4">
              <img
                src={review.image}
                alt={review.name}
                className="w-14 h-14 rounded-full object-cover border border-[#c5a880]"
              />
              <div>
                <h3 className="text-lg font-semibold text-white">{review.name}</h3>
                <div className="flex text-[#c5a880]">
                  {[...Array(review.rating)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
              </div>
            </div>
            <p className="text-[#d1d5db] text-sm leading-relaxed">
              "{review.text}"
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;
