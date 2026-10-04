import React, { useState } from 'react';
import { useStore } from '../context/StoreContext';
import { ArrowRight } from 'lucide-react';

const Footer = () => {
  const { navigateTo, showToast } = useStore();
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      showToast('Please enter a valid email address', 'error');
      return;
    }
    showToast('Thank you for subscribing to our newsletter!');
    setEmail('');
  };

  const footerLinks = {
    customize: [
      { label: 'Design Your Look', page: 'home' },
      { label: 'Color Options', page: 'product-detail' },
      { label: 'Size Guide', page: 'product-detail' },
      { label: 'Fabric Choices', page: 'home' },
      { label: 'Personal Styling', page: 'home' }
    ],
    support: [
      { label: 'Contact Us', page: 'home' },
      { label: 'Track Your Order', page: 'cart' },
      { label: 'Returns & Exchanges', page: 'profile' },
      { label: 'Shipping Info', page: 'home' },
      { label: 'FAQ', page: 'home' }
    ],
    company: [
      { label: 'About Us', page: 'home' },
      { label: 'Sustainability', page: 'home' },
      { label: 'Careers', page: 'home' },
      { label: 'Press', page: 'home' },
      { label: 'Privacy Policy', page: 'home' }
    ]
  };

  return (
    <footer className="w-full bg-[#181818] text-white pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 1. Newsletter Section ("Stay in Style") */}
        <div className="text-center max-w-2xl mx-auto pb-16 border-b border-neutral-800">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Stay in Style
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-neutral-400 font-normal leading-relaxed max-w-lg mx-auto">
            Subscribe to our newsletter for exclusive offers, style tips, and early access to new collections.
          </p>

          <form onSubmit={handleSubscribe} className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full sm:flex-1 bg-[#282828] text-white placeholder-neutral-500 text-xs sm:text-sm px-6 py-3.5 rounded-full border border-neutral-700 focus:outline-hidden focus:border-[#FA6651] transition"
              required
            />
            <button
              type="submit"
              className="w-full sm:w-auto bg-[#FA6651] hover:bg-[#e65541] text-white text-xs sm:text-sm font-bold px-8 py-3.5 rounded-full shadow-lg shadow-[#FA6651]/20 hover:shadow-xl hover:scale-102 transition duration-200"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* 2. Footer Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pt-16 pb-12 text-left">
          
          {/* Brand Info Column */}
          <div className="md:col-span-4 space-y-4">
            <div 
              onClick={() => navigateTo('home')}
              className="flex items-center gap-2 cursor-pointer select-none"
            >
              <span className="text-2xl sm:text-3xl font-light text-white tracking-tight">Aura </span>
              <span className="text-2xl sm:text-3xl font-extrabold text-[#FA6651] tracking-tight">Attire</span>
            </div>

            <p className="text-xs sm:text-sm text-neutral-400 font-normal leading-relaxed max-w-sm">
              Where style meets personalization. Create fashion that's uniquely yours with our customizable collections.
            </p>

            {/* Social Icons */}
            <div className="flex items-center space-x-3 pt-3">
              <a
                href="#facebook"
                className="w-8 h-8 rounded-full bg-[#262626] hover:bg-[#FA6651] text-neutral-300 hover:text-white flex items-center justify-center transition"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                </svg>
              </a>
              <a
                href="#instagram"
                className="w-8 h-8 rounded-full bg-[#262626] hover:bg-[#FA6651] text-neutral-300 hover:text-white flex items-center justify-center transition"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="#twitter"
                className="w-8 h-8 rounded-full bg-[#262626] hover:bg-[#FA6651] text-neutral-300 hover:text-white flex items-center justify-center transition"
                aria-label="Twitter / X"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Links: Customize */}
          <div className="md:col-span-2 space-y-4">
            <h4 className="text-sm font-bold text-white tracking-wider uppercase">
              Customize
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-neutral-400">
              {footerLinks.customize.map((link, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => navigateTo(link.page)}
                    className="hover:text-[#FA6651] transition"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Links: Support */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-sm font-bold text-white tracking-wider uppercase">
              Support
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-neutral-400">
              {footerLinks.support.map((link, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => navigateTo(link.page)}
                    className="hover:text-[#FA6651] transition"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Links: Company */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-sm font-bold text-white tracking-wider uppercase">
              Company
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-neutral-400">
              {footerLinks.company.map((link, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => navigateTo(link.page)}
                    className="hover:text-[#FA6651] transition"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Copyright notice */}
        <div className="pt-8 border-t border-neutral-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 gap-4">
          <p>© {new Date().getFullYear()} Aura Attire. All rights reserved.</p>
          <p className="flex items-center gap-4">
            <a href="#terms" className="hover:text-neutral-400 transition">Terms of Service</a>
            <span>•</span>
            <a href="#privacy" className="hover:text-neutral-400 transition">Privacy Policy</a>
            <span>•</span>
            <a href="#cookies" className="hover:text-neutral-400 transition">Cookie Settings</a>
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
