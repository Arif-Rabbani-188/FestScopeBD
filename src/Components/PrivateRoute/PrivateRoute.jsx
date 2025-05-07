import React, { use } from 'react';
import { Authconext } from '../../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({children}) => {

    const location = useLocation();

    const {user, loading} = use(Authconext);
    if(loading){
        return <div className="flex justify-center items-center h-screen">
            <progress className="progress w-56"></progress>
        </div>
    }
    if(user && user?.email){
        return children;
    }
    return  <Navigate state={location.pathname} to='/login'></Navigate>
    
};

export default PrivateRoute;