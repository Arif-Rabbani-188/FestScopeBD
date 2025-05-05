import React, { use } from 'react';
import { Authconext } from '../Provider/AuthProvider';
import Login from './Login';
import Profile from './Profile';

const MyProfile = () => {

    const {user} = use(Authconext);
    return (
        <div className='w-11/12 mx-auto my-10'>
            {user ? <Profile></Profile> : <Login></Login>}
        </div>
    );
};

export default MyProfile;