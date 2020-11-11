import React, {Component} from "react";
import {Navbar, Nav, NavDropdown} from "react-bootstrap"

class CustomerNav extends Component {
    onClear() {
        this.props.onClearCart();
    }

    render() {
        return (
            <Navbar bg="green" variant="light">
                <Navbar.Brand href="/customer/home">Newber Eats</Navbar.Brand>
                <Nav.Link href="/customer/home" className="inactive">Home</Nav.Link>
                <Nav.Link href="/customer/profile" className="inactive">My Profile</Nav.Link>
                <Nav.Link href="/customer/past-orders" className="inactive">Past Orders</Nav.Link>
                {this.props.onClearCart != null && (
                    <NavDropdown title={"My Order"} id="basic-nav-dropdown">
                        <NavDropdown.Item href="/order/cart">View Cart</NavDropdown.Item>
                        <NavDropdown.Item onClick={() => this.onClear()}>Clear cart</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#checkout">Checkout</NavDropdown.Item>
                    </NavDropdown>
                )}
            </Navbar>
        )}
}

export default CustomerNav;