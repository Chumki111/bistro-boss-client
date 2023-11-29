import axiosSecure from ".";

// save donation
export const addDonation =async(donationData) =>{
    const {data} = await axiosSecure.post(`/donations`,donationData)
    return data;
}

// fetch all donation for donar
export const getDonarDonations = async(email) =>{
    const {data} = await axiosSecure(`/donations/${email}`)
    return data;
}

// fetch single room from db
export const getSingleDonation= async id =>{
    const {data} = await axiosSecure(`/donation/${id}`)
    return data;
}