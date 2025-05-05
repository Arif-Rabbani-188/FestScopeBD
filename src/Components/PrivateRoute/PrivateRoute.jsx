import React, { use } from 'react';
import { Authconext } from '../../Provider/AuthProvider';
import { Navigate } from 'react-router';

const PrivateRoute = ({children}) => {

    const {user, loading} = use(Authconext);
    if(loading){
        return children;
    }
    if(user && user?.email){
        return children;
    }
    return  <Navigate to='/login'></Navigate>
    
};

export default PrivateRoute;