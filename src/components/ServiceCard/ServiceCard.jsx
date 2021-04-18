import React, { useState } from 'react';
import { useHistory } from 'react-router';
import './ServiceCard.css'

const ServiceCard = ({_id,name,details,price,imgUrl}) => {
    const history = useHistory();
    const [animation, setAnimation] = useState(false)
    return (
        <div className="col" id="service-card" onMouseEnter={()=>setAnimation(true)} onMouseLeave={()=>setAnimation(false)}>
            <div className="card h-100">
                <img src={imgUrl} style={{height: '100%', objectFit: 'cover'}} className={`card-img-top ${animation ? 'animate': ''}`} alt="..." />
                <div className="card-body">
                    <strong>{name}</strong>
                    <br />
                    <small className="text-muted">{details}</small>
                </div>
                <div className="card-footer d-flex justify-content-between align-items-center">
                    <strong className="text-muted">${price}</strong>
                    <button onClick={()=> history.push(`/checkout/${_id}`)} className="btn btn-success">Book Now</button>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;