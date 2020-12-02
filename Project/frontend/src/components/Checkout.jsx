import React from 'react';
import { CartService } from '../services/CartService';
import CustomerNav from "./CustomerNav";
import { OrderRepository } from "../repository/orderRepository";
import { AccountRepository } from "../repository/accountRepository";

export class Checkout extends React.Component {
    OrderRepository = new OrderRepository();
    AccountRepository = new AccountRepository();
    CartService = new CartService();
    cart = this.CartService.getCart();
    localStorage = {};

    state = {
        firstName: "",
        lastName: "",
        phone: "",
        address1: "",
        address2: "",
        city: "",
        state: "",
        zip: "",
        customer: {}
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
    }

    onSubmit() {
        if (this.cart.total != 0) {
            let restaurantId = this.CartService.getRestaurantId();
            let address = {
                address_body: this.state.address1 + " " + this.state.address2,
                city: this.state.city,
                state: this.state.state,
                zip: this.state.zip
            }
            this.AccountRepository.addOrderAddress(address).then(element => {
                let order = {
                    restaurant_id: restaurantId,
                    account_id: this.state.customer.account_id,
                    address_id: element.insertId,
                    status: "Pending",
                    total_price: this.cart.total,
                    first_name: this.state.firstName,
                    last_name: this.state.lastName,
                    phone: this.state.phone,
                    items: this.cart.items
                }
                this.OrderRepository.addOrder(order).then(element => {
                    window.location.href = "/order/confirmed/" + restaurantId + "/" + element.insertId;
                });
            });
        }
        else
            alert("Cannot submit an empty order!");
    }

    render() {
        return <>
            <CustomerNav myOrderFlag={true}/>
            <div className="container">
                <h1 className="welcome">Checkout</h1>
                <div className="row">
                    <div className="col-lg-8 mb-4">
                        <div className="card wish-list pb-1">
                            <div className="card-body">
                                <h4 className="mb-3">Shipping Details</h4>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="md-form md-outline">
                                            <input type="text" id="firstName" className="form-control" placeholder="First Name"
                                            value={this.state.firstName} 
                                            onChange={event => this.setState({firstName: event.target.value})}/>
                                            <label htmlFor="firstName">First name</label>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="md-form md-outline">
                                            <input type="text" id="lastName" className="form-control" placeholder="Last Name"
                                            value={this.state.lastName} 
                                            onChange={event => this.setState({lastName: event.target.value})}/>
                                            <label htmlFor="lastName">Last name</label>
                                        </div>
                                    </div>
                                </div>

                                <div className="md-form md-outline mt-0">
                                    <input type="text" id="form14" placeholder="Address Line 1" className="form-control" 
                                    value={this.state.address1} 
                                    onChange={event => this.setState({address1: event.target.value})}/>
                                    <label htmlFor="form14">Address 1</label>
                                </div>

                                <div className="md-form md-outline">
                                    <input type="text" id="form15" placeholder="Apartment, suite, unit etc. (optional)"
                                    className="form-control"
                                    value={this.state.address2} 
                                    onChange={event => this.setState({address2: event.target.value})}/>
                                    <label htmlFor="form15">Address 2</label>
                                </div>

                                <div className="md-form md-outline">
                                    <input type="text" id="form16" placeholder="Zip Code" className="form-control"
                                    value={this.state.zip} 
                                    onChange={event => this.setState({zip: event.target.value})}/>
                                    <label htmlFor="form16">ZIP</label>
                                </div>

                                <div className="md-form md-outline">
                                    <input type="text" id="form17" placeholder="City" className="form-control"
                                    value={this.state.city} 
                                    onChange={event => this.setState({city: event.target.value})}/>
                                    <label htmlFor="form17">City</label>
                                </div>

                                <div className="md-form md-outline">
                                    <input type="phone" id="form18" placeholder="Phone" className="form-control"
                                    value={this.state.phone} 
                                    onChange={event => this.setState({phone: event.target.value})}/>
                                    <label htmlFor="form18">Phone Number</label>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="card mb-4">
                            <div className="card-body">
                                <h5 className="mb-3">The total amount of order</h5>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                                    Food Cost
                                    <span>${this.cart.total.toFixed(2)}</span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                                    Delivery Fee
                                    <span>Free</span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                                    <div>
                                        <strong>Total Amount</strong>
                                    </div>
                                    <span><strong>${this.cart.total.toFixed(2)}</strong></span>
                                    </li>
                                </ul>
                                <button type="button" className="btn bg-green text-white btn-block waves-effect waves-light" onClick={() => this.onSubmit()}>Submit Order</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>;
    }
}

export default Checkout;