import React, {Component} from "react";
import CustomerNav from "./CustomerNav";
import { RestaurantList } from "./RestaurantList";
import { RestaurantRepository } from '../repository/restaurantRepository';

class CustomerLanding extends Component {
    RestaurantRepository = new RestaurantRepository();
    localStorage = {};

    state = {
        restaurants: []
    }

    render() {
        return(
            <>
                <CustomerNav />
                <RestaurantList restaurants = {this.state.restaurants} />
            </>
        ) 
    }

    componentDidMount() {
        this.RestaurantRepository.getRestaurants().then(_restaurants => this.setState({restaurants: _restaurants}));
    }
}

export default CustomerLanding;