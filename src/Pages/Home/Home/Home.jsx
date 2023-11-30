import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Contact from "../ContactUs/Contact";
import Featured from "../Featured/Featured";


const Home = () => {
    return (
        <>
        <Helmet>
            <title>Blood Donation | Home</title>
        </Helmet>
        <div>
           <Banner/>
           <Featured/>
           <Contact/>
        </div>
        </>
    );
};

export default Home;