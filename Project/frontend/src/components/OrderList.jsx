import React from "react";
import '../App.css';
import { OrderRepository } from "../repository/orderRepository";
import Order from '../models/Order'
import {CartItem} from '../models/CartItem'
import {MenuItem} from '../models/MenuItem'
import DriverNav from "./DriverNav";
import { Link } from "react-router-dom";
import DriverOrderService from "../services/DriverOrderService";
import { RestaurantRepository } from "../repository/restaurantRepository";
const OrderCard = (props) => {
    if (props.orders){
        return (<>
            {props.orders.map((x) =>
        <div className="row" key={x.order_id}>
            <div className="col-3"></div>
            <div className="card col-6">
                <div className="card-body">
                    <h5 className="text-secondary card-header mb-4">Order #{x.order_id}</h5>
                    <h3 className="card-title">{x.first_name} {x.last_name}</h3>
                    <h4 className="card-text">Phone Number: {x.phone}</h4>
                    <h4 className="card-text">Address: {x.address}</h4>
                    <h4 className="card-text">Number of Items: {props.items.length}</h4>
                    <Link className="btn bg-green btn-lg mt-3" onClick={() => this.onClickOrder(x)} to={"/driver/order"}>Begin Order</Link>
                </div>
            </div>
            <div className="col-3"></div>
        </div>
    )}
    </>
        )
} else {
    return <> <div> Nada </div></>
}
}
class OrderList extends React.Component {
    OrderRepository = new OrderRepository();
    DriverOrderService = new DriverOrderService();
    RestaurantRepository = new RestaurantRepository();
    constructor() { //this will likely require an employeeId parameter
        super();
        // Placeholder data
      this.state = {
          Orders: [],
          items: [],
          employee: {},
          prevProps: {
              Orders: [],
          }
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
      componentDidMount(){
        if (this.state.employee){
          this.OrderRepository.getOrdersForRestaurant(this.state.employee.org_id).then(res => this.setState({Orders: res}))
        this.OrderRepository.getOrderItems(this.state.Orders.order_id).then(curr => this.setState({items: curr}))
        }
      }
      componentDidUpdate(prevProps) {
        // Typical usage (don't forget to compare props):
        if (this.state.Orders !== prevProps.Orders) {
            this.render();
        }
      }
      onClickOrder(){
          console.log("Here we are in on click order");
      }
    render(){
            
    return (
        <>
         <h3 className="welcome">{this.props.ordersType} Orders:</h3>
                <OrderCard orders={this.state.Orders} items={this.state.items}/>
        </>
    )

}
}


export default OrderList;