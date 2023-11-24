import { Link } from "react-router-dom";
import logoImg from '../assets/blood-donation-logo-branding-identity-corporate-vector-design_460848-13918.jpg'

const Logo = () => {
    return (
       <>
        {/* Logo */}
        <Link to='/'>
        <img
          className='hidden md:block'
          src={logoImg}
          alt='logo'
          width='100'
          height='100'
        />
      </Link>
       </>
    );
};

export default Logo;