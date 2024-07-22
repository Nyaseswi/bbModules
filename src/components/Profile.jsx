import React, { useState, useEffect } from 'react';
import { auth } from '../initFirebase';
import {toast} from 'react-toastify';
import {useNavigate} from 'react-router-dom'

const Profile = () => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();
    const fetchUserData = async () => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                setUser(user);  // Set user data to state
                toast.success('profile page')
            } else {
                setUser(null);  // Handle case when user is not logged in
                toast.success('error')
            }
        });
    }

    useEffect(() => {
        fetchUserData();
    }, []);

    const handleLogout = async (e) => {
        e.preventDefault();
    try {
      await auth.signOut();
        console.log('User logged out successfully')
      navigate('/')
      toast.success('User logged out Successfully',{
        position:'top-center'
      })
    } catch (error) {
      console.log(error.message)
      toast.success(error.message,{
        position:'top-center'
      })
    }
      };
    return (
        <div>
            <h1>Welcome To Your Profile</h1>
            {user ? (
                <div>
                    <p><strong>Name:</strong> {user.displayName || 'N/A'}</p>
                    <p><strong>Email:</strong> {user.email}</p>
                    <p><strong>UID:</strong> {user.uid}</p>
                </div>
            ) : (
                <p>No user is logged in.</p>
            )}
            <button type='button' onClick={handleLogout} >Logout</button>
        </div>
    );
}

export default Profile;
