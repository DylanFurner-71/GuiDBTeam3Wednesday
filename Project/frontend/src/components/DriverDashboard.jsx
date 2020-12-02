import React from "react";
import { OrderRepository } from "../repository/orderRepository";
import { AccountRepository } from "../repository/accountRepository";
import { RestaurantRepository } from "../repository/restaurantRepository";
import DriverNav from "./DriverNav";
import { Link } from "react-router-dom";
import DriverOrderService from "../services/DriverOrderService";

class DriverDashboard extends React.Component {
    OrderRepository = new OrderRepository();
    AccountRepository = new AccountRepository();
    RestaurantRepository = new RestaurantRepository();
    DriverOrderService = new DriverOrderService();

    state = {
        orders: [],
        restaurant_names: []
    }

    onSetOrder(orderId) {
        this.DriverOrderService.setOrderId(orderId);
        this.OrderRepository.updateOrderStatus(orderId, "Started");
    }

    getRestaurantName(id) {
        this.RestaurantRepository.getRestaurant(id).then(element => {
            let rnames = this.state.restaurant_names;
            rnames.push(element[0].restaurant_name);
            this.setState({restaurant_names: rnames});
        });
    }

    render() {
        return <>
            <DriverNav />
            <div className="container">
                <h1 className="welcome">Pending Orders:</h1>
                {this.state.orders.length === 0 && (
                    <p className="p-3 bg-light">No pending orders currently.</p>
                )}
                {this.state.orders.length > 0 && (
                <>
                    {this.state.orders.map((x, i) =>
                        <div className="row" key={x.order_id}>
                            <div className="col-3"></div>
                            <div className="card col-6">
                                <div className="card-body">
                                    <h5 className="text-secondary card-header mb-4">Order #{x.order_id}</h5>
                                    <h4 className="card-text">Restaurant: {this.state.restaurant_names[i]}</h4>
                                    <h4 className="card-text">Total Price: ${x.total_price.toFixed(2)}</h4>
                                    <Link className="btn bg-green mt-3 pt-2 pb-2" onClick={() => this.onSetOrder(x.order_id)} to={"/driver/order/" + x.order_id}>Begin</Link>
                                </div>
                            </div>
                            <div className="col-3"></div>
                        </div>
                    )}
                </>)}
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
        this.OrderRepository.getOrdersByStatus("Waiting").then(elements => {
            this.setState({orders: elements});
            for (var i = 0; i < elements.length; i++) {
                this.getRestaurantName(elements[i].restaurant_id);
            }
        });
    }
}

export default DriverDashboard;