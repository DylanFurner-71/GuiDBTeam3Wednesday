import React, {Component} from "react";
import CustomerNav from "./CustomerNav";
import { AccountRepository } from "../repository/accountRepository";

class CustomerProfile extends Component {
    AccountRepository = new AccountRepository();

    state = {
        customer: {},
        first_name: "",
        last_name: "",
        email: "",
    }
    
    onSave() {
        let a = {
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            email: this.state.email
        }
        this.AccountRepository.updateAccount(this.state.customer.account_id, a);
        window.location.href = "/customer/home";
    }

    componentWillMount() {
        const customer = JSON.parse(localStorage.getItem('user'));
        if (localStorage === null) {
            this.setState({
            customer: {}
            });
        }
        else {
            this.setState({
            customer: customer[0]
            });
        }
        console.log(customer);
    }

    render() {
    return (
        <>
            <CustomerNav/>
            <h1 className="welcome">Edit Profile</h1>
            <form name="customerInfo" className="user-info-form">
                <label htmlFor="firstName">First Name:</label>
                <input type="text" name="firstName" value={this.state.first_name} onChange={event => this.setState({first_name: event.target.value})}></input>
                <label htmlFor="lastName">Last Name:</label>
                <input type="text" name="lastName" value={this.state.last_name} onChange={event => this.setState({last_name: event.target.value})}></input>
                <label htmlFor="email">Email:</label>
                <input type="email" name="email" value={this.state.email} onChange={event => this.setState({email: event.target.value})}></input>
                <input type="button" value="Save" onClick={() => this.onSave()}></input>
            </form>
        </>
    )}
}

export default CustomerProfile