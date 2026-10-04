import React from 'react';
import { useStore } from '../context/StoreContext';
import { ArrowRight, Sparkles } from 'lucide-react';
import heroBannerImg from '../assets/hero-banner.png';

const HeroSection = () => {
  const { navigateTo } = useStore();

  return (
    <section className="relative min-h-[597px] overflow-hidden bg-gradient-to-b from-[#FFF5F2]/80 via-white to-whitept-8 md:pt-16 lg:pt-12 lg:pb-0">
      {/* Decorative background shapes */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-[#FFE8E2]/50 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute -bottom-10 left-1/4 w-72 h-72 bg-[#FFF0EC]/60 rounded-full blur-2xl pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Typography & CTAs */}
          <div className="lg:col-span-6 flex flex-col justify-center text-left space-y-6">
            <div className="space-y-1">
              <h1 className="text-3xl sm:text-3xl lg:text-3xl font-semibold text-[#623F25] tracking-tight uppercase leading-none">
                FLOURISH IN
              </h1>
              <h2 className="text-4xl sm:text-4xl lg:text-5xl font-extrabold text-[#FA6651] tracking-tight uppercase leading-tight">
                EVERY THREAD
              </h2>
            </div>

            <p className="text-base sm:text-lg  max-w-lg font-semibold text-[#7C797A] leading-relaxed">
              Elevate your style with timeless trends and graceful confidence
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => {
                  const elem = document.getElementById('featured-collection');
                  if (elem) elem.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-[#FA6651] hover:bg-[#e65541] text-white text-sm sm:text-base font-semibold px-8 py-3.5 rounded-full shadow-lg shadow-[#FA6651]/25 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
              >
                Shop Now
              </button>

              <button
                onClick={() => {
                  const elem = document.getElementById('style-steals');
                  if (elem) elem.scrollIntoView({ behavior: 'smooth' });
                }}
                className="group inline-flex items-center gap-2.5 bg-white hover:bg-neutral-50 text-neutral-800 text-sm sm:text-base font-semibold px-6 py-3.5 rounded-full border border-neutral-300 hover:border-neutral-400 transition-all duration-200 shadow-xs"
              >
                <span>Explore Collection</span>
                <span className="w-6 h-6 rounded-full bg-neutral-100 group-hover:bg-[#FA6651] group-hover:text-white flex items-center justify-center transition-colors">
                  <ArrowRight className="w-3.5 h-3.5 text-neutral-600 group-hover:text-white transition-colors" />
                </span>
              </button>
            </div>

            {/* Quick stats / guarantees */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-neutral-100 max-w-md">
              <div>
                <span className="block text-xl font-bold text-neutral-800">50k+</span>
                <span className="text-xs text-neutral-500">Happy Shoppers</span>
              </div>
              <div>
                <span className="block text-xl font-bold text-neutral-800">4.9 ★</span>
                <span className="text-xs text-neutral-500">Store Rating</span>
              </div>
              <div>
                <span className="block text-xl font-bold text-neutral-800">100%</span>
                <span className="text-xs text-neutral-500">Organic Fabrics</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Asset */}
          <div className="lg:col-span-6 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg lg:max-w-xl">
              
              {/* Decorative geometric dots */}
              <div className="absolute -top-4 -right-4 w-24 h-24 opacity-30 pointer-events-none hidden sm:grid grid-cols-5 gap-2">
                {Array.from({ length: 25 }).map((_, i) => (
                  <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#FA6651]"></div>
                ))}
              </div>

              {/* Decorative pastel backdrop halo */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#FFE7E0] to-[#FFF4EE] rounded-3xl transform -rotate-1 scale-95 -z-10"></div>

              {/* Main Hero Image */}
              <div className="relative overflow-hidden  aspect-[4/3] sm:aspect-auto">
                <img
                  src={heroBannerImg}
                  alt="Two smiling fashionable women flourishing in modern trends"
                  className="w-full h-auto object-cover object-top hover:scale-102 transition duration-500"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
