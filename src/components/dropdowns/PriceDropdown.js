import { useState, useContext } from "react";

import { RiWallet3Line, RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';

import {Menu} from '@headlessui/react'

import { HouseContext } from "../../HouseContext";

const PriceDropdown = () => {
    const { price, setPrice } = useContext(HouseContext);
    const [open, setOpen] = useState(false);
    const prices = [
        {
            value: 'Price range (any)'
        },
        {
            value: '100000 - 130000'
        },
        {
            value: '130000 - 160000'
        },
        {
            value: '160000 - 190000'
        },
        {
            value: '100000 - 300000'
        },
        {
            value: '300000 - 400000'
        },
    ]

    return (  
        <Menu as='div' className='dropdown'>
            <Menu.Button className='w-full lg:w-auto' onClick={() => {setOpen(!open)}}>
               <div className="dropdown-btn w-full">
                    <RiWallet3Line className="dropdown-icon-primary" />
                    <ul className="text-left flex lg:gap-8 justify-between w-full">
                       <div>
                            <li className='text-sm leading-tight font-medium'>{price}</li>
                            <li className="text-[13px]">Chosse your price range</li>
                       </div>
                        { open ? ( <RiArrowUpSLine className="dropdown-icon-secondary" /> ) : ( <RiArrowDownSLine  className="dropdown-icon-secondary" />) }
                    </ul>
               </div>
            </Menu.Button>
            <Menu.Items className='dropdown-menu'>
                {prices.map((price, index) => {
                        return (
                        <Menu.Item onClick={() => {setPrice(price.value)}} className='cursor=pointer hover:text-violet-700 transition ease-linear duration-200ms w-full' as='li' key={index}>
                            {price.value}
                        </Menu.Item>)})}
            </Menu.Items>
        </Menu>
    );
}
 
export default PriceDropdown;