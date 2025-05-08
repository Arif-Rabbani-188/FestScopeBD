import React, { use } from "react";
import { Authconext } from "../Provider/AuthProvider";
import { Link } from "react-router";
import { updateProfile } from "firebase/auth";
import auth from "../Firebase/Firebase.init";
import swal from "sweetalert";

const Profile = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    // console.log(name, photoURL);

    handleUpdateProfile(name, photoURL);
  };
  const handleUpdateProfile = (name, photoURL) => {
    updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photoURL,
    })
      .then(() => {
        swal("Profile updated successfully", {
          icon: "success",
        }).then(() => {
          window.location.reload();
        });
      })
      .catch((error) => {});
  };
  const { user } = use(Authconext);
  return (
    <div className="flex justify-center items-center">
      <div className="card bg-base-100 max-w-[500px] shadow-sm">
        <figure className="px-10 pt-10">
          <img
            src={user?.photoURL}
            alt="Profile"
            className="rounded-full w-32 h-32"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{user?.displayName}</h2>
          <p>
            <span className="font-bold">Email:</span> {user?.email}
          </p>
          <p className="break-words">
            <span className="font-bold">PhotoURL:</span>{" "}
            <Link to={user?.photoURL} target="_blank">
              {user?.photoURL}
            </Link>
          </p>
          <form onSubmit={handleSubmit} className="fieldset">
            <label className="label">Name</label>
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
            <button className="btn btn-primary mt-4" type="submit">
              Update Profile
            </button>
            <Link to="/home" className="btn btn-primary">
              Back To Home
            </Link>
          </form>
          <button
            className="btn btn-primary mt-4"
            onClick={() => {
              auth
                .signOut()
                .then(() => {
                  swal("Logout successfully", {
                    icon: "success",
                  }).then(() => {
                    window.location.reload();
                  });
                })
                .catch((error) => {
                  console.error("Logout error:", error);
                });
            }}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
