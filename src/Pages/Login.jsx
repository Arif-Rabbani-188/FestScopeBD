import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from "firebase/auth";
import React, { use, useEffect } from "react";
import { FaGoogle } from "react-icons/fa";
import auth from "../Firebase/Firebase.init";
import { Authconext } from "../Provider/AuthProvider";

const Login = () => {

    const {user, setUser} = use(Authconext);

    const googleProvider = new GoogleAuthProvider();
    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
        .then(result => {
            const user = result.user;
            setUser(user);
        })
        .catch(error => {
            // console.error("Error signing in with Google: ", error);
        });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password);
    }

    useEffect(()=>{
      const unsubscribed = onAuthStateChanged(auth, (currentUser) => {
        if (currentUser) {
          setUser(currentUser);
        } else {
          setUser(null);
        }
      }
      );
      return () => {
        unsubscribed();
      };
    },[])
  return (
    <div className="hero bg-base-200 min-h-screen ">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <h1 className="text-center text-2xl font-bold">Login</h1>
            <form onSubmit={handleSubmit} className="fieldset">
              <label className="label">Email</label>
              <input type="email" name="email" className="input" placeholder="Email" />
              <label className="label">Password</label>
              <input type="password" name="password" className="input" placeholder="Password" />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn btn-neutral mt-4" type="submit">Login</button>
            </form>
            <button onClick={handleGoogleSignIn} className="btn mt-3 bg-amber-100"> <FaGoogle />Login with Google</button>
          </div>
        </div>
      </div>
  );
};

export default Login;
