import axios from 'axios';
import React, { useState } from 'react';



const AddService = () => {

    const [serviceDetails, setServiceDetails] = useState({
        name: '',
        price: '',
        details: '',
        imgFile: ''
    });

    const handleChange = (e) => {
        e.preventDefault();
        if (e.target.name === 'imgFile') {
            setServiceDetails({ ...serviceDetails, [e.target.name]: e.target.files[0] });
        } else {
            setServiceDetails({ ...serviceDetails, [e.target.name]: e.target.value });
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(serviceDetails);
        if (serviceDetails.imgFile) {
            const imageData = new FormData();
            imageData.set('key', 'b5009156314b835b7542545d197df0e9');
            imageData.append('image', serviceDetails.imgFile);
            axios.post('https://api.imgbb.com/1/upload', imageData)
                .then((response) => {
                    const imgUrl = response.data.data.display_url;
                    if (imgUrl) {
                        axios.post(`http://localhost:5000/services/addService`, { name: serviceDetails.name, details: serviceDetails.details, price: serviceDetails.price, imgUrl })
                            .then(res => {
                                if(res.data) {
                                    setServiceDetails({
                                        name: '',
                                        price: '',
                                        details: '',
                                        imgFile: ''
                                    })
                                    document.querySelector("form").reset();
                                }
                            })
                            .catch(err => console.log(err))
                    }
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }

    return (
        <form onSubmit={handleSubmit} className="col bg-info">
            <div className="row g-3 p-5">
                <div className="col-6">
                    <input name="name" onChange={handleChange} value={serviceDetails.name} type="text" className="form-control" placeholder="Which Class" required />
                </div>
                <div className="col-6">
                    <input name="details" onChange={handleChange} value={serviceDetails.details} type="text" className="form-control" placeholder="Subject Details" required />
                </div>
                <div className="col-6">
                    <input name="price" onChange={handleChange} value={serviceDetails.price} type="number" className="form-control" placeholder="Payment per Month" required />
                </div>
                <div className="col-6">
                    <input id="imgFileInput" name="imgFile" onChange={handleChange} type="file" accept="image/*" className="form-control" placeholder="" required />
                </div>
                <div className="col-2">
                    <button type="submit" className="btn btn-warning">SAVE</button>
                </div>
            </div>
        </form>
    );
};

export default AddService;