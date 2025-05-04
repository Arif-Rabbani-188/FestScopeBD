import React from "react";
import { Link } from "react-router";

const Place = ({ place }) => {
  console.log(place);
  return (
    <div className="card shadow-lg p-[2px]">
                    <img className="h-3/4 rounded-t-2xl m-[5px]" src={place.thumbnail} alt="" />
                    <div className="py-5 px-2 lg:px-5 space-y-3">
                        <div className="flex justify-between">
                            <h1 className="font-bold text-lg">{place.name}</h1>
                            <p className="font-bold text-lg">{place.entryFee}</p>
                        </div>
                        <p>Location: {place.location}</p>
                        <p>Date: <span className="font-bold">{place.date}</span></p>
                        <p>Category: {place.category}</p>
                        <Link to='/home' className="underline">View Details</Link>
                    </div>
                </div>
  );
};

export default Place;
