
// Components

import MenuItem from './MenuItem'



// / Icons

import { FcSettings } from 'react-icons/fc'

import { BsGraphUp } from 'react-icons/bs'
import { BsFillHouseAddFill } from "react-icons/bs";
import { MdBloodtype } from "react-icons/md";
import { useState } from 'react';
import { AiOutlineBars } from 'react-icons/ai'
import { Link } from 'react-router-dom';



const Sidebar = () => {
    const [isActive, setActive] = useState(false);
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
                            <MenuItem
                                icon={BsGraphUp}
                                label='Statistics'
                                address='/dashboard'
                            />
                            <MenuItem
                                icon={BsFillHouseAddFill}
                                label='My Donation Requests Page'
                                address='my-donation-requests'
                            />
                            <MenuItem
                                icon={MdBloodtype}
                                label='Donation Request Page'
                                address='create-donation-request'
                            />


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