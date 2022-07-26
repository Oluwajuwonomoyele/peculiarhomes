import Hero from "../components/Hero";
import HouseList from "../components/HouseList";

const Home = ({scrollHome}) => {
    return (  
        <>
            <Hero />
            <HouseList scrollHome={scrollHome} />
        </>
    );
}
 
export default Home;