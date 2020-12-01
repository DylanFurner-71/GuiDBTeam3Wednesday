import React, {Component} from "react";
import {Navbar, Nav} from "react-bootstrap";
import {Link} from "react-router-dom";

class WebManagerNav extends Component {
    render() {
        return (
            <Navbar sticky="top" className="bg-green" expand="lg">
                <Navbar.Brand as={Link} to="/web-manager/home">Newber Eats</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className="bg-white mb-4"/>
                <Navbar.Collapse id="basic-navbar-nav" className="bg-green">
                    <Nav className="mr-auto">
                        <Nav.Link as={Link} to="/web-manager/home" className="inactive">Home</Nav.Link>
                        <Nav.Link as={Link} to="/web-manager/restaurants" className="inactive">Manage Restaurants</Nav.Link>
                        <Nav.Link as={Link} to="/web-manager/users" className="inactive">Manage Users</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )}
}

export default WebManagerNav;