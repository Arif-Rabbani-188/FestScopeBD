import React, { useContext } from "react";
import { Link, NavLink } from "react-router";
import "./Nav.css";
import { Authconext } from "../Provider/AuthProvider";
import { signOut, onAuthStateChanged } from "firebase/auth";
import auth from "../Firebase/Firebase.init";

const Navbar = () => {
  const { user, setUser } = useContext(Authconext);

  React.useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, [setUser]);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        setUser(null);
      })
      .catch((error) => {
        console.error("Error signing out: ", error);
      });
  };

  return (
    <div className="navbar w-full md:w-11/12 mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink to="/home">Home</NavLink>
            </li>
            <li>
              <NavLink to="/myProfile">My Profile</NavLink>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">FestScope BD</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink to="/home">Home</NavLink>
          </li>
          <li>
            <NavLink to="/myProfile">My Profile</NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end flex items-center gap-5">
        {user && (
          <div className="avatar avatar-placeholder">
            <div className="bg-neutral text-neutral-content w-12 rounded-full">
              <img src={user?.photoURL} alt="" />
            </div>
          </div>
        )}
        <h1 to="/login" className="btn bg-[#007bff] text-white">
          {user ? (
            <button onClick={handleLogout}>Logout</button>
          ) : (
            <Link to="/myProfile">Login</Link>
          )}
        </h1>
      </div>
    </div>
  );
};

export default Navbar;
