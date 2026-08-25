export default function BlogPage() {
  const posts = [
    { title: "Petrol Price in Pakistan Updated: Complete Rate List", date: "August 2024", author: "PakWheels News Team" },
    { title: "Toyota Corolla vs Honda City: Detailed Comparison Guide", date: "August 2024", author: "Auto Expert" },
    { title: "5 Essential Tips Before Buying a Used Car in Lahore", date: "July 2024", author: "Inspection Specialist" },
  ];

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 text-center sm:text-left">
          <span className="inline-block py-1 px-3 rounded-full bg-red-100 text-red-800 text-xs font-bold uppercase tracking-wider mb-2">
            Automotive News & Articles
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            PakWheels Official Blog
          </h1>
          <p className="text-slate-500 text-sm mt-1">Latest car news, price updates, launch alerts & buying guides</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post, idx) => (
            <div key={idx} className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 flex flex-col justify-between hover:shadow-lg transition-all">
              <div>
                <div className="h-40 bg-slate-900 text-white rounded-xl flex items-center justify-center text-4xl mb-4 font-bold">
                  📰
                </div>
                <h3 className="font-bold text-slate-900 text-lg leading-snug">{post.title}</h3>
                <p className="text-xs text-slate-400 mt-2 font-medium">{post.author} • {post.date}</p>
              </div>
              <button className="mt-6 text-xs font-bold text-red-600 hover:text-red-800 text-left">
                Read Full Article →
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}