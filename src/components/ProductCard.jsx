import React from 'react';
import { useStore } from '../context/StoreContext';
import { Star, ShoppingCart, Eye } from 'lucide-react';

const ProductCard = ({ product, showBadge = false, badgeText = 'HOT' }) => {
  const { navigateTo, addToCart, currencySymbol } = useStore();

  const handleBuyNow = (e) => {
    e.stopPropagation();
    addToCart(product, '8', 1);
    navigateTo('cart');
  };

  const handleAddToCart = (e) => {
    e.stopPropagation();
    addToCart(product, '8', 1);
  };

  return (
    <div 
      onClick={() => navigateTo('product-detail', product)}
      className="group bg-white rounded-2xl p-4 sm:p-5 border border-neutral-100 hover:border-neutral-200 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer relative"
    >
      {/* Top Image Container */}
      <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-neutral-100 mb-4">
        {/* Hot / Sale Badge */}
        {showBadge && (
          <div className="absolute top-2.5 left-2.5 z-10 bg-[#FA6651] text-white text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-full shadow-xs tracking-wider">
            {badgeText}
          </div>
        )}

        {/* Quick View Overlay on Hover */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center z-10">
          <span className="bg-white/95 text-neutral-800 text-xs font-semibold px-3 py-1.5 rounded-full shadow-md flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform">
            <Eye className="w-3.5 h-3.5 text-[#FA6651]" />
            Quick View
          </span>
        </div>

        {/* Product Image */}
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
      </div>

      {/* Product Information */}
      <div className="flex flex-col flex-grow">
        {/* Title in coral/red as shown in Figma */}
        <h3 className="text-base sm:text-lg font-bold text-[#FA6651] group-hover:text-[#e5533f] transition-colors leading-snug line-clamp-1">
          {product.title}
        </h3>

        {/* Rating stars */}
        <div className="flex items-center gap-1.5 mt-1.5">
          <div className="flex text-amber-400">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className={`w-3.5 h-3.5 ${i < Math.floor(product.rating || 5) ? 'fill-amber-400 text-amber-400' : 'text-neutral-300'}`} 
              />
            ))}
          </div>
          <span className="text-[11px] font-semibold text-neutral-500">
            ({product.rating || '5.0'})
          </span>
        </div>

        {/* Color Swatch Dots */}
        <div className="flex items-center gap-1.5 mt-2">
          <span className="text-[11px] text-neutral-400 mr-1">Color:</span>
          {(product.colors || ['#2563EB', '#FBBF24', '#10B981', '#111827']).map((hex, idx) => (
            <span
              key={idx}
              className="w-2.5 h-2.5 rounded-full border border-black/10 inline-block shadow-2xs"
              style={{ backgroundColor: hex }}
            />
          ))}
        </div>

        {/* Price display */}
        <div className="mt-3 flex items-baseline gap-2">
          <span className="text-lg sm:text-xl font-extrabold text-neutral-900">
            {currencySymbol} {product.price}
          </span>
          {product.originalPrice && (
            <span className="text-xs text-neutral-400 line-through">
              {currencySymbol} {product.originalPrice}
            </span>
          )}
        </div>
      </div>

      {/* Action Buttons: Buy Now & + Add Cart */}
      <div className="grid grid-cols-2 gap-2 mt-4 pt-2 border-t border-neutral-100">
        <button
          onClick={handleBuyNow}
          className="w-full bg-[#FA6651] hover:bg-[#e65541] text-white text-xs sm:text-[13px] font-bold py-2 px-2 rounded-full shadow-xs hover:shadow-md transition text-center"
        >
          Buy Now
        </button>

        <button
          onClick={handleAddToCart}
          className="w-full bg-white hover:bg-neutral-50 text-neutral-700 hover:text-[#FA6651] text-xs sm:text-[13px] font-semibold py-2 px-2 rounded-full border border-neutral-200 hover:border-[#FA6651] transition flex items-center justify-center gap-1 shadow-2xs"
        >
          <ShoppingCart className="w-3.5 h-3.5" />
          <span>+ Add Cart</span>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
