import React from 'react';
import logo from '../../assets/logo.png'
import { format } from 'date-fns';
const Header = () => {
    return (
        <div className='flex flex-col justify-center items-center text-accent mt-4'>
            <img src={logo} alt="" />
            <h3 className='mt-1'>Journalism Without Fear or Favour</h3>
            <p>{format(new Date(),"EEEE, MMMM MM, yyyy")}</p>
        </div>
    );
};

export default Header;