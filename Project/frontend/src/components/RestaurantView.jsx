import React, {Component} from "react";
import '../App.css';
import CustomerNav from "./CustomerNav";
import { MenuItem } from '../models/MenuItem'
import MenuView from './MenuView';
import Checkout from './Checkout';

class RestaurantView extends Component {
    // Placeholder data, will start empty eventually
    order = [
        new MenuItem("Steak", "12oz", 36.50, this.props.restaurant, 0),
        new MenuItem("Hamburger", "Cheese, Lettuce, Tomato, Onion", 14.95, this.props.restaurant, 1)
    ]

    clearCart() {
        this.order = [];
    }

    getOrderTotal() {
        var total = 0.0;
        for (var i = 0; i < this.order.length; i++) {
            total += this.order[i].price;
        }
        // Round to two decimal places
        return total.toFixed(2);
    }

    checkout(customer) {
        // Send customer address information to DB!
        window.location.href = "/order/confirmed";
    }

    render() {
        return(
            <>
                <CustomerNav onClearCart={() => this.clearCart()}/>
                <h1 className="mt-3 text-white">{this.props.restaurant} Menu</h1>
                <p className="text-white">Todo: Add Menu view on left and cart view on right</p>
                {/* <MenuView menu={this.props.restaurant.menu}/> */}
                <Checkout href="/checkout" id="checkout" orderTotal={this.getOrderTotal()} order={this.order} onCheckout={customer => this.checkout(customer)}/>
            </>
        )
    }
}

export default RestaurantView
