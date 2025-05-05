import React, { createContext, useState } from 'react';

export const Authconext = createContext();

const AuthProvider = ({children}) => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);

    const authData = {
        user,
        setUser,
        loading,
        setLoading,
    }
    return <Authconext value={authData}>
        {children}
    </Authconext>
};

export default AuthProvider;