import React from 'react';
import { useStore } from '../context/StoreContext';
import saleBannerImg from '../assets/sale-banner.png';

const BannerSale = () => {
  const { navigateTo } = useStore();

  return (
    <section className="py-10 md:py-16 bg-[#FFF8F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Sale Banner Card */}
        <div className="bg-gradient-to-r from-[#FDE8E1] via-[#FCE4DC] to-[#FCE4DC] rounded-3xl overflow-hidden shadow-sm border border-[#FADCD2] relative">
          
          <div className="grid grid-cols-1 md:grid-cols-12 items-center">
            
            {/* Left Image: Girl pointing to right */}
            <div className="md:col-span-6 relative flex justify-center items-end self-end order-2 md:order-1 pt-6 md:pt-0">
              <div className="w-full max-w-md lg:max-w-lg overflow-hidden flex items-end justify-center">
                <img
                  src={saleBannerImg}
                  alt="End of the year fashion sale promotion"
                  className="w-full h-auto max-h-[460px] object-cover object-top hover:scale-102 transition duration-500"
                />
              </div>
            </div>

            {/* Right Content: Sale Offer & Copy */}
            <div className="md:col-span-6 p-8 sm:p-12 lg:p-16 order-1 md:order-2 flex flex-col justify-center text-left">
              
              <div className="space-y-1">
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#282523] uppercase tracking-tight leading-none">
                  END OF THE
                </h3>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#FA6651] uppercase tracking-tight leading-tight">
                  YEAR SALE
                </h2>
              </div>

              <p className="mt-4 text-base sm:text-lg text-neutral-700 font-medium max-w-md leading-snug">
                Spend minimal $100 get 30% off voucher code for your next purchase
              </p>

              <div className="mt-4">
                <p className="text-lg sm:text-xl font-extrabold text-[#282523] tracking-wide">
                  1 June – 10 June 2025
                </p>
                <p className="text-xs text-neutral-500 italic mt-1">
                  *Terms &amp; Conditions apply
                </p>
              </div>

              <div className="mt-8 flex items-center gap-4">
                <button
                  onClick={() => {
                    const elem = document.getElementById('style-steals');
                    if (elem) elem.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="bg-[#FA6651] hover:bg-[#e65541] text-white text-sm sm:text-base font-bold px-9 py-3.5 rounded-full shadow-lg shadow-[#FA6651]/25 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
                >
                  Shop Now
                </button>

                <div className="hidden sm:inline-flex items-center gap-2 bg-white/70 backdrop-blur-xs px-4 py-2 rounded-full border border-white text-xs font-bold text-[#FA6651]">
                  <span>CODE:</span>
                  <span className="font-mono bg-[#FA6651] text-white px-2 py-0.5 rounded text-[11px]">FLOURISH30</span>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default BannerSale;
