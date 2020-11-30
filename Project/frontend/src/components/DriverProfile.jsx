import React, {Component} from "react";
import DriverNav from "./DriverNav";
import { Driver } from "../models/Driver";

class DriverProfile extends Component {
    state = new Driver(
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
            <DriverNav driver= {this.state} />
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

export default DriverProfile