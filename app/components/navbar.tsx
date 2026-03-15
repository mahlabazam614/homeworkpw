import Link from "next/link";
import Image from "next/image";
import logo from "./assets/logopw.png"
export default function Navbar(){

    return(
        <header className="justify-around">
            <nav className="flex w-screen h-10 bg-gray-950 text-white text-start border-gray-800 border items-center justify-around">
            <div className="justify-start">
            <p className="">📱Download App via SMS</p>
            </div>

            <div className="flex space-x-5 justify-end">
              
            <p className=" text-red-600">اردو</p>
            <p>
                <Link href="/nav/signup">|  Sign Up</Link>
            </p>
            <p>
                <Link href="/nav/signin">|  Sign In</Link>
            </p>

            </div>

            
            </nav>
            
           <nav className="flex w-full bg-gray-950 h-20 width-max items-center justify-around">

            <div> 
            <Link href="http://localhost:3000/">
                <Image src={logo} alt="logo" width={180} height={38} placeholder="blur" />
            </Link>
            </div>

            <div className="text-white flex items-center justify justify-around ">
            <div>
                <Link href="/nav/usedcars"className="p-4 ">Used Cars</Link>
                <Link href="/nav/newcars"className="p-4">New Cars</Link>
                <Link href="/nav/bikes"className="p-4">Bikes</Link>
                <Link href="/nav/autostore"className="p-4">Auto Store</Link>
                <Link href="/nav/videos"className="p-4">Videos</Link>
                <Link href="/nav/forums"className="p-4">Forums</Link>
                <Link href="/nav/blog"className="p-4">Blog</Link>
                <Link href="/nav/more"className="p-4">More</Link>
                <button className="p-2 rounded font-semibold bg-red-500 text-white mt-5 ">Post an Ad</button>
                </div>
                </div>
    
            </nav>
        </header>
        
    )
}