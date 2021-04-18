import axios from 'axios';
import React, { useEffect, useState } from 'react';
export const Reviews = () => {

    const [loading, setLoading] = useState(true);

    const [reviews, setReviews] = useState(null);
    useEffect(() => {
        axios.get(`http://localhost:5000/reviews`)
            .then(res => res.data)
            .then(data => { setReviews(data); setLoading(false) })
    }, [])

    
        return (
            <>
                <h1 className="text-center text-decoration-underline pt-5">User Reviews</h1>
                <div className="container pt-5">
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 g-4">
                        {
                            reviews?.map(review => (
                                <div key={review._id} className="col">
                                    <div className="card h-100">
                                        <div className="card-body">
                                            <p>{review.msg}</p>
                                        </div>
                                        <div className="card-footer d-flex justify-content-between align-items-center">
                                            <strong>{review.name}</strong>
                                            <br />
                                            <small className="text-muted"> {review.rating} / 5 </small>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </>)
       
};

export default Reviews;