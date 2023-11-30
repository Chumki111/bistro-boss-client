import { useEffect } from "react";
import useAuth from "../../../Hooks/useAuth";
import { getAllHome } from "../../../Api/donations";
import { useState } from "react";
import { BiDonateBlood } from "react-icons/bi";
import { HiUserGroup } from "react-icons/hi2";


const AdminHome = () => {
  const { user } = useAuth();
  const [stats, setStats] = useState({})
  useEffect(() => {
    getAllHome('/admin-stats')
      .then((res) => {
        console.log(res);
        setStats(res)


      })
      .catch((error) => {
        console.error('Error fetching donations:', error);
      });
  }, []);

  return (
    <div>
      <div>
        <h1 className="text-3xl mt-10 mb-10">Hi,Welcome Back <span className="text-red-500">{user?.displayName}</span> </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="stats shadow-md">

          <div className="stat">
          <div className="stat-figure text-secondary">
              <HiUserGroup size={30}/>
            </div>
            <div className="stat-title">Total Users</div>
            <div className="stat-value">{stats?.users}</div>

          </div>



        </div>
        <div className="stats shadow-md">

          <div className="stat">
            <div className="stat-figure text-secondary">
              <BiDonateBlood size={30}/>
            </div>
            <div className="stat-title">Total Donations Request</div>
            <div className="stat-value">{stats?.donations}</div>

          </div>



        </div>
      </div>
    </div>
  );
};

export default AdminHome;