import React, { createContext, useContext, useState, useEffect } from 'react';
import cartItemImg from '../assets/cart-item.png';
import detailMainImg from '../assets/product-detail.png';
import detailThumb1 from '../assets/detail-thumb-1.png';
import detailThumb2 from '../assets/detail-thumb-2.png';
import detailThumb3 from '../assets/detail-thumb-3.png';
import detailThumb4 from '../assets/detail-thumb-4.png';

const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
  const [currentPage, setCurrentPage] = useState('home');
  const [toast, setToast] = useState(null);
  const [currencySymbol, setCurrencySymbol] = useState('৳'); // matching screenshot ৳ 99.99
  const [exchangeRate, setExchangeRate] = useState(1); // 1 for ৳, or switchable

  // Active product for detail page
  const [currentProduct, setCurrentProduct] = useState({
    id: 'boys-tshirt-01',
    title: 'Boys T-Shirt',
    price: 99.99,
    sku: 'KTBT0101',
    description: 'Boys short Sleeve 100% Cotton T-shirt',
    category: 'Boys',
    subCategory: 'T-Shirt',
    rating: 4.8,
    reviewsCount: '2k+',
    sizes: ['2', '4', '6', '8', '10'],
    selectedSize: '8',
    color: 'Blue',
    colorOptions: [
      { name: 'Royal Blue', hex: '#2563EB' },
      { name: 'Sunny Yellow', hex: '#FBBF24' },
      { name: 'Emerald Green', hex: '#10B981' },
      { name: 'Classic Black', hex: '#111827' }
    ],
    fabric: '180 gsm, 100% Cotton',
    fit: 'Regular',
    mainImage: detailMainImg,
    thumbnails: [detailThumb1, detailThumb2, detailThumb3, detailThumb4],
    disclaimer: "Product color may slightly vary, depending on your device's screen resolution"
  });

  // Cart state - initialized with items matching Figma screenshot 3
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      title: 'Boys T-Shirt',
      description: 'Boys short Sleeve 100% Cotton T-shirt',
      sku: 'KTBT0101',
      size: '8',
      price: 9.99,
      quantity: 2,
      image: cartItemImg,
      selected: true
    },
    {
      id: 2,
      title: 'Boys T-Shirt',
      description: 'Boys short Sleeve 100% Cotton T-shirt',
      sku: 'KTBT0101',
      size: '8',
      price: 9.99,
      quantity: 1,
      image: cartItemImg,
      selected: true
    },
    {
      id: 3,
      title: 'Boys T-Shirt',
      description: 'Boys short Sleeve 100% Cotton T-shirt',
      sku: 'KTBT0101',
      size: '8',
      price: 9.99,
      quantity: 1,
      image: cartItemImg,
      selected: false
    }
  ]);

  const [deliveryCharge] = useState(70);
  const [couponCode, setCouponCode] = useState('');
  const [discountPercent, setDiscountPercent] = useState(0);

  // Address matching Screenshot 3
  const [deliveryAddress, setDeliveryAddress] = useState({
    name: 'Ahnaf Feeda',
    phone: '01717xxxxxx09',
    address: '219/1 Godighar Goli, Rayerbazar, Dhaka'
  });

  // Profile data matching Screenshot 4
  const [userProfile, setUserProfile] = useState({
    firstName: 'Md',
    lastName: 'Rimel',
    email: 'rimel1111@gmail.com',
    address: 'Kingston, 5236, United State',
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  // Toast notification
  const showToast = (message, type = 'success') => {
    setToast({ message, type });
    setTimeout(() => {
      setToast(null);
    }, 3200);
  };

  // Cart actions
  const addToCart = (product, size = '8', quantity = 1) => {
    const existingIndex = cartItems.findIndex(
      (item) => item.sku === product.sku && item.size === size
    );

    if (existingIndex > -1) {
      setCartItems((prev) =>
        prev.map((item, idx) =>
          idx === existingIndex
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      );
    } else {
      const newItem = {
        id: Date.now(),
        title: product.title,
        description: product.description || 'Premium Quality Fashion Apparel',
        sku: product.sku || 'KTBT0101',
        size: size,
        price: product.price || 99,
        quantity: quantity,
        image: product.image || cartItemImg,
        selected: true
      };
      setCartItems((prev) => [newItem, ...prev]);
    }
    showToast(`Added ${product.title} to your cart!`);
  };

  const updateQuantity = (id, delta) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean)
    );
  };

  const removeItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
    showToast('Item removed from cart', 'info');
  };

  const toggleItemSelect = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, selected: !item.selected } : item
      )
    );
  };

  const toggleSelectAll = (checked) => {
    setCartItems((prev) =>
      prev.map((item) => ({ ...item, selected: checked }))
    );
  };

  const applyCoupon = (code) => {
    const cleanCode = code.trim().toUpperCase();
    if (cleanCode === 'FLOURISH30' || cleanCode === 'SALE30' || cleanCode === 'SAVE30') {
      setDiscountPercent(30);
      showToast('30% voucher coupon applied successfully!');
      return true;
    } else if (cleanCode === 'FLOURISH10') {
      setDiscountPercent(10);
      showToast('10% voucher coupon applied successfully!');
      return true;
    } else {
      showToast('Invalid coupon code. Try FLOURISH30', 'error');
      return false;
    }
  };

  // Navigation helper
  const navigateTo = (page, product = null) => {
    if (product) {
      setCurrentProduct((prev) => ({
        ...prev,
        ...product,
        // keep images or override
        mainImage: product.image || prev.mainImage
      }));
    }
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Cart calculation
  const selectedCartItems = cartItems.filter((i) => i.selected);
  const cartSubtotal = selectedCartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const discountAmount = (cartSubtotal * discountPercent) / 100;
  const cartTotal = selectedCartItems.length > 0 ? (cartSubtotal - discountAmount + deliveryCharge) : 0;
  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <StoreContext.Provider
      value={{
        currentPage,
        setCurrentPage,
        navigateTo,
        toast,
        showToast,
        currencySymbol,
        setCurrencySymbol,
        currentProduct,
        setCurrentProduct,
        cartItems,
        setCartItems,
        selectedCartItems,
        cartSubtotal,
        discountPercent,
        discountAmount,
        deliveryCharge,
        cartTotal,
        totalCartCount,
        addToCart,
        updateQuantity,
        removeItem,
        toggleItemSelect,
        toggleSelectAll,
        couponCode,
        setCouponCode,
        applyCoupon,
        deliveryAddress,
        setDeliveryAddress,
        userProfile,
        setUserProfile
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error('useStore must be used within a StoreProvider');
  }
  return context;
};
