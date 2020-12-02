import React, {Component} from "react";
import MenuView from "./MenuView";
import { AccountRepository } from "../repository/accountRepository";
import { RestaurantRepository } from "../repository/restaurantRepository";
import EmployeeNav from "./EmployeeNav";

/*

1st: make sure we get the restaurant id so we can get the restaurant menu at api/restaurants/:id/menu
that will pull up menu items


*/
class RestaurantEmployeeLanding extends Component {
  localStorage = {};
  accountRepository = new AccountRepository();
  restaurantRepository = new RestaurantRepository();
  constructor() { //this will likely require an employeeId parameter
    super();
    // Placeholder data
    this.state = {
        employee: [],
    };
  }

  render() {
    return <>
        <EmployeeNav restId={this.state.employee.org_id} id={this.state.employee.account_id}/>
        <div className="container">       
          <h1 className="welcome"> Hello, {this.state.employee.first_name}</h1>
          <h3 className="text-white">Welcome, to get started, please make sure your restaurant has a menu. Click the orders tab to view pending and past orders at your restaurant.</h3>      
        </div>
    </>;
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
  }
}
export default RestaurantEmployeeLanding;


// // /*
// // Restaurant		First Name
// // restaurant address		Last Name
// // 		Email
// // 		Password
// // */

// import React from "react";
// import '../App.css';
// import { OrderRepository } from "../repository/orderRepository";
// import Order from '../models/Order'
// import {CartItem} from '../models/CartItem'
// import {MenuItem} from '../models/MenuItem'
// import DriverNav from "./DriverNav";
// import { Link } from "react-router-dom";
// import DriverOrderService from "../services/DriverOrderService";

// class RestaurantEmployeeLanding extends React.Component {
//     OrderRepository = new OrderRepository();
//     DriverOrderService = new DriverOrderService();

//     // Placeholder Data
//     menuItem1 = new MenuItem("Steak", "12oz", 25.0, 0);
//     menuItem2 = new MenuItem("Pizza", "Tomato Sauce", 12.0, 0);
//     cartItem1 = new CartItem(this.menuItem1, 2, 50);
//     cartItem2 = new CartItem(this.menuItem2, 1, 12);
//     orders = [
//         new Order([this.cartItem1], "1234", "Molly", "Yu", "Dpt.123 Dallas street", "4771487321", "Pending"),
//         new Order([this.cartItem2], "2789", "Bill", "Wang", "Dpt.234 Dallas street", "4375987397", "Pending")
//     ];

//     state = {
//         Orders: this.orders,
//     }

//     onSetOrder(order) {
//         this.DriverOrderService.setOrder(order);
//     }

//     render() {
//         return <>
//             <EmployeeNav />
//             <div className="container">
//                 <h1 className="welcome">Unfilfilled Orders:</h1>
//                 {this.state.Orders.map((x) =>
//                     <div className="row" key={x.orderId}>
//                         <div className="col-3"></div>
//                         <div className="card col-6">
//                             <div className="card-body">
//                                 <h5 className="text-secondary card-header mb-4">Order #{x.orderId}</h5>
//                                 <h3 className="card-title">{x.firstName} {x.lastName}</h3>
//                                 <h4 className="card-text">Phone Number: {x.phone}</h4>
//                                 <h4 className="card-text">Address: {x.address}</h4>
//                                 <h4 className="card-text">Number of Items: {x.items.length}</h4>
//                                 <Link className="btn bg-green btn-lg mt-3" onClick={() => this.onSetOrder(x)} to={"/driver/order"}>Begin Order</Link>
//                             </div>
//                         </div>
//                         <div className="col-3"></div>
//                     </div>
//                 )}
//             </div>
//         </>;
//     }
// }
// export default RestaurantEmployeeLanding;