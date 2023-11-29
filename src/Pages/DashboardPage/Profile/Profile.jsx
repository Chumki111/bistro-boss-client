import useAuth from "../../../Hooks/useAuth";


const Profile = () => {
  const {user} = useAuth();
  console.log(user);
    return (
       <div className="flex justify-center items-center">
         <div className="relative flex flex-col text-gray-700 bg-white shadow-md w-96 rounded-xl bg-clip-border">
  <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg h-80 rounded-xl bg-clip-border">
    <img src={user?.photoURL} alt="profile-picture" />
  </div>
  <div className="p-6 text-center">
    <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
    Your name : {user?.displayName}
    </h4>
    <p className="block font-sans text-base antialiased font-medium leading-relaxed text-transparent bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-text">
     Your Email : {user?.email}
    </p>
    <p className="block font-sans text-base antialiased font-medium leading-relaxed text-transparent bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-text">
    You last Sign In Time : {user?.metadata?.lastSignInTime}
    </p>
  </div>
  <div className="flex justify-center p-6 pt-2 gap-7">
    <button className="btn btn-outline">Update Your Profile</button>
  </div>
</div>
       </div>
    );
};

export default Profile;