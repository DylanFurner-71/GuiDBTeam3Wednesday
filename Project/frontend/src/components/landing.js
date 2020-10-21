import React, {Component} from "react";
import {Row, Col, Container} from "react-bootstrap"
import {Link} from "react-router-dom";
import {LoginCard} from "./LoginCard";
import {userTypes} from "../types/userTypes";

class Landing extends Component {
    render() {
        return (
            <div style={{ height: "75vh" }} className="justify-content-center container valign-wrapper">
                <div className="row">
                    <div className="col center-align">
                                                <h1>
                            <b>Welcome</b> to Newber Eats
                        </h1>
                        <p className="flow-text grey-text text-darken-1">
                             Your newest undifferentiated food delivery app!
                        </p>
                     <Container fluid>
                        <Row>
                        <Col><LoginCard accountType={userTypes.Customer}/></Col>
                        <Col> <LoginCard accountType={userTypes.RestaurantEmployee}/></Col>
                        </Row>
                        <Row>
                        <Col><LoginCard accountType={userTypes.Delivery}/></Col>
                        <Col><LoginCard accountType={userTypes.WebManager}/></Col>
                        </Row>
                        </Container>
                </div>
            </div>
        </div>
        );
    }
}

export default Landing;
