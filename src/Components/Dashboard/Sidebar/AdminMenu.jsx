import { FaUsersCog } from "react-icons/fa";
import MenuItem from "./MenuItem";
import { BiDonateBlood } from "react-icons/bi";
import { HiUserGroup } from "react-icons/hi2";
const AdminMenu = () => {
    return (
        <>
             <MenuItem
                icon={FaUsersCog}
                label='Admin Home'
                address='/dashboard'
            /> 
             <MenuItem
                icon={HiUserGroup }
                label='All Users'
                address='allUsers'
            /> 
             <MenuItem
                icon={BiDonateBlood }
                label='All Blood Donation Request'
                address='/dashboard/all-blood-donation-request'
            /> 
        </>
    );
};

export default AdminMenu;