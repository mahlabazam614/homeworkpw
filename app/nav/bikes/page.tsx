import Link from "next/link";

export default function BikesPage() {
  const bikes = [
    { title: "Honda CG 125 2024", price: "PKR 234,900", engine: "125 cc 4-Stroke", mileage: "45 km/L" },
    { title: "Yamaha YBR 125 2024", price: "PKR 466,000", engine: "125 cc OHC", mileage: "40 km/L" },
    { title: "Suzuki GS 150 2024", price: "PKR 382,000", engine: "150 cc 5-Speed", mileage: "38 km/L" },
    { title: "Honda CD 70 2024", price: "PKR 157,900", engine: "70 cc Econosuite", mileage: "60 km/L" },
  ];

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 text-center sm:text-left">
          <span className="inline-block py-1 px-3 rounded-full bg-red-100 text-red-800 text-xs font-bold uppercase tracking-wider mb-2">
            PakWheels Bikes Portal
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            New & Used Bikes in Pakistan
          </h1>
          <p className="text-slate-500 text-sm mt-1">Explore top motorcycle brands: Honda, Yamaha, Suzuki & Heavy Bikes</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {bikes.map((bike, idx) => (
            <div key={idx} className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 flex flex-col justify-between hover:shadow-lg transition-all">
              <div>
                <div className="h-36 bg-slate-100 rounded-xl flex items-center justify-center text-4xl mb-4">
                  🏍️
                </div>
                <h3 className="font-bold text-slate-900 text-lg">{bike.title}</h3>
                <div className="text-emerald-700 font-black text-lg mt-1">{bike.price}</div>
                <div className="text-xs text-slate-500 mt-2 space-y-1">
                  <div>Engine: {bike.engine}</div>
                  <div>Average: {bike.mileage}</div>
                </div>
              </div>
              <Link
                href="/nav/usedcars"
                className="mt-6 block w-full text-center py-2.5 rounded-xl bg-slate-900 hover:bg-red-600 text-white font-semibold text-xs transition-colors"
              >
                View Bike Details
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}