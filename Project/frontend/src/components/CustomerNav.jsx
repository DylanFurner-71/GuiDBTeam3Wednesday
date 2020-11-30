import React, {Component} from "react";
import {Navbar, Nav, NavDropdown} from "react-bootstrap";
import {Link} from "react-router-dom";

class CustomerNav extends Component {

    render() {
        return (
            <Navbar bg="green" variant="light">
                <Navbar.Brand as={Link} to="/customer/home">Newber Eats</Navbar.Brand>
                <Nav.Link as={Link} to="/customer/home" className="inactive">Home</Nav.Link>
                <Nav.Link as={Link} to="/customer/profile" className="inactive">My Profile</Nav.Link>
                <Nav.Link as={Link} to="/customer/past-orders" className="inactive">Past Orders</Nav.Link>
                {this.props.myOrderFlag === true && (
                    <NavDropdown title={"My Order"} id="basic-nav-dropdown">
                        <NavDropdown.Item as={Link} to="/order/cart">View Cart</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item as={Link} to="/order/checkout">Checkout</NavDropdown.Item>
                    </NavDropdown>
                )}
            </Navbar>
        )}
}

export default CustomerNav;