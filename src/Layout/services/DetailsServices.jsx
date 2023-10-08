import React from 'react';
import { Link } from 'react-router-dom';

const DetailsServices = ({ service }) => {
    if (!service) {
        return null;
    }
    const {id, image, title, booking_cost, service_description, our_responsibility, contact_info, customer_review, ratings } = service;

    // Destructure contact_info object
    const { phone, email, address } = contact_info;

    return (
        <div>
            {/* <img className='w-[200px] rounded-md' src={image} alt={title} />
            <h1>{title}</h1> */}

            {/* <p>Booking Cost: {booking_cost}</p> */}

            <div className="bg-blue-100 h-[500px] card-side lg:card-side bg-base-100 shadow-xl">
            {/* <div className="bg-base-200 card-side lg:card-side bg-base-100 shadow-xl"> */}
                <figure><img className='w-[450px] h-[250px]' src={image} alt="/" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {title}</h2>
                    <p>
                        {service_description}
                    </p>
                    <div className="card-actions flex justify-between">
                        <button className="btn bg-orange-500 btn-disabled">Cost:{booking_cost}</button>
                        <Link to={`/service/${id}`}>
                        <button className="btn btn-primary bg-blue-300">Show More</button>
                        </Link>
                    </div>
                </div>
            </div>

            {/* <p>Description: {service_description}</p>
            <p>Our Responsibility: {our_responsibility}</p> */}

            {/* Render contact_info properties separately */}
            {/* <p>Contact Phone: {phone}</p>
            <p>Contact Email: {email}</p>
            <p>Contact Address: {address}</p> */}

            {/* <p>Customer Review: {customer_review}</p>
            <p>Ratings: {ratings}</p> */}
            {/* Add more details here */}
        </div>
    );
};

export default DetailsServices;
