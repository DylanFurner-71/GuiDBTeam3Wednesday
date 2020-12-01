import React, {Component} from "react";
import {Restaurant} from "../models/Restaurant";
import {RestaurantsForm} from "./RestaurantsForm";
import {RestaurantsTable} from "./restaurantsTable";
import {RestaurantRepository} from "../repository/restaurantRepository";
import WebManagerNav from "./WebManagerNav";

class WebManagerRestaurants extends Component{
    RestaurantRepository = new RestaurantRepository();

    // Placeholder data
    restaurants = [new Restaurant("McDonalds", "5647 Ellsworth Ave, Dallas, TX 75205"), 
                    new Restaurant("Raising Cane's", "2916 Dyer Street, University Park, TX, 75206"),
                    new Restaurant("Barley House", "5612 SMU Boulevard, Dallas, TX, 75206")];
   
    state = {
        restaurants: this.restaurants
    };

    deleteRestaurants(element){
        // TODO: Delete the element from the api
       this.setState({restaurants: this.state.restaurants});
    }

    onAddRestaurant(element) {
        // TODO add the address too when supported in backend
        const restaurant = {
            restaurant_name: element.name
        }
        this.RestaurantRepository.addRestaurant(restaurant);
        this.state.restaurants.push(element);
        this.setState({restaurants: this.state.restaurants});
    }

    render() {
        return <>
            <WebManagerNav/>
            <div className="container">
                <RestaurantsForm onRestaurantAdded={element => this.onAddRestaurant(element)} />
                <RestaurantsTable onDelete={element => this.deleteRestaurants(element)} restaurants={this.state.restaurants}/>
            </div>
               
        </>
    }
}

export default WebManagerRestaurants;