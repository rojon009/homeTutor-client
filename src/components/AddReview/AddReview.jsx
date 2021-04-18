import axios from 'axios';
import React, { useState } from 'react';



const AddReview = () => {

    const [reviewDetails, setReviewDetails] = useState({
        name: '',
        rating: '',
        msg: '',
    });

    const handleChange = (e) => {
        e.preventDefault();
            setReviewDetails({ ...reviewDetails, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
                        axios.post(`http://localhost:5000/reviews/addReviews`, { name: reviewDetails.name, msg: reviewDetails.msg, rating: reviewDetails.rating })
                            .then(res => {
                                if(res.data) {
                                    setReviewDetails({
                                        name: '',
                                        rating: '',
                                        msg: '',
                                    })
                                    document.querySelector("form").reset();
                                }
                            })
                            .catch(err => console.log(err))
    }

    return (
        <form onSubmit={handleSubmit} className="col bg-info">
            <div className="row g-3 p-5">
                <div className="col-6">
                    <input name="name" onChange={handleChange} value={reviewDetails.name} type="text" className="form-control" placeholder="Your Name" required />
                </div>
                <div className="col-6">
                    <input name="msg" onChange={handleChange} value={reviewDetails.msg} type="text" className="form-control" placeholder="Your message" required />
                </div>
                <div className="col-6">
                    <input name="rating" onChange={handleChange} value={reviewDetails.rating} type="number" className="form-control" placeholder="Rating (between 1 and 5)" required />
                </div>
                <div className="col-2">
                    <button type="submit" className="btn btn-warning">SAVE</button>
                </div>
            </div>
        </form>
    );
};

export default AddReview;