import React from 'react';
import { Link, Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';
import DashBoard from '../../pages/DashBoard/DashBoard';
import AddReview from '../AddReview/AddReview';
import BookingList from '../BookingList/BookingList'
import Reviews from '../Reviews/Reviews';
const User = ({uid}) => {

    let { path, url } = useRouteMatch();

    return (
        <div className="row">
            <div className="col-2 bg-success min-vh-100">
                <Link className="nav-link text-white" to={`${url}/addReview`}>Add Review</Link>
                <Link className="nav-link text-white" to={`${url}/bookings/${uid}`}>BookingList</Link>
            </div>
            <Switch>
                <Route exact path={path}>
                    <Redirect to={`${path}/addReview`} />
                </Route>

                <Route path={`${path}/addReview`}>
                    <AddReview />
                </Route>

                <Route path={`${path}/bookings/:uid`}>
                    <DashBoard />
                </Route>

            </Switch>
        </div>
    );
};

export default User;