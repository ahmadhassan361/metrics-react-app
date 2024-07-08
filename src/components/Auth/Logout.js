import React, { useEffect } from 'react';
import { logout } from '../../services/AuthService'; 
import { useNavigate } from 'react-router-dom';

export const Logout = () => {

    const navigate = useNavigate();

    const handleLogout = () => {
        logout(); 

        // Redirect to the login page
        navigate('/login');
    };
    useEffect(()=>{
        handleLogout()
    },[])
    return (
      <></>
    );
};

