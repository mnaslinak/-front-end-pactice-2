import './App.css'
import Productcard from './components/productcard'

function App() {


  return (
    <>
    <div className='w-150 h-150 bg-amber-700 flex justify-center items-center relative'>
      <div className='w-130 h-130 bg-gray-700 flex flex-col items-center justify-evenly'>
      <div className='w-30 h-30 bg-blue-600'></div>
      <div className='w-30 h-30 bg-red-600 fixed top-10 right-180'></div>
      <div className='w-30 h-30 bg-green-600'></div>
      <div className='w-30 h-30 bg-white absolute right-18 top-100'></div>
      </div>
      </div>
      </>
  )
}

export default App
