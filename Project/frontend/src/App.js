import React from 'react';
import './App.css';
import './style.scss';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {Provider} from "react-redux";
import {setCurrentUser, logoutUser} from "./repository/accountRepository";
import jwt_decode from "jwt-decode";
import store from "./store";
import setAuthToken from "./utils/setAuthToken";
import { ROUTES } from './routes';

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
    return <>
        <Provider store={store}>
	        <div id="app">
                <Router>
                    <Switch>
                    { ROUTES.map((route, index) => <Route key={ index } { ...route }></Route>) }
                    </Switch>
                </Router>
	    	</div>
    	</Provider>
    </>;
}

export default App;