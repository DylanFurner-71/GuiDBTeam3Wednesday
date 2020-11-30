import React from 'react';
import { RestaurantRepository } from '../repository/restaurantRepository';
import { CartService } from '../services/CartService';
import CustomerNav from "./CustomerNav";
import { Link } from 'react-router-dom';

export class ViewCart extends React.Component {
    RestaurantRepository = new RestaurantRepository();
    CartService = new CartService();

    state = this.CartService.getCart();

    render() {
        return <>
            <CustomerNav myOrderFlag={true}/>
            <h3 className="welcome">{this.state.name}My Cart</h3>
            <div className="container-md bg-light p-3">
                <table className="table table-striped">
                <thead>
                    <tr>
                    <th scope="col">Qty</th>
                    <th scope="col" className="col-10">Item</th>
                    <th scope="col">Total</th>
                    </tr>
                </thead>
                <tbody>
                    {
                    this.state.items.map((item, i) =>
                        item.menuItem.price != 0 && (
                        <tr key={i}>
                            <td>{item.quantity}</td>
                            <td>{item.menuItem.name}<span className="text-secondary"> / ${item.menuItem.price.toFixed(2)}</span></td>
                            <td>${item.totalPrice.toFixed(2)}</td>
                        </tr>
                        )
                    )}
                </tbody>
                <tfoot>
                    <tr>
                        <td></td>
                        <td></td>
                        <td className="font-weight-bold">${this.state.total.toFixed(2)}</td>
                    </tr>
                </tfoot>
                </table>
                <Link className="btn bg-green text-white btn-block" to={"/menu/" + this.CartService.getRestaurantId()}>Continue Shopping</Link>
                <Link className="btn bg-green text-white btn-block" to={"/order/checkout"}>Checkout</Link>
                <button type="button" className="btn btn-secondary text-white btn-block" onClick={() => this.setState(this.CartService.clearCart)}>Clear Cart</button>
            </div>
        </>;
    }
}

export default ViewCart;