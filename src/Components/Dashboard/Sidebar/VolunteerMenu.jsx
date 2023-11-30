import { MenuItem } from "@mui/material";
import { FaUsersCog } from "react-icons/fa";


const VolunteerMenu = () => {
    return (
        <>
        <MenuItem
                icon={FaUsersCog}
                label='All Blood Donation Requests'
                address='/dashboard/all-blood-donation-requests'
            /> 
        <MenuItem
                icon={FaUsersCog}
                label='All Blood Donation Request'
                address=''
            /> 

            </>
    );
};

export default VolunteerMenu;