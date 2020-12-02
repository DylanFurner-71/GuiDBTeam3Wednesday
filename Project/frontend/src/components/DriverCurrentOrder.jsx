import React from "react";
import { OrderRepository } from "../repository/orderRepository";
import DriverNav from "./DriverNav";
import DriverOrderService from "../services/DriverOrderService";
import { RestaurantRepository } from '../repository/restaurantRepository';
import { AccountRepository } from '../repository/accountRepository';
import { Link } from "react-router-dom";

class DriverCurrentOrder extends React.Component {
    OrderRepository = new OrderRepository();
    RestaurantRepository = new RestaurantRepository();
    AccountRepository = new AccountRepository();
    DriverOrderService = new DriverOrderService();

    state = {
        orderId: +this.props.match.params.orderId,
        order: {
            order_id: +this.props.match.params.orderId,
            first_name: "",
            last_name: "",
            phone: ""
        },
        items: [],
        status: "Started",
        restaurantContact: {phone: ""},
        restaurantAddress: {address_body: "", city: "", state: "", zip: ""},
        restaurant: {restaurant_name: ""},
        customerAddress: {address_body: "", city: "", state: "", zip: ""},
        customer: {first_name: "", last_name: ""}
    }
    
    onPickedUp() {
        this.OrderRepository.updateOrderStatus(this.state.order.order_id, "Picked Up");
        this.setState({status: "Picked Up"});
    }

    onDelivered() {
        this.OrderRepository.updateOrderStatus(this.state.order.order_id, "Delivered");
        this.setState({orderId: this.DriverOrderService.clearOrder()});
        this.setState({status: "Delivered"});
    }

    onCanceled() {
        this.OrderRepository.updateOrderStatus(this.state.order.order_id, "Pending");
        this.setState({orderId: this.DriverOrderService.clearOrder()});
        this.setState({status: "Pending"});
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
                            <h5 className="card-header mb-2">Order #{this.state.order.order_id}</h5>
                            {(this.state.status === "Started" && 
                            <>
                                <h2 className="h-2">{this.state.restaurant.restaurant_name}</h2>
                                <h3 className="h-3 text-left">Restaurant Phone: {this.state.restaurantContact.phone}</h3>
                                <h3 className="h-3 text-left">
                                    Restaurant Address:
                                    <br></br>
                                    <span className="ml-4">{this.state.restaurantAddress.address_body}</span>
                                    <br></br>
                                    <span className="ml-4">{this.state.restaurantAddress.city},{this.state.restaurantAddress.state} {this.state.restaurantAddress.zip}</span>
                                </h3>
                                <h3 className="h-3 text-left">Order Contents:</h3>
                                <ul className="list-group h5 text-left">
                                    {this.state.items.map((x, i) =>
                                        <li key={i}>
                                            <p className="text-decoration-none ml-4">- {x.quantity} {x.name}</p>
                                        </li>
                                    )}
                                </ul>
                                <button className="btn btn-danger btn-sm mt-3 mr-1 pb-2" onClick={() => this.onCanceled()}>Cancel Order</button>
                                <button className="btn bg-green mt-3 ml-1 pb-2" onClick={() => this.onPickedUp()}>Confirm Picked Up</button>
                            </>
                            )}
                            {(this.state.status === "Picked Up" && 
                            <>
                                <h2 className="h-2">{this.state.order.first_name} {this.state.order.last_name}</h2>
                                <h3 className="h-3 text-left">Customer Phone: {this.state.order.phone}</h3>
                                <h3 className="h-3 text-left">
                                    Customer Address:
                                    <br></br>
                                    <span className="ml-4">{this.state.customerAddress.address_body}</span>
                                    <br></br>
                                    <span className="ml-4">{this.state.customerAddress.city},{this.state.customerAddress.state} {this.state.customerAddress.zip}</span>
                                </h3>
                                <h3 className="h-3 text-left">Order Contents:</h3>
                                <ul className="list-group h5 text-left">
                                    {this.state.items.map((x, i) =>
                                        <li key={i}>
                                            <p className="text-decoration-none ml-4">- {x.quantity} {x.name}</p>
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

    componentDidMount() {
        const orderId = +this.props.match.params.orderId;
        this.OrderRepository.getOrder(orderId).then(topElement => {
            this.setState({order: topElement[0]});
            this.RestaurantRepository.getRestaurantContact(topElement[0].restaurant_id).then(element => this.setState({restaurantContact: element[0]}));
            this.RestaurantRepository.getRestaurantAddress(topElement[0].restaurant_id).then(element => this.setState({restaurantAddress: element[0]}));
            this.RestaurantRepository.getRestaurant(topElement[0].restaurant_id).then(element => this.setState({restaurant: element[0]}));
            this.OrderRepository.getOrderItems(orderId).then(elements => {
                this.setState({items: elements});
                console.log(elements);
            });
            this.OrderRepository.getOrderAddress(topElement[0].address_id).then(element => this.setState({customerAddress: element[0]}));
        })
    }
}

export default DriverCurrentOrder;
