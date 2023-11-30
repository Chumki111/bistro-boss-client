import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Contact from "../ContactUs/Contact";


const Home = () => {
    return (
        <>
        <Helmet>
            <title>Blood Donation | Home</title>
        </Helmet>
        <div>
           <Banner/>
           <Contact/>
        </div>
        </>
    );
};

export default Home;