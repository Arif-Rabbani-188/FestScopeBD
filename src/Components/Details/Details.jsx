import React, { use, useEffect, useState } from "react";
import { Authconext } from "../../Provider/AuthProvider";
import { Link, useLoaderData, useParams } from "react-router";

const Details = () => {
  const [event, setEvent] = useState([]);
  const { id } = useParams();
  // const data = useLoaderData();

  useEffect(()=>{
    fetch('/data.json')
    .then(res => res.json())
    .then(data => {
      const selectedEvent = data.find((item) => item.id === id);
      if (selectedEvent) {
        setEvent(selectedEvent);
      }
    })
    .catch(error => console.error('Error fetching data:', error));
  },[])


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
          <button className="btn btn-primary md:w-40">Reserve a Seat</button>
          <Link className="btn btn-primary md:w-40" to="/home">Back To Home</Link>
        </div>
      </div>
    </div>
  );
};

export default Details;
