export default function Autostore(){
    return(
        <div >
            <h1 className=" text-gray-600 text-5xl font-semibold text-center mt-5 uppercase"> Enter your details
            
            </h1>

            <form className="flex gap-5 justify-center items-center flex-col border bg-teal-500 h-96">
                <input type="name" className="p-2 rounded-2xl w-2/5 border border-orange-500"placeholder="Enter your name"/>
                <input type="email" className="p-2 rounded-2xl w-2/5 border border-red-500"placeholder="Enter your email"/>
                <input type="password" className="p-2 rounded-2xl w-2/5 border border-blue-500"placeholder="Enter your password"/>
                <button className="p-2 rounded-2xl font-semibold bg-gray-500 text-orange-300 mt-5 uppercase">create account</button>
            </form>
        </div>
    )
} 