import React from 'react';
import { Star, Quote } from 'lucide-react';

// Import customer avatars directly from src/assets/
import avatar1 from '../assets/avatar-1.jpg';
import avatar2 from '../assets/avatar-2.jpg';
import avatar3 from '../assets/avatar-3.jpg';
import avatar4 from '../assets/avatar-4.jpg';

const Testimonials = () => {
  const reviews = [
    {
      id: 1,
      name: 'Emily Bell',
      role: 'Verified Buyer',
      avatar: avatar1,
      rating: 5,
      content:
        'Absolute perfection! The customized pieces that I received from this shop fit like a glove and the fabrics feel incredibly luxurious.'
    },
    {
      id: 2,
      name: 'Philip Swift',
      role: 'Verified Buyer',
      avatar: avatar2,
      rating: 5,
      content:
        'The customized order was ready much faster than expected. The stitching and attention to detail surpassed my expectations!'
    },
    {
      id: 3,
      name: 'Mark Bryant',
      role: 'Verified Buyer',
      avatar: avatar3,
      rating: 5,
      content:
        'Found this amazing brand while looking for summer wear. Their t-shirt and dress materials are super soft, breathable and durable.'
    },
    {
      id: 4,
      name: 'Hailey Jeff',
      role: 'Verified Buyer',
      avatar: avatar4,
      rating: 5,
      content:
        'A breath of fresh air for modern online fashion. Customer support answered all my sizing questions within minutes. Highly recommended!'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-[#FFF7F4] via-[#FDF3EE] to-[#FFF7F4] border-t border-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#623F25] tracking-tight">
            What Our Customers Say
          </h2>

          {/* Rating Summary */}
          <div className="flex items-center justify-center gap-2 mt-3 text-amber-500">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="text-sm  text-neutral-700">
              (4.9) 4 reviews
            </span>
          </div>

          <p className="mt-2 text-sm sm:text-base text-neutral-500 font-normal">
           Join our growing community of fashion-forward shoppers.
          </p>
        </div>

        {/* 4 Testimonial Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-neutral-100/80 flex flex-col justify-between relative group hover:-translate-y-1"
            >
              <div>
                {/* User Avatar & Name */}
                <div className="flex flex-col items-center text-center mb-4">
                  <div className="relative">
                    <img
                      src={item.avatar}
                      alt={item.name}
                      className="w-14 h-14 rounded-full object-cover border-2 border-[#FA6651]/20 shadow-xs"
                    />
                    <span className="absolute -bottom-1 -right-1 bg-emerald-500 w-3.5 h-3.5 rounded-full border-2 border-white"></span>
                  </div>
                  <h4 className="mt-2.5 font-bold text-neutral-800 text-base">
                    {item.name}
                  </h4>
                  <span className="text-[11px] text-neutral-400 font-medium">
                    {item.role}
                  </span>
                </div>

                {/* Stars */}
                <div className="flex justify-center text-amber-400 mb-3">
                  {[...Array(item.rating)].map((_, idx) => (
                    <Star key={idx} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-xs sm:text-[13px] text-neutral-600 leading-relaxed text-center italic">
                  "{item.content}"
                </p>
              </div>

              {/* Decorative Subtle Quote Accent */}
              <div className="mt-4 pt-3 border-t border-neutral-50 flex justify-center">
                <Quote className="w-4 h-4 text-neutral-300 group-hover:text-[#FA6651] transition-colors" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
