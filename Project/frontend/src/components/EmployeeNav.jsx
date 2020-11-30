import React, {Component} from "react";
import {Navbar, Nav, NavDropdown} from "react-bootstrap"

const EmployeeNav = (props) => {
        return (
            <Navbar bg="green" variant="light">
                <Navbar.Brand href={`/employee/home`}>Newber Eats</Navbar.Brand>
                <Nav.Link href={`/employee/orders/${props.restId}`} className="inactive">Orders</Nav.Link>
                <Nav.Link href={`/employee/menu/${props.restId}`} className="inactive">My Restaurant Menu</Nav.Link>
                <Nav.Link href={`/employee/profile/${props.id}`} className="inactive">My Profile</Nav.Link>
            </Navbar>
        )
}

export default EmployeeNav;