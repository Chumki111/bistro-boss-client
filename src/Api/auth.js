import axiosSecure from "."


// save user data in database
export const saveUser = async user => {
    const currentUser = {
        email: user.email,
        role: 'donar',
        status: 'active',
        image : user?.photoURL
    }

    const { data } = await axiosSecure.put(`/users/${user.email}`, currentUser)
    return data;
}


// get token from server
export const getToken = async email => {
    const { data } = await axiosSecure.post('jwt', email)
    console.log('token received from server------->', data);
    return data;
}

// clear token from browser

export const clearCookie = async () => {
    const { data } = await axiosSecure.get('/logout')

    return data;
}

// get user Role
export const getRole = async (email) => {
    const { data } = await axiosSecure(`/users/${email}`)
    return data;
}

