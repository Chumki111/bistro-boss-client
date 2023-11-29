import { BsFillHouseAddFill } from "react-icons/bs";
import MenuItem from "./MenuItem";
import { MdBloodtype } from "react-icons/md";
import { BiSolidDonateHeart } from "react-icons/bi";

const DonarMenu = () => {
    return (
        <>

            <MenuItem
                icon={BiSolidDonateHeart}
                label='Donar Home'
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
        </>
    );
};

export default DonarMenu;