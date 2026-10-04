import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useStore } from '../context/StoreContext';
import { Copy, Check, ChevronRight, X, Ruler, MapPin, Share2 } from 'lucide-react';

const ProductDetailPage = () => {
  const { 
    currentProduct, 
    addToCart, 
    navigateTo, 
    showToast, 
    currencySymbol 
  } = useStore();

  const [selectedImage, setSelectedImage] = useState(currentProduct.mainImage);
  const [selectedSize, setSelectedSize] = useState('8');
  const [copiedSku, setCopiedSku] = useState(false);
  const [sizeChartOpen, setSizeChartOpen] = useState(false);
  const [storeModalOpen, setStoreModalOpen] = useState(false);

  const handleCopySku = () => {
    navigator.clipboard?.writeText(currentProduct.sku || 'KTBT0101');
    setCopiedSku(true);
    showToast('SKU copied to clipboard!');
    setTimeout(() => setCopiedSku(false), 2000);
  };

  const handleAddToCart = () => {
    addToCart(currentProduct, selectedSize, 1);
  };

  const handleBuyNow = () => {
    addToCart(currentProduct, selectedSize, 1);
    navigateTo('cart');
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center space-x-2 text-xs text-neutral-500 mb-8 overflow-x-auto whitespace-nowrap py-1">
          <button onClick={() => navigateTo('home')} className="hover:text-[#FA6651] transition">
            Home
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
          <button onClick={() => navigateTo('home')} className="hover:text-[#FA6651] transition">
            {currentProduct.category || 'Boys'}
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
          <button onClick={() => navigateTo('home')} className="hover:text-[#FA6651] transition">
            {currentProduct.subCategory || 'T-Shirt'}
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
          <span className="font-semibold text-neutral-800">
            {currentProduct.title || 'Boys T-Shirt'}
          </span>
        </nav>

        {/* Product Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Gallery (Thumbnails + Main Image) */}
          <div className="lg:col-span-7 flex flex-col-reverse sm:flex-row gap-4 sm:gap-6 items-start">
            
            {/* Vertical Thumbnails Stack */}
            <div className="flex sm:flex-col gap-3 w-full sm:w-24 shrink-0 overflow-x-auto sm:overflow-visible pb-2 sm:pb-0">
              {(currentProduct.thumbnails || [currentProduct.mainImage]).map((thumb, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(thumb)}
                  className={`w-18 h-18 sm:w-20 sm:h-20 rounded-xl overflow-hidden border-2 transition-all p-1 bg-neutral-50 hover:border-[#FA6651] shrink-0 ${
                    selectedImage === thumb ? 'border-[#FA6651] shadow-xs ring-1 ring-[#FA6651]' : 'border-neutral-200'
                  }`}
                >
                  <img
                    src={thumb}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover object-center rounded-lg"
                  />
                </button>
              ))}
            </div>

            {/* Main Image Container */}
            <div className="flex-1 w-full bg-neutral-50 rounded-2xl overflow-hidden border border-neutral-100 p-4 sm:p-8 flex items-center justify-center relative min-h-[380px] sm:min-h-[480px]">
              <img
                src={selectedImage || currentProduct.mainImage}
                alt={currentProduct.title}
                className="w-full max-w-md h-auto object-contain hover:scale-105 transition-transform duration-500"
              />
            </div>

          </div>

          {/* Right Column: Product Details & Order Actions */}
          <div className="lg:col-span-5 flex flex-col space-y-6 text-left">
            
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
                {currentProduct.title || 'Boys T-Shirt'}
              </h1>
              <p className="text-2xl sm:text-3xl font-extrabold text-[#282523] mt-2">
                {currencySymbol} {currentProduct.price || '99.99'}
              </p>
            </div>

            {/* SKU and Copy button */}
            <div className="flex items-center gap-2 text-xs sm:text-sm text-neutral-500">
              <span>SKU: {currentProduct.sku || 'KTBT0101'}</span>
              <button
                onClick={handleCopySku}
                className="p-1 hover:text-[#FA6651] transition"
                title="Copy SKU"
              >
                {copiedSku ? (
                  <Check className="w-4 h-4 text-emerald-500" />
                ) : (
                  <Copy className="w-4 h-4 text-neutral-400 hover:text-neutral-700" />
                )}
              </button>
            </div>

            {/* Size Selector */}
            <div className="space-y-2.5">
              <span className="block text-xs font-bold text-neutral-700 uppercase tracking-wider">
                Size
              </span>
              <div className="flex flex-wrap gap-2.5">
                {(currentProduct.sizes || ['2', '4', '6', '8', '10']).map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-11 h-11 rounded-lg border text-sm font-bold flex items-center justify-center transition-all ${
                      selectedSize === size
                        ? 'border-neutral-900 bg-neutral-900 text-white shadow-xs'
                        : 'border-neutral-300 text-neutral-700 hover:border-neutral-800'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Action Buttons: Buy Now & ADD TO CART */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <button
                onClick={handleBuyNow}
                className="w-full bg-[#1E2530] hover:bg-[#141a22] text-white text-sm font-bold py-3.5 px-4 rounded-xl shadow-xs hover:shadow-md transition text-center"
              >
                Buy Now
              </button>

              <button
                onClick={handleAddToCart}
                className="w-full bg-[#FA6651] hover:bg-[#e65541] text-white text-sm font-bold py-3.5 px-4 rounded-xl shadow-md shadow-[#FA6651]/20 hover:shadow-lg transition text-center tracking-wide uppercase"
              >
                ADD TO CART
              </button>
            </div>

            {/* Informative Links */}
            <div className="flex items-center gap-6 pt-1 text-xs sm:text-sm font-semibold text-[#0284C7]">
              <button 
                onClick={() => setSizeChartOpen(true)}
                className="hover:underline flex items-center gap-1.5"
              >
                <Ruler className="w-4 h-4" />
                <span>Size Chart</span>
              </button>

              <button 
                onClick={() => setStoreModalOpen(true)}
                className="hover:underline flex items-center gap-1.5"
              >
                <MapPin className="w-4 h-4" />
                <span>Check Store availability</span>
              </button>
            </div>

            {/* Disclaimer */}
            <p className="text-xs text-neutral-500 italic bg-neutral-50 p-3 rounded-lg border border-neutral-100">
              Product color may slightly vary, depending on your device's screen resolution
            </p>

            {/* Product Details Table */}
            <div className="pt-4 border-t border-neutral-200">
              <h3 className="text-sm font-bold text-neutral-900 mb-3 uppercase tracking-wider">
                Product details
              </h3>
              <div className="space-y-2 text-xs sm:text-sm">
                <div className="flex justify-between py-1.5 border-b border-neutral-100">
                  <span className="text-neutral-500">Color</span>
                  <span className="font-medium text-neutral-800">{currentProduct.color || 'Blue'}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-neutral-100">
                  <span className="text-neutral-500">Size</span>
                  <span className="font-medium text-neutral-800">2-4-6-8-10</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-neutral-100">
                  <span className="text-neutral-500">Fabric</span>
                  <span className="font-medium text-neutral-800">{currentProduct.fabric || '180 gsm, 100% Cotton'}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-neutral-100">
                  <span className="text-neutral-500">Fit</span>
                  <span className="font-medium text-neutral-800">{currentProduct.fit || 'Regular'}</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </main>

      {/* Size Chart Modal */}
      {sizeChartOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-xs z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl animate-in zoom-in-95 duration-150">
            <div className="flex items-center justify-between pb-3 border-b border-neutral-100">
              <h3 className="font-bold text-lg text-neutral-800 flex items-center gap-2">
                <Ruler className="w-5 h-5 text-[#FA6651]" />
                Size Chart Guide
              </h3>
              <button onClick={() => setSizeChartOpen(false)} className="text-neutral-400 hover:text-neutral-700">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="mt-4 overflow-x-auto">
              <table className="w-full text-xs text-left">
                <thead className="bg-neutral-100 text-neutral-700 uppercase font-semibold">
                  <tr>
                    <th className="p-2.5">Size</th>
                    <th className="p-2.5">Chest (in)</th>
                    <th className="p-2.5">Length (in)</th>
                    <th className="p-2.5">Age Range</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-100">
                  <tr><td className="p-2.5 font-bold">2</td><td className="p-2.5">22"</td><td className="p-2.5">15"</td><td className="p-2.5">1-2 Yrs</td></tr>
                  <tr><td className="p-2.5 font-bold">4</td><td className="p-2.5">24"</td><td className="p-2.5">17"</td><td className="p-2.5">3-4 Yrs</td></tr>
                  <tr><td className="p-2.5 font-bold">6</td><td className="p-2.5">26"</td><td className="p-2.5">19"</td><td className="p-2.5">5-6 Yrs</td></tr>
                  <tr className="bg-[#FFF2EF] font-bold text-[#FA6651]"><td className="p-2.5">8</td><td className="p-2.5">28"</td><td className="p-2.5">21"</td><td className="p-2.5">7-8 Yrs (Standard)</td></tr>
                  <tr><td className="p-2.5 font-bold">10</td><td className="p-2.5">30"</td><td className="p-2.5">23"</td><td className="p-2.5">9-10 Yrs</td></tr>
                </tbody>
              </table>
            </div>

            <p className="mt-4 text-[11px] text-neutral-500">
              Measurements are in inches. Regular fit allows room for comfort and movement.
            </p>
          </div>
        </div>
      )}

      {/* Store Availability Modal */}
      {storeModalOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-xs z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl animate-in zoom-in-95 duration-150">
            <div className="flex items-center justify-between pb-3 border-b border-neutral-100">
              <h3 className="font-bold text-lg text-neutral-800 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-[#FA6651]" />
                Store Availability
              </h3>
              <button onClick={() => setStoreModalOpen(false)} className="text-neutral-400 hover:text-neutral-700">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="mt-4 space-y-3 text-xs">
              <div className="p-3 bg-emerald-50 border border-emerald-100 rounded-xl flex justify-between items-center">
                <div>
                  <p className="font-bold text-emerald-900">Gulshan Flagship Store</p>
                  <p className="text-emerald-700">Road 11, Block D, Dhaka</p>
                </div>
                <span className="bg-emerald-600 text-white px-2 py-0.5 rounded-full font-bold text-[10px]">In Stock (12)</span>
              </div>
              <div className="p-3 bg-emerald-50 border border-emerald-100 rounded-xl flex justify-between items-center">
                <div>
                  <p className="font-bold text-emerald-900">Dhanmondi Outlet</p>
                  <p className="text-emerald-700">Satmasjid Road, Dhaka</p>
                </div>
                <span className="bg-emerald-600 text-white px-2 py-0.5 rounded-full font-bold text-[10px]">In Stock (5)</span>
              </div>
              <div className="p-3 bg-neutral-50 border border-neutral-200 rounded-xl flex justify-between items-center opacity-75">
                <div>
                  <p className="font-bold text-neutral-800">Uttara Branch</p>
                  <p className="text-neutral-500">Sector 3, Uttara, Dhaka</p>
                </div>
                <span className="bg-neutral-300 text-neutral-700 px-2 py-0.5 rounded-full font-bold text-[10px]">Low Stock (1)</span>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default ProductDetailPage;
