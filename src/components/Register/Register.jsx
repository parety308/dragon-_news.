import React, { use } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../../Provider/AuthProvider';

const Register = () => {
    const { createUser, updateUser, setUser } = use(AuthContext);
    const navigate=useNavigate();
    const handleRegister = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const photoUrl = event.target.photoUrl.value;
        const password = event.target.password.value;
        const email = event.target.email.value;
        createUser(email, password)
            .then(result => {
                const user = result.user;
                updateUser({ displayName: name, photoURL: photoUrl })
                    .then(() => {
                        setUser({ ...user, displayName: name, photoURL: photoUrl });
                        navigate('/')
                    })
                    .catch(error => {
                        console.log(error);
                        setUser(user);
                    });
            })
            .catch(error => console.log(error));

        event.target.reset();
    }
    return (
        <div className="flex flex-col justify-center  min-h-screen rounded-xl">
            <div className="hero-content flex-col bg-base-200 mx-auto w-120 rounded-xl">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                </div>
                <div className="card  w-full max-w-lg shrink-0  ">
                    <div className="card-body ">
                        <form onSubmit={handleRegister} >
                            <fieldset className="fieldset text-xl">
                                <label className="label ">Name</label>
                                <input type="text" name='name' className="input" placeholder="Write Your Full Name" />
                                <label className="label ">PhotoURL</label>
                                <input type="text" name='photoUrl' className="input" placeholder="Write Your Photo URL" />
                                <label className="label ">Email</label>
                                <input type="email" name='email' className="input" placeholder=" Enter Your Email Address" />
                                <label className="label">New Password</label>
                                <input type="password" name='password' className="input" placeholder="Password" />
                                <div><a className="link link-hover">Forgot password?</a></div>
                                <div>Already Have an Account?. go to <Link to='/auth/login' className='link link-hover'>login</Link>.</div>
                                <button type='submit' className="btn bg-blue-500 mt-4 text-xl">Register</button>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;