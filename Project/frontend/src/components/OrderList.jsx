import React from "react";
import '../App.css';
import { OrderRepository } from "../repository/orderRepository";
import { RestaurantRepository } from "../repository/restaurantRepository";
import {OrderCard} from './OrderCard';

class OrderList extends React.Component {
    RestaurantRepository = new RestaurantRepository();
    OrderRepository = new OrderRepository();

    constructor() {
      super();
      this.state = {
        orders: [],
        employee: {}
      }
    }

    onAccepted(id){
      this.props.onAccepted(id);
    }

    render(){
      return <>
        {this.props.ordersType === "Pending" && (
          <h3 className="welcome">{this.props.ordersType} Orders:</h3>
        )}
        {this.props.ordersType === "Waiting" && (
          <h3 className="welcome">Current Orders:</h3>
        )}
        <OrderCard orders={this.props.orders} onAccepted={id => this.onAccepted(id)} status={this.props.ordersType}/>
      </>;
    }
}


export default OrderList;