import React, {Component} from "react";
import {Navbar, Nav, NavDropdown, Button} from "react-bootstrap";
import {Link} from "react-router-dom";
import {AccountRepository} from "../repository/accountRepository";

class CustomerNav extends Component {
    constructor(){
        super();
        this.acccountRep = new AccountRepository();
    }
    render() {
        return (
            <Navbar sticky="top" className="bg-green" expand="lg">
                <Navbar.Brand as={Link} to="/customer/home">Newber Eats</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className="bg-white mb-4"/>
                <Navbar.Collapse id="basic-navbar-nav" className="bg-green">
                    <Nav className="mr-auto">
                        <Nav.Link as={Link} to="/customer/home" className="inactive">Home</Nav.Link>
                        <Nav.Link as={Link} to="/customer/profile" className="inactive">My Profile</Nav.Link>
                        <Nav.Link as={Link} to="/customer/past-orders" className="inactive">Past Orders</Nav.Link>
                        {this.props.myOrderFlag === true && (
                            <NavDropdown title="My Order" id="basic-nav-dropdown">
                                <NavDropdown.Item as={Link} to="/order/cart" className="text-center">View Cart</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item as={Link} to="/order/checkout" className="text-center">Checkout</NavDropdown.Item>
                            </NavDropdown>
                        )}
                    </Nav>
                </Navbar.Collapse>
                <Navbar.Brand href={`/`}> <Button onClick={this.acccountRep.logout}>Logout</Button></Navbar.Brand>
            </Navbar>
        )}
}

export default CustomerNav;