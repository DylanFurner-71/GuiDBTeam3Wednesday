import React, {Component} from "react";
import {Navbar, Nav, NavDropdown} from "react-bootstrap"

class DriverNav extends Component {
    render() {
        return (
            <Navbar bg="green" variant="light">
                <Navbar.Brand href="/driver/home">Newber Eats</Navbar.Brand>
                <Nav.Link href="/driver/home" className="inactive">Home</Nav.Link>
                <Nav.Link href="/driver/profile" className="inactive">My Profile</Nav.Link>
            </Navbar>
        )}
}

export default DriverNav;