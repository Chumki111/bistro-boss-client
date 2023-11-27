import axiosSecure from ".";

// save donation
export const addDonation =async(donationData) =>{
    const {data} = await axiosSecure.post(`/donations`,donationData)
    return data;
}