import { Helmet } from "react-helmet-async";
import { getDonarDonations } from "../../../Api/donations";
import useAuth from "../../../Hooks/useAuth";
import { useEffect, useState } from "react";
import DonationDataRow from "../../../Components/Table/DonationDataRow";


const MyDonationRequestsPage = () => {
    const {user} = useAuth()
    const [donations,setDonations] = useState([]);
   
  useEffect(() =>{
    getDonarDonations(user?.email)
    .then(res =>{
      console.log(res);
      setDonations(res)
    })
  },[user])
  console.log(donations);

  
    return (
        <div>
            <Helmet>
                
            </Helmet>

            <div className='container mx-auto px-4 sm:px-8'>
        <div className='py-8'>
          <div className='-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto'>
            <div className='inline-block min-w-full shadow rounded-lg overflow-hidden'>
              <table className='min-w-full leading-normal'>
                <thead>
                  <tr>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                      Title
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                      Location(district)
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                      Location(upazila)
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                      date
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                      donation status
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                      Delete
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                      Update
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                      View
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {/*  donation data */}
                  {
                    donations?.map(donation => <DonationDataRow key={donation._id} donation={donation} />)
                  }
                  </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
        </div>
    );
};

export default MyDonationRequestsPage;