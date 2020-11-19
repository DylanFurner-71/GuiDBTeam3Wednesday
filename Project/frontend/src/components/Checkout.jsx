import React from 'react';
import { Customer } from '../models/Customer';
import CustomerNav from "./CustomerNav";

export class Checkout extends React.Component {
    state = new Customer(
        // id
        0,
        // firstName
        "",
        // lastName
        "",
        // email: 
        "",
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

    onSubmit() {
        this.props.onCheckout(
            new Customer(
                this.state.id,
                this.state.firstName,
                this.state.lastName,
                this.state.email,
                this.state.address1,
                this.state.address2,
                this.state.city,
                this.state.state,
                this.state.zip
            )
        );
    }

    render() {
        return(
            <>
            <div className="row">
                <div className="col-lg-8 mb-4">
                    <div className="card wish-list pb-1">
                        <div className="card-body">
                            <h4 className="mb-3">Shipping Details</h4>
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="md-form md-outline mb-0 mb-lg-4">
                                        <input type="text" id="firstName" className="form-control mb-0 mb-lg-2" placeholder="First Name" onChange={event => this.setState({firstName: event.target.value})}/>
                                        <label htmlFor="firstName" className="text-black">First name</label>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="md-form md-outline">
                                        <input type="text" id="lastName" className="form-control" placeholder="Last Name"/>
                                        <label htmlFor="lastName">Last name</label>
                                    </div>
                                </div>
                            </div>

                            <div className="md-form md-outline mt-0">
                                <input type="text" id="form14" placeholder="Address Line 1" className="form-control"/>
                                <label htmlFor="form14">Address 1</label>
                            </div>

                            <div className="md-form md-outline">
                                <input type="text" id="form15" placeholder="Apartment, suite, unit etc. (optional)"
                                className="form-control"/>
                                <label htmlFor="form15">Address 2</label>
                            </div>

                            <div className="md-form md-outline">
                                <input type="text" id="form16" placeholder="Zip Code" className="form-control"/>
                                <label htmlFor="form16">ZIP</label>
                            </div>

                            <div className="md-form md-outline">
                                <input type="text" id="form17" placeholder="City" className="form-control"/>
                                <label htmlFor="form17">City</label>
                            </div>

                            <div className="md-form md-outline">
                                <input type="email" id="form18" placeholder="Email" className="form-control"/>
                                <label htmlFor="form18">Email address</label>
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
                                <span>${this.props.orderTotal}</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                                Delivery Fee
                                <span>Free</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                                <div>
                                    <strong>Total Amount</strong>
                                </div>
                                <span><strong>${this.props.orderTotal}</strong></span>
                                </li>
                            </ul>
                            <button type="button" className="btn bg-green text-white btn-block waves-effect waves-light" onClick={() => this.onSubmit()}>Submit Order</button>
                        </div>
                    </div>
                </div>
            </div>
            </>
        )
    }
}

export default Checkout;