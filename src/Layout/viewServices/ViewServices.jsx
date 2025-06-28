import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

const ViewServices = () => {
    const services = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const service = services.find(service => service.id === idInt);

    const handleBooking = () => {
        Swal.fire({
            title: 'Success!',
            text: 'Your booking has been confirmed 🎉',
            icon: 'success',
            confirmButtonText: 'Awesome!',
            confirmButtonColor: '#f97316',
            background: '#fff',
        });
    };

    return (
        <div className="mb-12 px-4 md:px-16 lg:px-32">
            <div className="rounded-xl overflow-hidden shadow-md bg-white border border-gray-200">
                <img className="w-full h-[480px] object-fit" src={service.image} alt={service.title} />
                <div className="p-6 space-y-4">
                    <h1 className="text-4xl font-bold text-center text-gray-800">{service.title}</h1>
                    <p className="text-gray-600 text-center">{service.service_description}</p>

                    <div className="flex justify-center">
                        <span className="inline-block bg-gradient-to-r from-orange-400 to-pink-500 text-blue-600 text-sm font-semibold px-4 py-2 rounded-full shadow-md">
                            Welcome to EventHub
                        </span>
                    </div>

                    <div className="bg-gray-100 rounded-lg p-4">
                        <h2 className="text-xl font-semibold mb-2">Our Responsibilities</h2>
                        <p className="text-gray-700">{service.our_responsibility}</p>
                    </div>

                    <div className="bg-gray-100 rounded-lg p-4">
                        <h2 className="text-xl font-semibold mb-2">Contact Information</h2>
                        <p className="text-gray-700">📞 {service.contact_info.phone}</p>
                        <p className="text-gray-700">📧 {service.contact_info.email}</p>
                        <p className="text-gray-700">📍 {service.contact_info.address}</p>
                    </div>

                    <div className="bg-gray-100 rounded-lg p-4">
                        <h2 className="text-xl font-semibold mb-2">Customer Review</h2>
                        <p className="text-gray-700 italic">"{service.customer_review}"</p>
                        <p className="text-yellow-500 font-bold">⭐ {service.ratings}</p>
                    </div>

                    <div className="flex justify-center">
                        <button
                            onClick={handleBooking}
                            className="mt-4 bg-blue-500 text-gray-200 text-bold px-10 py-4 rounded-full shadow-lg hover:scale-105 transition duration-300"
                        >
                            Book Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewServices;
