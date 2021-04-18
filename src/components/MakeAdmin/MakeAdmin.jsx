import axios from 'axios';
import React, { useState } from 'react';



const MakeAdmin = () => {

    const [adminEmail, setAdminEmail] = useState('');

    const handleChange = (e) => {
        e.preventDefault();
            setAdminEmail(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`https://hometutordb01.herokuapp.com/makeAdmin`, {adminEmail})
        .then(res => {
            if(res.data) {
                setAdminEmail('')
                document.querySelector("form").reset();
            }
        })
        .catch(err => console.log(err))
    }

    return (
        <form onSubmit={handleSubmit} className="col-10 bg-info">
            <div className="row g-3 p-5">
                <div className="col-6">
                    <input name="email" onChange={handleChange} value={adminEmail} type="email" className="form-control" placeholder="Admin Email" required />
                </div>
                <div className="col-2">
                    <button type="submit" className="btn btn-warning">SAVE</button>
                </div>
            </div>
        </form>
    );
};

export default MakeAdmin;