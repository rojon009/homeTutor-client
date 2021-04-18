import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ServiceCard from '../ServiceCard/ServiceCard';
export const Services = () => {

    const [loading, setLoading] = useState(true);

    const [services, setServices] = useState(null);
    useEffect(() => {
        axios.get(`https://hometutordb01.herokuapp.com/services`)
            .then(res => res.data)
            .then(data => { setServices(data); setLoading(false) })
    }, [])

    if (services) {
        return (
            <>
                <h1 className="text-center text-decoration-underline pt-5">Our Services</h1>
                <div className="container pt-5 pb-5">
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 g-4">
                        {
                            services.map(service => <ServiceCard key={service._id} {...service} />)
                        }
                    </div>
                </div>
            </>
        );
    }
    return <>
        {
            loading && (
                <div className="d-flex justify-content-center mt-5 pt-5">
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>

            )
        }
    </>
};

export default Services;