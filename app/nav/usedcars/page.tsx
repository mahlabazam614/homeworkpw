import Image from "next/image";
import Link from "next/link";
import corolla from "@/app/components/assets/Corolla.jpg";
import alto from "@/app/components/assets/Alto.png";
import city from "@/app/components/assets/City.jpg";
import civic from "@/app/components/assets/Civic.jpg";

export default function UsedCarsPage() {
  const cars = [
    { title: "Toyota Corolla GLi 1.3 2021", price: "PKR 42,50,000", location: "Lahore", mileage: "45,000 km", fuel: "Petrol", image: corolla, slug: "corolla" },
    { title: "Suzuki Alto VXR 2022", price: "PKR 21,90,000", location: "Karachi", mileage: "28,000 km", fuel: "Petrol", image: alto, slug: "alto" },
    { title: "Honda City 1.2L CVT 2023", price: "PKR 44,00,000", location: "Islamabad", mileage: "14,000 km", fuel: "Petrol", image: city, slug: "city" },
    { title: "Honda Civic Oriel 1.5 Turbo 2022", price: "PKR 79,50,000", location: "Rawalpindi", mileage: "19,000 km", fuel: "Petrol", image: civic, slug: "civic" },
  ];

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 text-center sm:text-left">
          <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider mb-2">
            Verified Marketplace
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Used Cars for Sale in Pakistan
          </h1>
          <p className="text-slate-500 text-sm mt-1">Browse thousands of inspected used cars from verified sellers</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cars.map((car, idx) => (
            <div key={idx} className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between">
              <div>
                <div className="relative h-48 bg-slate-100 flex items-center justify-center p-4">
                  <Image src={car.image} alt={car.title} width={220} height={150} className="object-contain max-h-40" />
                  <span className="absolute top-3 left-3 bg-slate-900 text-white text-[10px] font-bold px-2.5 py-1 rounded-full">
                    {car.location}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-slate-900 text-base line-clamp-1">{car.title}</h3>
                  <div className="text-emerald-700 font-extrabold text-lg mt-1">{car.price}</div>
                  <div className="flex items-center space-x-3 text-xs text-slate-500 mt-3 pt-3 border-t border-slate-100">
                    <span>{car.mileage}</span>
                    <span>•</span>
                    <span>{car.fuel}</span>
                  </div>
                </div>
              </div>
              <div className="p-5 pt-0">
                <Link
                  href={`/car/${car.slug}`}
                  className="block w-full text-center py-2.5 rounded-xl bg-slate-900 hover:bg-blue-600 text-white font-semibold text-xs transition-colors"
                >
                  View Listing Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}