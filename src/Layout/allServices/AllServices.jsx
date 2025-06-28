import React, { useEffect, useState } from 'react';
import DetailsServices from '../services/DetailsServices';

const AllServices = () => {
    const [services, setServices] = useState([]);
    const [showAll, setShowAll] = useState(false);

    useEffect(() => {
        fetch('Allservices.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);

    const visibleServices = showAll ? services : services.slice(0, 6);

    return (
        <div className='my-10 mx-4 md:mx-8 lg:mx-16'>
            <h1 className='text-4xl text-center mb-6 font-bold text-gray-800'>Our Services</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {visibleServices.map((service, index) => (
                    <DetailsServices
                        key={service.id}
                        service={service}
                        delay={index * 0.3}
                    />
                ))}
            </div>

            {!showAll && services.length > 6 && (
                <div className="flex justify-center mt-8">
                    <button
                        onClick={() => setShowAll(true)}
                        className="px-6 py-3 rounded-full bg-blue-600 text-pink-100 font-semibold hover:scale-200 transition duration-300"
                    >
                        Show More
                    </button>
                </div>
            )}
        </div>
    );
};

export default AllServices;
