export default function ForumsPage() {
  const discussions = [
    { title: "Which engine oil is best for Toyota Corolla 1.6 Altis in summer?", replies: 142, views: "12.4K", category: "Engine & Mechanical" },
    { title: "Suzuki Alto 2024 AGS Transmission lag solution & maintenance tips", replies: 89, views: "8.1K", category: "Troubleshooting" },
    { title: "Is Honda Civic RS Turbo worth PKR 9.9 Million in 2024?", replies: 230, views: "24.5K", category: "Car Comparison" },
    { title: "Best car detailers & ceramic coating studios in Lahore / Islamabad", replies: 67, views: "5.2K", category: "Car Care & Detailing" },
  ];

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 text-center sm:text-left">
          <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider mb-2">
            Automotive Community
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            PakWheels Forums & Discussions
          </h1>
          <p className="text-slate-500 text-sm mt-1">Connect with 500,000+ car enthusiasts, ask advice & share tips</p>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden divide-y divide-slate-100">
          {discussions.map((item, idx) => (
            <div key={idx} className="p-6 hover:bg-slate-50 transition-colors flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <span className="inline-block px-2.5 py-1 rounded bg-slate-100 text-slate-600 text-[10px] font-bold uppercase tracking-wider mb-2">
                  {item.category}
                </span>
                <h3 className="font-bold text-slate-900 text-base hover:text-blue-600 cursor-pointer">
                  {item.title}
                </h3>
              </div>
              <div className="flex items-center space-x-6 text-xs text-slate-500 font-medium shrink-0">
                <div>💬 <strong className="text-slate-800">{item.replies}</strong> replies</div>
                <div>👁️ <strong className="text-slate-800">{item.views}</strong> views</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}