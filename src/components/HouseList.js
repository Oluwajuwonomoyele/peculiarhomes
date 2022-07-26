import { useContext } from "react";

import { HouseContext } from "../HouseContext";

import { Link } from "react-router-dom";

import { ImSpinner2 } from 'react-icons/im';

import House from "./House";


const HouseList = ({scrollHome}) => {
    const { houses, loading, setLoading} = useContext(HouseContext); 

    if(loading){
        return <ImSpinner2 className="mx-auto animate-spin text-violet-700 text-4xl mt-40"/>
    }

    if(!houses.length){
        setLoading(false)

        return (
            <div className="text-center text-3xl text-gray-400">Sorry, nothing found</div>
        )
    }

    return (  
        <section>
            <div className="max-w-[1440px] mx-auto px-4 py-6 pb-20">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-14">
                    { houses.map((house, index) => {
                        return (
                            <Link onClick={() => {scrollHome()}} to={`/property/${house.id}`} key={index}><House house={house}/> </Link>
                        )
                    })}
                </div>
            </div>
        </section>
    );
}
 
export default HouseList;