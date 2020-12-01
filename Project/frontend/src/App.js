import React from 'react';
import './App.css';
import './style.scss';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {Provider} from "react-redux";
import store from "./store";
import { ROUTES } from './routes';


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