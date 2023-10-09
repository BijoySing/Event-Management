import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const ViewServices = () => {
    // const {id, image, title, booking_cost, service_description, our_responsibility, contact_info, customer_review, ratings } = service;

    // const { phone, email, address } = contact_info;
    const services = useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id);
    const service = services.find( service=> service.id === idInt);

    console.log(service); 
    // const{id, image, title, booking_cost, service_description, our_responsibility, contact_info, customer_review, ratings } = service;



    return (
        <div>
            <h1>new serviresss:{id}</h1>
            <h1>name:{service.title}</h1>
            <img src={service.image} alt="" />
            <h1> {service.service_description}</h1>
        </div>
    );
};

export default ViewServices;