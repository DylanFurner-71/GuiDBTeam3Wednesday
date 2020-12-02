import React, {Component} from "react";
import {Navbar, Nav, Button} from "react-bootstrap"
import {AccountRepository} from "../repository/accountRepository";
import {Link} from "react-router-dom";

class EmployeeNav extends Component {
    constructor(){
        super();
        this.acccountRep = new AccountRepository();
    }

    render() {
        return (
            <Navbar sticky="top" className="bg-green" expand="lg">
                <Navbar.Brand as={Link} to={`/employee/home`}>Newber Eats</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className="bg-white mb-4"/>
                <Navbar.Collapse id="basic-navbar-nav" className="bg-green">
                    <Nav className="mr-auto">
                        <Nav.Link as={Link} className="inactive" to={`/employee/orders/${this.props.restId}`}>Orders</Nav.Link>
                        <Nav.Link as={Link} className="inactive" to={`/employee/menu/${this.props.restId}`} >My Restaurant Menu</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <Navbar.Brand to={`/`}> <Button className="bg-white text-black" onClick={this.acccountRep.logout}>Logout</Button></Navbar.Brand>
            </Navbar>
        )
    }
}

export default EmployeeNav;