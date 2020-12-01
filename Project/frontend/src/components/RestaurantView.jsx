import React, {Component} from "react";
import CustomerNav from "./CustomerNav";
import { MenuItemList } from './MenuItemList'
import { RestaurantRepository } from '../repository/restaurantRepository';
import CartService from "../services/CartService";

class RestaurantView extends Component {
    RestaurantRepository = new RestaurantRepository();
    cart = new CartService();

    state = {
        restaurant: [{restaurant_name: ""}],
        menu: []
    }

    render() {
        return <>
            <CustomerNav myOrderFlag={true}/>
            <div className="container">
                <h1 className="welcome">{this.state.restaurant[0].restaurant_name} Menu</h1>
                <MenuItemList menu={this.state.menu}/>
            </div>
        </>;
    }

    componentDidMount() {
        const restaurantId = +this.props.match.params.restaurantId;
        if (restaurantId >= 0) {
            this.RestaurantRepository.getRestaurant(restaurantId).then(_restaurant => this.setState({restaurant: _restaurant}));
            this.RestaurantRepository.getMenu(restaurantId).then(_menu => this.setState({menu: _menu}));
        }
        this.cart.setRestaurantId(restaurantId);
    }
}

export default RestaurantView
