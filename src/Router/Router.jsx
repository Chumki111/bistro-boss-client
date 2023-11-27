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
        {
          path:'my-donation-requests',
          element:<MyDonationRequestsPage/>
        },
        {
          path:'create-donation-request',
          element:<CreateDonationRequestPage/>
        }
      ]
    }
  ]);

  export default router;