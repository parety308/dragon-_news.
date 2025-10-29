import React from 'react';
import NavBar from '../components/NavBar/NavBar';
import { Outlet } from 'react-router';

const AuthLayout = () => {
    return (
        <div>
           <div className='my-6 w-11/12 mx-auto'>
             <NavBar></NavBar>
           </div>
            <Outlet/>
        </div>
    );
};

export default AuthLayout;