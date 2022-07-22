import { useState, useContext } from "react";

import { RiHome5Line, RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';

import {Menu} from '@headlessui/react'

import { HouseContext } from "../../HouseContext";

const PropertyDropdown = () => {
    const { property, setProperty, properties } = useContext(HouseContext);
    const [open, setOpen] = useState(false);

    return (  
        <Menu as='div' className='dropdown'>
            <Menu.Button className='w-full lg:w-auto' onClick={() => {setOpen(!open)}}>
               <div className="dropdown-btn w-full">
                    <RiHome5Line className="dropdown-icon-primary" />
                    <ul className="text-left flex lg:gap-8 justify-between w-full">
                       <div>
                            <li className='text-sm leading-tight font-medium'>{property}</li>
                            <li className="text-[13px]">Select your place</li>
                       </div>
                        { open ? ( <RiArrowUpSLine className="dropdown-icon-secondary" /> ) : ( <RiArrowDownSLine  className="dropdown-icon-secondary" />) }
                    </ul>
               </div>
            </Menu.Button>
            <Menu.Items className='dropdown-menu'>
                {properties.map((property, index) => {
                        return (
                        <Menu.Item onClick={() => {setProperty(property)}} className='cursor=pointer hover:text-violet-700 transition ease-linear duration-200ms w-full' as='li' key={index}>
                            {property}
                        </Menu.Item>)})}
            </Menu.Items>
        </Menu>
    );
}
 
export default PropertyDropdown;