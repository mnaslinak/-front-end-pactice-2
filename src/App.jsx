import './App.css'
import Productcard from './components/productcard'

function App() {


  return (
    <>
      <h1 className='text-[#995422] text-9xl bg-amber-200'> Hello PC world </h1>
      <Productcard name="macbook" price="Lkr 245000" photo="https://images.unsplash.com/photo-1605360846374-3ae595056068?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></Productcard>
      <Productcard name="Dell" price="Lkr 242000" photo="https://images.unsplash.com/photo-1694869590089-3e7f02fbc705?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D "></Productcard>
      <Productcard name="Lenovo" price="Lkr 255000" photo="https://images.unsplash.com/photo-1610567177680-033d1d9198bc?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></Productcard>
      
    </>
  )
}

export default App
