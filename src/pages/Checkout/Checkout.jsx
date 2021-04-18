import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { UserContext } from '../../App';

const Checkout = () => {
    const { id } = useParams();
    const [loggedInUser] = useContext(UserContext);
    const [order, setOrder] = useState({})
    const history = useHistory();

    useEffect(() => {
        axios.get(`https://hometutordb01.herokuapp.com/services/${id}`)
            .then(res => setOrder(res.data))
    }, [id])

    const handleCheckout = () => {
        if(loggedInUser?.uid) {

            axios.post(`https://hometutordb01.herokuapp.com/bookings/addBooking`,{
                userId: loggedInUser?.uid,
                userEmail: loggedInUser?.email,
                bookId: id,
                status: 'pending'
            })
            .then(res => {
                if(res.data) {
                    history.push('/')
                }
            })
        }

    }

    return (
        <div className="container py-5">
            <table className="table border">
                <thead>
                    <tr>
                        <th scope="col">NAME</th>
                        <th scope="col">DETAILS</th>
                        <th scope="col">QUANTITY</th>
                        <th scope="col">PRICE</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{order?.name}</td>
                        <td>{order?.details}</td>
                        <td>1</td>
                        <td>${order?.price}</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td><strong>Total: ${order?.price}</strong></td>
                    </tr>
                </tbody>
            </table>
            <div className="d-flex flex-row-reverse">
            <button onClick={handleCheckout} className="btn btn-success">Checkout</button>
            </div>
        </div>
    );
};

export default Checkout;