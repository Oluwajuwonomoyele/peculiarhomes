import { Link } from 'react-router-dom';

import { HiMenuAlt3, HiHome, HiUser } from "react-icons/hi";

const Navbar = ({handleClick, handleClose, scrollHome}) => {
    return (  
        <header className="bg-white fixed z-40 w-full">
            <div className="max-w-[1440px] mx-auto px-4 py-6 flex gap-4 items-center">
                <div className='text-3xl cursor-pointer text-secondary lg:hidden' onClick={() => {handleClick()}}>
                    <HiMenuAlt3 />
                </div>

                <div className='flex items-center justify-between w-full'>
                    <Link onClick={() => {scrollHome()}} to='/' className='font-semibold text-xl flex items-center'>
                        <HiHome className='text-secondary'/>
                        <div>
                        <span className='text-secondary'>peculiar</span>homes<span className='text-secondary'>.</span>
                        </div>
                    </Link>

                    <div className='bg-secondary p-2 rounded-full text-white text-xl cursor-pointer lg:hidden' onClick={() => {handleClose()}}>
                        <HiUser />
                    </div>
                </div>

                <ul className='hidden lg:flex gap-6 items-center'>
                    <li className='hover:text-violet-900 transition duration-200 ease-in-out'><Link to=''>Log In</Link></li>
                    <li className='bg-secondary hover:bg-violet-800 text-white p-3 transition duration-200 ease-in-out rounded-lg'><Link to=''>Sign Up</Link></li>
                </ul>               
            </div>
        </header>
    );
}
 
export default Navbar;