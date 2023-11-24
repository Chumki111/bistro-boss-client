// import Container from "../../../Shared/Container";
import { Link } from 'react-router-dom';
import img from '../../../assets/close-up-female.avif'
const Banner = () => {
    return (

        <div className="hero min-h-[calc(100vh-87px)]" style={{ backgroundImage: `url(${img})` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-lg">
                    <h1 className="mb-5 text-4xl text-red-600 font-bold">Donate blood and save life !</h1>
                    <p className="mb-5 max-w-lg">Donating blood is a powerful act of kindness that has the potential to save lives in a profound way. Every drop given carries the possibility of renewing hope for someone in need. It`s a selfless gesture that transcends boundaries, uniting individuals in a common cause—to support and sustain life.</p>

                    {/* button with link */}
                    <Link to='/signUp'>
                    <button className="bg-transparent border-2 uppercase border-red-600 px-3 py-3 mr-5 rounded-md text-white">Join as a donar</button>
                    </Link>
                   <Link to='/search'>
                   <button className="bg-transparent border-2 uppercase border-red-600 px-3 py-3 mr-5 rounded-md text-white">Search Donors</button>
                   </Link>
                </div>
            </div>
        </div>

    );
};

export default Banner;