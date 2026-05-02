import { useState } from "react"
import toast, {Toaster} from "react-hot-toast"
import { FaTwitter } from "react-icons/fa"
export default function Test(){
    
    const[score,setscore]=useState(50)
    const[smile,setsmile]=useState("😐")
    return(
        <div className="w-full h-full bg-white flex justify-center items-center">
             {/* <div className="w-80 h-80 bg-blue-300 px-5 py-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis, necessitatibus? Quo perferendis corporis consequuntur, earum alias, commodi, temporibus cum sed adipisci sunt numquam est esse. Amet quos optio aut corporis fugiat quo consequuntur, repellendus ea ad necessitatibus, dignissimos totam beatae earum provident ducimus eveniet nihil maxime odit ipsam sint! Illo?
             </div> */}
             <div className="w-96 h-96 bg-yellow-400 pt-2 flex justify-center items-center flex-col" >
                <div className="w-20 h-20 bg-red-400 m-2 rounded-2xl"> <h1 className="text-7xl font-bold">{score}</h1></div>
                <div className="w-80 h-20 m-2 flex justify-center items-center">
                    <button className="text-4xl text-clip font-bold bg-green-300 m-2 rounded-2xl cursor-pointer" 
                    
                    onClick={()=>
                        
                        {
                       setscore(score+1)
                        }}>increase
                    </button>
                        <button className="text-4xl font-bold bg-green-300 m-2 rounded-2xl cursor-pointer" 
                    
                            onClick={()=>
                        
                         {
                             setscore(score-1)
                            }}>decrease
                        </button>
                        
                </div>
                        <div className="w-80 h-24 flex justify-center items-center flex-col">
                                <div className="text-5xl"><h1>{smile}</h1></div>
                                <div className="w-80 h-16 flex justify-center items-center ">
                                        <button className="text-2xl rounded-3xl m-6 cursor-pointer bg-amber-800"
                                        onClick={()=>
                                            {
                                                toast.success("hey you got it")
                                                setsmile("😊")
                                        }}
                                        
                                        >Happy</button>
                                        <button className="text-2xl rounded-3xl m-6 cursor-pointer bg-amber-800"
                                            onClick={()=>{
                                                toast.error("No its not funny")
                                                setsmile("😒")

                                            }}  
                                        >Sad</button>
                                        
                                </div>
                                 
                        </div>
                       <FaTwitter className="text-3xl"></FaTwitter>
                {/* <div className="w-20 h-20 bg-blue-400  m-2"></div>
                <div className="w-20 h-20 bg-black m-2"></div> */}
                </div>
        </div>
    )
}