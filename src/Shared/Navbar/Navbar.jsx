import { NavLink } from "react-router-dom";
import avatarImg from '../../assets/businessman-working-laptop-computer-office-3d-character-isolated-white-background_40876-3756.jpg'
import './Navbar.css'
import Logo from "../Logo";
import useAuth from "../../Hooks/useAuth";

const Navbar = () => {


  const { user, logOut } = useAuth();
  const navLinks = <>


    {/* nav links */}
    <NavLink to="/" className="nav">
      Home
    </NavLink>

    <NavLink to="/search" className="nav">
      Search
    </NavLink>

    {
      user  ? <>
          <NavLink to="/dashboard" className="nav">
      Dashboard
    </NavLink>
          <NavLink to="/funding" className="nav">
      Funding
    </NavLink>

       <button className="font-semibold" onClick={logOut}>logOut</button>
       </>
        :
        <>
        <NavLink to="/login" className="nav">
        Login
      </NavLink>
        <NavLink to="/register" className="nav">
       Registration
      </NavLink>
      </>
    }







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
          <div className="dropdown dropdown-end lg:hidden">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img alt="Tailwind CSS Navbar component" src={user && user.photoURL ? user.photoURL : avatarImg} />
              </div>
            </label>

          </div>

        </div>
        <Logo />
      </div>
      <div className="navbar-end  hidden lg:flex">
        <ul className="menu menu-horizontal px-3">
          {navLinks}
        </ul>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img alt="Tailwind CSS Navbar component" src={user && user.photoURL ? user.photoURL : avatarImg} />
            </div>
          </label>

        </div>
      </div>
    </div>

  );
};

export default Navbar;