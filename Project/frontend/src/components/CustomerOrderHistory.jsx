import React from 'react';
import CustomerNav from "./CustomerNav";
import { AccountRepository } from "../repository/accountRepository";
import { RestaurantRepository } from "../repository/restaurantRepository";

export class CustomerOrderHistory extends React.Component {
    AccountRepository = new AccountRepository();
    RestaurantRepository = new RestaurantRepository();

    state = {
        orders: [],
        restaurant_names: [],
        items: []
    }

    getRestaurantName(id) {
        this.RestaurantRepository.getRestaurant(id).then(element => {
            let rnames = this.state.restaurant_names;
            rnames.push(element[0].restaurant_name);
            this.setState({restaurant_names: rnames});
        });
    }

    render() {
        return (
            <>
                <CustomerNav />
                <div className="container">
                    <h1 className="welcome">Past Orders</h1>
                    {this.state.orders.length === 0 && (
                    <p className="p-3 bg-light">No previous orders</p>
                    )}
                    {this.state.orders.length > 0 && (
                    <ul className="list-group">
                        {
                            this.state.orders.map((x, i) =>
                                <li key={i}>
                                    <div className="card bg-white">
                                        <div className="card-body">
                                            <h4 className="card-text">Restaurant: {this.state.restaurant_names[i]}</h4>
                                            <h4 className="card-text">Total Price: ${x.total_price.toFixed()}</h4>
                                        </div>
                                    </div>
                                </li>)
                        }
                    </ul>
                    )}
                </div>
            </>
    )}

    componentDidMount() {
        // TODO change 1 to account id
        this.AccountRepository.getOrderHistory(1).then(elements => {
            this.setState({orders: elements});
            console.log(elements);
            for (var i = 0; i < elements.length; i++) {
                this.getRestaurantName(elements[i].restaurant_id);
            }
        })
    }
}

export default CustomerOrderHistory;
