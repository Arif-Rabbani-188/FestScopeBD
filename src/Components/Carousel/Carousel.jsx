import React from "react";

const Carousel = ({ location }) => {
  const newLocation = Array.isArray(location) ? [...location] : [];

  const locationData = newLocation.map((location) => {
    return {
      id: location?.id || "",
      name: typeof location === "object" && location?.name ? location.name : "Unknown",
      image: location?.thumbnail || "",
      description: location?.description || "No description available",
      location: location?.location || "Unknown",
      date: location?.date || "Unknown",
    };
  });
  return (
    <div className="carousel w-full max-h-screen">
      {locationData.map((item, index) => (
        <div
          key={item.id || `carousel-item-${index}`}
          id={`slide${index + 1}`}
          className="carousel-item relative w-full"
        >
          <img src={item.image || ""} className="w-full" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between items-center">
            <a
              href={`#slide${index === 0 ? locationData.length : index}`}
              className="btn btn-circle"
            >
              ❮
            </a>
            <div className="hidden md:flex flex-col gap-3 items-center p-10 bg-amber-200 rounded-lg shadow-lg">
              <h1 className="text-white text-3xl">{item.name || "Unknown"}</h1>
              <p className="text-white text-xl ml-5">{item.location || "Unknown"}</p>
              <p className="text-white text-xl ml-5">{item.date || "Unknown"}</p>
            </div>
            <a
              href={`#slide${(index + 1) % locationData.length + 1}`}
              className="btn btn-circle"
            >
              ❯
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Carousel;
