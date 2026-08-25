import Link from "next/link";

export default function AutoStorePage() {
  const products = [
    { title: "PakWheels Car Care Wash Kit", price: "PKR 3,499", rating: "4.8 ★", icon: "🧽" },
    { title: "High-Pressure Car Washer Pump", price: "PKR 8,999", rating: "4.7 ★", icon: "🚿" },
    { title: "7D Waterproof Floor Mats for Corolla", price: "PKR 5,800", rating: "4.9 ★", icon: "🚘" },
    { title: "Ultra Bright LED Headlight Bulbs", price: "PKR 4,200", rating: "4.6 ★", icon: "💡" },
  ];

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 text-center sm:text-left">
          <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider mb-2">
            Auto Accessories & Parts
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            PakWheels Official Auto Store
          </h1>
          <p className="text-slate-500 text-sm mt-1">100% Genuine Car Accessories, Car Care Products & Spare Parts</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((item, idx) => (
            <div key={idx} className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 flex flex-col justify-between hover:shadow-lg transition-all">
              <div>
                <div className="h-36 bg-slate-100 rounded-xl flex items-center justify-center text-4xl mb-4">
                  {item.icon}
                </div>
                <h3 className="font-bold text-slate-900 text-base line-clamp-2">{item.title}</h3>
                <div className="text-emerald-700 font-extrabold text-lg mt-1.5">{item.price}</div>
                <div className="text-xs text-amber-600 font-semibold mt-1">{item.rating} Customer Rating</div>
              </div>
              <Link
                href="/nav/usedcars"
                className="mt-6 block w-full text-center py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs transition-colors shadow-sm"
              >
                Buy Now
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}