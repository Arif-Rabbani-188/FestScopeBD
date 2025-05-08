import React, { use, useEffect, useState } from "react";
import { Authconext } from "../../Provider/AuthProvider";
import { Link, useLoaderData, useParams } from "react-router";
import { ToastContainer, toast } from "react-toastify";

const Details = () => {
  const [event, setEvent] = useState([]);
  const { id } = useParams();

  const { user, setLoading } = use(Authconext);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        const selectedEvent = data.find((item) => item.id === id);
        if (selectedEvent) {
          setEvent(selectedEvent);
        }
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [user]);

  const notify = (e) => {
    e.preventDefault();
    import("sweetalert").then((swal) => {
      swal.default(`You have reserved a seat for ${event?.name}`).then(() => {
      window.location.href = "/";
      });
    });
  }

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src={event?.thumbnail}
          className="mx-w-sm md:max-w-xl rounded-lg shadow-2xl"
        />
        <div className="flex flex-col gap-5">
          <h1 className="text-2xl md:text-5xl font-bold">{event?.name}</h1>
          <p>
            <span className="font-bold">Location:</span> {event?.location}
          </p>
          <p>
            <span className="font-bold">Date:</span> {event?.date}
          </p>
          <p>
            <span className="font-bold">Category:</span> {event?.category}
          </p>
          <p>
            <span className="font-bold">Entry Fee:</span> {event?.entryFee}
          </p>
          <p className="text-justify">
            <span className="font-bold">Description:</span> {event?.description}
          </p>
          <form onSubmit={notify} className="fieldset">
            <label className="label">Name</label>
            <input
              type="text"
              name="name"
              className="input"
              placeholder="Name"
              required
            />
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              className="input"
              placeholder="Email"
              required
            />
            <button type="submit" className="btn btn-primary md:w-40 mt-5">
              Reserve a Seat
            </button>
          </form>
          
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Details;
