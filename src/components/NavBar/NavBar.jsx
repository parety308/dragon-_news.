import React from 'react';
import { NavLink } from 'react-router';
import user from '../../assets/user.png'
const NavBar = () => {
    return (
        <div className='flex justify-between  items-center'>
            <div className=''></div>
            <div className='flex gap-100 '>
            <div className='flex gap-5 items-center text-accent'>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to={'/career'}>Career</NavLink>
            </div>
            <div className='flex gap-2 items-center'>
                <img src={user} alt="" />
                <button className='bg-black text-white px-10 py-2 btn-primary rounded-md'><NavLink to='/login'>LogIn</NavLink></button>
            </div>
            </div>
        </div>
    );
};

export default NavBar;