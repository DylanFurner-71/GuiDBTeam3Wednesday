import React, {Component} from "react";
import '../App.css';
import CustomerNav from "./CustomerNav";
import { Restaurant } from '../models/Restaurant'
import { MenuItem } from '../models/MenuItem'
import MenuView from './MenuView'

class RestaurantView extends Component {
    order = [
        new MenuItem("Steak", "12oz", 30.00, this.props.restaurant, 0),
        new MenuItem("Hamburger", "Cheese, Lettuce, Tomato, Onion", 30.00, this.props.restaurant, 1)
    ]

    clearCart() {
        console.log(1);
        this.order = [];
    }

    render() {
        return(
            <>
                <CustomerNav onClearCart={() => this.clearCart()}/>
                <h1 className="mt-3 text-white">{this.props.restaurant} Menu</h1>
                {/* <MenuView menu={this.props.restaurant.menu}/> */}
            </>
        )
    }
}

export default RestaurantView
