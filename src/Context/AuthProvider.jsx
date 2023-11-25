import { createContext, useEffect, useState } from 'react';
import {app} from '../Configs/firebase.config';
import {
    createUserWithEmailAndPassword,
    getAuth,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
    updateProfile,
  } from 'firebase/auth'
import {PropTypes } from 'prop-types';
import { clearCookie } from '../Api/auth';
export const AuthContext = createContext(null);
const auth = getAuth(app);
 
const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);

    // create User
    const createUser = (email,password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password)
    }

    // signIn
    const signIn =(email,password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }

    // logOut
    const logOut =async() =>{
        setLoading(true);
        await clearCookie()
        return signOut(auth)
    }
    // update name and photoUrl
    const updateUserProfile = (name,photo) =>{
        return updateProfile(auth.currentUser,{
            displayName: name,
            photoURL:photo,
        })
    }

    // onAuthStateChange
    useEffect(() =>{
        const unsubscribe =onAuthStateChanged(auth,currentUser =>{
            setUser(currentUser);
            console.log('currenUser---->',currentUser);
            setLoading(false)
        })
        return () =>{
            return unsubscribe();
        }
    })

    const authInfo ={
        createUser,user,loading,signIn,logOut,updateUserProfile
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};
AuthProvider.propTypes ={
    children:PropTypes.node
}
export default AuthProvider;