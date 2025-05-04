import React from 'react';
import Carousel from '../Components/Carousel/Carousel';
import { useLoaderData } from 'react-router';
import Place from '../Components/place/Place';
import FAQ from '../Components/FAQ/FAQ';

const Home = () => {

    const location = useLoaderData() || [];


    return (
        <div className='md:w-11/12 mx-auto my-10'>
            {/* Carousel Section  */}

            <Carousel location={location}></Carousel>

            {/* Places Section */}
                        <h1 className='text-2xl md:text-3xl font-bold text-center mt-10 mb-3'>Upcoming Events</h1>
                        <p className='text-center md:text-lg text-gray-500'>Discover exciting events happening near you and make unforgettable memories.</p>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10'>
                            {
                                Array.isArray(location) && location.map(event => <Place
                                    key={event.id}
                                    place={event}
                                ></Place>)
                            }
                        </div>

                        {/* FAQ Section */}
            <h1 className="text-3xl md:text-5xl font-bold mt-20 mb-5 text-center">Frequently Asked Questions</h1>
            <p className="text-xl text-gray-500 text-center mb-5">Have questions? We've got answers to help you plan your next adventure.</p>
            <FAQ></FAQ>
        </div>
    );
};

export default Home;