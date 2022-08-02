import { useContext } from "react";

import { HouseContext } from "../HouseContext";

import { Link } from "react-router-dom";

import { ImSpinner2 } from 'react-icons/im';

import House from "./House";


const HouseList = ({scrollHome}) => {
    const { houses, loading} = useContext(HouseContext);

    if(!houses.length){
        return (
            <div className="text-center text-3xl text-gray-400 py-8 lg:py-20">Sorry, nothing found</div>
        )
    }

    return (  
        <section>
            <div className="max-w-[1440px] mx-auto px-4 py-6 pb-20">
                { loading ? <ImSpinner2 className="mx-auto animate-spin text-violet-700 text-4xl my-8 lg:my-20"/> : <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-14 justify-items-center">
                    { houses.map((house, index) => {
                        return (
                            <Link onClick={() => {scrollHome()}} to={`/property/${house.id}`} key={index}><House house={house}/> </Link>
                        )
                    })}
                </div> }
            </div>
        </section>
    );
}
 
export default HouseList;