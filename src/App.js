import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import PropertyDetails from './pages/PropertyDetails';
import HouseContextProvider from './HouseContext';
import { useState } from 'react';
import {  HiHome, HiX } from "react-icons/hi";
import { FaGooglePlay, FaFacebook, FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FiMail } from "react-icons/fi";


function App() {
  const [ openNav, setOpenNav ] = useState(false);
  const [ open, setOpen ] = useState(false)

  const handleClick = () => {
    setOpenNav(!openNav)
  }

  const closeNav = () => {
    setOpenNav(false)
  }

  const handleClose = () => {
    setOpen(!open)
  }

  const scrollHome = () => {
    window.scrollTo(0,0)
}

  return (
    <div className='relative'>
      <HouseContextProvider>
        <Router>
          <div className={openNav ? 'fixed inset-0 w-full h-screen bg-primary bg-opacity-70 z-50 transition-all ease-out duration-200ms' : 'fixed inset-0 w-full h-screen bg-primary bg-opacity-70 z-50 transition-all ease-out duration-200ms hidden'}>
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

          <div className={open ? 'fixed h-screen z-50 w-full bg-primary bg-opacity-70 flex items-center justify-center px-4 transition-all ease-out duration-300m scale-100' : 'fixed h-screen z-50 w-full bg-primary bg-opacity-70 flex items-center justify-center px-4 transition-all ease-out duration-300ms scale-0'}>
            <div className='bg-white w-full max-w-[350px] mx-auto px-4 py-10 rounded-md relative'>
              <div className='absolute top-0 right-0 m-4' onClick={() => {handleClose()}}>
                <HiX className='text-3xl'/>
              </div>
              <h1 className='font-semibold text-lg my-2'>Log in or create an account</h1>
              <form>
                <div>
                  <div className='w-full flex  justify-between'>
                    <label htmlFor="email" className='text-sm text-gray-600'>Email address</label>
                    <p className='text-[12px] text-gray-500'>required</p>
                  </div>
                  <input type="email" name='email' id='email'placeholder='Enter your email' className='my-2 border border-primary rounded-md w-full p-2 focus:outline-secondary' required/>
                </div>
                <button type='submit' className='w-full text-center bg-secondary py-2 rounded-full text-white'>Continue</button>
              </form>

              <div className='border-b border-gray-400 text-center h-[13px] my-4'>
                <span className=' bg-white px-4 text-gray-400'>or</span>
              </div>

              <div className='flex flex-col gap-2'>
                <div className='flex items-center border border-gray-500 rounded-full p-2 gap-2'>
                    <FcGoogle className='text-xl'/>
                    <p className='w-full text-center text-sm text-gray-500'>Continue with Google</p>
                </div>
                <div className='flex items-center border border-secondary rounded-full p-2 gap-2 bg-secondary text-white'>
                    <FaFacebook className='text-xl'/>
                    <p className='w-full text-center text-sm'>Continue with Facebook</p>
                </div>
                <div className='flex items-center border border-primary rounded-full p-2 gap-2 bg-primary text-white'>
                  <FaApple className='text-2xl'/>
                  <p className='w-full text-center text-sm'>Continue with Apple</p>
                </div>
                <div className='flex items-center border border-secondary rounded-full p-2 gap-2 bg-secondary text-white'>
                  <FiMail className='text-lg'/>
                  <p className='w-full text-center text-sm'>Email Me a Link</p>
                </div>
              </div>

              <div className='mt-4 flex flex-col gap-4 justify-center text-center'>
                <div>
                  <h2 className='font-semibold'>Are you a real estate agent?</h2>
                  <p className='text-sm'><span className='underline text-blue-600'>Log in</span> or <span className='underline text-blue-600'>create an account</span> here</p>
                </div>

                <div className='text-sm'>
                  <p>By creating an account you agree to Peculiar.com's <span className='underline text-blue-600'>Terms of Use</span> and <span className='underline text-blue-600'>Privacy Policy</span></p>
                </div>
              </div>
            </div>
          </div>
          
          <Navbar handleClick={handleClick} handleClose={handleClose} scrollHome={scrollHome}/>
          <Routes>
            <Route path='/' element={<Home scrollHome={scrollHome}/>} />
            <Route path='/property/:id' element={<PropertyDetails />} />
          </Routes>
          <Footer scrollHome={scrollHome}/>
        </Router>
      </HouseContextProvider>
    </div>
  );
}

export default App;
