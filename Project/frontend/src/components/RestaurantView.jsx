import React, {Component} from "react";
import CustomerNav from "./CustomerNav";
import { MenuItemList } from './MenuItemList'
import { RestaurantRepository } from '../repository/restaurantRepository';
import CartService from "../services/CartService";

class RestaurantView extends Component {
    RestaurantRepository = new RestaurantRepository();
    cart = new CartService();

    // Placeholder Data
    state = {
        name : 'McDonalds',
        address: '',
        id: 0,
        menu: []
    }

    render() {
        return <>
            <CustomerNav myOrderFlag={true}/>
            <div className="container">
                <h1 className="welcome">{this.state.name}</h1>
                <MenuItemList id={+this.props.match.params.restaurantId}/>
            </div>
        </>;
    }

    componentDidMount() {
        const id = +this.props.match.params.restaurantId;
        this.cart.setRestaurantId(id);
        if (id) {
            // this.RestaurantRepository.getRestaurant(id).then(restaurant => this.setState(restaurant));
        }
    }
}

export default RestaurantView
