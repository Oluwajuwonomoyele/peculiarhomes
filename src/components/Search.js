import CountryDropdown from './dropdowns/CountryDropdown';
import PropertyDropdown from './dropdowns/PropertyDropdown';
import PriceDropdown from './dropdowns/PriceDropdown';
import { RiSearch2Line } from 'react-icons/ri'
import { useContext } from 'react';
import { HouseContext } from '../HouseContext';

const Search = () => {
    const {handleClick} = useContext(HouseContext);

    return (  
        <div className='px-4 py-6 max-w-[1140px] mx-auto flex flex-col lg:flex-row lg:items-center justify-between gap-4 lg:gap-x-3 relative lg:-top-28 lg:shadow-xl bg-white lg:bg-transparent lg:backdrop-blur rounded-lg'>
            <CountryDropdown />
            <PropertyDropdown />
            <PriceDropdown />
            <button onClick={() => handleClick()} className='bg-violet-700 hover:bg-violet-800 transition ease-in-out duration-200 w-full lg:max-w-[160px] h-14 rounded-lg flex justify-center items-center text-white text-xl'>
                <RiSearch2Line />
            </button>
        </div>
    );
}

export default Search;