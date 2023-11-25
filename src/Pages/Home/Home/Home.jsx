import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";


const Home = () => {
    return (
        <>
        <Helmet>
            <title>Blood Donation | Home</title>
        </Helmet>
        <div>
           <Banner/>
           
        </div>
        </>
    );
};

export default Home;