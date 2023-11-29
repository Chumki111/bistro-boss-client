
// Components

import MenuItem from './MenuItem'



// / Icons

import { FcSettings } from 'react-icons/fc'
import { useState } from 'react';
import { AiOutlineBars } from 'react-icons/ai'
import { Link } from 'react-router-dom';
import useRole from '../../../Hooks/useRole';
import DonarMenu from './DonarMenu';
import VolunteerMenu from './VolunteerMenu';
import AdminMenu from './AdminMenu';



const Sidebar = () => {
    const [isActive, setActive] = useState(false);
    const [role] = useRole();
    console.log(role?.role,role?.status);
    // Sidebar Responsive Handler
    const handleToggle = () => {
        setActive(!isActive)
    }
    return (
        <>
            {/* Small Screen Navbar */}
            <div className='bg-gray-100 text-gray-800 flex justify-between md:hidden'>
                <div>
                   
                </div>

                <button
          onClick={handleToggle}
          className='mobile-menu-button p-4 focus:outline-none focus:bg-gray-200'
        >
          <AiOutlineBars className='h-5 w-5' />
        </button>
            </div>
            {/* Sidebar */}
            <div
                className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-gray-100 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${isActive && '-translate-x-full'
                    }  md:translate-x-0  transition duration-200 ease-in-out`}
            >
                <div>
                    <div>
                       <Link to='/'>
                       <div className='w-full hidden md:flex px-4 py-2 shadow-lg rounded-lg justify-center items-center bg-rose-100 mx-auto'>
                              Blood Donation
                        </div></Link>
                    </div>

                    {/* Nav Items */}
                    <div className='flex flex-col justify-between flex-1 mt-6'>
                        {/* If a user is host */}

                        <nav>
                            {/* Menu Items */}
                           
                           
                       {role?.role==='donar' && role?.status==='active' && <DonarMenu/>}
                       {role?.role==='volunteer' && <VolunteerMenu/>}
                       {role?.role==='admin' && <AdminMenu/>}

                        </nav>
                    </div>
                </div>

                <div>
                    <hr />

                    <MenuItem
                        icon={FcSettings}
                        label='Profile'
                        address='/dashboard/profile'
                    />

                </div>
            </div>
        </>
    )
}

export default Sidebar