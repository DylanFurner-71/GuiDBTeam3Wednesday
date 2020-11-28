import React, {Component} from "react";
import {Navbar, Nav, NavDropdown} from "react-bootstrap"

class WebManagerNav extends Component {
    render() {
        return (
            <Navbar bg="green" variant="light">
                <Navbar.Brand href="/web-manager/home">Newber Eats</Navbar.Brand>
                <Nav.Link href="/web-manager/home" className="inactive">Home</Nav.Link>
                <Nav.Link href="/web-manager/restaurants" className="inactive">Manage Restaurants</Nav.Link>
                <Nav.Link href="/web-manager/users" className="inactive">Manage Users</Nav.Link>
            </Navbar>
        )}
}

export default WebManagerNav;