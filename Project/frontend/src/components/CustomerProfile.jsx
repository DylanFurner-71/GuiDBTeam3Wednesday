import React, {Component} from "react";
import '../App.css';
import CustomerNav from "./CustomerNav";
import { Customer } from "../models/Customer";

class CustomerProfile extends Component {
    state = new Customer(
        // id
        1,
        // firstName
        "John",
        // lastName
        "Smith",
        // email: 
        "johnsmith@gmail.com",
        // address1
        "",
        // address2
        "",
        // city
        "",
        // state
        "",
        // zip
        0
    );

    onSave() {
        console.log("Temporary Save");
    }

    render() {
    return (
        <>
            <CustomerNav customer= {this.state} />
            <h1 className="welcome">Edit Profile</h1>
            <form name="customerInfo" className="user-info-form">
                <label htmlFor="firstName">First Name:</label>
                <input type="text" name="firstName" value={this.state.firstName} readOnly></input>
                <label htmlFor="lastName">Last Name:</label>
                <input type="text" name="lastName" value={this.state.lastName} readOnly></input>
                <label htmlFor="email">Email:</label>
                <input type="email" name="email" value={this.state.email} readOnly></input>
                <label htmlFor="address1" value={this.state.address1} onChange={event => this.setState({address1: event.target.value })}>Address Line 1:</label>
                <input type="text" name="address1"></input>
                <label htmlFor="address2" value={this.state.address2} onChange={event => this.setState({address2: event.target.value })}>Address Line 2:</label>
                <input type="text" name="address2"></input>
                <label htmlFor="city" value={this.state.city} onChange={event => this.setState({city: event.target.value })}>City:</label>
                <input type="text" name="city"></input>
                <label htmlFor="state" value={this.state.state} onChange={event => this.setState({state: event.target.value })}>State:</label>
                <input type="text" name="state"></input>
                <label htmlFor="zip" value={this.state.zip} onChange={event => this.setState({zip: event.target.value })}>Zip Code:</label>
                <input type="number" name="zip"></input>
                <input type="button" value="Save" onClick={() => this.onSave()}></input>
            </form>
        </>
    )}
}

export default CustomerProfile