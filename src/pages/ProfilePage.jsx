import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useStore } from '../context/StoreContext';
import { User, MapPin, CreditCard, RotateCcw, XCircle, Heart, CheckCircle2 } from 'lucide-react';

const ProfilePage = () => {
  const { userProfile, setUserProfile, showToast, navigateTo } = useStore();

  const [activeTab, setActiveTab] = useState('profile');
  const [formData, setFormData] = useState({ ...userProfile });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSaveChanges = (e) => {
    e.preventDefault();
    setUserProfile(formData);
    showToast('Profile information saved successfully!');
  };

  const handleCancel = () => {
    setFormData({ ...userProfile });
    showToast('Changes reverted', 'info');
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full">
        
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-xs text-neutral-400 mb-8">
          <button onClick={() => navigateTo('home')} className="hover:text-neutral-700">Home</button>
          <span>/</span>
          <span className="text-neutral-800 font-semibold">My Account</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Sidebar Menu matching Figma Screenshot 4 */}
          <div className="md:col-span-4 lg:col-span-3 space-y-6 text-left">
            
            {/* Manage My Account */}
            <div>
              <h3 className="text-sm font-bold text-neutral-900 mb-3 uppercase tracking-wider">
                Manage My Account
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm">
                <li>
                  <button
                    onClick={() => setActiveTab('profile')}
                    className={`text-left w-full py-1 transition-colors ${
                      activeTab === 'profile'
                        ? 'text-[#FA6651] font-bold'
                        : 'text-neutral-500 hover:text-neutral-900'
                    }`}
                  >
                    My Profile
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveTab('address')}
                    className={`text-left w-full py-1 transition-colors ${
                      activeTab === 'address'
                        ? 'text-[#FA6651] font-bold'
                        : 'text-neutral-500 hover:text-neutral-900'
                    }`}
                  >
                    Address Book
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveTab('payment')}
                    className={`text-left w-full py-1 transition-colors ${
                      activeTab === 'payment'
                        ? 'text-[#FA6651] font-bold'
                        : 'text-neutral-500 hover:text-neutral-900'
                    }`}
                  >
                    My Payment Options
                  </button>
                </li>
              </ul>
            </div>

            {/* My Orders */}
            <div className="pt-2">
              <h3 className="text-sm font-bold text-neutral-900 mb-3 uppercase tracking-wider">
                My Orders
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm">
                <li>
                  <button
                    onClick={() => setActiveTab('returns')}
                    className={`text-left w-full py-1 transition-colors ${
                      activeTab === 'returns'
                        ? 'text-[#FA6651] font-bold'
                        : 'text-neutral-500 hover:text-neutral-900'
                    }`}
                  >
                    My Returns
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveTab('cancellations')}
                    className={`text-left w-full py-1 transition-colors ${
                      activeTab === 'cancellations'
                        ? 'text-[#FA6651] font-bold'
                        : 'text-neutral-500 hover:text-neutral-900'
                    }`}
                  >
                    My Cancellations
                  </button>
                </li>
              </ul>
            </div>

            {/* My Wishlist */}
            <div className="pt-2">
              <h3 className="text-sm font-bold text-neutral-900 mb-3 uppercase tracking-wider">
                <button
                  onClick={() => setActiveTab('wishlist')}
                  className={`transition-colors ${
                    activeTab === 'wishlist'
                      ? 'text-[#FA6651] font-bold'
                      : 'text-neutral-900 hover:text-[#FA6651]'
                  }`}
                >
                  My Wishlist
                </button>
              </h3>
            </div>

          </div>

          {/* Main Content Area: Edit Your Profile Card */}
          <div className="md:col-span-8 lg:col-span-9 bg-white rounded-3xl p-6 sm:p-10 border border-neutral-200/80 shadow-xs text-left">
            
            {activeTab === 'profile' && (
              <form onSubmit={handleSaveChanges} className="space-y-6">
                
                {/* Heading in coral red */}
                <h2 className="text-xl sm:text-2xl font-bold text-[#FA6651]">
                  Edit Your Profile
                </h2>

                {/* 2-Column Info Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-neutral-700">
                      First Name
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="First Name"
                      className="w-full px-4 py-3 bg-neutral-50 rounded-xl text-sm border border-neutral-200 focus:outline-hidden focus:border-[#FA6651] focus:bg-white transition"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-neutral-700">
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder="Last Name"
                      className="w-full px-4 py-3 bg-neutral-50 rounded-xl text-sm border border-neutral-200 focus:outline-hidden focus:border-[#FA6651] focus:bg-white transition"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-neutral-700">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Email"
                      className="w-full px-4 py-3 bg-neutral-50 rounded-xl text-sm border border-neutral-200 focus:outline-hidden focus:border-[#FA6651] focus:bg-white transition"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-neutral-700">
                      Address
                    </label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      placeholder="Address"
                      className="w-full px-4 py-3 bg-neutral-50 rounded-xl text-sm border border-neutral-200 focus:outline-hidden focus:border-[#FA6651] focus:bg-white transition"
                    />
                  </div>
                </div>

                {/* Password Changes Section */}
                <div className="space-y-4 pt-4 border-t border-neutral-100">
                  <h3 className="text-xs font-bold text-neutral-800 uppercase tracking-wider">
                    Password Changes
                  </h3>

                  <div className="space-y-3">
                    <input
                      type="password"
                      name="currentPassword"
                      value={formData.currentPassword}
                      onChange={handleInputChange}
                      placeholder="Current Password"
                      className="w-full px-4 py-3 bg-neutral-50 rounded-xl text-sm border border-neutral-200 focus:outline-hidden focus:border-[#FA6651] focus:bg-white transition"
                    />

                    <input
                      type="password"
                      name="newPassword"
                      value={formData.newPassword}
                      onChange={handleInputChange}
                      placeholder="New Password"
                      className="w-full px-4 py-3 bg-neutral-50 rounded-xl text-sm border border-neutral-200 focus:outline-hidden focus:border-[#FA6651] focus:bg-white transition"
                    />

                    <input
                      type="password"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      placeholder="Confirm New Password"
                      className="w-full px-4 py-3 bg-neutral-50 rounded-xl text-sm border border-neutral-200 focus:outline-hidden focus:border-[#FA6651] focus:bg-white transition"
                    />
                  </div>
                </div>

                {/* Action Buttons: Cancel & Save Changes */}
                <div className="flex items-center justify-end gap-5 pt-4">
                  <button
                    type="button"
                    onClick={handleCancel}
                    className="text-xs sm:text-sm font-semibold text-neutral-600 hover:text-neutral-900 transition"
                  >
                    Cancel
                  </button>

                  <button
                    type="submit"
                    className="bg-[#FA6651] hover:bg-[#e65541] text-white text-xs sm:text-sm font-bold px-8 py-3.5 rounded-xl shadow-md shadow-[#FA6651]/20 hover:shadow-lg transition"
                  >
                    Save Changes
                  </button>
                </div>

              </form>
            )}

            {/* Other sidebar tab content views */}
            {activeTab === 'address' && (
              <div className="space-y-4">
                <h2 className="text-xl font-bold text-[#FA6651]">Address Book</h2>
                <div className="p-4 bg-neutral-50 rounded-2xl border border-neutral-100 text-sm">
                  <p className="font-bold text-neutral-800">Default Shipping Address</p>
                  <p className="text-neutral-600 mt-1">{formData.address}</p>
                </div>
              </div>
            )}

            {activeTab === 'payment' && (
              <div className="space-y-4">
                <h2 className="text-xl font-bold text-[#FA6651]">Payment Options</h2>
                <div className="p-4 bg-neutral-50 rounded-2xl border border-neutral-100 text-sm flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <CreditCard className="w-5 h-5 text-neutral-600" />
                    <span>•••• •••• •••• 4242</span>
                  </div>
                  <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full font-bold">Active</span>
                </div>
              </div>
            )}

            {activeTab === 'returns' && (
              <div className="space-y-4">
                <h2 className="text-xl font-bold text-[#FA6651]">My Returns</h2>
                <p className="text-neutral-500 text-sm">No return requests found.</p>
              </div>
            )}

            {activeTab === 'cancellations' && (
              <div className="space-y-4">
                <h2 className="text-xl font-bold text-[#FA6651]">My Cancellations</h2>
                <p className="text-neutral-500 text-sm">No cancelled orders found.</p>
              </div>
            )}

            {activeTab === 'wishlist' && (
              <div className="space-y-4">
                <h2 className="text-xl font-bold text-[#FA6651]">My Wishlist</h2>
                <p className="text-neutral-500 text-sm">You have saved 3 items in your wishlist.</p>
                <button 
                  onClick={() => navigateTo('home')}
                  className="bg-[#FA6651] text-white text-xs font-bold px-4 py-2 rounded-xl"
                >
                  Explore More Items
                </button>
              </div>
            )}

          </div>

        </div>

      </main>

      <Footer />
    </div>
  );
};

export default ProfilePage;
