import axios from 'axios';
import React, { useState } from 'react';


const SelectStatus = ({status,id}) => {

    const [bookingStatus, setBookingStatus] = useState(status);


    const updateStatus = (e,id) => {
        axios.patch(`https://hometutordb01.herokuapp.com/bookings/booking/${id}`,{status: e.target.value})

        setBookingStatus(e.target.value)
    }

    
    
    
    return (
        <select onChange={(e)=>updateStatus(e,id)} value={bookingStatus} className="form-select">
            <option value="pending">Pending</option>
            <option value="ongoing">On Going</option>
            <option value="done">Done</option>
        </select>
    );
};

export default SelectStatus;