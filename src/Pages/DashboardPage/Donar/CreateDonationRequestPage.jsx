import { Helmet } from "react-helmet-async";
import useAuth from "../../../Hooks/useAuth";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { TbFidgetSpinner } from "react-icons/tb";
import { addDonation } from "../../../Api/donations";
import toast from "react-hot-toast";

const CreateDonationRequestPage = () => {
  const { user, loading } = useAuth();
  console.log(user);
  const [startDate, setStartDate] = useState(new Date());
  const [districts, setDistricts] = useState([]);
  const [upazilas, setUpazilas] = useState([]);

  useEffect(() => {
    fetch('/districts.json')
      .then(res => res.json())
      .then(data => {

        setDistricts(data)
      })
  }, [])

  useEffect(() => {
    fetch('/upazilas.json')
      .then(res => res.json())
      .then(data => {

        setUpazilas(data)
      })
  }, [])

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const name = user?.displayName;
    const Recipient_Name=form.Recipient_Name.value;
    const email = user?.email;
    
    const district = form.district.value;
    const upazila = form.upazila.value;
    const hospitalName= form.hospitalName.value;
    const address= form.address.value;
    const date= form.date.value;
    const message = form.textarea.value;


    console.log(name,Recipient_Name, email, district, upazila,hospitalName,address,date,message);

    const donationData ={
      requester_Name : name,
      equester_email : email,
      recipient_name : Recipient_Name,
      recipient_district:district,
      recipient_upazila : upazila,
      hospital_name:hospitalName,
      full_address :address,
      donation_date:date,
      request_message:message,
      donation_status:'pending'
    }

    try{
      // add donation
      const data = await addDonation(donationData)
      console.log(data);
      toast.success('Donation Added!')


    } catch(err){
         console.log(err);
    }
  }


  return (
    <>
      <Helmet>
        <title>Dashboard | Request Page</title>
      </Helmet>
      <div className="">
        {/* form */}
        <div className='w-full min-h-[calc(100vh-40px)] flex flex-col justify-center items-center text-gray-800 rounded-xl bg-gray-50'>

          <form onSubmit={handleSubmit}
            noValidate=''
            action=''
            className='space-y-6 ng-untouched ng-pristine ng-valid px-6 py-4 w-full'
          >
            <div className='space-y-4'>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                {/* name field */}
                <div>
                  <label htmlFor='email' className='block mb-2 text-sm'>
                    Requester Name
                  </label>
                  <input
                    defaultValue={user?.displayName}
                    type='text'
                    name='name'
                    id='name'
                    placeholder='Enter Your Name Here'
                    className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
                    data-temp-mail-org='0'
                  />
                </div>

                {/* image field */}

                <div>
                  <label htmlFor='email' className='block mb-2 text-sm'>
                    Requester Email
                  </label>
                  <input
                    defaultValue={user?.email}
                    type='email'
                    name='email'
                    id='email'
                    required
                    placeholder='Enter Your Email Here'
                    className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
                    data-temp-mail-org='0'
                  />
                </div>

              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor='image' className='block mb-2 text-sm'>
                    Recipient Name
                  </label>
                  <input
                    type='text'
                    name='Recipient_Name'
                    id=''
                    placeholder='Enter Your Name Here'
                    className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
                    data-temp-mail-org='0'
                  />
                </div>
                  {/* hospital */}
                  <div>
                  <div className='flex justify-between'>
                    <label htmlFor='' className='text-sm mb-2'>
                      Hospital Name
                    </label>
                  </div>
                  <input
                    type='text'
                    name='hospitalName'
                    autoComplete=''
                    id=''
                    required
                    placeholder='Hospital Name'
                    className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

              
                {/* full address*/}
                <div>
                  <div className='flex justify-between'>
                    <label htmlFor='' className='text-sm mb-2'>
                      Full Address
                    </label>
                  </div>
                  <input
                    type=''
                    name='address'


                    required
                    placeholder='Your Full address'
                    className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
                  />
                </div>

                <div>
                  <label htmlFor='' className='block mb-2 text-sm'>
                    Recipient District
                  </label>
                  <select name="district"
                    className="select w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900">

                    {
                      districts.map(district => <option key={district.id}>{district.name}</option>)
                    }

                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                  <label htmlFor='email' className='block mb-2 text-sm'>
                  Request Message
                  </label>
                  <textarea
                  name="textarea"
                  placeholder="message"
                   className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
                  />

                </div>
                <div>
                  <label htmlFor='email' className='block mb-2 text-sm'>
                    Recipient Upazila
                  </label>
                  <select name="upazila" className="select w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900">
                    {
                      upazilas?.map(upazila => <option key={upazila.id}>{upazila.name}</option>)
                    }

                  </select>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor='' className='block mb-2 text-sm'>
                    Donation Date

                  </label>
                  <DatePicker
                  name="date"
                    showIcon
                    selected={startDate}
                    dateFormat="Pp"
                    onChange={(date) => setStartDate(date)}
                    className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
                  />
                </div>
               
              </div>
            </div>

            <div>
              <button
                type='submit'
                className='bg-rose-500 w-full rounded-md py-3 text-white'
              >
                {loading ? (
                  <TbFidgetSpinner className='m-auto animate-spin' size={24} />
                ) : (
                  'Request'
                )}


              </button>
            </div>
          </form>
        </div>
      </div>

    </>
  );
};

export default CreateDonationRequestPage;
