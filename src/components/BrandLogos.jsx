import React from 'react';

const BrandLogos = () => {
  const logoSet = (
    <>
      {/* H&M Logo */}
      <div className="flex h-10 shrink-0 items-center justify-center px-4 hover:scale-105 transition-transform">
        <span className="text-3xl sm:text-4xl font-black italic tracking-tighter text-[#E50010] font-serif">
          H&amp;M
        </span>
      </div>

      {/* OBEY Logo */}
      <div className="flex h-10 shrink-0 items-center justify-center px-4 hover:scale-105 transition-transform">
        <div className="border-2 border-black bg-black text-white px-3 py-0.5 tracking-[0.25em] font-extrabold text-lg sm:text-xl uppercase select-none">
          OBEY
        </div>
      </div>

      {/* Shopify Logo */}
      <div className="flex h-10 shrink-0 items-center justify-center gap-2 px-4 hover:scale-105 transition-transform">
        <svg className="w-7 h-7" viewBox="0 0 109 124" fill="none">
          <path d="M78.7 15.6C78.3 15.2 77.6 15 76.9 15.2L70.4 17.2C69 13.5 66.8 9.5 62.4 6.7C58.8 4.3 54.5 4.3 51.6 5.3C50.2 5.8 48.7 6.8 47.7 8C43.1 13.5 44 22.8 45.4 28.5L34.1 32C33.1 32.3 32.7 33.3 32.7 34.2C30.6 48.5 21.6 109.9 21.5 110.8C21.4 111.4 21.7 112 22.2 112.3C22.4 112.5 59.8 122.9 60.1 123C60.3 123 60.5 123 60.7 123C61 123 98.7 114.7 99 114.6C99.5 114.3 99.8 113.8 99.7 113.2C98.4 104.7 85.1 22.3 84.9 20.8C84.8 20 84.3 19.3 83.6 19.1L78.7 15.6Z" fill="#95BF47"/>
          <path d="M60.1 123C59.9 122.9 22.5 112.5 22.3 112.3C21.8 112 21.5 111.4 21.6 110.8C21.7 109.9 30.7 48.5 32.8 34.2C32.8 33.3 33.2 32.3 34.2 32L45.5 28.5L60.1 123Z" fill="#5E8E3E"/>
          <path d="M60.4 34.6C59.2 34.6 58.3 33.7 58.3 32.5C58.3 30.1 57.6 24.3 55.4 20.4C54.1 18.2 52.4 17.5 50.8 17.5C49 17.5 47.9 18.5 47.4 19.5C45.9 22.5 46.1 27.6 46.5 31.9L40.9 33.6C39.8 28.5 39.5 20.9 43.1 15C44.7 12.4 47.6 10.9 50.8 10.9C54.7 10.9 58.6 12.8 61 16.7C63.8 21.3 64.6 28.1 64.6 32.5C64.6 33.7 63.6 34.6 62.5 34.6H60.4Z" fill="#5E8E3E"/>
          <path d="M67.3 58.9C67.1 58.4 66.5 58.2 66 58.3L61.6 59.9C60.2 55.2 56.6 53.6 53.1 53.6C47.7 53.6 43.8 57.6 43.8 64.3C43.8 74.3 54.3 75.9 54.3 83.3C54.3 86.8 52.4 89.2 49 89.2C44.9 89.2 42.6 86.1 41.5 83.1C41.3 82.5 40.7 82.2 40.2 82.4L35.8 84.1C35.4 84.3 35.1 84.7 35.2 85.2C36.9 91.8 41.9 95.8 49 95.8C55.4 95.8 61.2 91.9 61.2 83.3C61.2 73.1 50.8 71.9 50.8 64.7C50.8 61.8 52.6 59.8 55.4 59.8C58.4 59.8 60.5 61.6 61.3 63.8C61.5 64.4 62.1 64.7 62.6 64.5L67 62.8C67.4 62.7 67.7 62.2 67.6 61.7L67.3 58.9Z" fill="white"/>
        </svg>
        <span className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-800 lowercase">
          shopify
        </span>
      </div>

      {/* Lacoste Logo */}
      <div className="flex h-10 shrink-0 items-center justify-center gap-2 px-4 hover:scale-105 transition-transform">
        <svg className="w-8 h-5" viewBox="0 0 40 24" fill="none">
          <path d="M37 11c-2-1-4-1-6-1-1-3-3-5-6-6-3-1-7-1-10 1-2 1-3 3-4 4-2 0-4 1-5 2-2 1-3 3-4 5 2 1 4 0 6-1 2 2 4 3 7 3h12c3 0 6-1 8-3 2-1 3-3 2-4z" fill="#004526"/>
          <circle cx="34" cy="10" r="1" fill="#E50010"/>
          <path d="M31 13c1 1 2 0 3-1-1 0-2 0-3 1z" fill="white"/>
        </svg>
        <span className="text-lg sm:text-xl font-black tracking-widest text-[#004526] uppercase">
          LACOSTE
        </span>
      </div>

      {/* Levi's Batwing Logo */}
      <div className="flex h-10 shrink-0 items-center justify-center px-4 hover:scale-105 transition-transform">
        <div className="relative bg-[#C41230] text-white px-4 py-1 rounded-[3px] shadow-xs flex items-center justify-center">
          <span className="font-extrabold text-sm sm:text-base tracking-wider italic font-sans">
            Levi's
          </span>
          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-4 h-1.5 bg-white rounded-t-full"></div>
        </div>
      </div>

      {/* Amazon Logo */}
      <div className="flex h-10 shrink-0 flex-col items-center justify-center px-4 hover:scale-105 transition-transform">
        <span className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-900 leading-none">
          amazon
        </span>
        <svg className="w-16 h-2.5 mt-0.5" viewBox="0 0 64 12" fill="none">
          <path d="M4 3C18 10 46 10 60 4" stroke="#FF9900" strokeWidth="2.5" strokeLinecap="round"/>
          <path d="M57 2L61 4L59 8" stroke="#FF9900" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
       {/* H&M Logo */}
          <div className="flex items-center justify-center h-10 px-4 hover:scale-105 transition-transform">
            <span className="text-3xl sm:text-4xl font-black italic tracking-tighter text-[#E50010] font-serif">
              H&amp;M
            </span>
          </div>

          {/* OBEY Logo */}
          <div className="flex items-center justify-center h-10 px-4 hover:scale-105 transition-transform">
            <div className="border-2 border-black bg-black text-white px-3 py-0.5 tracking-[0.25em] font-extrabold text-lg sm:text-xl uppercase select-none">
              OBEY
            </div>
          </div>

          {/* Shopify Logo */}
          <div className="flex items-center justify-center gap-2 h-10 px-4 hover:scale-105 transition-transform">
            <svg className="w-7 h-7" viewBox="0 0 109 124" fill="none">
              <path d="M78.7 15.6C78.3 15.2 77.6 15 76.9 15.2L70.4 17.2C69 13.5 66.8 9.5 62.4 6.7C58.8 4.3 54.5 4.3 51.6 5.3C50.2 5.8 48.7 6.8 47.7 8C43.1 13.5 44 22.8 45.4 28.5L34.1 32C33.1 32.3 32.7 33.3 32.7 34.2C30.6 48.5 21.6 109.9 21.5 110.8C21.4 111.4 21.7 112 22.2 112.3C22.4 112.5 59.8 122.9 60.1 123C60.3 123 60.5 123 60.7 123C61 123 98.7 114.7 99 114.6C99.5 114.3 99.8 113.8 99.7 113.2C98.4 104.7 85.1 22.3 84.9 20.8C84.8 20 84.3 19.3 83.6 19.1L78.7 15.6Z" fill="#95BF47"/>
              <path d="M60.1 123C59.9 122.9 22.5 112.5 22.3 112.3C21.8 112 21.5 111.4 21.6 110.8C21.7 109.9 30.7 48.5 32.8 34.2C32.8 33.3 33.2 32.3 34.2 32L45.5 28.5L60.1 123Z" fill="#5E8E3E"/>
              <path d="M60.4 34.6C59.2 34.6 58.3 33.7 58.3 32.5C58.3 30.1 57.6 24.3 55.4 20.4C54.1 18.2 52.4 17.5 50.8 17.5C49 17.5 47.9 18.5 47.4 19.5C45.9 22.5 46.1 27.6 46.5 31.9L40.9 33.6C39.8 28.5 39.5 20.9 43.1 15C44.7 12.4 47.6 10.9 50.8 10.9C54.7 10.9 58.6 12.8 61 16.7C63.8 21.3 64.6 28.1 64.6 32.5C64.6 33.7 63.6 34.6 62.5 34.6H60.4Z" fill="#5E8E3E"/>
              <path d="M67.3 58.9C67.1 58.4 66.5 58.2 66 58.3L61.6 59.9C60.2 55.2 56.6 53.6 53.1 53.6C47.7 53.6 43.8 57.6 43.8 64.3C43.8 74.3 54.3 75.9 54.3 83.3C54.3 86.8 52.4 89.2 49 89.2C44.9 89.2 42.6 86.1 41.5 83.1C41.3 82.5 40.7 82.2 40.2 82.4L35.8 84.1C35.4 84.3 35.1 84.7 35.2 85.2C36.9 91.8 41.9 95.8 49 95.8C55.4 95.8 61.2 91.9 61.2 83.3C61.2 73.1 50.8 71.9 50.8 64.7C50.8 61.8 52.6 59.8 55.4 59.8C58.4 59.8 60.5 61.6 61.3 63.8C61.5 64.4 62.1 64.7 62.6 64.5L67 62.8C67.4 62.7 67.7 62.2 67.6 61.7L67.3 58.9Z" fill="white"/>
            </svg>
            <span className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-800 lowercase">
              shopify
            </span>
          </div>

          {/* Lacoste Logo */}
          <div className="flex items-center justify-center gap-2 h-10 px-4 hover:scale-105 transition-transform">
            {/* Lacoste Crocodile Icon */}
            <svg className="w-8 h-5" viewBox="0 0 40 24" fill="none">
              <path d="M37 11c-2-1-4-1-6-1-1-3-3-5-6-6-3-1-7-1-10 1-2 1-3 3-4 4-2 0-4 1-5 2-2 1-3 3-4 5 2 1 4 0 6-1 2 2 4 3 7 3h12c3 0 6-1 8-3 2-1 3-3 2-4z" fill="#004526"/>
              <circle cx="34" cy="10" r="1" fill="#E50010"/>
              <path d="M31 13c1 1 2 0 3-1-1 0-2 0-3 1z" fill="white"/>
            </svg>
            <span className="text-lg sm:text-xl font-black tracking-widest text-[#004526] uppercase">
              LACOSTE
            </span>
          </div>

          {/* Levi's Batwing Logo */}
          <div className="flex items-center justify-center h-10 px-4 hover:scale-105 transition-transform">
            <div className="relative bg-[#C41230] text-white px-4 py-1 rounded-[3px] shadow-xs flex items-center justify-center">
              <span className="font-extrabold text-sm sm:text-base tracking-wider italic font-sans">
                Levi's
              </span>
              {/* Batwing cutout simulation */}
              <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-4 h-1.5 bg-white rounded-t-full"></div>
            </div>
          </div>

          {/* Amazon Logo */}
          <div className="flex flex-col items-center justify-center h-10 px-4 hover:scale-105 transition-transform">
            <span className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-900 leading-none">
              amazon
            </span>
            {/* Amazon smile arrow */}
            <svg className="w-16 h-2.5 mt-0.5" viewBox="0 0 64 12" fill="none">
              <path d="M4 3C18 10 46 10 60 4" stroke="#FF9900" strokeWidth="2.5" strokeLinecap="round"/>
              <path d="M57 2L61 4L59 8" stroke="#FF9900" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
           {/* H&M Logo */}
          <div className="flex items-center justify-center h-10 px-4 hover:scale-105 transition-transform">
            <span className="text-3xl sm:text-4xl font-black italic tracking-tighter text-[#E50010] font-serif">
              H&amp;M
            </span>
          </div>

          {/* OBEY Logo */}
          <div className="flex items-center justify-center h-10 px-4 hover:scale-105 transition-transform">
            <div className="border-2 border-black bg-black text-white px-3 py-0.5 tracking-[0.25em] font-extrabold text-lg sm:text-xl uppercase select-none">
              OBEY
            </div>
          </div>

          {/* Shopify Logo */}
          <div className="flex items-center justify-center gap-2 h-10 px-4 hover:scale-105 transition-transform">
            <svg className="w-7 h-7" viewBox="0 0 109 124" fill="none">
              <path d="M78.7 15.6C78.3 15.2 77.6 15 76.9 15.2L70.4 17.2C69 13.5 66.8 9.5 62.4 6.7C58.8 4.3 54.5 4.3 51.6 5.3C50.2 5.8 48.7 6.8 47.7 8C43.1 13.5 44 22.8 45.4 28.5L34.1 32C33.1 32.3 32.7 33.3 32.7 34.2C30.6 48.5 21.6 109.9 21.5 110.8C21.4 111.4 21.7 112 22.2 112.3C22.4 112.5 59.8 122.9 60.1 123C60.3 123 60.5 123 60.7 123C61 123 98.7 114.7 99 114.6C99.5 114.3 99.8 113.8 99.7 113.2C98.4 104.7 85.1 22.3 84.9 20.8C84.8 20 84.3 19.3 83.6 19.1L78.7 15.6Z" fill="#95BF47"/>
              <path d="M60.1 123C59.9 122.9 22.5 112.5 22.3 112.3C21.8 112 21.5 111.4 21.6 110.8C21.7 109.9 30.7 48.5 32.8 34.2C32.8 33.3 33.2 32.3 34.2 32L45.5 28.5L60.1 123Z" fill="#5E8E3E"/>
              <path d="M60.4 34.6C59.2 34.6 58.3 33.7 58.3 32.5C58.3 30.1 57.6 24.3 55.4 20.4C54.1 18.2 52.4 17.5 50.8 17.5C49 17.5 47.9 18.5 47.4 19.5C45.9 22.5 46.1 27.6 46.5 31.9L40.9 33.6C39.8 28.5 39.5 20.9 43.1 15C44.7 12.4 47.6 10.9 50.8 10.9C54.7 10.9 58.6 12.8 61 16.7C63.8 21.3 64.6 28.1 64.6 32.5C64.6 33.7 63.6 34.6 62.5 34.6H60.4Z" fill="#5E8E3E"/>
              <path d="M67.3 58.9C67.1 58.4 66.5 58.2 66 58.3L61.6 59.9C60.2 55.2 56.6 53.6 53.1 53.6C47.7 53.6 43.8 57.6 43.8 64.3C43.8 74.3 54.3 75.9 54.3 83.3C54.3 86.8 52.4 89.2 49 89.2C44.9 89.2 42.6 86.1 41.5 83.1C41.3 82.5 40.7 82.2 40.2 82.4L35.8 84.1C35.4 84.3 35.1 84.7 35.2 85.2C36.9 91.8 41.9 95.8 49 95.8C55.4 95.8 61.2 91.9 61.2 83.3C61.2 73.1 50.8 71.9 50.8 64.7C50.8 61.8 52.6 59.8 55.4 59.8C58.4 59.8 60.5 61.6 61.3 63.8C61.5 64.4 62.1 64.7 62.6 64.5L67 62.8C67.4 62.7 67.7 62.2 67.6 61.7L67.3 58.9Z" fill="white"/>
            </svg>
            <span className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-800 lowercase">
              shopify
            </span>
          </div>

          {/* Lacoste Logo */}
          <div className="flex items-center justify-center gap-2 h-10 px-4 hover:scale-105 transition-transform">
            {/* Lacoste Crocodile Icon */}
            <svg className="w-8 h-5" viewBox="0 0 40 24" fill="none">
              <path d="M37 11c-2-1-4-1-6-1-1-3-3-5-6-6-3-1-7-1-10 1-2 1-3 3-4 4-2 0-4 1-5 2-2 1-3 3-4 5 2 1 4 0 6-1 2 2 4 3 7 3h12c3 0 6-1 8-3 2-1 3-3 2-4z" fill="#004526"/>
              <circle cx="34" cy="10" r="1" fill="#E50010"/>
              <path d="M31 13c1 1 2 0 3-1-1 0-2 0-3 1z" fill="white"/>
            </svg>
            <span className="text-lg sm:text-xl font-black tracking-widest text-[#004526] uppercase">
              LACOSTE
            </span>
          </div>

          {/* Levi's Batwing Logo */}
          <div className="flex items-center justify-center h-10 px-4 hover:scale-105 transition-transform">
            <div className="relative bg-[#C41230] text-white px-4 py-1 rounded-[3px] shadow-xs flex items-center justify-center">
              <span className="font-extrabold text-sm sm:text-base tracking-wider italic font-sans">
                Levi's
              </span>
              {/* Batwing cutout simulation */}
              <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-4 h-1.5 bg-white rounded-t-full"></div>
            </div>
          </div>

          {/* Amazon Logo */}
          <div className="flex flex-col items-center justify-center h-10 px-4 hover:scale-105 transition-transform">
            <span className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-900 leading-none">
              amazon
            </span>
            {/* Amazon smile arrow */}
            <svg className="w-16 h-2.5 mt-0.5" viewBox="0 0 64 12" fill="none">
              <path d="M4 3C18 10 46 10 60 4" stroke="#FF9900" strokeWidth="2.5" strokeLinecap="round"/>
              <path d="M57 2L61 4L59 8" stroke="#FF9900" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

    </>
  );

  return (
    <section className="flex w-full min-h-[171px] items-center bg-[#FFF3F0] py-8 border-y border-neutral-100 shadow-lg">
      <div className="w-full overflow-hidden">
        <div className="brand-marquee-track flex w-max items-center opacity-85">
          <div className="flex shrink-0 items-center gap-8 md:gap-12 pr-8 md:pr-12">
            {logoSet}
          </div>
          <div aria-hidden="true" className="flex shrink-0 items-center gap-8 md:gap-12 pr-8 md:pr-12">
            {logoSet}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandLogos;
