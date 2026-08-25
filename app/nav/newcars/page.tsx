import Image from "next/image";
import Link from "next/link";
import corolla from "@/app/components/assets/Corolla.jpg";
import alto from "@/app/components/assets/Alto.png";
import city from "@/app/components/assets/City.jpg";
import civic from "@/app/components/assets/Civic.jpg";

export default function NewCarsPage() {
  const cars = [
    { title: "Toyota Corolla 2024", price: "PKR 59.7 - 75.5 lacs", engine: "1.8L / 1.6L", warranty: "3 Years Warranty", image: corolla, slug: "corolla" },
    { title: "Suzuki Alto 2024", price: "PKR 23.3 - 30.5 lacs", engine: "660cc VXR/VXL", warranty: "3 Years Warranty", image: alto, slug: "alto" },
    { title: "Honda City 2024", price: "PKR 46.5 - 58.5 lacs", engine: "1.2L / 1.5L CVT", warranty: "3 Years Warranty", image: city, slug: "city" },
    { title: "Honda Civic 2024", price: "PKR 86.6 - 99.0 lacs", engine: "1.5L Turbo RS", warranty: "3 Years Warranty", image: civic, slug: "civic" },
  ];

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 text-center sm:text-left">
          <span className="inline-block py-1 px-3 rounded-full bg-red-100 text-red-800 text-xs font-bold uppercase tracking-wider mb-2">
            2024 New Car Models
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            New Cars Prices & Specifications in Pakistan
          </h1>
          <p className="text-slate-500 text-sm mt-1">Compare official ex-factory prices, specs & features of new cars</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cars.map((car, idx) => (
            <div key={idx} className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between">
              <div>
                <div className="relative h-48 bg-slate-100 flex items-center justify-center p-4">
                  <Image src={car.image} alt={car.title} width={220} height={150} className="object-contain max-h-40" />
                  <span className="absolute top-3 right-3 bg-emerald-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-full">
                    {car.warranty}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-slate-900 text-base">{car.title}</h3>
                  <div className="text-emerald-700 font-extrabold text-lg mt-1">{car.price}</div>
                  <div className="text-xs text-slate-500 mt-2 font-medium">Engine: {car.engine}</div>
                </div>
              </div>
              <div className="p-5 pt-0">
                <Link
                  href={`/car/${car.slug}`}
                  className="block w-full text-center py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-semibold text-xs transition-colors shadow-sm"
                >
                  View Official Specs
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}