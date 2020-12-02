import React, {Component} from "react";
import {Navbar, Nav, Button} from "react-bootstrap"
import {Link} from "react-router-dom";
import {AccountRepository} from "../repository/accountRepository";

class DriverNav extends Component {
    constructor(){
        super();
        this.acccountRep = new AccountRepository();
    }
    render() {
        return (
            <Navbar sticky="top" className="bg-green" expand="lg">
                <Navbar.Brand as={Link} to="/driver/home">Newber Eats</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className="bg-white mb-4"/>
                <Navbar.Collapse id="basic-navbar-nav" className="bg-green">
                    <Nav className="mr-auto">
                        <Nav.Link as={Link} to="/driver/home" className="inactive">Home</Nav.Link>
                        <Nav.Link as={Link} to="/driver/profile" className="inactive">My Profile</Nav.Link>
                        <Nav.Link as={Link} to="/driver/order" className="inactive">Current Order</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <Navbar.Brand href={`/`}> <Button onClick={this.acccountRep.logout}>Logout</Button></Navbar.Brand>
            </Navbar>
        )}
}

export default DriverNav;