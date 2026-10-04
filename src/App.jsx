import React from 'react';
import { StoreProvider, useStore } from './context/StoreContext';
import HomePage from './pages/HomePage';
import ProductDetailPage from './pages/ProductDetailPage';
import CartPage from './pages/CartPage';
import ProfilePage from './pages/ProfilePage';
import Toast from './components/Toast';
import { Home, Shirt, ShoppingCart, UserCheck } from 'lucide-react';

const MainApp = () => {
  const { currentPage, setCurrentPage } = useStore();

  const renderCurrentView = () => {
    switch (currentPage) {
      case 'product-detail':
        return <ProductDetailPage />;
      case 'cart':
        return <CartPage />;
      case 'profile':
        return <ProfilePage />;
      case 'home':
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="relative min-h-screen bg-white font-sans text-neutral-800">
      {/* Active Page View */}
      {renderCurrentView()}

      {/* Global Toast Notification */}
      <Toast />

      {/* Quick Figma Screen Navigation Dock (Bottom-Left) */}
      <aside aria-label="Demo Screen Navigation" className="fixed bottom-4 left-4 z-40 bg-neutral-900/90 hover:bg-neutral-900 backdrop-blur-md text-white px-3 py-2 rounded-2xl shadow-2xl border border-neutral-700/80 flex items-center gap-1 sm:gap-2 transition-all">
        <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest px-1 hidden sm:inline">
          Figma Views:
        </span>

        <button
          onClick={() => {
            setCurrentPage('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl text-xs font-semibold transition ${
            currentPage === 'home'
              ? 'bg-[#FA6651] text-white shadow-xs'
              : 'text-neutral-300 hover:text-white hover:bg-neutral-800'
          }`}
          title="Figma Screen 1: Home"
        >
          <Home className="w-3.5 h-3.5" />
          <span className="hidden md:inline">1. Home</span>
        </button>

        <button
          onClick={() => {
            setCurrentPage('product-detail');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl text-xs font-semibold transition ${
            currentPage === 'product-detail'
              ? 'bg-[#FA6651] text-white shadow-xs'
              : 'text-neutral-300 hover:text-white hover:bg-neutral-800'
          }`}
          title="Figma Screen 2: Product Detail"
        >
          <Shirt className="w-3.5 h-3.5" />
          <span className="hidden md:inline">2. Detail</span>
        </button>

        <button
          onClick={() => {
            setCurrentPage('cart');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl text-xs font-semibold transition ${
            currentPage === 'cart'
              ? 'bg-[#FA6651] text-white shadow-xs'
              : 'text-neutral-300 hover:text-white hover:bg-neutral-800'
          }`}
          title="Figma Screen 3: Cart"
        >
          <ShoppingCart className="w-3.5 h-3.5" />
          <span className="hidden md:inline">3. Cart</span>
        </button>

        <button
          onClick={() => {
            setCurrentPage('profile');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl text-xs font-semibold transition ${
            currentPage === 'profile'
              ? 'bg-[#FA6651] text-white shadow-xs'
              : 'text-neutral-300 hover:text-white hover:bg-neutral-800'
          }`}
          title="Figma Screen 4: Profile"
        >
          <UserCheck className="w-3.5 h-3.5" />
          <span className="hidden md:inline">4. Profile</span>
        </button>
      </aside>
    </div>
  );
};

function App() {
  return (
    <StoreProvider>
      <MainApp />
    </StoreProvider>
  );
}

export default App;
