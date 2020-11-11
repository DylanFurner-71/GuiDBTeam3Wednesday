import React, {Component} from "react";
import '../App.css';
import CustomerNav from "./CustomerNav";
import { Customer } from "../models/Customer";
import { RestaurantList } from "./RestaurantList";
import { Restaurant } from '../models/Restaurant'

class CustomerLanding extends Component {
    state = new Customer(
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
        );

    // Placeholder data
    restaurants = [new Restaurant("McDonalds", "5647 Ellsworth Ave, Dallas, TX 75205", 1), 
        new Restaurant("Raising Cane's", "2916 Dyer Street, University Park, TX, 75206", 2),
        new Restaurant("Barley House", "5612 SMU Boulevard, Dallas, TX, 75206", 3)];

    render() {
        return(
            <>
                <CustomerNav />
                <RestaurantList restaurants = {this.restaurants} />
            </>
        ) 
    }
}
export default CustomerLanding;