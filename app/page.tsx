"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import check from "./components/assets/check.png";
import corolla from "./components/assets/Corolla.jpg";
import alto from "./components/assets/Alto.png";
import city from "./components/assets/City.jpg";
import civic from "./components/assets/Civic.jpg";



export default function Home() {
  const [activeTab, setActiveTab] = useState("Popular");
  const [showAdvancedFilter, setShowAdvancedFilter] = useState(false);
  const [searchMake, setSearchMake] = useState("");
  const [searchCity, setSearchCity] = useState("All Cities");
  const [searchPrice, setSearchPrice] = useState("Price Range");

  const carListings = [
    {
      id: "corolla",
      name: "Toyota Corolla",
      price: "PKR 59.7 - 75.5 lacs",
      image: corolla,
      rating: 3.5,
      reviews: "623 Reviews",
      slug: "corolla",
      tag: "Popular",
      type: "Sedan"
    },
    {
      id: "alto",
      name: "Suzuki Alto",
      price: "PKR 23.3 - 30.5 lacs",
      image: alto,
      rating: 4.0,
      reviews: "200 Reviews",
      slug: "alto",
      tag: "Popular",
      type: "Hatchback"
    },
    {
      id: "city",
      name: "Honda City",
      price: "PKR 46.5 - 58.5 lacs",
      image: city,
      rating: 3.5,
      reviews: "456 Reviews",
      slug: "city",
      tag: "Newly Launched",
      type: "Sedan"
    },
    {
      id: "civic",
      name: "Honda Civic",
      price: "PKR 86.6 - 99.0 lacs",
      image: civic,
      rating: 4.5,
      reviews: "361 Reviews",
      slug: "civic",
      tag: "Popular",
      type: "Sedan"
    }
  ];

  const filteredCars = carListings.filter(car => {
    if (activeTab === "Popular") return true;
    if (activeTab === "Upcoming") return car.tag === "Upcoming" || car.slug === "civic" || car.slug === "city";
    if (activeTab === "Newly Launched") return car.tag === "Newly Launched" || car.slug === "corolla";
    return true;
  });

  return (
    <main className="min-h-screen bg-slate-50">
      {/* Hero Banner */}
      <section className="relative bg-gradient-to-b from-slate-950 via-slate-900 to-blue-950 text-white pt-16 pb-24 overflow-hidden border-b border-slate-800">
        {/* Background Decorative Glow */}
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none"></div>
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-red-600/20 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <span className="inline-block py-1 px-3 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 text-xs font-semibold uppercase tracking-wider mb-4">
            Pakistan&apos;s #1 Car Portal
          </span>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-3 drop-shadow-sm">
            Find Used Cars in Pakistan
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto font-normal mb-8">
            With thousands of cars, we have just the right one for you
          </p>

          {/* Search Box */}
          <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-md p-3 sm:p-4 rounded-2xl border border-white/15 shadow-2xl">
            <form onSubmit={(e) => e.preventDefault()} className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-center">
              {/* Make / Model Input */}
              <div className="sm:col-span-4 relative">
                <input
                  type="text"
                  placeholder="Car Make or Model (e.g. Corolla)"
                  value={searchMake}
                  onChange={(e) => setSearchMake(e.target.value)}
                  className="w-full px-4 py-3.5 rounded-xl bg-white text-slate-900 placeholder-slate-400 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-red-500 shadow-inner"
                />
              </div>

              {/* City Select */}
              <div className="sm:col-span-3">
                <select
                  value={searchCity}
                  onChange={(e) => setSearchCity(e.target.value)}
                  className="w-full px-3 py-3.5 rounded-xl bg-white text-slate-900 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-red-500 shadow-inner cursor-pointer"
                >
                  <option value="All Cities">All Cities</option>
                  <option value="Lahore">Lahore</option>
                  <option value="Karachi">Karachi</option>
                  <option value="Islamabad">Islamabad</option>
                  <option value="Rawalpindi">Rawalpindi</option>
                  <option value="Peshawar">Peshawar</option>
                </select>
              </div>

              {/* Price Range Select */}
              <div className="sm:col-span-3">
                <select
                  value={searchPrice}
                  onChange={(e) => setSearchPrice(e.target.value)}
                  className="w-full px-3 py-3.5 rounded-xl bg-white text-slate-900 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-red-500 shadow-inner cursor-pointer"
                >
                  <option value="Price Range">Price Range (All)</option>
                  <option value="10-25">10 - 25 Lacs</option>
                  <option value="25-50">25 - 50 Lacs</option>
                  <option value="50-80">50 - 80 Lacs</option>
                  <option value="80+">80+ Lacs</option>
                </select>
              </div>

              {/* Search Button */}
              <div className="sm:col-span-2">
                <Link
                  href="/nav/usedcars"
                  className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-600 text-white font-bold text-sm flex items-center justify-center space-x-2 transition-all shadow-md hover:shadow-red-600/30"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                  </svg>
                  <span>Search</span>
                </Link>
              </div>
            </form>
          </div>

          {/* Advanced Filter Toggle */}
          <div className="mt-5">
            <button
              onClick={() => setShowAdvancedFilter(!showAdvancedFilter)}
              className="inline-flex items-center text-xs font-semibold text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 px-4 py-2 rounded-full transition-colors"
            >
              <span>{showAdvancedFilter ? "Hide Filters" : "Advanced Filter"}</span>
              <svg className={`w-3.5 h-3.5 ml-1.5 transform transition-transform ${showAdvancedFilter ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>

          {/* Advanced Filter Drawer */}
          {showAdvancedFilter && (
            <div className="mt-4 p-5 bg-slate-900/90 backdrop-blur-md rounded-2xl border border-slate-800 text-left grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto animate-in fade-in slide-in-from-top-2">
              <div>
                <label className="block text-xs font-semibold text-slate-400 mb-1">Body Type</label>
                <select className="w-full bg-slate-800 text-white text-xs rounded-lg p-2.5 border border-slate-700">
                  <option>Any Body Type</option>
                  <option>Sedan</option>
                  <option>Hatchback</option>
                  <option>SUV</option>
                  <option>Crossover</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-400 mb-1">Transmission</label>
                <select className="w-full bg-slate-800 text-white text-xs rounded-lg p-2.5 border border-slate-700">
                  <option>Automatic & Manual</option>
                  <option>Automatic</option>
                  <option>Manual</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-400 mb-1">Fuel Type</label>
                <select className="w-full bg-slate-800 text-white text-xs rounded-lg p-2.5 border border-slate-700">
                  <option>Petrol & Hybrid</option>
                  <option>Petrol</option>
                  <option>Hybrid</option>
                  <option>CNG</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-400 mb-1">Registration City</label>
                <select className="w-full bg-slate-800 text-white text-xs rounded-lg p-2.5 border border-slate-700">
                  <option>Unregistered / Any</option>
                  <option>Punjab</option>
                  <option>Sindh</option>
                  <option>Islamabad</option>
                </select>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Sell Your Car Section */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Sell Your Car on PakWheels and Get the Best Price
            </h2>
            <p className="text-slate-500 text-sm mt-2">
              Choose the selling option that works best for you
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-11 gap-6 items-center">
            {/* Card 1: Post your Ad */}
            <div className="lg:col-span-5 bg-gradient-to-br from-slate-50 to-red-50/30 p-8 rounded-3xl border border-red-100 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-full relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/5 rounded-full blur-2xl group-hover:scale-150 transition-transform pointer-events-none"></div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center">
                  <span className="h-3 w-3 rounded-full bg-red-500 mr-2.5"></span>
                  Post your Ad on PakWheels
                </h3>

                <ul className="space-y-4 mb-8 text-sm text-slate-700">
                  <li className="flex items-start">
                    <div className="mt-0.5 mr-3 shrink-0">
                      <Image src={check} alt="check" width={18} height={18} className="object-contain" />
                    </div>
                    <span className="font-medium">Post your Ad for Free in 3 Easy Steps</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mt-0.5 mr-3 shrink-0">
                      <Image src={check} alt="check" width={18} height={18} className="object-contain" />
                    </div>
                    <span className="font-medium">Get Genuine offers from Verified Buyers</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mt-0.5 mr-3 shrink-0">
                      <Image src={check} alt="check" width={18} height={18} className="object-contain" />
                    </div>
                    <span className="font-medium">Sell your car Fast at the Best Price</span>
                  </li>
                </ul>
              </div>

              <Link
                href="/nav/usedcars"
                className="w-full text-center py-3.5 px-6 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-sm shadow-md hover:shadow-red-600/30 transition-all duration-200"
              >
                Post Your Ad
              </Link>
            </div>

            {/* OR Divider */}
            <div className="lg:col-span-1 flex items-center justify-center my-4 lg:my-0">
              <div className="relative flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-slate-900 text-white font-bold text-sm flex items-center justify-center shadow-lg border-4 border-white">
                  OR
                </div>
              </div>
            </div>

            {/* Card 2: Sell It For Me */}
            <div className="lg:col-span-5 bg-gradient-to-br from-slate-50 to-blue-50/30 p-8 rounded-3xl border border-blue-100 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-full relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl group-hover:scale-150 transition-transform pointer-events-none"></div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center">
                  <span className="h-3 w-3 rounded-full bg-blue-600 mr-2.5"></span>
                  Try PakWheels Sell It For Me
                </h3>

                <ul className="space-y-4 mb-8 text-sm text-slate-700">
                  <li className="flex items-start">
                    <div className="mt-0.5 mr-3 shrink-0">
                      <Image src={check} alt="check" width={18} height={18} className="object-contain" />
                    </div>
                    <span className="font-medium">Dedicated Sales Expert to Sell your Car</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mt-0.5 mr-3 shrink-0">
                      <Image src={check} alt="check" width={18} height={18} className="object-contain" />
                    </div>
                    <span className="font-medium">We Bargain for you and share the Best Offer</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mt-0.5 mr-3 shrink-0">
                      <Image src={check} alt="check" width={18} height={18} className="object-contain" />
                    </div>
                    <span className="font-medium">We ensure Safe & Secure Transaction</span>
                  </li>
                </ul>
              </div>

              <Link
                href="/nav/usedcars"
                className="w-full text-center py-3.5 px-6 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-md hover:shadow-blue-600/30 transition-all duration-200"
              >
                Register Your Car
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured New Cars Section */}
      <section className="py-16 bg-slate-100/70 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Featured New Cars
              </h2>
              <p className="text-slate-500 text-sm mt-1">Explore trending vehicles in Pakistan</p>
            </div>
            <Link
              href="/nav/newcars"
              className="text-blue-600 hover:text-blue-800 text-sm font-bold flex items-center group"
            >
              <span>View All New Cars</span>
              <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {/* Filter Tabs */}
          <div className="flex space-x-3 mb-8 border-b border-slate-200 pb-3">
            {["Popular", "Upcoming", "Newly Launched"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                  activeTab === tab
                    ? "bg-slate-900 text-white shadow-md"
                    : "bg-white text-slate-600 hover:bg-slate-200 hover:text-slate-900 border border-slate-200"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Car Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredCars.map((car) => (
              <Link href={`/car/${car.slug}`} key={car.id} className="group">
                <div className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 card-hover-effect flex flex-col justify-between h-full">
                  <div>
                    {/* Car Image Container */}
                    <div className="relative h-48 bg-slate-100 overflow-hidden flex items-center justify-center p-4">
                      <span className="absolute top-3 left-3 bg-red-600 text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full z-10 shadow-sm">
                        {car.tag}
                      </span>
                      <Image
                        src={car.image}
                        alt={car.name}
                        width={240}
                        height={160}
                        className="object-contain max-h-40 group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    {/* Content */}
                    <div className="p-5 text-center">
                      <h3 className="font-bold text-slate-900 text-lg group-hover:text-blue-600 transition-colors">
                        {car.name}
                      </h3>
                      <p className="text-emerald-700 font-extrabold text-sm mt-1.5">
                        {car.price}
                      </p>

                      {/* Rating & Reviews */}
                      <div className="flex items-center justify-center space-x-1.5 mt-3 text-xs">
                        <div className="flex text-amber-500">
                          {"★".repeat(Math.floor(car.rating))}
                          {car.rating % 1 !== 0 && "★"}
                          {"☆".repeat(5 - Math.ceil(car.rating))}
                        </div>
                        <span className="text-slate-500 font-medium ml-1">{car.reviews}</span>
                      </div>
                    </div>
                  </div>

                  {/* View Details Footer */}
                  <div className="px-5 pb-5 pt-0">
                    <button className="w-full py-2.5 px-4 rounded-xl bg-slate-100 group-hover:bg-blue-600 text-slate-700 group-hover:text-white font-semibold text-xs transition-colors duration-200">
                      View Details
                    </button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Stats Section */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-slate-800">
            <div className="pt-4 md:pt-0">
              <div className="text-3xl sm:text-4xl font-extrabold text-blue-400 mb-1">10 Million+</div>
              <div className="text-xs sm:text-sm text-slate-400 font-medium">Monthly Visitors</div>
            </div>
            <div className="pt-4 md:pt-0">
              <div className="text-3xl sm:text-4xl font-extrabold text-red-500 mb-1">500,000+</div>
              <div className="text-xs sm:text-sm text-slate-400 font-medium">Cars Listed Every Month</div>
            </div>
            <div className="pt-4 md:pt-0">
              <div className="text-3xl sm:text-4xl font-extrabold text-emerald-400 mb-1">#1</div>
              <div className="text-xs sm:text-sm text-slate-400 font-medium">Automotive Portal in Pakistan</div>
            </div>
            <div className="pt-4 md:pt-0">
              <div className="text-3xl sm:text-4xl font-extrabold text-amber-400 mb-1">24/7</div>
              <div className="text-xs sm:text-sm text-slate-400 font-medium">Verified Car Inspection & Support</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
