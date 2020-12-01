import React from "react";
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

    onCanceled() {
        this.DriverOrderService.setStatus("Pending");
        this.setState(this.DriverOrderService.getOrder());
        // Send status to backend
        this.setState(this.DriverOrderService.clearOrder());
    }

    render() {
        return <>
            <DriverNav />
            {(this.state.orderId === -1 &&
                <div className="container">
                    <h1 className="welcome">No current orders.</h1>
                    <Link className="btn bg-green pt-2" to="/driver/home">Return home</Link>
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
                            {(this.state.status === "In Progress" && 
                            <>
                                <h2 className="h-2">McDonalds</h2>
                                <h3 className="h-3 text-left">Restaurant Phone Number: </h3>
                                <h3 className="h-3 text-left">Restaurant Address: </h3>
                                <h3 className="h-3 text-left">Order Contents:</h3>
                                <ul className="list-group h5 text-left">
                                    {this.state.items.map((x, i) =>
                                        <li key={i}>
                                            <p className="text-decoration-none ml-4">- {x.quantity} {x.menuItem.name}, <span className="text-secondary h6">{x.menuItem.description}</span></p>
                                        </li>
                                    )}
                                </ul>
                                <button className="btn btn-danger btn-sm mt-3 mr-1 pb-2" onClick={() => this.onCanceled()}>Cancel Order</button>
                                <button className="btn bg-green mt-3 ml-1 pb-2" onClick={() => this.onPickedUp()}>Confirm Picked Up</button>
                            </>
                            )}
                            {(this.state.status === "Picked Up" && 
                            <>
                                <h2 className="h-2">{this.state.firstName} {this.state.lastName}</h2>
                                <h3 className="h-3 text-left">Customer Phone Number: {this.state.phone}</h3>
                                <h3 className="h-3 text-left">Customer Address: {this.state.address}</h3>
                                <h3 className="h-3 text-left">Order Contents:</h3>
                                <ul className="list-group h5 text-left">
                                    {this.state.items.map((x, i) =>
                                        <li key={i}>
                                            <p className="text-decoration-none ml-4">- {x.quantity} {x.menuItem.name}, <span className="text-secondary h6">{x.menuItem.description}</span></p>
                                        </li>
                                    )}
                                </ul>
                                <button className="btn btn-danger btn-sm mt-3 mr-1 pb-2" onClick={() => this.onCanceled()}>Cancel Order</button>
                                <button className="btn bg-green mt-3 pb-4 ml-1 btn-sm" onClick={() => this.onDelivered()}>Confirm Delivery Complete</button>
                            </>
                            )}
                        </div>
                    </div>
                    <div className="col-3"></div>
                    </div>
                    <Link className="btn bg-green btn-sm" to="/driver/home">Return home</Link>
                </div>
            )}
        </>;
    }
}

export default DriverCurrentOrder;
