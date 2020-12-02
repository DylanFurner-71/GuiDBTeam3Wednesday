import React from "react";
import '../App.css';
import { OrderRepository } from "../repository/orderRepository";
import EmployeeNav from "./EmployeeNav";
import OrderList from "./OrderList";
import {RestaurantRepository} from "../repository/restaurantRepository"
class EmployeeOrders extends React.Component {
  OrderRepository = new OrderRepository();
  RestaurantRepository = new RestaurantRepository();
  
  constructor() {
    super();

    this.state = {
      employee: {},
      orders: []
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
      this.setState({
        employee: employee[0]
      });
    }
  }

  componentDidMount() {
    this.OrderRepository.getOrdersForRestaurant(this.state.employee.org_id).then(elements => {
      this.setState({orders: elements});
    });
  }

  onAccepted(id) {
    this.OrderRepository.updateOrderStatus(id, "Waiting");
    this.OrderRepository.getOrdersForRestaurant(this.state.employee.org_id).then(elements => {
      this.setState({orders: elements});
    });
  }

  render() {
    return <>
      <EmployeeNav restId={this.state.employee.org_id} id={this.state.employee.account_id}/>
      <div className="container">
        <OrderList orders={this.state.orders} ordersType={"Pending"} onAccepted={(id) => this.onAccepted(id)}/>
        <OrderList orders={this.state.orders} ordersType={"Waiting"}/>
      </div>
    </>;
  }
}

export default EmployeeOrders;