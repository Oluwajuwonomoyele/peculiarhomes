import Image from '../img/house-banner.png';
import Search from './Search';
import Typed from 'react-typed';

const Hero = () => {
    return (  
        <section className='pt-[84px]'>
            <div className="max-w-[1600px] mx-auto px-4 lg:px-0 lg:py-6 xl:pb-24 flex flex-col items-center lg:flex-row lg:gap-24 h-screen lg:h-auto" id='hero'>
                <div className='flex flex-col gap-6 xl:ml-24 items-center lg:items-start text-center lg:text-left justify-center flex-1 relative z-20'>
                    <h1 className='text-5xl lg:text-6xl font-semibold leading-none'><span className='text-violet-700'>
                        <Typed strings={['Rent', 'Explore', 'Own' ]}
                    typeSpeed={150} backSpeed={180} loop/></span> Your Dream House With Us.</h1>
                    <p className='max-w-[480px] text-xl text-primary animate-pulse'>Let's find you a home that's perfect for you</p>
                </div>
                <div className='hidden flex-1 lg:flex justify-end'>
                    <img src={Image} alt="" />
                </div>
            </div>
            <Search />
        </section>
    );
}
 
export default Hero;