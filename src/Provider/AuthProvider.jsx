import React, { createContext, useState } from 'react';

export const Authconext = createContext();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)

    const authData = {
        user,
        setUser
    }
    return <Authconext value={authData}>
        {children}
    </Authconext>
};

export default AuthProvider;