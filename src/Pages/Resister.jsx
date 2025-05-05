import { createUserWithEmailAndPassword } from "firebase/auth";
import React from "react";
import auth from "../Firebase/Firebase.init";

const Resister = () => {

    const resisterUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
                const user = userCredential.user;

        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // console.error(errorCode, errorMessage);
        }
        );
    }

    const handleResister = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(name, photoURL, email, password);
        resisterUser(email, password);
    }
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
            <input
              type="password"
              name="password"
              className="input"
              placeholder="Password"
            />
            <div>
            </div>
            <button className="btn btn-neutral mt-4" type="submit">
              Resister
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Resister;
