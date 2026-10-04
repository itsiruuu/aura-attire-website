import React, { useState } from 'react';
import { useStore } from '../context/StoreContext';
import { Search, ShoppingCart, User, ChevronDown, Menu, X, ArrowRight } from 'lucide-react';

const Header = () => {
  const { 
    currentPage, 
    navigateTo, 
    totalCartCount, 
    currencySymbol, 
    setCurrencySymbol 
  } = useStore();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const navItems = [
    { label: 'HOME', page: 'home' },
    { 
      label: 'MEN', 
      page: 'home', 
      hasDropdown: true,
      subcategories: ['T-Shirts & Polos', 'Casual & Formal Shirts', 'Denim & Trousers', 'Jackets & Hoodies']
    },
    { 
      label: 'WOMEN', 
      page: 'home', 
      hasDropdown: true,
      subcategories: ['Evening Dresses', 'Tops & Blouses', 'Skirts & Pants', 'Luxury Wear']
    },
    { 
      label: 'BOYS', 
      page: 'product-detail', 
      hasDropdown: true,
      subcategories: ['Boys T-Shirts', 'Denim Jeans', 'Shorts & Sets', 'Sportswear']
    },
    { 
      label: 'GIRLS', 
      page: 'home', 
      hasDropdown: true,
      subcategories: ['Party Dresses', 'Floral Sets', 'Skirts', 'Casual Tops']
    },
    { label: 'TRENDING', page: 'home' }
  ];

  return (
    <header className="w-full sticky top-0 z-40 bg-white/95 backdrop-blur-md shadow-xs border-b border-neutral-100">
      {/* 1. Top Announcement Bar */}
      <div className="w-full bg-[#FA6651] text-white py-2 px-4 text-xs md:text-sm font-medium tracking-wide">
        <div className="max-w-7xl mx-auto flex items-center justify-center relative">
          <div className="flex items-center gap-3">
            <span>Free shipping on all U.S. orders $50+</span>
            <button
              onClick={() => navigateTo('home')}
              className="bg-white text-[#FA6651] text-xs font-semibold px-3 py-1 rounded-full hover:bg-neutral-100 transition shadow-xs"
            >
              Shop Now
            </button>
          </div>

          {/* Quick Currency Switcher */}
          <div className="absolute right-2 hidden md:flex items-center gap-1 text-xs opacity-90 hover:opacity-100">
            <span className="text-[11px] text-white/80">Currency:</span>
            <button
              onClick={() => setCurrencySymbol(currencySymbol === '৳' ? '$' : '৳')}
              className="bg-white/20 hover:bg-white/30 px-2 py-0.5 rounded text-white font-mono font-bold transition"
              title="Toggle Currency"
            >
              {currencySymbol}
            </button>
          </div>
        </div>
      </div>

      {/* 2. Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div 
            onClick={() => navigateTo('home')} 
            className="flex items-center gap-2 cursor-pointer group select-none"
          >
            <div className="flex items-center">
              <span className="text-2xl md:text-3xl font-light text-neutral-800 tracking-tight">Aura</span>
              <span className="text-2xl md:text-3xl font-extrabold text-[#FA6651] tracking-tight ml-1.5"> Attire</span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-7 lg:space-x-9">
            {navItems.map((item) => (
              <div 
                key={item.label}
                className="relative"
                onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  onClick={() => navigateTo(item.page)}
                  className={`flex items-center gap-1 text-xs lg:text-[13px] font-bold tracking-wider uppercase transition-colors py-2 ${
                    currentPage === item.page && item.label === 'HOME'
                      ? 'text-[#FA6651]'
                      : 'text-neutral-700 hover:text-[#FA6651]'
                  }`}
                >
                  {item.label}
                  {item.hasDropdown && (
                    <ChevronDown className="w-3.5 h-3.5 text-neutral-400 group-hover:text-[#FA6651] transition-transform duration-200" />
                  )}
                </button>

                {/* Dropdown Menu */}
                {item.hasDropdown && activeDropdown === item.label && (
                  <div className="absolute top-full left-0 mt-1 w-52 bg-white rounded-xl shadow-xl border border-neutral-100 py-3 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                    {item.subcategories.map((sub, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          setActiveDropdown(null);
                          if (item.label === 'BOYS') {
                            navigateTo('product-detail');
                          } else {
                            navigateTo('home');
                          }
                        }}
                        className="w-full text-left px-4 py-2 text-xs text-neutral-600 hover:text-[#FA6651] hover:bg-[#FFF2EF] transition flex items-center justify-between"
                      >
                        <span>{sub}</span>
                        <ArrowRight className="w-3 h-3 opacity-0 hover:opacity-100 text-[#FA6651]" />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right Action Icons */}
          <div className="flex items-center space-x-4 md:space-x-6">
            {/* Search Icon */}
            <button
              onClick={() => setSearchModalOpen(true)}
              className="text-neutral-700 hover:text-[#FA6651] p-1.5 rounded-full hover:bg-neutral-50 transition"
              title="Search"
              aria-label="Search"
            >
              <Search className="w-5 h-5 md:w-5.5 md:h-5.5" />
            </button>

            {/* Shopping Cart Icon */}
            <button
              onClick={() => navigateTo('cart')}
              className={`relative text-neutral-700 hover:text-[#FA6651] p-1.5 rounded-full hover:bg-neutral-50 transition ${
                currentPage === 'cart' ? 'text-[#FA6651]' : ''
              }`}
              title="Shopping Cart"
              aria-label="Shopping Cart"
            >
              <ShoppingCart className="w-5 h-5 md:w-5.5 md:h-5.5" />
              {totalCartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#FA6651] text-white text-[11px] font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-xs">
                  {totalCartCount}
                </span>
              )}
            </button>

            {/* User Profile Icon */}
            <button
              onClick={() => navigateTo('profile')}
              className={`text-neutral-700 hover:text-[#FA6651] p-1.5 rounded-full hover:bg-neutral-50 transition ${
                currentPage === 'profile' ? 'text-[#FA6651]' : ''
              }`}
              title="User Account"
              aria-label="User Account"
            >
              <User className="w-5 h-5 md:w-5.5 md:h-5.5" />
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-neutral-700 hover:text-[#FA6651] p-1.5"
              aria-label="Open navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-neutral-200 px-6 py-4 shadow-lg animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-3">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => {
                  navigateTo(item.page);
                  setMobileMenuOpen(false);
                }}
                className={`text-left text-sm font-bold tracking-wider uppercase py-2 flex items-center justify-between ${
                  currentPage === item.page && item.label === 'HOME'
                    ? 'text-[#FA6651]'
                    : 'text-neutral-700'
                }`}
              >
                <span>{item.label}</span>
                <ChevronDown className="w-4 h-4 text-neutral-400" />
              </button>
            ))}

            <div className="pt-3 border-t border-neutral-100 flex items-center justify-between">
              <span className="text-xs text-neutral-500">Currency</span>
              <button
                onClick={() => setCurrencySymbol(currencySymbol === '৳' ? '$' : '৳')}
                className="bg-neutral-100 px-3 py-1 rounded text-xs font-bold"
              >
                Switch to {currencySymbol === '৳' ? 'USD ($)' : 'BDT (৳)'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Search Modal */}
      {searchModalOpen && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-xs z-50 flex items-start justify-center pt-24 px-4">
          <div className="bg-white rounded-2xl p-6 w-full max-w-xl shadow-2xl border border-neutral-100 animate-in zoom-in-95 duration-150">
            <div className="flex items-center justify-between pb-4 border-b border-neutral-100">
              <span className="text-lg font-bold text-neutral-800">Search Products</span>
              <button 
                onClick={() => setSearchModalOpen(false)}
                className="text-neutral-400 hover:text-neutral-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="relative mt-4">
              <Search className="w-5 h-5 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                autoFocus
                placeholder="Search t-shirts, dresses, shirts, denim..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 bg-neutral-50 rounded-xl text-sm border border-neutral-200 focus:outline-hidden focus:border-[#FA6651] focus:ring-1 focus:ring-[#FA6651]"
              />
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              <span className="text-xs text-neutral-400 self-center">Popular:</span>
              {['Boys T-Shirt', 'Fashionable Shirt', 'Black Dress', 'Denim Pant'].map((tag) => (
                <button
                  key={tag}
                  onClick={() => {
                    setSearchModalOpen(false);
                    navigateTo(tag.includes('Boys') ? 'product-detail' : 'home');
                  }}
                  className="text-xs bg-neutral-100 hover:bg-[#FFF2EF] hover:text-[#FA6651] px-3 py-1.5 rounded-full transition"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
