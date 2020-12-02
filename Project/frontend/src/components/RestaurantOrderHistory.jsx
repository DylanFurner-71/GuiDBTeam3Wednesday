import React from 'react';
import { RestaurantRepository } from "../repository/restaurantRepository";
import { OrderRepository } from "../repository/orderRepository";
import EmployeeNav from './EmployeeNav';

export class RestaurantOrderHistory extends React.Component {
    RestaurantRepository = new RestaurantRepository();
    OrderRepository = new OrderRepository();

    state = {
        id: +this.props.match.params.restaurantId,
        orders: [],
        allItems: [],
        visible: []

    }

    renderItems(orderId, index) {
        this.OrderRepository.getOrderItems(orderId).then(elements => {
            var orderItems = [];
            for (var i = 0; i < elements.length; i++) {
                let item = {
                    name: elements[i].name,
                    quantity: elements[i].quantity
                }
                orderItems.push(item);
            }
            let newItem = {
                id: orderId,
                items: orderItems
            }
            let _items = this.state.allItems;
            _items.push(newItem);
            this.setState({allItems: _items});
            let v = this.state.visible;
            v[index] = true;
            this.setState({visible: v});
        });
    }

    render() {
        return (
            <>
                <EmployeeNav restId={this.state.id}/>
                <div className="container">
                    <h1 className="welcome">Past Orders</h1>
                    {this.state.orders.length === 0 && (
                    <p className="p-3 bg-light">No previous orders</p>
                    )}
                    {this.state.orders.length > 0 && (
                    <ul className="list-group">
                        {
                            this.state.orders.map((x1, i1) =>
                                <li key={i1}>
                                    <div className="card bg-white">
                                        <div className="card-body">
                                            <h3 className="card-text">Order #: {x1.order_id}</h3>
                                            <h3 className="card-text">Total Price: ${x1.total_price.toFixed(2)}</h3>
                                            {(!this.state.visible[i1] &&
                                                <button className="btn btn-small bg-green mb-3" onClick={() => {
                                                    this.renderItems(x1.order_id, i1)
                                                }}>See order</button>
                                            )}
                                            {(this.state.visible[i1] &&
                                                <ul className="list-group h5">
                                                {this.state.allItems.filter(i => i.id == x1.order_id).map((x2, i2) =>
                                                    <li key={i2}>
                                                        {x2.items.map((x3, i3) =>
                                                            <div key={i3}>
                                                                <p className="text-decoration-none">- {x3.quantity} {x3.name}</p>
                                                            </div>
                                                        )}
                                                    </li>
                                                )}
                                                </ul>
                                            )}
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
        this.RestaurantRepository.getOrderHistory(+this.props.match.params.restaurantId).then(elements => {
            this.setState({orders: elements});
            for (var i = 0; i < elements.length; i++) {
                let v = this.state.visible;
                v.push(false);
                this.setState({visible: v});
            }
        })
    }
}

export default RestaurantOrderHistory;
