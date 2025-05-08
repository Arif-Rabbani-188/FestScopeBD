import React, { createContext, useEffect, useState } from 'react';
import auth from '../Firebase/Firebase.init';
import { onAuthStateChanged } from 'firebase/auth';

export const Authconext = createContext();

const AuthProvider = ({children}) => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);

    useEffect(()=>{
          const unsubscribed = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
              setUser(currentUser);
            } else {
              setUser(null);
            }
            setLoading(false);
          }
          );
          return () => {
            unsubscribed();
          };
        },[])

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