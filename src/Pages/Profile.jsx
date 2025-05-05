import React, { use } from "react";
import { Authconext } from "../Provider/AuthProvider";
import { Link } from "react-router";

const Profile = () => {

    const {user} = use(Authconext);
  return (
    <div className="flex justify-center items-center">
      <div className="card bg-base-100 max-w-[500px] shadow-sm">
        <figure className="px-10 pt-10">
          <img
            src={user?.photoURL}
            alt="Shoes"
            className="rounded-full w-32 h-32"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{user?.displayName}</h2>
          <p>
            <span className="font-bold">Email:</span> {user?.email}
          </p>
          <div className="card-actions">
            <Link to="/home" className="btn btn-primary">Back To Home</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
