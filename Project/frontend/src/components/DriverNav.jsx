import React, {Component} from "react";
import {Navbar, Nav} from "react-bootstrap"
import {Link} from "react-router-dom";

class DriverNav extends Component {
    render() {
        return (
            <Navbar bg="green" variant="light">
                <Navbar.Brand as={Link} to="/driver/home">Newber Eats</Navbar.Brand>
                <Nav.Link as={Link} to="/driver/home" className="inactive">Home</Nav.Link>
                <Nav.Link as={Link} to="/driver/profile" className="inactive">My Profile</Nav.Link>
                <Nav.Link as={Link} to="/driver/order" className="inactive">Current Order</Nav.Link>
            </Navbar>
        )}
}

export default DriverNav;