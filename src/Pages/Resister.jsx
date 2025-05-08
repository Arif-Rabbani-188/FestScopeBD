import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import auth from "../Firebase/Firebase.init";
import { Link, Navigate, useNavigate } from "react-router";
import { updateProfile } from "firebase/auth";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import swal from 'sweetalert';


const Resister = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const resisterUser = (email, password, name, photoURL) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        updateProfile(user, {
          displayName: name,
          photoURL: photoURL,
        })
          .then(() => {
            swal("Success!", "Your profile has been updated!", "success").then(() => {
              navigate("/myProfile");
              window.location.reload();
            });

          })
          .catch((error) => {
            console.error("Error updating profile:", error);
          });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // console.error(errorCode, errorMessage);
      });
  };

  const handleResister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const isValidLength = password.length >= 6;

    if (!hasUppercase) {
      alert("Password must have at least one uppercase letter.");
      return;
    }

    if (!hasLowercase) {
      alert("Password must have at least one lowercase letter.");
      return;
    }

    if (!isValidLength) {
      alert("Password must be at least 6 characters long.");
      return;
    }

    // console.log(name, photoURL, email, password);
    resisterUser(email, password, name, photoURL);
  };
  return (
    <div className="hero py-24">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <h1 className="text-center text-2xl font-bold">Resister</h1>
          <form className="fieldset" onSubmit={handleResister}>
            <label className="label">Full Name</label>
            <input
              type="text"
              name="name"
              className="input"
              placeholder="Name"
            />
            <label className="label">PhotoURL</label>
            <input
              type="text"
              name="photoURL"
              className="input"
              placeholder="PhotoURL"
            />
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              className="input"
              placeholder="Email"
            />
            <label className="label">Password</label>
            <div className="flex items-center">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                className="input"
                placeholder="Password"
              />
              <div
                className="absolute right-14 text-lg"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </div>
            </div>
            <div></div>
            <button className="btn btn-neutral mt-4" type="submit">
              Resister
            </button>

            <button className="btn mt-3 bg-amber-100">
              {" "}
              <FaGoogle />
              Login with Google
            </button>
            <h1 className="text-center mt-5">
              Already have an account?{" "}
              <Link to="/login" className="underline text-blue-500">
                Log In
              </Link>
            </h1>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Resister;
