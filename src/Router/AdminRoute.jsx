
import { PropTypes } from "prop-types";
import { Navigate } from "react-router-dom";
import useRole from "../Hooks/useRole";

const AdminRoute = ({ children }) => {
    const [role, loading] = useRole();
    console.log(role);
    if (loading) return <span className="loading loading-spinner loading-lg"></span>
    if (role === "admin") return children;
    return <Navigate to='/dashboard' />

};

AdminRoute.propTypes = {
    children: PropTypes.node
}


export default AdminRoute;