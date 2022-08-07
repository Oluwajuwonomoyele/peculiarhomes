import { createContext, useEffect, useState } from "react";

import { housesData } from './data'

export const HouseContext = createContext();

const HouseContextProvider = ({children}) => {
    const [houses, setHouses] = useState(housesData);
    const [country, setCountry] = useState('Location (any)');
    const [countries, setCountries] = useState([]);
    const [property, setProperty] = useState('Property type (any)');
    const [properties, setProperties] = useState([]);
    const [price, setPrice] = useState('Price range (any)');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const allCountries = houses.map(house => {
            return house.country
        });
        
        const uniqueCountries = [ 'Location (any)', ...new Set(allCountries) ];

        setCountries(uniqueCountries);
    }, []);

    useEffect(() => {
        const allProperties = houses.map(house => {
            return house.type
        });

        const uniqueProperties = [ 'Location (any)', ...new Set(allProperties) ];

        setProperties(uniqueProperties);
    }, [])

    const handleClick = () => {
        setLoading(true)

        const defaultSearch = (str) => {
            return str.split(' ').includes('(any)')
        }

        const minPrice = parseInt(price.split(' ')[0])

        const maxPrice = parseInt(price.split(' ')[2])

        const newHouses = housesData.filter(house => {
            const housePrice = parseInt(house.price)

            if(house.country === country && house.type === property && minPrice <= housePrice && maxPrice >= housePrice){
                return house;
            }

            if(defaultSearch(country) && defaultSearch(price) && defaultSearch(property)){
                return house;
            }

            if(!defaultSearch(country) && defaultSearch(price) && defaultSearch(property)){
                return house.country === country
            }

            if(defaultSearch(country) && !defaultSearch(price) && defaultSearch(property)){
                if(minPrice <= house.price && maxPrice >= house.price){
                    return house
                }
            }

            if(defaultSearch(country) && defaultSearch(price) && !defaultSearch(property)){
                return house.type === property
            }

            if(!defaultSearch(country) && defaultSearch(price) && !defaultSearch(property)){
                return house.country === country && house.type === property
            }

            if(!defaultSearch(country) && !defaultSearch(price) && defaultSearch(property)){
                if(minPrice <= house.price && maxPrice >= house.price){
                    return house.country === country
                }
            }

            if(defaultSearch(country) && !defaultSearch(price) && !defaultSearch(property)){
                if(minPrice <= house.price && maxPrice >= house.price){
                    return house.type === property
                }
            }

            return this;
        });
        
        setTimeout(() => {
            setLoading(false);
            return !newHouses.length ? setHouses([]) : setHouses(newHouses);
        }, 1000)
    }
     
    return ( 
        <HouseContext.Provider value={{
            houses,
            country,
            setCountry,
            countries,
            property,
            setProperty,
            properties,
            price,
            setPrice,
            loading,
            setLoading,
            handleClick
        }}>
            {children}
        </HouseContext.Provider>
     );
}

export default HouseContextProvider;