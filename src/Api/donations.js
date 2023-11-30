import axiosSecure from ".";

// save donation
export const addDonation =async(donationData) =>{
    const {data} = await axiosSecure.post(`/donations`,donationData)
    return data;
}
// save blogData
export const addBlog =async(blogData) =>{
    const {data} = await axiosSecure.post(`/blogs`,blogData)
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

// fetch all users from db
export const getAllUsers= async() =>{
    const {data} = await axiosSecure('/users')
    return data;
}
// fetch all donations from db
export const getAllDonations= async() =>{
    const {data} = await axiosSecure('/donations')
    return data;
}
// fetch all donations from db
export const getAllBlogs= async() =>{
    const {data} = await axiosSecure('/blogs')
    return data;
}
// fetch all donations from db
export const getAllHome= async() =>{
    const {data} = await axiosSecure('/admin-stats')
    return data;
}