import React from 'react';
import CustomerNav from "./CustomerNav";

export class CustomerOrderHistory extends React.Component {
    state = {
        
    }

    orders = []

    render() {
        return (
            <>
                <CustomerNav />
                <h1 className="welcome">Past Orders</h1>
                {this.orders.length === 0 && (
                <p className="p-3 bg-light">No previous orders</p>
                )}
                {this.orders.length > 0 && (
                <ul className="list-group">
                    {
                        this.orders.map((x, i) =>
                            <li key={i}>
                                <div className="container">
                                    <div className="card bg-white">
                                        <a className="card-block text-decoration-none">
                                            <div className="card-body">
                                                <p className="font-weight-bold">{x.name}</p>
                                                <p className="text-secondary">{x.address}</p>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </li>)
                    }
                </ul>
                )}
            </>
    )}
}

export default CustomerOrderHistory;
