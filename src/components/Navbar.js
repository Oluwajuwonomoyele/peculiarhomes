import { Link } from 'react-router-dom';

import { HiMenuAlt3, HiHome, HiUser } from "react-icons/hi";

const Navbar = ({handleClick, handleClose, scrollHome}) => {
    return (  
        <header className="bg-white fixed z-40 w-full">
            <div className="max-w-[1440px] mx-auto px-4 py-4 flex gap-4 items-center lg:justify-between">
                <div className='text-3xl cursor-pointer text-secondary lg:hidden' onClick={() => {handleClick()}}>
                    <HiMenuAlt3 />
                </div>

                <div className='flex items-center justify-between w-full lg:w-auto'>
                    <Link onClick={() => {scrollHome()}} to='/' className='font-semibold text-xl lg:text-2xl flex items-center'>
                        <HiHome className='text-secondary'/>
                        <div>
                        <span className='text-secondary'>peculiar</span>homes<span className='text-secondary'>.</span>
                        </div>
                    </Link>

                    <div className='bg-secondary p-2 rounded-full text-white text-xl cursor-pointer lg:hidden' onClick={() => {handleClose()}}>
                        <HiUser />
                    </div>
                </div>

                <ul className='hidden lg:flex items-center gap-8'>
                    <li className='p-2 transition ease-out duration-300ms hover:text-secondary cursor-pointer'>Rent</li>
                    <li className='p-2 transition ease-out duration-300ms hover:text-secondary cursor-pointer'>Mortgage</li>
                    <li className='p-2 transition ease-out duration-300ms hover:text-secondary cursor-pointer'>Find Agents</li>
                    <li className='p-2 transition ease-out duration-300ms hover:text-secondary cursor-pointer'>Advertise</li>
                    <li className='p-2 transition ease-out duration-300ms hover:text-secondary cursor-pointer'>News &amp; Insights</li>
                </ul>

                <ul className='hidden lg:flex gap-6 items-center'>
                    <li className='hover:text-violet-900 transition duration-200 ease-in-out'><Link to=''>Log In</Link></li>
                    <li className='bg-secondary hover:bg-violet-800 text-white p-3 transition duration-200 ease-in-out rounded-full'><Link to=''>Sign Up</Link></li>
                </ul>               
            </div>
        </header>
    );
}
 
export default Navbar;