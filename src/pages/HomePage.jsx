import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import BrandLogos from '../components/BrandLogos';
import FeaturedCollection from '../components/FeaturedCollection';
import BannerSale from '../components/BannerSale';
import ProductGrid from '../components/ProductGrid';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <BrandLogos />
        <FeaturedCollection />
        <BannerSale />
        <ProductGrid />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
