import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {Provider} from "react-redux";
import {setCurrentUser, logoutUser} from "./respository/accountRepository";
import jwt_decode from "jwt-decode";
import {ROUTES} from "./routes";
// import PrivateRoute from "./components/PrivateRoute"
import Landing from './components/landing.jsx'
import Login from './components/login'

import setAuthToken from "./utils/setAuthToken";
import store from "./store";


function App() {
    return (
        <Provider store={store}>
	        <div id="app">
	            <Router>
	                <Route exact path="/" component={Landing}/>
	                <Route path="/login" component={Login}/>
	                <Switch>
                    { ROUTES.map((route, index) => <Route key={ index } { ...route }></Route>) }
	                </Switch>
	            </Router>
	    	</div>
    	</Provider>
    );
}

export default App;