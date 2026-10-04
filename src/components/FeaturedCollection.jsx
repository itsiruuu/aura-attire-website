import React from 'react';
import ProductCard from './ProductCard';
import { useStore } from '../context/StoreContext';

// Import all product images directly from src/assets/
import product1 from '../assets/product-1.png';
import product2 from '../assets/product-2.png';
import product3 from '../assets/product-3.png';
import product4 from '../assets/product-4.png';
import product5 from '../assets/product-5.png';
import product6 from '../assets/product-6.png';

const FeaturedCollection = () => {
  const { navigateTo } = useStore();

  const featuredProducts = [
    {
      id: 'fc-1',
      title: "Men's Fashionable Shirt",
      price: 99,
      rating: 5.0,
      image: product1,
      sku: 'MFS-0101',
      category: 'Men',
      colors: ['#38BDF8', '#FFFFFF', '#C084FC', '#1E293B']
    },
    {
      id: 'fc-2',
      title: "Fashionable Dress",
      price: 99,
      rating: 5.0,
      image: product2,
      sku: 'WFD-0202',
      category: 'Women',
      colors: ['#0F172A', '#E11D48', '#F59E0B']
    },
    {
      id: 'fc-3',
      title: "Men's T-Shirt",
      price: 99,
      rating: 5.0,
      image: product3,
      sku: 'MTS-0303',
      category: 'Men',
      colors: ['#FFFFFF', '#18181B', '#3B82F6']
    },
    {
      id: 'fc-4',
      title: "Boys T-Shirt",
      price: 99,
      rating: 5.0,
      image: product4,
      sku: 'KTBT0101',
      category: 'Boys',
      colors: ['#2563EB', '#FBBF24', '#10B981', '#111827']
    },
    {
      id: 'fc-5',
      title: "Girls Dress",
      price: 99,
      rating: 5.0,
      image: product5,
      sku: 'GD-0505',
      category: 'Girls',
      colors: ['#FDE047', '#FDA4AF', '#F472B6']
    },
    {
      id: 'fc-6',
      title: "Men's Denim Pant",
      price: 99,
      rating: 5.0,
      image: product6,
      sku: 'MDP-0606',
      category: 'Men',
      colors: ['#1E3A8A', '#0F172A', '#334155']
    }
  ];

  return (
    <section id="featured-collection" className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#623F25] tracking-tight">
            Featured Collection
          </h2>
          <p className="mt-3 text-sm sm:text-base text-neutral-500 font-normal leading-relaxed">
           Discover our curated selection of customizable pieces, each designed to reflect your unique style and personality.
          </p>
        </div>

        {/* 6 Products Grid (3 columns on desktop, 2 on tablet, 1 on mobile) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* View All More Button */}
        <div className="mt-12 text-center">
          <button
            onClick={() => navigateTo('home')}
            className="inline-flex items-center justify-center bg-[#FA6651] hover:bg-[#e65541] text-white text-sm sm:text-base font-bold px-10 py-3.5 rounded-full shadow-md shadow-[#FA6651]/20 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
          >
           see all Featured
          </button>
        </div>

      </div>
    </section>
  );
};

export default FeaturedCollection;
