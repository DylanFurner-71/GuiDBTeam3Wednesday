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
import {RestaurantRepository} from "../repository/restaurantRepository"
class EmployeeOrders extends React.Component {
    OrderRepository = new OrderRepository();
    DriverOrderService = new DriverOrderService();
    RestaurantRepository = new RestaurantRepository();
    // Placeholder Data
    menuItem1 = new MenuItem("Steak", "12oz", 25.0, 0);
    menuItem2 = new MenuItem("Pizza", "Tomato Sauce", 12.0, 0);
    cartItem1 = new CartItem(this.menuItem1, 2, 50);
    cartItem2 = new CartItem(this.menuItem2, 1, 12);
    orders = [
        new Order([this.cartItem1], "1234", "Molly", "Yu", "Dpt.123 Dallas street", "4771487321", "Pending"),
        new Order([this.cartItem2], "2789", "Bill", "Wang", "Dpt.234 Dallas street", "4375987397", "Pending")
    ];
    constructor() { //this will likely require an employeeId parameter
      super();
      // Placeholder data
    this.state = {
        Orders: [],
        pastOrders: [], //subject to change once we have a backend connection
        employee: {},
    }
  }
    componentWillMount() {
        const employee = JSON.parse(localStorage.getItem('user'));
        if (localStorage === null) {
          this.setState({
            employee: {}
          });
          
        }
        else {
            console.log(employee);
          this.setState({
            employee: employee[0]
          });
        }
      }
      componentDidMount() {
        if (this.state.employee){
          let m = this.state.Orders;
        this.OrderRepository.getOrdersForRestaurant(this.state.employee.org_id).then(res => m.push(res), this.setState({Orders: m}))
      console.log("This.state....",this.state);  
      }
      }

    onSetOrder(order) {
        // this.DriverOrderService.setOrder(order);
        //i need to send an order to the driver through here
    }
    onClickPastOrder(order){
        //this will someday be a way to leave a complaint about a customer
    }
    renderOrderList(orders, status) {
      if (this.state.Orders.length > 0){
        return (<div><OrderList Orders={orders} ordersType={status}/> </div>) 
     } else {
      return (<div>Soon</div>)
     }

    }
    render() {
        return <>
        <EmployeeNav restId={this.state.employee.org_id} id={this.state.employee.account_id}/>
            <div className="container">
            {
              this.renderOrderList(this.state.orders, "Pending")
                 }
                     {
              this.renderOrderList(this.state.pastOrders, "Past")
                 }
            {/* <OrderList Orders={this.state.pastOrders} ordersType={"Past"}/> */}
            </div>
        </>;
    }
}

export default EmployeeOrders;