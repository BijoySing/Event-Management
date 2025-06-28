import React from 'react';
import './Banner.css'; // Import the CSS file for styling

const Banner = () => {
    return (
        <div className='banner-container my-1'>
            <img
                className='banner-image'
                src="https://i.ibb.co/bN6hKDW/c.jpg"
                alt=""
            />
            <div className='overlay'></div> {/* Add an overlay */}
            <div className='banner-text'>
                <h1 className='text-3xl lg:text-8xl text-gray-100 font-bold'>Moments into Memories</h1>
                <h2 className=' text-xl lg:text-4xl text-gray-100 font-semibold'>Crafting Unforgettable Events</h2>
                <p className='text-gray-200 text-lg lg:text-2xl mt-4'>
                    Crafting unforgettable social events through creativity,
                     style, and personalized touches, turning your moments into cherished, lifelong memories.

                    </p>
            </div>
        </div>
    );
};

export default Banner;
