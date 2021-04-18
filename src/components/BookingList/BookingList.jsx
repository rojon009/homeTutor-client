import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { UserContext } from '../../App';
import SelectStatus from '../SelectStatus/SelectStatus';

const BookingList = () => {
    const [loggedInUser] = useContext(UserContext);
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        if(loggedInUser?.uid) {
            let orderedBooks = [];
            axios.get(`https://hometutordb01.herokuapp.com/bookings`)
                .then(res => {
                    res.data.forEach(async (order) => {
                        const singleOrder = await axios.get(`https://hometutordb01.herokuapp.com/services/${order.bookId}`)
                        if(singleOrder.data !== '' || null){
                            singleOrder.data.status = order.status;
                            singleOrder.data.orderId = order._id;
                            singleOrder.data.userEmail = order.userEmail;
                            orderedBooks = [...orderedBooks, singleOrder.data];
                            setBooks(orderedBooks);
                        }
                    })
                })
                .catch(err => console.log(err))
        }
    }, [loggedInUser])


    if(!books.length) {
        return (
            <h4 className="text-warning text-center mt-5">You haven't order any book yet</h4>
        )
    }
    if(books) {

        return(
            
            <div className="container-fluid p-5 col-10">
                <table className="table border">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">EMAIL</th>
                            <th scope="col">SERVICE NAME</th>
                            <th scope="col">DETAILS</th>
                            <th scope="col">PRICE</th>
                            <th scope="col">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            books?.map((book, index) => (
                                <tr key={`book?._id${index}`} >
                                    <th scope="row">{index + 1}</th>
                                    <td>{book?.userEmail}</td>
                                    <td>{book?.name}</td>
                                    <td>{book?.details}</td>
                                    <td>{book?.price}</td>
                                    <td>
                                        <span>{book?.id}</span>
                                        <SelectStatus status={book?.status} id={book?.orderId} />
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
    
        );
    }
    return (
        <>
            {loading && (
                <div className="d-flex justify-content-center">
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>

            )}
        </>
    )
};

export default BookingList;