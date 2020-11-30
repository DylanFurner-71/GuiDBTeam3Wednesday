import React, {Component} from "react";
import {Navbar, Nav} from "react-bootstrap";
import {Link} from "react-router-dom";

class WebManagerNav extends Component {
    render() {
        return (
            <Navbar bg="green" variant="light">
                <Navbar.Brand as={Link} to="/web-manager/home">Newber Eats</Navbar.Brand>
                <Nav.Link as={Link} to="/web-manager/home" className="inactive">Home</Nav.Link>
                <Nav.Link as={Link} to="/web-manager/restaurants" className="inactive">Restaurants</Nav.Link>
                <Nav.Link as={Link} to="/web-manager/users" className="inactive">Users</Nav.Link>
            </Navbar>
        )}
}

export default WebManagerNav;