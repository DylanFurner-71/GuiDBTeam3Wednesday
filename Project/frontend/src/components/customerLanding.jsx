import React, {Component} from "react";
import CustomerNav from "./CustomerNav";
import { Customer } from "../models/Customer";
import { RestaurantList } from "./RestaurantList";
import { RestaurantRepository } from '../repository/restaurantRepository';

class CustomerLanding extends Component {
    RestaurantRepository = new RestaurantRepository();
    localStorage = {};

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

    componentWillMount() {
        const employee = JSON.parse(localStorage.getItem('user'));
        if (localStorage === null) {
          this.setState({
            employee: {}
          });
          
        }
        else {
            console.log(employee);
          this.setState({
            employee: employee[0]
          });
        }
      }
    componentDidMount() {
        this.RestaurantRepository.getRestaurants().then(_restaurants => this.setState({restaurants: _restaurants}));
    }
}

export default CustomerLanding;