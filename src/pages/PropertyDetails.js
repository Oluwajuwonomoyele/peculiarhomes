import { useParams, Link } from 'react-router-dom';

import {housesData} from '../data';

import { BiBed, BiBath, BiArea } from 'react-icons/bi'


const PropertyDetails = () => {
    const { id } = useParams()

    const house = housesData.find(house => {
        return house.id === parseInt(id)
    })

    return (  
       <section className='pt-[84px]'>
        <div className='max-w-[1440px] mx-auto px-4 py-6 flex flex-col gap-4'>
            <div className='flex flex-col gap-4 lg:gap-0 lg:flex-row lg:items-center lg:justify-between'>
                <div>
                    <h2 className='text-2xl font=semibold'>{house.name}</h2>
                    <h3 className='text-lg'>{house.address}</h3>
                </div>
                <div className='flex gap-2 text-sm'>
                    <p className='bg-green-500 text-white px-3 rounded-full'>{house.type}</p>
                    <p className='bg-violet-500 text-white px-3 rounded-full'>{house.country}</p>
                </div>
                <h4 className='text-3xl font-semibold text-violet-600'>${house.price}</h4>
            </div>
            <div className='flex flex-col items-start gap-8 lg:flex-row'>
                <div className='max-w-[768px]'>
                    <div className='mb-4'>
                        <img src={house.imageLg} alt="" />
                    </div>
                    <div className='flex gap-6 text-violet-700 mb-6'>
                        <div className='flex gap-2 items-center'>
                            <BiBed className='text-2xl'/>
                            <p>{house.bedrooms}</p>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <BiBath className='text-2xl'/>
                            <p>{house.bathrooms}</p>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <BiArea className='text-2xl'/>
                            <p>{house.surface}</p>
                        </div>
                    </div>
                    <p>{house.description}</p>
                </div>
                <div className='flex-1 bg-white w-full mb-8 border border-gray-300 rounded-lg px-6 py-8'>
                    <div className='flex gap-4 items-center mb-4'>
                        <div className='w-20 h-20 p-1 border border-gray-300 rounded-full'>
                            <img src={house.agent.image} alt="" />
                        </div>
                        <div>
                            <h2 className='font-bold text-lg'>{house.agent.name}</h2>
                            <Link to='' className='text-violet-700 text-sm'>View listing</Link>
                        </div>
                    </div>
                    <form className='flex flex-col gap-3'>
                        <input type="text" className='border border-gray-300 focus:border-violet-700 outline-none w-full px-4 py-2 text-sm rounded' placeholder='Enter Name'/>
                        <input type="email" className='border border-gray-300 focus:border-violet-700 outline-none w-full px-4 py-2 text-sm rounded' placeholder='Enter Email'/>
                        <input type="tel" className='border border-gray-300 focus:border-violet-700 outline-none w-full px-4 py-2 text-sm rounded' placeholder='Enter Phone'/>
                        <textarea className='border border-gray-300 focus:border-violet-700 outline-none w-full px-4 py-2 text-sm rounded resize-none text-gray-400' placeholder='Message' defaultValue='Hello, I am interested in a Modern Apartment' ></textarea>
                        <div className='flex gap-2'>
                            <button className='bg-violet-700 hover:bg-violet-800 text-white rounded p-4 text-sm w-full transition duration-300ms'>Send Message</button>
                            <button className='border border-violet-700 hover:border-violet-500 text-violet-700 hover:text-violet-500 rounded p-4 text-sm w-full transition duration-300ms'>Call</button>
                        </div>
                    </form>
                    
                </div>
            </div>
        </div>
       </section>
    );
}
 
export default PropertyDetails;