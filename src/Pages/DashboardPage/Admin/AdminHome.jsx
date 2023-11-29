import useAuth from "../../../Hooks/useAuth";


const AdminHome = () => {
    const {user} = useAuth();
    return (
        <div>
             <div>
            <h1 className="text-3xl mt-10 mb-10">Hi,Welcome Back <span className="text-red-500">{user?.displayName}</span> </h1>
           </div>
        </div>
    );
};

export default AdminHome;