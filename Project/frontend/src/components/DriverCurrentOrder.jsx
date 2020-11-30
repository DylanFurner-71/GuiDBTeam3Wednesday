import React from "react";
import '../App.css';
import { OrderRepository } from "../repository/orderRepository";
import DriverNav from "./DriverNav";
import DriverOrderService from "../services/DriverOrderService";
import { Link } from "react-router-dom";

class DriverCurrentOrder extends React.Component {
    OrderRepository = new OrderRepository();
    DriverOrderService = new DriverOrderService();

    state = this.DriverOrderService.getOrder();
    
    onPickedUp() {
        this.DriverOrderService.setStatus("Picked Up");
        this.setState(this.DriverOrderService.getOrder());
        // Send status to backend
    }

    onDelivered() {
        this.DriverOrderService.setStatus("Delivered");
        this.setState(this.DriverOrderService.getOrder());
        // Send status to backend before changing state again
        this.setState(this.DriverOrderService.clearOrder());
    }

    render() {
        return <>
            <DriverNav />
            {(this.state.orderId === -1 &&
                <div className="container">
                    <h1 className="welcome">No current orders.</h1>
                    <Link className="btn bg-green" to="/driver/home">Return home</Link>
                </div>
            )}
            {(this.state.orderId !== -1 &&
                <div className="container">
                    <h1 className="welcome">Current Order</h1>
                    <div className="row">
                    <div className="col-3"></div>
                    <div className="card col-6">
                        <div className="card-body">
                            <h5 className="card-header mb-2">Order #{this.state.orderId}</h5>
                            <h3 className="display-4 m-3">{this.state.firstName} {this.state.lastName}</h3>
                            <h4 className="h3 text-left">Phone Number: {this.state.phone}</h4>
                            <h4 className="h3 text-left">Address: {this.state.address}</h4>
                            <h4 className="h4 text-left">Order Contents:</h4>
                            <ul className="list-group h5 text-left">
                                {this.state.items.map((x, i) =>
                                    <li key={i}>
                                        <p className="text-decoration-none ml-4">- {x.quantity} {x.menuItem.name}, <span className="text-secondary h6">{x.menuItem.description}</span></p>
                                    </li>
                                )}
                            </ul>
                            {(this.state.status === "In Progress" && 
                                <button className="btn bg-green mt-3" onClick={() => this.onPickedUp()}>Confirm Picked Up</button>
                            )}
                            {(this.state.status === "Picked Up" && 
                                <Link className="btn bg-green mt-3" onClick={() => this.onDelivered()}>Confirm Delivery Complete</Link>
                            )}
                        </div>
                    </div>
                    <div className="col-3"></div>
                    </div>
                </div>
            )}
        </>;
    }
}

export default DriverCurrentOrder;
