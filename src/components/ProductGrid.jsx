import React from 'react';
import ProductCard from './ProductCard';
import { useStore } from '../context/StoreContext';

// Import images directly from src/assets/
import steal1 from '../assets/steal-1.png';
import steal2 from '../assets/steal-2.png';
import steal3 from '../assets/steal-3.png';
import steal4 from '../assets/steal-4.png';
import steal5 from '../assets/steal-5.png';
import steal6 from '../assets/steal-6.png';

const ProductGrid = () => {
  const { navigateTo } = useStore();

  const stealProducts = [
    {
      id: 'steal-1',
      title: "Men's Fashionable Shirt",
      price: 48,
      originalPrice: 60,
      rating: 5.0,
      image: steal1,
      sku: 'STEAL-01',
      category: 'Men',
      colors: ['#38BDF8', '#FFFFFF', '#C084FC', '#1E293B']
    },
    {
      id: 'steal-2',
      title: "Girls Dress",
      price: 48,
      originalPrice: 60,
      rating: 5.0,
      image: steal2,
      sku: 'STEAL-02',
      category: 'Girls',
      colors: ['#FDE047', '#FDA4AF', '#F472B6']
    },
    {
      id: 'steal-3',
      title: "Men's T-Shirt",
      price: 48,
      originalPrice: 60,
      rating: 5.0,
      image: steal3,
      sku: 'STEAL-03',
      category: 'Men',
      colors: ['#FFFFFF', '#18181B', '#3B82F6']
    },
    {
      id: 'steal-4',
      title: "Boys T-Shirt",
      price: 48,
      originalPrice: 60,
      rating: 5.0,
      image: steal4,
      sku: 'KTBT0101',
      category: 'Boys',
      colors: ['#2563EB', '#FBBF24', '#10B981', '#111827']
    },
    {
      id: 'steal-5',
      title: "Women Fashionable Dress",
      price: 48,
      originalPrice: 60,
      rating: 5.0,
      image: steal5,
      sku: 'STEAL-05',
      category: 'Women',
      colors: ['#C2410C', '#E11D48', '#F59E0B']
    },
    {
      id: 'steal-6',
      title: "Men's Fashionable Shirt",
      price: 48,
      originalPrice: 60,
      rating: 5.0,
      image: steal6,
      sku: 'STEAL-06',
      category: 'Men',
      colors: ['#0F172A', '#334155', '#38BDF8']
    }
  ];

  return (
    <section id="style-steals" className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#623F25] tracking-tight">
            Style Steals You Can't Miss.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-neutral-500 font-normal leading-relaxed">
            Get up to 50% OFF on selected styles for men, women, and kids. Limited time only!
          </p>
        </div>

        {/* 6 Products Grid with HOT badge */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {stealProducts.map((product) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              showBadge={true} 
              badgeText="HOT"
            />
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-12 text-center">
          <button
            onClick={() => navigateTo('home')}
            className="inline-flex items-center justify-center bg-[#FA6651] hover:bg-[#e65541] text-white text-sm sm:text-base font-bold px-10 py-3.5 rounded-full shadow-md shadow-[#FA6651]/20 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
          >
            View All
          </button>
        </div>

      </div>
    </section>
  );
};

export default ProductGrid;
