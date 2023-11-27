import { Helmet } from "react-helmet-async";
import Sidebar from "../Components/Dashboard/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";


const Dashboard = () => {
    return (
        <>
            <Helmet>
                <title>Blood Donation | Dashboard </title>
            </Helmet>

            <div className='relative min-h-screen md:flex'>
        {/* Sidebar Component */}
        <Sidebar/>
        <div className='flex-1  md:ml-64'>
          <div className='p-5'>
            {/* Outlet for dynamic contents */}
            <Outlet/>
            </div>
        </div>
      </div>
        </>
    );
};

export default Dashboard;