import React, {Component} from "react";
import CustomerNav from "./CustomerNav";
import { MenuItemList } from './MenuItemList'
import { RestaurantRepository } from '../repository/restaurantRepository';
import CartService from "../services/CartService";

class RestaurantView extends Component {
    RestaurantRepository = new RestaurantRepository();
    cart = new CartService();

    state = {
        restaurant: {},
        menu: []
    }

    render() {
        return <>
            <CustomerNav myOrderFlag={true}/>
            <div className="container">
                <h1 className="welcome">{this.state.restaurant.restaurant_name} Menu</h1>
                <MenuItemList menu={this.state.menu}/>
            </div>
        </>;
    }

    componentDidMount() {
        const restaurantId = +this.props.match.params.restaurantId;
        if (restaurantId >= 0) {
            this.RestaurantRepository.getRestaurant(restaurantId).then(element => this.setState({restaurant: element[0]}));
            this.RestaurantRepository.getMenu(restaurantId).then(element => this.setState({menu: element}));
        }
        this.cart.setRestaurantId(restaurantId);
    }
}

export default RestaurantView
