import React, {Component} from "react";
import '../App.css';

class RestaurantEmployeeLanding extends Component {
    constructor(userFirstName, userLastName, userEmail) {
        super();
        this.state = {
            // firstName: userFirstName,
            firstName: "John",
            // lastName: userLastName,
            lastName: "Smith",
            // email: userEmail
            email: "johnsmith@gmail.com",
            RestaurantAddress: "",
            RestaurantName: ""
      
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSave = this.handleSave.bind(this);
    }

    handleChange(event) {
        this.setState({
            address1: event.target.address1,
            address2: event.target.address2,
            city: event.target.city,
            zip: event.target.zip
        });
    }

    handleSave(event) {
        alert("Information saved.");
        event.preventDefault();
    }

    render() {
        const {firstName, lastName, email} = this.state;
        return(
            <div id="customerLanding">
                <h1 className="welcome">Welcome, {firstName} {lastName}</h1>
                <form name="customerInfo" className="user-info-form">
                    <label htmlFor="firstName">First Name:</label>
                    <input type="text" name="firstName" value={firstName} readOnly></input>
                    <label htmlFor="lastName">Last Name:</label>
                    <input type="text" name="lastName" value={lastName} readOnly></input>
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" value={email} readOnly></input>
                    <label htmlFor="address1" value={this.state.address1} onChange={this.handleChange}>Address Line 1:</label>
                    <input type="text" name="address1"></input>
                    <label htmlFor="address2" value={this.state.address2} onChange={this.handleChange}>Address Line 2:</label>
                    <input type="text" name="address2"></input>
                    <label htmlFor="city" value={this.state.city} onChange={this.handleChange}>City:</label>
                    <input type="text" name="city"></input>
                    <label htmlFor="zip" value={this.state.zip} onChange={this.handleChange}>Zip Code:</label>
                    <input type="number" name="zip"></input>
                    <input type="button" value="Update" onClick={this.handleSave}></input>
                </form>
            </div>
        ) 
    }
}
export default RestaurantEmployeeLanding;



/*
Restaurant		First Name
restaurant address		Last Name
		Email
		Password
*/