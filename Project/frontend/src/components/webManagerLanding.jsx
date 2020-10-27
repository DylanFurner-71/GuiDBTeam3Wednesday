import React, {Component} from "react";

import {userTypes} from "../types/userTypes";
import {Restaurant} from "../temporaryObjects/restaurantModel";
import {RestaurantsTable} from "./restaurantsTable";
import {RestaurantsForm} from "./RestaurantsForm";
import {DeleteRestaurantForm} from "./DeleteRestaurantForm";
class WebManagerLanding extends Component{
    restaurant = [new Restaurant("McDonalds", "5647 Ellsworth Ave, Dallas, TX 75205"), 
                    new Restaurant("Raising Cane's", "2916 Dyer Street, University Park, TX, 75206"),
                    new Restaurant("Barley House", "5612 SMU Boulevard, Dallas, TX, 75206")];
   
    constructor(userFirstName, userLastName) { //sets the users full name and restaurants array
        super();
        this.state = {
            // userFullName: userFirstName + " " + userLastName,
            //the line below is nonesense right now. It would someday pull up the list of existing restaurants from the api
            //  restaurants: [{new Restaurant("Restaurant 1"), "Restaurant 2", "Restaurant 3") //so this will someday be an array of objectsbut for now its this
        restaurants: this.restaurant
        };
    }

    deleteRestaurants(element){
       this.state.restaurants.splice(element, 1);
       this.setState({restaurants: this.state.restaurants});
    }

    addRestaurant(element) {
        console.log(this.state.restaurants);
        console.log("ELEMENT", element);
        this.state.restaurants.push(element);
        console.log(this.state.restaurants);
        this.setState({restaurants: this.state.restaurants });
        }

    render() {
        const {userFullName, restaurants} = this.state;
        return(
            <div id = "restaurants_list">
                <h1 className="welcome">Welcome, {userFullName}</h1>
                <RestaurantsTable restaurants={this.state.restaurants}/>
                <RestaurantsForm onRestaurantAdded={element => this.addRestaurant(element)} />
                <DeleteRestaurantForm onRestaurantDeleted={element => this.deleteRestaurants(element)} numRestaurants={this.state.restaurants.length}/>
            </div>
               
    ) 
    }
}
export default WebManagerLanding;