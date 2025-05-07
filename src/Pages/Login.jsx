import { GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import React, { use, useEffect, useState } from "react";
import { FaGoogle } from "react-icons/fa";
import auth from "../Firebase/Firebase.init";
import AuthProvider, { Authconext } from "../Provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
    const handleSignIn = (email, password) => {
      signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
          const user = userCredential.user;
          // console.log(user);
          navigate(`${location.state? location.state : '/'}`);
      }).catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // console.error(errorCode, errorMessage);
      }
      );
    }
    const {user, setUser} = use(Authconext);

    const googleProvider = new GoogleAuthProvider();
    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
        .then(result => {
            const user = result.user;
            setUser(user);
            navigate(`${location.state? location.state : '/'}`);
            
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

        handleSignIn(email, password);
        // console.log(email, password);
    }

  return (
    <div className="hero ">
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
            <h1 className="text-center mt-5">Don't Have an Account? Please <Link to='/resister' className="underline text-blue-500">Resister</Link></h1>
          </div>
        </div>
      </div>
  );
};

export default Login;
