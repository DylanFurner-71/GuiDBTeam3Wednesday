import React, {Component} from "react";
import {Row, Col} from "react-bootstrap"
import {LoginCard} from "./LoginCard";
import {userTypes} from "../types/userTypes";
import {userRoutes} from "../types/userRoutes";
import logo from "../logo.png";

class Landing extends Component {

    render() {
        return (
            <div  className="justify-content-center container valign-wrapper">
                <div className="row">
                    <div className="col center-align">
                        <img id="landingLogo" src={logo} alt="Logo" />
                        <h1 className="welcome mb-4">Welcome to Newber Eats</h1>
                        <h3 className="message mb-5">
                            The newest food delivery app!
                        </h3>
                </div>
                <div className="container">
                    <Row>
                    <Col><LoginCard accountType={userTypes.Customer} routeType={userRoutes.Customer}/></Col>
                    <Col><LoginCard accountType={userTypes.RestaurantEmployee} routeType={userRoutes.RestaurantEmployee}/></Col>
                    </Row>
                    <Row>
                    <Col><LoginCard accountType={userTypes.Delivery} routeType={userRoutes.Delivery}/></Col>
                    <Col><LoginCard accountType={userTypes.WebManager} routeType={userRoutes.WebManager}/></Col>
                    </Row>
                </div>
            </div>
        </div>
        );
    }
}

export default Landing;
