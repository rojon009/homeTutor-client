import React from 'react';
import { Link, Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';
import AddProduct from '../../components/AddProduct/AddProduct';
import AddService from '../../components/AddService/AddService';
import ManageServices from '../../components/ManageServices/ManageServices';
import ManageProduct from '../../components/MangeProduct/ManageProduct';
import BookingList from '../../components/BookingList/BookingList'
import MakeAdmin from '../../components/MakeAdmin/MakeAdmin';
const Admin = () => {

    let { path, url } = useRouteMatch();

    return (
        <div className="row">
            <div className="col-2 bg-success min-vh-100">
                <Link className="nav-link text-white" to={`${url}/bookingList`}>Booking List</Link>
                <Link className="nav-link text-white" to={`${url}/addService`}>Add Service</Link>
                <Link className="nav-link text-white" to={`${url}/makeAdmin`}>Make Admin</Link>
                <Link className="nav-link text-white" to={`${url}/manageServices`}>Manage Services</Link>
            </div>
            <Switch>
                <Route exact path={path}>
                    <Redirect to={`${path}/bookingList`} />
                </Route>

                <Route path={`${path}/bookingList`}>
                    <BookingList />
                </Route>

                <Route path={`${path}/manageServices`}>
                    {/* <ManageProduct /> */}
                    <ManageServices />
                </Route>
                <Route path={`${path}/makeAdmin`}>    
                    <MakeAdmin />
                </Route>
                <Route path={`${path}/addService`}>    
                    <AddService />
                </Route>
            </Switch>
        </div>
    );
};

export default Admin;