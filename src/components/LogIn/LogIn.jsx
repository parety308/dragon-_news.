import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../../Provider/AuthProvider';

const LogIn = () => {
    const { loginUser } = use(AuthContext);
    const handleLogIn = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        loginUser(email,password);
    }
    return (
        <div className="flex flex-col justify-center  min-h-screen rounded-xl">
            <div className="hero-content flex-col bg-base-200 mx-auto w-120 rounded-xl">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                </div>
                <div className="card  w-full max-w-lg shrink-0  ">
                    <div className="card-body ">
                        <form onSubmit={handleLogIn} >
                        <fieldset className="fieldset text-xl">
                            <label className="label ">Email</label>
                            <input type="email" name='email' className="input" placeholder="Email" />
                            <label className="label">Password</label>
                            <input type="password" name='password' className="input" placeholder="Password" />
                            <div><a className="link link-hover">Forgot password?</a></div>
                            <div>Haven't Account ?. go to <Link to='/auth/register' className='link link-hover'>registration</Link>.</div>
                            <button type='submit' className="btn btn-neutral mt-4">Login</button>
                        </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogIn;