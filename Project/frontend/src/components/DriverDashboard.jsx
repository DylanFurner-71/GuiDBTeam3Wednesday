import React from "react";
import { OrderRepository } from "../repository/orderRepository";
import Order from '../models/Order'
import {CartItem} from '../models/CartItem'
import {MenuItem} from '../models/MenuItem'
import DriverNav from "./DriverNav";
import { Link } from "react-router-dom";
import DriverOrderService from "../services/DriverOrderService";

class DriverDashboard extends React.Component {
    OrderRepository = new OrderRepository();
    DriverOrderService = new DriverOrderService();

    state = {
        orders: [],
    }

    onSetOrder(orderId) {
        this.DriverOrderService.setOrderId(orderId);
    }

    render() {
        return <>
            <DriverNav />
            <div className="container">
                <h1 className="welcome">Pending Orders:</h1>
                {this.state.orders.map((x) =>
                    <div className="row" key={x.order_id}>
                        <div className="col-3"></div>
                        <div className="card col-6">
                            <div className="card-body">
                                <h5 className="text-secondary card-header mb-4">Order #{x.order_id}</h5>
                                <h3 className="card-title">Customer Name: {this.getCustomerName(x.account_id)}</h3>
                                <h4 className="card-text">Restaurant: {this.getRestaurantName(x.restaurant_id)}</h4>
                                <h4 className="card-text">Total Price: {x.total_price}</h4>
                                <Link className="btn bg-green mt-3 pt-2 pb-2" onClick={() => this.onSetOrder(x.order_id)} to={"/driver/order"}>Begin</Link>
                            </div>
                        </div>
                        <div className="col-3"></div>
                    </div>
                )}
            </div>
        </>;
    }

    componentDidMount() {
        this.OrderRepository.getOrdersByStatus("Waiting").then(elements => this.setState({orders: elements}));
    }
}

export default DriverDashboard;