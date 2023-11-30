import { useState } from "react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { getAllDonations } from "../../Api/donations";


const Search = () => {
    const { register, handleSubmit } = useForm();
    const [districts, setDistricts] = useState([]);
    const [upazilas, setUpazilas] = useState([]);
    const [searchDonar,setSearchDonar] = useState([])
    const [allFilterDatas,setAllFilterDatas] = useState([])
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

    useEffect(()=> {
        getAllDonations('/donations')
        .then((res) => {
            setSearchDonar(res);
        })
        .catch((error) => {
          console.error('Error fetching donations:', error);
        });
    },[])
    console.log(searchDonar);
    const onSubmit = async (data) => {
        console.log(data);

        const filterData = searchDonar?.filter((filterData) =>{
            console.log('filterdata',filterData);
            console.log('data',data);
            return (
                filterData.recipient_upazila
                === data.upazila &&
                filterData.recipient_district
                === data.district
                // filterData.bloodGroup === data.bloodGroup
            )
        })
        console.log(filterData);
        setAllFilterDatas(filterData)
    }

    console.log(allFilterDatas);


    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid grid-cols-1 md:grid-cols-3 container gap-6 mx-auto">

                    <div className="form-control w-full my-6">
                        <label htmlFor='email' className='block mb-2 text-sm'>
                            Select Blood Group
                        </label>
                        <select defaultValue="default" {...register('bloodGroup', { require: true })} className="select w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900" >
                        <option disabled value="default">Blood Group</option>
                                <option value="A+">A+</option>
                                <option value="A-">A-</option>
                                <option value="B+">B+</option>
                                <option value="B-">B-</option>
                                <option value="AB+">AB+</option>
                                <option value="AB-">AB-</option>
                                <option value="O+">O+</option>
                                <option value="O-">O-</option>
                        </select>
                    </div>

                    <div className="form-control w-full my-6">
                        <label htmlFor='email' className='block mb-2 text-sm'>
                            District
                        </label>
                        <select {...register('district', { require: true })} name="district"
                            className="select w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900">

                            {
                                districts.map(district => <option key={district.id}>{district.name}</option>)
                            }

                        </select>
                    </div>
                    <div className="form-control w-full my-6">
                        <label htmlFor='email' className='block mb-2 text-sm'>
                            Upazila
                        </label>
                        <select {...register('upazila', { require: true })} name="upazila" className="select w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900">
                            {
                                upazilas?.map(upazila => <option key={upazila.id}>{upazila.name}</option>)
                            }

                        </select>
                    </div>
                </div>
                <button className="btn bg-red-700 hover:bg-red-700 text-white mx-auto flex">Search</button>
            </form>

            <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}

    {
        allFilterDatas.length > 0 &&  <thead>
        <tr>
          <th></th>
          <th>Name</th>
          <th>Upazila</th>
          <th>District</th>
        </tr>
      </thead>
    }
 <tbody>
    {
        allFilterDatas?.map((data,index) => <tr key={data._id}>
            
            
              <th>{index + 1}</th>
              <td>{data?.recipient_name}</td>
              <td>{data?.recipient_upazila}</td>
              <td>{data?.recipient_district}</td>
            </tr>
           
           
           
          )
    }
   
   </tbody>
  </table>
</div>

        </div>
    );
};

export default Search;