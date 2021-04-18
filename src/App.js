import { useEffect, useState } from "react";
import { createContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import PrivetRoute from "./components/PrivetRoute/PrivetRoute";
import { auth } from "./firebase/firebase";
import Admin from "./pages/Admin/Admin";
import Checkout from "./pages/Checkout/Checkout";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import DashBoard from "./pages/DashBoard/DashBoard";
import axios from "axios";
import User from "./components/User/User";

export const UserContext = createContext();

const App = () => {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [admin, setAdmin] = useState(false);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if(user){
        setLoggedInUser(user);
        axios.get('http://localhost:5000/admins')
        .then(res => res.data.some(el => el.email === user.email))
        .then(res => setAdmin(res))
      }
    });
  }, []);

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Header loggedInUser={loggedInUser} admin={admin} />
        <Switch>
          <Route exact path="/">
            <Hero />
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <PrivetRoute path="/adminDashboard">
            <Admin/>
          </PrivetRoute>
          <PrivetRoute path="/checkout/:id">
            <Checkout />
          </PrivetRoute>
          {/* <PrivetRoute path="/userDashboard/:uid">
            <DashBoard />
          </PrivetRoute> */}
          <PrivetRoute path="/userDashboard">
            <User uid={loggedInUser?.uid} />
          </PrivetRoute>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
};

export default App;
