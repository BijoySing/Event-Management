import React from 'react';
import './Banner.css'; // Import the CSS file for styling

const Banner = () => {
    return (
        <div className='banner-container'>
            <img
                className='banner-image'
                src="/src/assets/c.jpg"
                alt=""
            />
            <div className='overlay'></div> {/* Add an overlay */}
            <div className='banner-text'>
                <h1 className='text-3xl lg:text-6xl text-gray-100 font-bold'>Moments into Memories</h1>
                <h2 className=' text-xl lg:'>Crafting Unforgettable Events</h2>
                <p className='text-gray-200 text-purple-100'>
                    Crafting unforgettable social events through creativity,
                     style, and personalized touches, turning your moments into cherished, lifelong memories.

                    </p>
            </div>
        </div>
    );
};

export default Banner;
