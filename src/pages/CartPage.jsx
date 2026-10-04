import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useStore } from '../context/StoreContext';
import { 
  Trash2, 
  Plus, 
  Minus, 
  ChevronDown, 
  Check, 
  X, 
  CheckCircle2, 
  ShoppingBag, 
  ArrowRight,
  MapPin,
  Tag
} from 'lucide-react';

const CartPage = () => {
  const {
    cartItems,
    selectedCartItems,
    cartSubtotal,
    discountPercent,
    discountAmount,
    deliveryCharge,
    cartTotal,
    currencySymbol,
    updateQuantity,
    removeItem,
    toggleItemSelect,
    toggleSelectAll,
    applyCoupon,
    deliveryAddress,
    setDeliveryAddress,
    navigateTo,
    showToast
  } = useStore();

  const [couponInput, setCouponInput] = useState('');
  const [editingAddress, setEditingAddress] = useState(false);
  const [addressForm, setAddressForm] = useState(deliveryAddress);
  const [checkoutComplete, setCheckoutComplete] = useState(false);

  const allSelected = cartItems.length > 0 && cartItems.every((item) => item.selected);

  const handleApplyCoupon = (e) => {
    e.preventDefault();
    if (!couponInput) return;
    applyCoupon(couponInput);
  };

  const handleSaveAddress = (e) => {
    e.preventDefault();
    setDeliveryAddress(addressForm);
    setEditingAddress(false);
    showToast('Delivery address updated successfully!');
  };

  const handleCheckout = () => {
    if (selectedCartItems.length === 0) {
      showToast('Please select at least one product to checkout', 'error');
      return;
    }
    setCheckoutComplete(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
        
        {/* Cart Header Bar matching Figma Screenshot 3 */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-neutral-100 mb-8">
          <div className="flex items-center gap-3">
            <h1 className="text-xl sm:text-2xl font-bold text-neutral-800">
              My Cart
            </h1>
            <span className="bg-amber-100 text-amber-800 text-xs font-bold px-2 py-0.5 rounded-full">
              {cartItems.length}
            </span>
          </div>

          <div className="flex items-center space-x-4 text-xs font-semibold text-neutral-600">
            <button className="flex items-center gap-1 hover:text-neutral-900 border border-neutral-200 px-3 py-1.5 rounded-lg">
              <span>All Cart</span>
              <ChevronDown className="w-3.5 h-3.5" />
            </button>
            <button className="flex items-center gap-1 hover:text-neutral-900 border border-neutral-200 px-3 py-1.5 rounded-lg">
              <span>Filter</span>
              <ChevronDown className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {cartItems.length === 0 ? (
          <div className="text-center py-20 bg-neutral-50 rounded-3xl border border-neutral-100 my-8">
            <ShoppingBag className="w-16 h-16 text-neutral-300 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-neutral-800">Your cart is empty</h2>
            <p className="text-neutral-500 text-sm mt-1 max-w-sm mx-auto">
              Looks like you haven't added anything to your cart yet. Explore our latest arrivals!
            </p>
            <button
              onClick={() => navigateTo('home')}
              className="mt-6 bg-[#FA6651] text-white font-bold text-sm px-8 py-3 rounded-full hover:bg-[#e65541] transition shadow-md"
            >
              Start Shopping
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left Column: Cart Items List */}
            <div className="lg:col-span-8 space-y-6">
              
              {/* Select All Checkbox */}
              <div className="flex items-center gap-3 p-4 bg-neutral-50/80 rounded-xl border border-neutral-200/80">
                <button
                  type="button"
                  onClick={() => toggleSelectAll(!allSelected)}
                  className={`w-5 h-5 rounded-md border flex items-center justify-center transition-colors ${
                    allSelected
                      ? 'bg-[#FA6651] border-[#FA6651] text-white'
                      : 'border-neutral-300 bg-white'
                  }`}
                >
                  {allSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                </button>
                <span className="text-sm font-semibold text-neutral-700 select-none cursor-pointer" onClick={() => toggleSelectAll(!allSelected)}>
                  Chose All Product
                </span>
              </div>

              {/* Items List */}
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className={`p-4 sm:p-5 rounded-2xl border transition-all ${
                      item.selected
                        ? 'border-neutral-200 bg-white shadow-xs'
                        : 'border-neutral-100 bg-neutral-50/50 opacity-80'
                    }`}
                  >
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                      
                      {/* Checkbox + Image + Details */}
                      <div className="flex items-center gap-4">
                        <button
                          type="button"
                          onClick={() => toggleItemSelect(item.id)}
                          className={`w-5 h-5 rounded-md border shrink-0 flex items-center justify-center transition-colors ${
                            item.selected
                              ? 'bg-[#FA6651] border-[#FA6651] text-white'
                              : 'border-neutral-300 bg-white'
                          }`}
                        >
                          {item.selected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                        </button>

                        <div className="w-20 h-20 bg-neutral-100 rounded-xl overflow-hidden shrink-0 border border-neutral-100 p-1 flex items-center justify-center">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-contain"
                          />
                        </div>

                        <div className="space-y-1">
                          <h3 className="font-bold text-neutral-900 text-sm sm:text-base">
                            {item.title}
                          </h3>
                          <p className="text-xs text-neutral-500 font-medium">
                            {item.description}
                          </p>
                          <div className="flex items-center gap-3 text-xs text-neutral-400">
                            <span>SKU: {item.sku}</span>
                            <span>•</span>
                            <span>Size: {item.size}</span>
                          </div>
                        </div>
                      </div>

                      {/* Quantity Stepper, Price & Remove Button */}
                      <div className="flex items-center justify-between sm:justify-end gap-6 w-full sm:w-auto pt-3 sm:pt-0 border-t sm:border-t-0 border-neutral-100">
                        {/* Stepper */}
                        <div className="flex items-center border border-neutral-200 rounded-lg overflow-hidden bg-white shadow-2xs">
                          <button
                            onClick={() => updateQuantity(item.id, -1)}
                            className="p-1.5 hover:bg-neutral-100 text-neutral-600 transition"
                            title="Decrease quantity"
                          >
                            <Minus className="w-3.5 h-3.5" />
                          </button>
                          <span className="px-3 text-xs font-bold text-neutral-800 min-w-[28px] text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, 1)}
                            className="p-1.5 hover:bg-neutral-100 text-neutral-600 transition"
                            title="Increase quantity"
                          >
                            <Plus className="w-3.5 h-3.5" />
                          </button>
                        </div>

                        {/* Price */}
                        <div className="text-right min-w-[80px]">
                          <span className="text-base sm:text-lg font-extrabold text-neutral-900">
                            {currencySymbol} {(item.price * item.quantity).toFixed(2).replace('.', ',')}
                          </span>
                        </div>

                        {/* Remove Action */}
                        <button
                          onClick={() => removeItem(item.id)}
                          className="flex items-center gap-1 text-xs font-semibold text-[#FA6651] hover:text-[#e5533f] transition p-1"
                          title="Remove item"
                        >
                          <X className="w-3.5 h-3.5" />
                          <span className="hidden sm:inline">Remove</span>
                        </button>
                      </div>

                    </div>
                  </div>
                ))}
              </div>

            </div>

            {/* Right Column: Order Summary Card matching Screenshot 3 */}
            <div className="lg:col-span-4 bg-white rounded-3xl p-6 sm:p-7 border border-neutral-200/90 shadow-sm space-y-6">
              
              <h2 className="text-lg font-bold text-neutral-900 border-b border-neutral-100 pb-3">
                Order Summary
              </h2>

              {/* Items Breakdown */}
              <div className="space-y-2.5 text-xs sm:text-sm text-neutral-600">
                {selectedCartItems.map((item) => (
                  <div key={item.id} className="flex justify-between items-center">
                    <span>X{item.quantity} {item.title}</span>
                    <span className="font-semibold text-neutral-800">
                      {currencySymbol} {(item.price * item.quantity * 100).toFixed(0)}
                    </span>
                  </div>
                ))}

                {selectedCartItems.length > 0 && (
                  <div className="flex justify-between items-center text-neutral-500">
                    <span>X1 Delivery Charge</span>
                    <span className="font-semibold text-neutral-800">{currencySymbol} {deliveryCharge}</span>
                  </div>
                )}

                {discountAmount > 0 && (
                  <div className="flex justify-between items-center text-emerald-600 font-semibold">
                    <span>Discount ({discountPercent}%)</span>
                    <span>- {currencySymbol} {(discountAmount * 100).toFixed(0)}</span>
                  </div>
                )}
              </div>

              {/* Order Total Line */}
              <div className="pt-3 border-t border-neutral-200 flex justify-between items-baseline">
                <span className="text-base font-bold text-neutral-900">Order Total</span>
                <span className="text-xl sm:text-2xl font-black text-neutral-900">
                  {currencySymbol} {selectedCartItems.length > 0 ? Math.round(cartSubtotal * 100 - discountAmount * 100 + deliveryCharge) : 0}
                </span>
              </div>

              {/* Delivery Address box with Edit button */}
              <div className="bg-neutral-50 rounded-2xl p-4 border border-neutral-100 text-xs text-left">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-bold text-neutral-700 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#FA6651]" />
                    Delivery Address
                  </span>
                  <button
                    onClick={() => setEditingAddress(!editingAddress)}
                    className="text-xs font-bold text-[#FA6651] hover:underline"
                  >
                    {editingAddress ? 'Cancel' : 'Edit'}
                  </button>
                </div>

                {editingAddress ? (
                  <form onSubmit={handleSaveAddress} className="space-y-2 mt-2">
                    <input
                      type="text"
                      value={addressForm.name}
                      onChange={(e) => setAddressForm({ ...addressForm, name: e.target.value })}
                      placeholder="Receiver Name"
                      className="w-full p-2 bg-white rounded border border-neutral-200 text-xs"
                      required
                    />
                    <input
                      type="text"
                      value={addressForm.phone}
                      onChange={(e) => setAddressForm({ ...addressForm, phone: e.target.value })}
                      placeholder="Contact Number"
                      className="w-full p-2 bg-white rounded border border-neutral-200 text-xs"
                      required
                    />
                    <textarea
                      value={addressForm.address}
                      onChange={(e) => setAddressForm({ ...addressForm, address: e.target.value })}
                      placeholder="Delivery Address"
                      className="w-full p-2 bg-white rounded border border-neutral-200 text-xs"
                      rows="2"
                      required
                    />
                    <button
                      type="submit"
                      className="w-full bg-neutral-900 text-white font-bold py-1.5 rounded text-xs hover:bg-neutral-800"
                    >
                      Save Address
                    </button>
                  </form>
                ) : (
                  <div className="text-neutral-600 space-y-0.5 leading-relaxed">
                    <p className="font-semibold text-neutral-800">{deliveryAddress.name}</p>
                    <p>Contact Number: {deliveryAddress.phone}</p>
                    <p>{deliveryAddress.address}</p>
                  </div>
                )}
              </div>

              {/* Coupon Code Input */}
              <form onSubmit={handleApplyCoupon} className="space-y-2">
                <div className="relative">
                  <input
                    type="text"
                    value={couponInput}
                    onChange={(e) => setCouponInput(e.target.value)}
                    placeholder="Add Coupon Code Here"
                    className="w-full py-3 pl-3 pr-20 bg-neutral-50 rounded-xl text-xs border border-neutral-200 focus:outline-hidden focus:border-[#FA6651]"
                  />
                  <button
                    type="submit"
                    className="absolute right-1.5 top-1/2 -translate-y-1/2 bg-neutral-800 hover:bg-[#FA6651] text-white text-[11px] font-bold px-3 py-1.5 rounded-lg transition"
                  >
                    Apply
                  </button>
                </div>
                <p className="text-[11px] text-neutral-400">
                  Tip: Use code <span className="font-mono font-bold text-[#FA6651]">FLOURISH30</span> for 30% off!
                </p>
              </form>

              {/* Checkout Coral Button */}
              <button
                onClick={handleCheckout}
                disabled={selectedCartItems.length === 0}
                className="w-full bg-[#FA6651] hover:bg-[#e65541] disabled:bg-neutral-300 text-white font-bold py-3.5 rounded-xl shadow-md shadow-[#FA6651]/20 hover:shadow-lg transition text-center tracking-wide"
              >
                Checkout
              </button>

            </div>

          </div>
        )}

      </main>

      {/* Checkout Success Modal */}
      {checkoutComplete && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-xs z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-8 shadow-2xl text-center animate-in zoom-in-95 duration-200">
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4 text-emerald-600">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold text-neutral-900">Order Placed Successfully!</h3>
            <p className="text-sm text-neutral-500 mt-2">
              Thank you for shopping with Aura Attire, <span className="font-semibold text-neutral-800">{deliveryAddress.name}</span>. A confirmation email has been sent.
            </p>
            <div className="bg-neutral-50 rounded-2xl p-4 my-6 text-left text-xs space-y-1 border border-neutral-100">
              <p><span className="text-neutral-400">Order ID:</span> <span className="font-mono font-bold">FF-928471</span></p>
              <p><span className="text-neutral-400">Deliver To:</span> {deliveryAddress.address}</p>
              <p><span className="text-neutral-400">Estimated Delivery:</span> 2-3 Business Days</p>
            </div>
            <button
              onClick={() => {
                setCheckoutComplete(false);
                navigateTo('home');
              }}
              className="w-full bg-[#FA6651] hover:bg-[#e65541] text-white font-bold py-3.5 rounded-xl shadow-md transition"
            >
              Back to Store
            </button>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default CartPage;
