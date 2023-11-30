import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import ErrorPage from "../Pages/Error/ErrorPage";
import Search from "../Pages/Seach/Search";
import Dashboard from "../Layouts/Dashboard";
import MyDonationRequestsPage from "../Pages/DashboardPage/Donar/MyDonationRequestsPage";
import CreateDonationRequestPage from "../Pages/DashboardPage/Donar/createDonationRequestPage";
import PrivetRoute from "./PrivetRoute";
import AllUsers from "../Pages/DashboardPage/Admin/AllUsers";
import DonarHome from "../Pages/DashboardPage/Donar/DonarHome";
import DetailsPage from "../Pages/DashboardPage/Donar/DetailsPage";
import { getSingleDonation } from "../Api/donations";
import Profile from "../Pages/DashboardPage/Profile/Profile";
import AdminHome from "../Pages/DashboardPage/Admin/AdminHome";
import AllBloodDonationRequest from "../Pages/DashboardPage/Admin/AllBloodDonationRequest";
import ContentManagement from "../Pages/DashboardPage/Admin/ContentManagement";
import AddBlog from "../Pages/DashboardPage/Admin/AddBlog";

import AllBloodDonationRequestVolunteer from "../Pages/DashboardPage/Volunteer/AllBloodDonationRequestVolunteer";
import Funding from "../Pages/Funding";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayouts/>,
      errorElement:<ErrorPage/>,
      children:[
        {
            path:'/',
            element:<Home/>
        },
        {
          path:'/search',
          element:<Search/>
        },
        {
          path:'/funding',
          element:<Funding/>
        }
      ]
    },

    {
        path:'/login',
        element:<Login/>
    },
    {
        path:'/signUp',
        element:<SignUp/>
    },{
      path:'/dashboard',
      element:<PrivetRoute><Dashboard/></PrivetRoute>,
      children:[
        // donar route
        {
          path:'my-donation-requests',
          element:<MyDonationRequestsPage/>
        },
        {
          path:'create-donation-request',
          element:<CreateDonationRequestPage/>
        },
        {
          path:'detailsPage/:id',
          element:<DetailsPage/>,
          loader:({params}) => getSingleDonation(params.id)

        },
       
        {
          path:'/dashboard',
          element:<DonarHome/>
        },
        // shared route
        {
          path:'/dashboard/profile',
          element:<Profile/>
        },

        // admin route
        {
          path:'/dashboard/admin-home',
          element:<AdminHome/>
        },
        {
          path:'allUsers',
          element:<AllUsers/>
        },
        {
          path:'/dashboard/all-blood-donation-request',
          element:<AllBloodDonationRequest/>
        },
        {
          path:'/dashboard/content-management',
          element:<ContentManagement/>
        },
        {
          path:'/dashboard/content-management/add-blog',
         element:<AddBlog/>

          
        },
        {
          path : '/dashboard/all-blood-donation-requests',
          element:<AllBloodDonationRequestVolunteer/>
        }
      ]
    }
  ]);

  export default router;