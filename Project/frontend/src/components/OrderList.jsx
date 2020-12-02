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

class OrderList extends React.Component {
    OrderRepository = new OrderRepository();
    DriverOrderService = new DriverOrderService();
    RestaurantRepository = new RestaurantRepository();
    constructor() { //this will likely require an employeeId parameter
        super();
        // Placeholder data
      this.state = {
          Orders: [],
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
      componentDidMount(){
        if (this.state.employee){
            let m = this.state.Orders;
          this.OrderRepository.getOrdersForRestaurant(this.state.employee.org_id).then(res => this.setState({Orders: res}))
        console.log("This.state....123123123123",this.state);  
        }
      }
    render(){
        if (this.state.orders){
            this.setState(this.state.orders.filter(order => order.status === "Delivered"))
    return (
        <>
         <h3 className="welcome">{this.state.Orders[0].status} Orders:</h3>
                {this.state.Orders.map((x) =>
                    <div className="row" key={x.orderId}>
                        <div className="col-3"></div>
                        <div className="card col-6">
                            <div className="card-body">
                                <h5 className="text-secondary card-header mb-4">Order #{x.order_id}</h5>
                                <h3 className="card-title">{x.first_name} {x.last_name}</h3>
                                <h4 className="card-text">Phone Number: {x.phone}</h4>
                                <h4 className="card-text">Address: {x.address}</h4>
                                <h4 className="card-text">Number of Items: {x.items.length}</h4>
                                <Link className="btn bg-green btn-lg mt-3" onClick={() => this.props.onClickOrder(x)} to={"/driver/order"}>Begin Order</Link>
                            </div>
                        </div>
                        <div className="col-3"></div>
                    </div>
                )}
        </>
    )

} else {
    return ( <div> Is loading...</div>)
}
}
}

export default OrderList;