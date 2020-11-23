import React from 'react';
import CustomerNav from "./CustomerNav";
import { OrderRepository } from "../repository/orderRepository";

export class CustomerOrderHistory extends React.Component {
    OrderRepository = new OrderRepository();

    state = {
        orders: []
    }

    render() {
        return (
            <>
                <CustomerNav />
                <div className="container">
                    <h1 className="welcome">Past Orders</h1>
                    {this.state.orders.length === 0 && (
                    <p className="p-3 bg-light">No previous orders</p>
                    )}
                    {this.state.orders.length > 0 && (
                    <ul className="list-group">
                        {
                            this.state.orders.map((order, i) =>
                                <li key={i}>
                                    <div className="container">
                                        <div className="card bg-white">
                                            <a className="card-block stretched-link text-decoration-none" href={"/order/" + order.id}>
                                                <div className="card-body">
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </li>)
                        }
                    </ul>
                    )}
                </div>
            </>
    )}
}

export default CustomerOrderHistory;
