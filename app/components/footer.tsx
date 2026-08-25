import Link from "next/link";
import Image from "next/image";
import logo from "./assets/logopw.png";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-block">
              <Image 
                src={logo} 
                alt="PakWheels Logo" 
                width={160} 
                height={35} 
                className="brightness-110 contrast-125 object-contain" 
              />
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Pakistan&apos;s #1 Automotive Marketplace. Buy &amp; Sell Used Cars, New Cars, Bikes, Auto Parts &amp; Accessories across Pakistan.
            </p>
            <div className="flex items-center space-x-3 pt-2">
              <span className="text-xs text-slate-400 uppercase font-semibold tracking-wider">Follow Us:</span>
              <div className="flex space-x-2">
                {['Facebook', 'Twitter', 'Instagram', 'YouTube'].map((social) => (
                  <span key={social} className="h-8 w-8 rounded-full bg-slate-800 flex items-center justify-center text-xs font-semibold text-slate-300 hover:bg-red-600 hover:text-white transition-colors cursor-pointer">
                    {social[0]}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Cars by Make */}
          <div>
            <h4 className="text-white text-sm font-semibold uppercase tracking-wider mb-4 border-l-2 border-red-500 pl-2">
              Cars By Make
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li><Link href="/car/corolla" className="hover:text-red-400 transition-colors">Toyota Corolla</Link></li>
              <li><Link href="/car/city" className="hover:text-red-400 transition-colors">Honda City</Link></li>
              <li><Link href="/car/civic" className="hover:text-red-400 transition-colors">Honda Civic</Link></li>
              <li><Link href="/car/alto" className="hover:text-red-400 transition-colors">Suzuki Alto</Link></li>
              <li><Link href="/nav/newcars" className="hover:text-red-400 transition-colors">Suzuki Cultus</Link></li>
            </ul>
          </div>

          {/* Cars By City */}
          <div>
            <h4 className="text-white text-sm font-semibold uppercase tracking-wider mb-4 border-l-2 border-red-500 pl-2">
              Cars By City
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li><Link href="/nav/usedcars" className="hover:text-red-400 transition-colors">Cars in Lahore</Link></li>
              <li><Link href="/nav/usedcars" className="hover:text-red-400 transition-colors">Cars in Karachi</Link></li>
              <li><Link href="/nav/usedcars" className="hover:text-red-400 transition-colors">Cars in Islamabad</Link></li>
              <li><Link href="/nav/usedcars" className="hover:text-red-400 transition-colors">Cars in Rawalpindi</Link></li>
              <li><Link href="/nav/usedcars" className="hover:text-red-400 transition-colors">Cars in Peshawar</Link></li>
            </ul>
          </div>

          {/* Explore PakWheels */}
          <div>
            <h4 className="text-white text-sm font-semibold uppercase tracking-wider mb-4 border-l-2 border-red-500 pl-2">
              Explore PakWheels
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li><Link href="/nav/usedcars" className="hover:text-red-400 transition-colors">Used Cars</Link></li>
              <li><Link href="/nav/newcars" className="hover:text-red-400 transition-colors">New Cars</Link></li>
              <li><Link href="/nav/bikes" className="hover:text-red-400 transition-colors">Bikes</Link></li>
              <li><Link href="/nav/autostore" className="hover:text-red-400 transition-colors">Auto Store</Link></li>
              <li><Link href="/nav/videos" className="hover:text-red-400 transition-colors">Videos & Reviews</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800/80 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} PakWheels (Pvt) Ltd. - All Rights Reserved.</p>
          <div className="flex space-x-6">
            <span className="hover:text-slate-400 cursor-pointer">Terms of Service</span>
            <span className="hover:text-slate-400 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-slate-400 cursor-pointer">Careers</span>
            <span className="hover:text-slate-400 cursor-pointer">Contact Us</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
