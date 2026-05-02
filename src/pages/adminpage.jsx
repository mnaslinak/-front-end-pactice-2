import { Routes, Route,Link} from "react-router-dom";

export default function AdminPage(){

    return(
        <div className="w-full h-full bg-pink-300 flex" >
            <div className="w-[300px] h-full bg-white flex flex-col">
                <h1>useed anchor tag</h1>
                <a href="/admin/"> orders</a>
                <a href="/admin/products"> products</a>
                <div className="flex flex-col">
                    <h1 className="bg-red-400">useed link tag</h1>
                <Link to="/admin/"> orders</Link>
                <Link to="/admin/products"> products</Link>

                </div>
            </div>
        
            <div className="w-[calc(100%-300px)] h-full bg-violet-700">
                <Routes>
                    <Route path='/' element={<h1>orders</h1>}/>
                    <Route path='/products' element={<h1>products</h1>}/>
                </Routes>
            </div>
        
        </div>
    )
}