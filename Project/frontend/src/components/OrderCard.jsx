import React from "react";
import { OrderRepository } from "../repository/orderRepository";

export class OrderCard extends React.Component {
    OrderRepository = new OrderRepository();

    state = {
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
        return (<>
            {this.props.orders.filter(order => order.status === this.props.status).map((x1, i1) =>
            <div className="row" key={i1}>
                <div className="col-3"></div>
                <div className="card col-6">
                    <div className="card-body">
                        <h5 className="text-secondary card-header mb-4">Order #{x1.order_id}</h5>
                        <h3 className="card-text">Total Price: ${x1.total_price.toFixed(2)}</h3>
                        {(!this.state.visible[i1] &&
                            <button className="btn btn-small bg-green mb-3" onClick={() => {
                                this.renderItems(x1.order_id, i1)
                            }}>See order</button>
                        )}
                        {(this.state.visible[i1] &&
                            <ul className="list-group h5">
                            {this.state.allItems.map((x2, i2) =>
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
                        {x1.status === "Pending" && ( <>
                            <br></br>
                            <button className="btn btn-sm bg-green" onClick={() => this.props.onAccepted(x1.order_id)}>Accept Order</button>
                        </>
                        )}
                    </div>
                </div>
                <div className="col-3"></div>
            </div>
            )}
        </>)
    } 

    componentDidMount() {
        for (var i = 0; i < this.props.orders.length; i++) {
            let v = this.state.visible;
            v.push(false);
            this.setState({visible: v});
        }
    }
}

export default OrderCard;