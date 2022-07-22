import { BiBed, BiBath, BiArea } from 'react-icons/bi'

const House = ({house}) => {
    const { image, type, country, address, bedrooms, bathrooms, surface, price } = house;

    return (  
        <div className='bg-white shadow-1 p-5 rounded-lg rounded-tl-[90px] w-full lg:max-w-[340px] mx-auto cursor-pointer hover:shadow-2xl transition-all duration-300ms flex flex-col gap-8'>
            <img src={image} alt="" />
            <div className='flex gap-2 text-sm'>
                <p className='bg-green-500 rounded-full text-white px-3'>{type}</p>
                <p className='bg-violet-500 rounded-full text-white px-3'>{country}</p>
            </div>
            <h3 className='text-lg font-semibold max-w-[260px]'>{address}</h3>
            <div className='flex gap-4'>
                <div className='flex items-center text-gray-600 gap-1'>
                    <BiBed  className='text-[20px]'/>
                    <p>{bedrooms}</p>
                </div>
                <div className='flex items-center text-gray-600 gap-1'>
                    <BiBath  className='text-[20px]'/>
                    <p>{bathrooms}</p>
                </div>
                <div className='flex items-center text-gray-600 gap-1'>
                    <BiArea  className='text-[20px]'/>
                    <p>{surface}</p>
                </div>
            </div>
            <p className='text-lg font-semibold text-violet-600'>${price}</p>
        </div>
    );
}
 
export default House;