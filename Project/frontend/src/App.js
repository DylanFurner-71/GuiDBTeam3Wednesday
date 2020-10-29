import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {Provider} from "react-redux";
import {setCurrentUser, logoutUser} from "./actions/authActions";
import jwt_decode from "jwt-decode";
// import PrivateRoute from "./components/PrivateRoute"
import Landing from './components/landing.jsx'
import Login from './components/login'
import RegisterUser from "./components/RegisterUser";
import RegisterDriver from "./components/RegisterDriver";
import RegisterWebManager from "./components/RegisterWebManager";
import RegisterEmployee from "./components/RegisterEmployee";
import setAuthToken from "./utils/setAuthToken";
import store from "./store";
import {userTypes} from "./types/userTypes";
import WebManagerLanding from "./components/webManagerLanding";
import CustomerLanding from "./components/customerLanding";
import RestaurantEmployeeLanding from "./components/RestaurantEmployeeLanding";
// Check for token to keep user logged in
if (localStorage.jwtToken) {
    // Set auth token header auth
    const token = localStorage.jwtToken;
    setAuthToken(token);
    // Decode token and get user info and exp
    const decoded = jwt_decode(token);
    // Set user and isAuthenticated
    store.dispatch(setCurrentUser(decoded));
    // Check for expired token
    const currentTime = Date.now() / 1000; // to get in milliseconds
    if (decoded.exp < currentTime) {
        // Logout user
        store.dispatch(logoutUser());
        // Redirect to login
        window.location.href = "/login";
    }
}

function App() {
    return (
        <Provider store={store}>
	        <div id="app">
	            <Router>
	                <Route exact path="/" component={Landing}/>
                    <Route exact path="/home" component={Landing}/>
	                <Route path={[`/login/${userTypes.Customer}`, `/login/${userTypes.Delivery}`, `/login/${userTypes.WebManager}`,`/login/${userTypes.RestaurantEmployee}`] } component={Login}/>
	                <Route exact path={`/${userTypes.Customer}/register`} component={RegisterUser}/>
                    <Route exact path={`/${userTypes.Delivery}/register`} component={RegisterDriver}/>
	                <Route exact path={`/${userTypes.WebManager}/register`} component={RegisterWebManager}/>
	                <Route exact path={`/${userTypes.RestaurantEmployee}/register`} component={RegisterEmployee}/>
                    <Route exact path={`/${userTypes.Customer}/home`} component = {CustomerLanding}/>
                    <Route exact path={`/${userTypes.WebManager}/home`} component = {WebManagerLanding}/>
                    <Route exact path={`/${userTypes.RestaurantEmployee}/home`} component = {RestaurantEmployeeLanding}/>
	                <Switch>
	                    {/* {ROUTES.map((route, i) => <PrivateRoute key={i} {...route}/>)} */}
	                </Switch>
	            </Router>
	    	</div>
    	</Provider>
    );
}

export default App;