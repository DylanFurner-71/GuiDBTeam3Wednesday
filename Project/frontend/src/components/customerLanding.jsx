import React, {Component} from "react";
import CustomerNav from "./CustomerNav";
import { Customer } from "../models/Customer";
import { RestaurantList } from "./RestaurantList";
import { RestaurantRepository } from '../repository/restaurantRepository';

class CustomerLanding extends Component {
    RestaurantRepository = new RestaurantRepository();

    state = {
        // TODO, remove placeholder, get account elsewhere
        customer: new Customer(
            // id
            1,
            // firstName
            "John",
            // lastName
            "Smith",
            // email: 
            "johnsmith@gmail.com",
            // address1
            "",
            // address2
            "",
            // city
            "",
            // state
            "",
            // zip
            0
        ),
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