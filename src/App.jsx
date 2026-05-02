import './App.css'
import Productcard from './components/productcard'
import { Routes, Route } from 'react-router-dom'
import Homepage from './pages/homepage'
import LoginPage from './pages/loginpage'
import Registerpage from './pages/registerpage'
import AdminPage from './pages/adminpage'

function App() {

  return (
    <div className='w-full h-screen bg-amber-600'>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<Registerpage/>}/>
        <Route path='/admin/*' element={<AdminPage/>}/>
      </Routes>
   </div>
      
  )
}

export default App
