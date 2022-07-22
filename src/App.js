import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import PropertyDetails from './pages/PropertyDetails';
import HouseContextProvider from './HouseContext';
import { useState } from 'react';
import {  HiHome, HiX } from "react-icons/hi";
import { FaGooglePlay } from "react-icons/fa";


function App() {
  const [ openNav, setOpenNav ] = useState(false);

  const handleClick = () => {
    setOpenNav(!openNav)
  }

  const closeNav = () => {
    setOpenNav(false)
  }

  return (
    <div className='relative'>
      <HouseContextProvider>
        <Router>
          <div className={openNav ? 'fixed inset-0 w-full h-screen bg-primary bg-opacity-50 z-50 transition-all ease-out duration-200ms' : 'fixed inset-0 w-full h-screen bg-primary bg-opacity-50 z-50 transition-all ease-out duration-200ms hidden'}>
            <div className={openNav ? 'bg-white relative h-full w-3/4 p-4 flex flex-col left-0 transition-all ease-out duration-500ms' : 'bg-white relative h-full w-full -left-[100%] p-4 flex flex-col transition-all ease-out duration-500ms'}>
              <div className='flex justify-between items-center'>
                <Link to='/' className='font-semibold text-xl flex items-center'>
                  <HiHome className='text-secondary'/>
                  <div>
                    <span className='text-secondary'>peculiar</span>homes<span className='text-secondary'>.</span>
                  </div>
                </Link>
                <div className='text-3xl text-secondary cursor-pointer' onClick={() => {closeNav()}}>
                  <HiX />
                </div>
              </div>

              <ul className='flex flex-col gap-4 mt-12'>
                <li className='border-b border-gray-500 py-3 cursor-pointer hover:text-secondary transition-all ease-linear duration'>Rent</li>
                <li className='border-b border-gray-500 py-3 cursor-pointer hover:text-secondary transition-all ease-linear duration'>Mortgage</li>
                <li className='border-b border-gray-500 py-3 cursor-pointer hover:text-secondary transition-all ease-linear duration'>Find Agents</li>
                <li className='border-b border-gray-500 py-3 cursor-pointer hover:text-secondary transition-all ease-linear duration'>My Home</li>
                <li className='border-b border-gray-500 py-3 cursor-pointer hover:text-secondary transition-all ease-linear duration'>Advertise</li>
              </ul>

              <p className='mt-8 font-bold text-sm'>Find Homes on the go!</p>

              <div className='bg-primary flex text-white max-w-[150px] mt-4 rounded-md items-center p-2 gap-2 cursor-pointer'>
                <FaGooglePlay className='text-xl'/>
                <div>
                  <p className='text-[11px] uppercase'>get it on</p>
                  <p className='capitalize'>google play</p>
                </div>
              </div>
            </div>
          </div>

          <div>

          </div>
          <Navbar handleClick={handleClick}/>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/property/:id' element={<PropertyDetails />} />
          </Routes>
          <Footer />
        </Router>
      </HouseContextProvider>
    </div>
  );
}

export default App;
