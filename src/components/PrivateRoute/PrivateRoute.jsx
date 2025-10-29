import React, { use } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({ children }) => {
    const location = useLocation();
    const { user } = use(AuthContext);
    if (user && user?.email) {
        return children;
    }
    return <Navigate state={location.pathname} to='/auth/logIn'></Navigate>

};

export default PrivateRoute;