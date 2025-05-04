import React from "react";

const Carousel = ({ location }) => {
  const newLocation = [...location];

  const locationData = newLocation.map((location) => {
    return {
      id: location.id,
      name: location.name,
      image: location.thumbnail,
      description: location.description,
      location: location.location,
      date: location.date,
    };
  });

  console.log(locationData);
  return (
    <div className="carousel w-full max-h-screen">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={locationData[0].image} className="w-full" />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between items-center">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <div className="hidden md:flex flex-col gap-3 items-center p-10 bg-amber-200 rounded-lg shadow-lg">
            <h1 className="text-white text-3xl">{locationData[0].name}</h1>
            <p className="text-white text-xl ml-5">{locationData[0].location}</p>
            <p className="text-white text-xl ml-5">{locationData[0].date}</p>
          </div>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={locationData[1].image} className="w-full" />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between items-center">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <div className="hidden md:flex flex-col gap-3 items-center p-10 bg-amber-200 rounded-lg shadow-lg">
            <h1 className="text-white text-3xl">{locationData[1].name}</h1>
            <p className="text-white text-xl ml-5">{locationData[1].location}</p>
            <p className="text-white text-xl ml-5">{locationData[1].date}</p>
          </div>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img
          src={locationData[2].image}
          className="w-full"
        />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between items-center">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <div className="hidden md:flex flex-col gap-3 items-center p-10 bg-amber-200 rounded-lg shadow-lg">
            <h1 className="text-white text-3xl">{locationData[2].name}</h1>
            <p className="text-white text-xl ml-5">{locationData[2].location}</p>
            <p className="text-white text-xl ml-5">{locationData[2].date}</p>

          </div>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
