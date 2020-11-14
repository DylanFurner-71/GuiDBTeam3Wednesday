import React, {Component} from "react";
import {Row, Col, Container} from "react-bootstrap"
import {Link} from "react-router-dom";
import {LoginCard} from "./LoginCard";
import {userTypes} from "../types/userTypes";
import logo from "../logo.png";
import home from "../repository/accountRepository";

class Landing extends Component {

    render() {
        return (
            <div  className="justify-content-center container valign-wrapper">
                <div className="row">
                    <div className="col center-align">
                        <img id="landingLogo" src={logo} alt="Logo" />
                        <h1 className="welcome mb-4">Welcome to Newber Eats</h1>
                        <p className="message mb-4">
                             Your newest undifferentiated food delivery app!
                        </p>
                </div>
                     <Container fluid="sm">
                        <Row>
                        <Col><LoginCard accountType={userTypes.Customer}/></Col>
                        <Col><LoginCard accountType={userTypes.RestaurantEmployee}/></Col>
                        </Row>
                        <Row>
                        <Col><LoginCard accountType={userTypes.Delivery}/></Col>
                        <Col><LoginCard accountType={userTypes.WebManager}/></Col>
                        </Row>
                    </Container>
            </div>
        </div>
        );
    }
}

export default Landing;
