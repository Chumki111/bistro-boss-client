import { FaUsersCog } from "react-icons/fa";
import MenuItem from "./MenuItem";


const AdminMenu = () => {
    return (
        <>
             <MenuItem
                icon={FaUsersCog}
                label='All Users'
                address='allUsers'
            /> 
        </>
    );
};

export default AdminMenu;