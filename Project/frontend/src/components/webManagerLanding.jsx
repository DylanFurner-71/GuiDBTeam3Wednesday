import React, {Component} from "react";

import {userTypes} from "../types/userTypes";
import {Restaurant} from "../models/Restaurant";
import {RestaurantsTable} from "./restaurantsTable";
import {RestaurantsForm} from "./RestaurantsForm";
import {DeleteRestaurantForm} from "./DeleteRestaurantForm";
import {RestaurantRepository} from "../repository/restaurantRepository";

class WebManagerLanding extends Component{
    RestaurantRepository = new RestaurantRepository;

    restaurant = [new Restaurant("McDonalds", "5647 Ellsworth Ave, Dallas, TX 75205"), 
                    new Restaurant("Raising Cane's", "2916 Dyer Street, University Park, TX, 75206"),
                    new Restaurant("Barley House", "5612 SMU Boulevard, Dallas, TX, 75206")];
   
    state = {
        //userFullName: userFirstName + " " + userLastName,
        //the line below is nonesense right now. It would someday pull up the list of existing restaurants from the api
        restaurants: this.restaurant
    };

    deleteRestaurants(element){
       this.state.restaurants.splice(element, 1);
       this.setState({restaurants: this.state.restaurants});
    }

    onAddRestaurant(element) {
        const r = {
            restaurant_name: element.name
        }
        this.RestaurantRepository.addRestaurant(r);
        this.state.restaurants.push(element);
        this.setState({restaurants: this.state.restaurants});
    }

    render() {
        const {userFullName} = this.state;
        return(
            <div id = "restaurants_list">
                <h1 className="welcome">Welcome, {userFullName}</h1>
                <RestaurantsTable restaurants={this.state.restaurants}/>
                <RestaurantsForm onRestaurantAdded={element => this.onAddRestaurant(element)} />
                {/* <DeleteRestaurantForm onRestaurantDeleted={element => this.deleteRestaurants(element)} numRestaurants={this.state.restaurants.length}/> */}
            </div>
               
    ) 
    }
}

export default WebManagerLanding;