import React, {Component} from "react";
import {Navbar, Nav, NavDropdown, Button} from "react-bootstrap"
import {AccountRepository} from "../repository/accountRepository";
const EmployeeNav = (props) => {
    let acccountRep = new AccountRepository();
        return (
            <Navbar bg="green" variant="light">
                <Navbar.Brand href={`/employee/home`}>Newber Eats</Navbar.Brand>
                <Nav.Link href={`/employee/orders/${props.restId}`}>Orders</Nav.Link>
                <Nav.Link href={`/employee/menu/${props.restId}`} >My Restaurant Menu</Nav.Link>
                <Nav.Link href={`/employee/profile/${props.id}`} >My Profile</Nav.Link>
                <Navbar.Brand href={`/`}> <Button onClick={acccountRep.logout}>Logout</Button></Navbar.Brand>

            </Navbar>
        )
}

export default EmployeeNav;