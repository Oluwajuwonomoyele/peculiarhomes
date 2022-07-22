import { useState, useContext } from "react";

import { RiMapPinLine, RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';

import {Menu} from '@headlessui/react'

import { HouseContext } from "../../HouseContext";

const CountryDropdown = () => {
    const { country, setCountry, countries } = useContext(HouseContext);
    const [open, setOpen] = useState(false);

    return (  
        <Menu as='div' className='dropdown'>
            <Menu.Button className='w-full lg:w-auto' onClick={() => {setOpen(!open)}}>
               <div className="dropdown-btn w-full">
                    <RiMapPinLine className="dropdown-icon-primary" />
                    <ul className="text-left flex lg:gap-8 justify-between w-full">
                       <div>
                            <li className='text-sm leading-tight font-medium'>{country}</li>
                            <li className="text-[13px]">Select your place</li>
                       </div>
                        { open ? ( <RiArrowUpSLine className="dropdown-icon-secondary" /> ) : ( <RiArrowDownSLine  className="dropdown-icon-secondary" />) }
                    </ul>
               </div>
            </Menu.Button>
            <Menu.Items className='dropdown-menu'>
                {countries.map((country, index) => {
                        return (
                        <Menu.Item onClick={() => {setCountry(country)}} className='cursor=pointer hover:text-violet-700 transition ease-linear duration-200ms w-full' as='li' key={index}>
                            {country}
                        </Menu.Item>)})}
            </Menu.Items>
        </Menu>
    );
}
 
export default CountryDropdown;