import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const ViewServices = () => {
    // const {id, image, title, booking_cost, service_description, our_responsibility, contact_info, customer_review, ratings } = service;

    // const { phone, email, address } = contact_info;
    const services = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const service = services.find(service => service.id === idInt);

    // console.log(service); 
    // const{id, image, title, booking_cost, service_description, our_responsibility, contact_info, customer_review, ratings } = service;



    return (

        // <div>
        //     <div className='flex justify-center'>
        //         <img className='w-3/4 lg:h-[70vh]' src={service.image} alt="" /></div>
        //     <h1 className='text-6xl text-center'>{service.title}</h1>

        //     <h1> {service.service_description}</h1>
        // </div>
        <div className="mb-8">
            <div className="flex justify-center">
                <img className="w-3/4 lg:h-[70vh]" src={service.image} alt={service.title} />
            </div>
            <h1 className="text-4xl lg:text-6xl text-center mt-6 font-semibold">{service.title}</h1>
            <p className="text-lg text-gray-600 text-center mt-4">{service.service_description}</p>
            <div className="flex justify-center mt-4">
                <p className=" text-xl bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                    welcome to our EventHub
                </p>
            </div>
            <div className="mt-8 px-4 py-2 bg-gray-100 rounded-lg">
                <h2 className="text-xl font-semibold">Our Responsibilities</h2>
                <p className="text-gray-700 mt-2">{service.our_responsibility}</p>
            </div>
            <div className="mt-8 px-4 py-2 bg-gray-100 rounded-lg">
                <h2 className="text-xl font-semibold">Contact Information</h2>
                <p className="text-gray-700 mt-2">Phone: {service.contact_info.phone}</p>
                <p className="text-gray-700">Email: {service.contact_info.email}</p>
                <p className="text-gray-700">Address: {service.contact_info.address}</p>
            </div>
            <div className="mt-8 px-4 py-2 bg-gray-100 rounded-lg">
                <h2 className="text-xl font-semibold">Customer Review</h2>
                <p className="text-gray-700 mt-2">{service.customer_review}</p>
                <p className="text-gray-700">Ratings: {service.ratings}</p>
            </div>
        </div>
    );

  
  


};

export default ViewServices;