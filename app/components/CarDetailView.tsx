"use client";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { useState } from "react";

interface CarDetailProps {
  title: string;
  price: string;
  image: StaticImageData | string;
  doors: string;
  engine: string;
  condition: string;
  driven: string;
  suspension: string;
  avg: string;
  transmission: string;
  fuelType: string;
  description?: string;
}

export default function CarDetailView({
  title,
  price,
  image,
  doors,
  engine,
  condition,
  driven,
  suspension,
  avg,
  transmission,
  fuelType,
  description = "This vehicle is inspected by PakWheels Certified Technicians. Features original paint, pristine interior, and top-tier engine performance."
}: CarDetailProps) {
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    city: "Lahore",
    paymentMethod: "Bank Transfer",
  });
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setOrderPlaced(true);
  };

  return (
    <div className="min-h-screen bg-slate-100 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Breadcrumb */}
        <nav className="flex items-center text-xs text-slate-500 mb-6 space-x-2">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <span>/</span>
          <Link href="/nav/newcars" className="hover:text-blue-600">New Cars</Link>
          <span>/</span>
          <span className="text-slate-900 font-semibold">{title}</span>
        </nav>

        {/* Main Card */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden p-6 sm:p-10">
          {/* Header */}
          <div className="text-center pb-6 border-b border-slate-150">
            <span className="inline-block py-1 px-3 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-2">
              Verified & Inspected Car
            </span>
            <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              {title}
            </h1>
            <p className="text-slate-500 text-sm mt-1">2024 Model Price in Pakistan, Images, Reviews & Specs</p>
          </div>

          {/* Car Image Preview */}
          <div className="my-8 flex justify-center bg-slate-50 rounded-2xl p-6 border border-slate-200/80">
            <div className="relative w-full max-w-md h-64 sm:h-72 flex items-center justify-center">
              <Image 
                src={image} 
                alt={title} 
                width={500} 
                height={320} 
                className="object-contain max-h-72 hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-8">
            <button 
              onClick={() => setActiveModal("Book a Test Drive")}
              className="py-3 px-4 rounded-xl bg-blue-900 hover:bg-blue-800 text-white font-bold text-xs sm:text-sm shadow-md transition-all text-center"
            >
              Book a Test Drive
            </button>
            <button 
              onClick={() => setActiveModal("Request Bank Finance")}
              className="py-3 px-4 rounded-xl bg-white text-blue-900 font-bold text-xs sm:text-sm border-2 border-blue-900 hover:bg-blue-50 transition-all text-center"
            >
              Request Bank Finance
            </button>
            <button 
              onClick={() => setActiveModal("Visit Place")}
              className="py-3 px-4 rounded-xl bg-white text-blue-900 font-bold text-xs sm:text-sm border-2 border-blue-900 hover:bg-blue-50 transition-all text-center"
            >
              Visit Showroom
            </button>
            <button 
              onClick={() => setActiveModal("Car Inspection")}
              className="py-3 px-4 rounded-xl bg-white text-blue-900 font-bold text-xs sm:text-sm border-2 border-blue-900 hover:bg-blue-50 transition-all text-center"
            >
              Car Inspection
            </button>
          </div>

          {/* Description & Specifications Header */}
          <div className="text-center my-8">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              Vehicle Specifications
            </h2>
            <p className="text-xs text-slate-500 mt-1 max-w-2xl mx-auto">
              {description}
            </p>
          </div>

          {/* Specs Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 bg-slate-50 rounded-2xl border border-slate-200">
            <div className="p-3 bg-white rounded-xl border border-slate-200 text-center">
              <span className="block text-xs font-semibold text-slate-400 uppercase">Doors</span>
              <span className="text-sm sm:text-base font-bold text-slate-900">{doors}</span>
            </div>
            <div className="p-3 bg-white rounded-xl border border-slate-200 text-center">
              <span className="block text-xs font-semibold text-slate-400 uppercase">Engine</span>
              <span className="text-sm sm:text-base font-bold text-slate-900">{engine}</span>
            </div>
            <div className="p-3 bg-white rounded-xl border border-slate-200 text-center">
              <span className="block text-xs font-semibold text-slate-400 uppercase">Condition</span>
              <span className="text-sm sm:text-base font-bold text-slate-900">{condition}</span>
            </div>
            <div className="p-3 bg-white rounded-xl border border-slate-200 text-center">
              <span className="block text-xs font-semibold text-slate-400 uppercase">Driven</span>
              <span className="text-sm sm:text-base font-bold text-slate-900">{driven}</span>
            </div>
            <div className="p-3 bg-white rounded-xl border border-slate-200 text-center">
              <span className="block text-xs font-semibold text-slate-400 uppercase">Suspension</span>
              <span className="text-sm sm:text-base font-bold text-slate-900">{suspension}</span>
            </div>
            <div className="p-3 bg-white rounded-xl border border-slate-200 text-center">
              <span className="block text-xs font-semibold text-slate-400 uppercase">Average</span>
              <span className="text-sm sm:text-base font-bold text-slate-900">{avg}</span>
            </div>
            <div className="p-3 bg-white rounded-xl border border-slate-200 text-center">
              <span className="block text-xs font-semibold text-slate-400 uppercase">Transmission</span>
              <span className="text-sm sm:text-base font-bold text-slate-900">{transmission}</span>
            </div>
            <div className="p-3 bg-white rounded-xl border border-slate-200 text-center">
              <span className="block text-xs font-semibold text-slate-400 uppercase">Fuel Type</span>
              <span className="text-sm sm:text-base font-bold text-slate-900">{fuelType}</span>
            </div>
          </div>

          {/* Price & Checkout Call to Action */}
          <div className="mt-10 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <span className="text-xs font-semibold text-slate-400 uppercase">Total Car Price</span>
              <div className="text-3xl font-black text-blue-900">
                {price}
              </div>
            </div>
            <button
              onClick={() => setActiveModal("Make Payment")}
              className="w-full sm:w-auto py-4 px-10 rounded-2xl bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-600 text-white font-extrabold text-base shadow-lg shadow-red-600/30 transition-all transform hover:-translate-y-0.5"
            >
              Make Payment / Reserve Car
            </button>
          </div>
        </div>
      </div>

      {/* Modal Drawer */}
      {activeModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative animate-in fade-in zoom-in-95 duration-200">
            <button 
              onClick={() => { setActiveModal(null); setOrderPlaced(false); }}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-100"
            >
              ✕
            </button>

            {orderPlaced ? (
              <div className="text-center py-6">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                  ✓
                </div>
                <h3 className="text-2xl font-extrabold text-slate-900">Request Confirmed!</h3>
                <p className="text-sm text-slate-600 mt-2">
                  Thank you, <strong>{formData.name || "Valued Customer"}</strong>! Our PakWheels representative will contact you at <strong>{formData.phone || "your phone number"}</strong> within 30 minutes to confirm your request for {title}.
                </p>
                <button
                  onClick={() => { setActiveModal(null); setOrderPlaced(false); }}
                  className="mt-6 w-full py-3 rounded-xl bg-slate-900 text-white font-bold text-sm hover:bg-slate-800"
                >
                  Done
                </button>
              </div>
            ) : (
              <div>
                <h3 className="text-xl font-extrabold text-slate-900 mb-1">{activeModal}</h3>
                <p className="text-xs text-slate-500 mb-6">Enter your contact info for {title} ({price})</p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ali Ahmed"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Phone Number</label>
                    <input
                      type="tel"
                      required
                      placeholder="0300 1234567"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">City</label>
                    <select
                      value={formData.city}
                      onChange={(e) => setFormData({...formData, city: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                    >
                      <option value="Lahore">Lahore</option>
                      <option value="Karachi">Karachi</option>
                      <option value="Islamabad">Islamabad</option>
                      <option value="Rawalpindi">Rawalpindi</option>
                      <option value="Peshawar">Peshawar</option>
                    </select>
                  </div>

                  {activeModal === "Make Payment" && (
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Payment Method</label>
                      <select
                        value={formData.paymentMethod}
                        onChange={(e) => setFormData({...formData, paymentMethod: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                      >
                        <option value="Bank Transfer">Bank Transfer / PayOrder</option>
                        <option value="Easypaisa">Easypaisa / JazzCash</option>
                        <option value="Cash">Cash at Showroom</option>
                      </select>
                    </div>
                  )}

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-sm shadow-md transition-all mt-4"
                  >
                    Submit Booking Request
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
