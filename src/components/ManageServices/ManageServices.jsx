import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ManageServices = () => {

    const [services, setServices] = useState(null);
    useEffect(() => {
        axios.get(`http://localhost:5000/services`)
            .then(res => res.data)
            .then(data => {
                setServices(data)
            })
    }, [])

    const deleteServices = (id) => {
        axios.delete(`http://localhost:5000/services/${id}`)
        .then(res => {
            if(res.data) {
                const filteredServices = services.filter(book => book._id !== id);
                setServices(filteredServices);
            }
        })
    }

    return (
        <div className="col-10 container-fluid p-5">
            <table className="table border">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">NAME</th>
                        <th scope="col">Details</th>
                        <th scope="col">PRICE</th>
                        <th scope="col">Handle</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        services?.map((service, index) => (
                            <tr key={service?._id} >
                                <th scope="row">{index+1}</th>
                                <td>{service?.name}</td>
                                <td>{service?.details}</td>
                                <td>{service?.price}</td>
                                <td>
                                    <svg onClick={()=> deleteServices(service?._id)} style={{cursor: 'pointer'}} height="20px" width="20px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="red">
                                        <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                                    </svg>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>

    );
};

export default ManageServices;