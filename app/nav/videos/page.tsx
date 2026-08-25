export default function VideosPage() {
  const videos = [
    { title: "Toyota Corolla 2024 Expert First Drive Review", duration: "18:42", views: "245K views" },
    { title: "Honda Civic RS Turbo vs Toyota Corolla Altis Grande", duration: "22:15", views: "510K views" },
    { title: "Suzuki Alto 2024 Real World Fuel Average Test", duration: "12:05", views: "180K views" },
    { title: "PakWheels Car Inspection: How We Test 200+ Points", duration: "15:30", views: "95K views" },
  ];

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 text-center sm:text-left">
          <span className="inline-block py-1 px-3 rounded-full bg-red-100 text-red-800 text-xs font-bold uppercase tracking-wider mb-2">
            PakWheels Video Reviews
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Expert Car Reviews & Road Tests
          </h1>
          <p className="text-slate-500 text-sm mt-1">Watch in-depth car reviews, drag races & automotive guides by PakWheels experts</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {videos.map((vid, idx) => (
            <div key={idx} className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col sm:flex-row hover:shadow-lg transition-all">
              <div className="sm:w-1/2 h-44 bg-slate-900 flex items-center justify-center relative text-white text-3xl">
                ▶️
                <span className="absolute bottom-2 right-2 bg-black/80 text-white text-[10px] px-2 py-0.5 rounded font-mono">
                  {vid.duration}
                </span>
              </div>
              <div className="sm:w-1/2 p-5 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-slate-900 text-base leading-snug">{vid.title}</h3>
                  <p className="text-xs text-slate-500 mt-2 font-medium">{vid.views} • Published recently</p>
                </div>
                <button className="mt-4 text-xs font-bold text-red-600 hover:text-red-800 text-left">
                  Watch Video →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}