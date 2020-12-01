import React from "react";
import '../App.css';
import { OrderRepository } from "../repository/orderRepository";
import Order from '../models/Order'
import {CartItem} from '../models/CartItem'
import {MenuItem} from '../models/MenuItem'
import DriverNav from "./DriverNav";
import { Link } from "react-router-dom";
import DriverOrderService from "../services/DriverOrderService";
import EmployeeNav from "./EmployeeNav";
import OrderList from "./OrderList";
class EmployeeOrders extends React.Component {
    OrderRepository = new OrderRepository();
    DriverOrderService = new DriverOrderService();

    // Placeholder Data
    menuItem1 = new MenuItem("Steak", "12oz", 25.0, 0);
    menuItem2 = new MenuItem("Pizza", "Tomato Sauce", 12.0, 0);
    cartItem1 = new CartItem(this.menuItem1, 2, 50);
    cartItem2 = new CartItem(this.menuItem2, 1, 12);
    orders = [
        new Order([this.cartItem1], "1234", "Molly", "Yu", "Dpt.123 Dallas street", "4771487321", "Pending"),
        new Order([this.cartItem2], "2789", "Bill", "Wang", "Dpt.234 Dallas street", "4375987397", "Pending")
    ];

    state = {
        Orders: this.orders,
        pastOrders: this.orders, //subject to change once we have a backend connection
    }

    onSetOrder(order) {
        this.DriverOrderService.setOrder(order);
        //i need to send an order to the driver through here
    }
    onClickPastOrder(order){
        //this will someday be a way to leave a complaint about a customer
    }

    render() {
        return <>
        <EmployeeNav restId={this.state.employee.restaurantId} id={this.state.employee.id}/>
            <div className="container">
            <OrderList Orders={this.state.Orders} ordersType={"Pending"}/>
            <OrderList Orders={this.state.pastOrders} ordersType={"Past"}/>
            </div>
        </>;
    }
}

export default EmployeeOrders;