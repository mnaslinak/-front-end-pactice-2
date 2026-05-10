import { MdOutlineMailOutline } from "react-icons/md";
export default function Log(){
    return(
        <div className="w-full h-screen bg-[url('/login-pic.png')] flex items-center justify-center bg-cover bg-no-repeat">
            <div className="w-75 h-125 rounded-2xl backdrop-blur-lg shadow-2xl flex flex-col">
                <div className="w-50 h-12 flex justify-center">
                    <h1 className="text-4xl text-white font-medium">Login</h1>
                </div>

                <h1 className="flex flex-row items-center gap-2 pl-1 text-white">
                    <MdOutlineMailOutline />
                    Email
                </h1>

            </div>
        </div>
    )

}