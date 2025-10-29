import React, { use } from 'react';
import { NavLink } from 'react-router';
import userIcon from '../../assets/user.png'
import { AuthContext } from '../../Provider/AuthProvider';
const NavBar = () => {
    const { user, logOutUser } = use(AuthContext);
    const handleLogOut = () => {
        logOutUser()
            .then(
                alert('LogOut SuccessFully')
            )
            .catch(error => console.log(error));
    }
    return (
        <div className='flex justify-between  items-center'>
            {
                user && <h1>{user.email}</h1>
            }
            <div className=''></div>
            <div className='flex gap-100 '>
                <div className='flex gap-5 items-center text-accent'>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/about">About</NavLink>
                    <NavLink to={'/career'}>Career</NavLink>
                </div>
                <div className='flex gap-2 items-center'>
                    <img src={user?.photoURL || userIcon} alt="" className="w-10 h-10 rounded-full" />
                    {
                        user ? <button onClick={handleLogOut} className='bg-black text-white px-10 py-2 btn-primary rounded-md'><NavLink>LogOut</NavLink></button> : <button className='bg-black text-white px-10 py-2 btn-primary rounded-md'><NavLink to='/auth/login'>LogIn</NavLink></button>
                    }

                </div>
            </div>
        </div>
    );
};

export default NavBar;