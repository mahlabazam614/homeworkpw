import Link from "next/link";

export default function MorePage() {
  const services = [
    { title: "PakWheels Car Inspection", desc: "Get a 200+ point technical evaluation before buying any car", icon: "🔍" },
    { title: "PakWheels Car Insurance", desc: "Compare instant insurance quotes from top insurance providers in Pakistan", icon: "🛡️" },
    { title: "PakWheels Car Finance / Loan", desc: "Calculate monthly installment & apply for car financing online", icon: "🏦" },
    { title: "PakWheels Car Registration & Transfer", desc: "Hassle-free vehicle registration, bio-metric & ownership transfer services", icon: "📄" },
  ];

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 text-center sm:text-left">
          <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider mb-2">
            PakWheels Value Added Services
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            More Services & Solutions
          </h1>
          <p className="text-slate-500 text-sm mt-1">Inspection, Insurance, Loan Calculators & Vehicle Verification</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((srv, idx) => (
            <div key={idx} className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 flex items-start space-x-5 hover:shadow-lg transition-all">
              <div className="w-14 h-14 bg-slate-100 rounded-2xl flex items-center justify-center text-3xl shrink-0">
                {srv.icon}
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-slate-900 text-lg">{srv.title}</h3>
                <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">{srv.desc}</p>
                <Link
                  href="/car/corolla"
                  className="inline-block mt-4 text-xs font-bold text-blue-600 hover:text-blue-800"
                >
                  Learn More & Book Service →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}