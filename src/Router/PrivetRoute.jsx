import { Navigate, useLocation } from "react-router-dom";


import useAuth from "../Hooks/useAuth";
import { PropTypes } from "prop-types";


const PrivetRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const location = useLocation();

    if (loading) return <span className="loading loading-spinner loading-lg"></span>
    if (user) return children;

    return <Navigate to='/login' state={{ from: location }} replace />

};

PrivetRoute.propTypes={
    children:PropTypes.node
}

export default PrivetRoute;