import React, { Component } from "react";
import '../App.css';
import { OrderRepository } from "../repository/orderRepository";
import Order from '../models/Order'

class DriverDashboard extends React.Component {
    OrderRepository = new OrderRepository();

    orders = [
        new Order("Hamburger", "1234", "Molly", "Yu", "Dpt.123 Dallas street", "4771487321"),
        new Order("Steak", "2789", "Bill", "Wang", "Dpt.234 Dallas street", "4375987397")
        //It would someday pull up the list of existing orders from the api 
    ];

    state = {
        Order: this.orders,
        DriverName: 'Baohua'
        //It would someday pull up the list of existing drivers name from the api   
    }



    render() {
        return <div className="container" >
            <div className="breadcrumb" style={{ weight: '100%', color: 'black', background: 'MediumSeaGreen' }}>
                <h5 className="mw-100">Hello! {this.state.DriverName}</h5>

            </div>

            <div>
                <h2 Class Name="header" style={{ color: 'White' }}>Current activited order(s)</h2>
            </div>

            <div className="card" >
                {this.state.Order.map((x) =>

                    <div className="card" key={x.orderId}>
                        <div className="card-body" >
                            <h5><span className="card-header">Order #{x.orderId}</span></h5>
                            <div className="row align-items-end">
                                <div className="col-sm-4">

                                </div>
                                <div className="col-sm-4 mt-2">
                                    <h4 className="card-title">{x.lastName} {x.firstName}</h4>
                                    <h4 className="card-title">{x.phone}</h4>
                                    <p><h4 className="card-text">{''}{x.address}</h4></p>

                                </div>
                            </div>

                            <button type='button' class="btn btn-primary btn-lg btn-block" style={{ background: 'MediumSeaGreen' }} >Picked up!</button>
                            <button type='button' class="btn btn-secondary btn-lg btn-block" style={{ background: 'MediumSeaGreen' }}>Delieved!</button>

                        </div>

                    </div>

                )}
            </div>
        </div>
    }

}
export default DriverDashboard;