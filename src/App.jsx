import './App.css'
import Productcard from './components/productcard'
import { Routes, Route } from 'react-router-dom'
import Homepage from './pages/homepage'
import LoginPage from './pages/loginpage'
import Registerpage from './pages/registerpage'
import AdminPage from './pages/adminpage'
import Test from './pages/test'
import {Toaster} from 'react-hot-toast'
import { FaTwitter } from "react-icons/fa"
import { MdOutlineMailOutline } from "react-icons/md";
import Log from './pages/log'
function App() {

  return (
    <div className='w-full h-screen bg-amber-600'>
      <Toaster position='top-right'/>
      <Routes>
        <Route path='/' element={<Homepage/>} />
        <Route path='/login' element={<LoginPage/>} />
        <Route path='/signup' element={<Registerpage/>}/>
        <Route path='/admin/*' element={<AdminPage/>}/>
        <Route path='/test' element={<Test/>}/>
        <Route path='/log' element={<Log/>}></Route>
      </Routes>
   </div>
      
  )
}

export default App
