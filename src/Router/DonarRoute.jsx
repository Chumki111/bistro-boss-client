import useAuth from "../Hooks/useAuth";
import { PropTypes } from "prop-types";
import { Navigate, useLocation } from "react-router-dom";
const DonarRoute = ({children}) => {
    const { user, loading } = useAuth();
    const location = useLocation();

    if (loading) return <span className="loading loading-spinner loading-lg"></span>
    if (user) return children;

    return <Navigate to='/login' state={{ from: location }} replace />

};

DonarRoute.propTypes={
    children:PropTypes.node
}


export default DonarRoute;