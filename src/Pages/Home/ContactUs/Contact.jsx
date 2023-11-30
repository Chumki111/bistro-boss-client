import { useEffect } from "react";
import { useState } from "react";


const Contact = () => {
    const [districts,setDistricts] = useState([]);
    const [upazilas,setUpazilas] = useState([]);
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
    return (
        <div className="">
            <div><h1 className="text-2xl text-center font-semibold my-10">Contact With Us</h1></div>


            <div className="my-10 px-2 md:px-8 lg:px-12">
            <div className="bg-[#e72525] h-[200px] rounded flex justify-center items-center">
                <h1 className="text-white text-3xl font-semibold">Call Us: +88 0192345678910</h1>
            </div>
        </div>

        <h1 className="text-4xl text-center font-bold my-6">Or....</h1>

            <div className='flex flex-col  mx-auto max-w-5xl p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900'>
            <form
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
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              
                <div>
                  <label htmlFor='email' className='block mb-2 text-sm'>
                    Your Phone
                  </label>
                  <input
                    type='number'
                    name='email'
                    id='email'
                    required
                    placeholder='Enter Phone'
                    className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
                    data-temp-mail-org='0'
                  />
                </div>
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
              </div>

             

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
               
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
               Submit
                

              </button>
            </div>
          </form>
          </div>
        
        </div>
    );
};

export default Contact;