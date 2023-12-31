import { Link, useNavigate } from "react-router-dom";
import { imageUpload } from "../../Api/utils";
import { Helmet } from "react-helmet-async";
import useAuth from "../../Hooks/useAuth";
import { TbFidgetSpinner } from "react-icons/tb";
import { useEffect, useState } from "react";
import { getToken, saveUser } from "../../Api/auth";


const SignUp = () => {

  const { createUser, loading, updateUserProfile } = useAuth();
  const [districts,setDistricts] = useState([]);
  const [upazilas,setUpazilas] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    fetch('/districts.json')
    .then(res=> res.json())
    .then(data =>{
     
      setDistricts(data)
    })
  },[])
  
  useEffect(() => {
    fetch('/upazilas.json')
    .then(res=> res.json())
    .then(data =>{
     
      setUpazilas(data)
    })
  },[])
  

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const blood_group = form.blood_group.value;
    const password = form.password.value;
    const confirm_password = form.confirm_password.value;
    const district = form.district.value;
    
    const upazila = form.upazila.value;
    const image = form.image.files[0]

    console.log(name, email, blood_group, password, confirm_password, district, upazila, image);

    try {
      // upload image
      const imageData = await imageUpload(image);
      

      // create user
      const result = await createUser(email, password)

      // update user name and photo
      await updateUserProfile(name, imageData?.data?.display_url);

      console.log(result);

       // save user in data in database
       const dbResponse = await saveUser(result?.user)
       console.log(dbResponse);

        // get token
      await getToken(result?.user?.email)
      navigate('/')
      

    } catch (err) {
      console.log(err);
    }
    

  }
  
  return (
    <>
      <Helmet>
        <title>Blood Donation | SignUp</title>
      </Helmet>

      <div className='flex justify-center items-center min-h-screen'>
        <div className='flex flex-col max-w-5xl p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900'>
          <div className='mb-8 text-center'>
            <h1 className='my-3 text-4xl font-bold'>Sign Up</h1>
            <p className='text-sm text-gray-400'>Welcome to </p>
          </div>
          <form onSubmit={handleSubmit}
            noValidate=''
            action=''
            className='space-y-6 ng-untouched ng-pristine ng-valid'
          >
            <div className='space-y-4'>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                {/* name field */}
                <div>
                  <label htmlFor='email' className='block mb-2 text-sm'>
                    Name
                  </label>
                  <input
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
                  <label htmlFor='image' className='block mb-2 text-sm'>
                    Select Image:
                  </label>
                  <input
                    required
                    type='file'
                    id='image'
                    name='image'
                    accept='image/*'
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor='email' className='block mb-2 text-sm'>
                    Email address
                  </label>
                  <input
                    type='email'
                    name='email'
                    id='email'
                    required
                    placeholder='Enter Your Email Here'
                    className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
                    data-temp-mail-org='0'
                  />
                </div>
                <div>
                  <label htmlFor='email' className='block mb-2 text-sm'>
                    Select Blood Group
                  </label>
                  <select defaultValue="default" name="blood_group" className="select w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900">
                    <option value="default">Blood Group</option>
                    <option>A+</option>
                    <option>A-</option>
                    <option>B+</option>
                    <option>B-</option>
                    <option>AB+</option>
                    <option>AB-</option>
                    <option>O+</option>
                    <option>O-</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                {/* password */}
                <div>
                  <div className='flex justify-between'>
                    <label htmlFor='password' className='text-sm mb-2'>
                      Password
                    </label>
                  </div>
                  <input
                    type='password'
                    name='password'
                    autoComplete='new-password'
                    id='password'
                    required
                    placeholder='*******'
                    className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
                  />
                </div>
                {/* confirm password */}
                <div>
                  <div className='flex justify-between'>
                    <label htmlFor='password' className='text-sm mb-2'>
                      Confirm Password
                    </label>
                  </div>
                  <input
                    type='password'
                    name='confirm_password'


                    required
                    placeholder='*******'
                    className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor='email' className='block mb-2 text-sm'>
                    District
                  </label>
                  <select name="district"
                   className="select w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900">

                    {
                      districts.map(district => <option key={district.id}>{district.name}</option>)
                    }
                   
                  </select>
                </div>
                <div>
                  <label htmlFor='email' className='block mb-2 text-sm'>
                    Upazila
                  </label>
                  <select name="upazila" className="select w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900">
                    {
                      upazilas?.map(upazila =><option key={upazila.id}>{upazila.name}</option> )
                    }
                   
                  </select>
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
            'Sign Up'
          )}
                

              </button>
            </div>
          </form>


          <p className='px-6 text-sm text-center text-gray-400'>
            Already have an account?{' '}
            <Link
              to='/login'
              className='hover:underline hover:text-rose-500 text-gray-600'
            >
              Login
            </Link>
            .
          </p>
        </div>
      </div>
    </>
  );
};

export default SignUp;