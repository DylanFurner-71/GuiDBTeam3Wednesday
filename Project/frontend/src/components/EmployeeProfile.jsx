/*
app.post('/register/:account_type', function (req, res) {
  //TODO - DB query
  console.log(`created ${req.params.account_type}`)
  res.send({ 'request': 'valid', 'account_type': req.params.account_type })
});
*/

import React, {Component} from "react";
import '../App.css';
import EmployeeNav from "./EmployeeNav";
import { Employee } from "../models/Employee";
//needs to be redone
class EmployeeProfile extends Component {
    state = new Employee(
        // id
        1,
        // firstName
        "John",
        // lastName
        "Smith",
        // email
        "johnsmith@gmail.com",
        // phone
        "",
        // address1
        "",
        // address2
        "",
        // city
        "",
        // zip
        ""
    );
    
    // note: convert phone and zip to int before sending to DB
    onSave() {
        console.log("Temporary Save");
    }

    render() {
    return (
        <>
        <EmployeeNav restId={this.state.employee.restaurantId} id={this.state.employee.id}/>
            <h1 className="welcome">Edit Profile</h1>
            <form name="driverInfo" className="user-info-form">
                <label htmlFor="firstName">First Name:</label>
                <input type="text" name="firstName" value={this.state.firstName} readOnly></input>
                <label htmlFor="lastName">Last Name:</label>
                <input type="text" name="lastName" value={this.state.lastName} readOnly></input>
                <label htmlFor="email">Email:</label>
                <input type="email" name="email" value={this.state.email} readOnly></input>
                <label htmlFor="phone">Phone Number:</label>
                <input type="number" name="phone" value={this.state.phone} onChange={event => this.setState({phone: event.target.value })}></input>
                <label htmlFor="address1">Address Line 1:</label>
                <input type="text" name="address1" value={this.state.address1} onChange={event => this.setState({address1: event.target.value })}></input>
                <label htmlFor="address2">Address Line 2:</label>
                <input type="text" name="address2" value={this.state.address2} onChange={event => this.setState({address2: event.target.value })}></input>
                <label htmlFor="city">City:</label>
                <input type="text" name="city" value={this.state.city} onChange={event => this.setState({city: event.target.value })}></input>
                <label htmlFor="zip">Zip Code:</label>
                <input type="number" name="zip" value={this.state.zip} onChange={event => this.setState({zip: event.target.value })}></input>
                <input type="button" value="Save" onClick={() => this.onSave()}></input>
            </form>
        </>
    )}
}

export default EmployeeProfile;