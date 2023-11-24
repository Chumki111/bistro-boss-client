import { NavLink } from "react-router-dom";

import './Navbar.css'
import Logo from "../Logo";

const Navbar = () => {



  const navLinks = <>


    {/* nav links */}
    <NavLink to="/" className="nav">
      Home
    </NavLink>
    <NavLink to="/login" className="nav">
      Login
    </NavLink>
    <NavLink to="/search" className="nav">
      Search
    </NavLink>






  </>
  return (
    
      <div className="navbar bg-base-100 rounded-md shadow-md mb-4">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="navbar-end lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu text-3xl menu-md dropdown-content mt-3 z-[1] p-2  w-52">

              {navLinks}
            </ul>
          </div>
          <Logo/>
        </div>
        <div className="navbar-end  hidden lg:flex">
          <ul className="menu menu-horizontal px-3">
            {navLinks}
          </ul>
        </div>
      </div>
    
  );
};

export default Navbar;