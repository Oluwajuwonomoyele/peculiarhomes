import { Link } from "react-router-dom";

import { HiHome, HiMail } from "react-icons/hi";

import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa'

const Footer = ({scrollHome}) => {
    return (  
        <footer className="bg-black">
            <div className="max-w-[1440px] mx-auto px-4 py-12 text-white text-center flex flex-col items-center gap-12">
                 <Link onClick={() => {scrollHome()}} to='/' className='font-semibold text-xl lg:text-2xl flex items-center'>
                    <HiHome className='text-secondary'/>
                    <div>
                    <span className='text-secondary'>peculiar</span>homes<span className='text-secondary'>.</span>
                    </div>
                </Link>

                <div className="flex flex-col gap-8 lg:flex-row lg:gap-20">
                    <div className="flex flex-col gap-2">
                        <h3 className="uppercase font-semibold cursor-pointer">About Us</h3>
                        <ul>
                            <li className="text-sm py-1 hover:underline transition-all ease-out duration-300ms cursor-pointer">About Us</li>
                            <li className="text-sm py-1 hover:underline transition-all ease-out duration-300ms cursor-pointer">Contact Us</li>
                            <li className="text-sm py-1 hover:underline transition-all ease-out duration-300ms cursor-pointer">Careers</li>
                            <li className="text-sm py-1 hover:underline transition-all ease-out duration-300ms cursor-pointer">Legal Notices</li>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h3 className="uppercase font-semibold cursor-pointer">Advertisers</h3>
                        <ul >
                            <li className="text-sm py-1 hover:underline transition-all ease-out duration-300ms cursor-pointer">Advertise</li>
                            <li className="text-sm py-1 hover:underline transition-all ease-out duration-300ms cursor-pointer">Customer Portal</li>
                            <li className="text-sm py-1 hover:underline transition-all ease-out duration-300ms cursor-pointer">Digital Feeds Program</li>
                            <li className="text-sm py-1 hover:underline transition-all ease-out duration-300ms cursor-pointer">Add a Property</li>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h3 className="uppercase font-semibold cursor-pointer">Services</h3>
                        <ul>
                            <li className="text-sm py-1 hover:underline transition-all ease-out duration-300ms cursor-pointer">Showcase</li>
                            <li className="text-sm py-1 hover:underline transition-all ease-out duration-300ms cursor-pointer">Blog</li>
                            <li className="text-sm py-1 hover:underline transition-all ease-out duration-300ms cursor-pointer">Resources</li>
                            <li className="text-sm py-1 hover:underline transition-all ease-out duration-300ms cursor-pointer">Support</li>
                        </ul>
                    </div>
                </div>

                <hr className="border-white w-full rounded-lg"/>

                <div className="flex flex-col gap-4">
                    <div className="flex justify-center gap-4 items-center">
                        <div className="bg-white text-primary p-2 rounded-full text-lg group hover:bg-secondary trasnition ease-out duration-300ms cursor-pointer">
                            <FaFacebookF className="group-hover:text-white"/>
                        </div>
                        <div className="bg-white text-primary p-2 rounded-full text-lg group hover:bg-secondary trasnition ease-out duration-300ms cursor-pointer">
                            <FaTwitter className="group-hover:text-white"/>
                        </div>
                        <div className="bg-white text-primary p-2 rounded-full text-lg group hover:bg-secondary trasnition ease-out duration-300ms cursor-pointer">
                            <FaInstagram className="group-hover:text-white"/>
                        </div>
                        <div className="bg-white text-primary p-2 rounded-full text-lg group hover:bg-secondary trasnition ease-out duration-300ms cursor-pointer">
                            <FaLinkedinIn className="group-hover:text-white"/>
                        </div>
                        <div className="bg-white text-primary p-2 rounded-full text-lg group hover:bg-secondary trasnition ease-out duration-300ms cursor-pointer">
                            <HiMail className="group-hover:text-white"/>
                        </div>
                    </div>
                    <p>Copyright &copy; 2022. All rghts reserved.</p>
                </div>     
            </div>
        </footer>
    );
}
 
export default Footer;