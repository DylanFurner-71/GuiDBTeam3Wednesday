import React, {Component} from "react";
import {RestaurantsForm} from "./RestaurantsForm";
import {RestaurantsTable} from "./restaurantsTable";
import {RestaurantRepository} from "../repository/restaurantRepository";
import WebManagerNav from "./WebManagerNav";

class WebManagerRestaurants extends Component{
    RestaurantRepository = new RestaurantRepository();

    state = {
        restaurants: []
    };

    deleteRestaurant(element, index){
        let id = element.restaurant_id;
        this.RestaurantRepository.deleteRestaurant(id);
        let _restaurants = this.state.restaurants;
        _restaurants.splice(index, 1);
        this.setState({restaurants: _restaurants});
    }

    onAddRestaurant(element) {
        // TODO add the address too when supported in backend
        const restaurant = {
            restaurant_name: element.restaurant_name,
            restaurant_address: element.restaurant_address,
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
                <RestaurantsTable onDelete={(element, index) => this.deleteRestaurant(element, index)} restaurants={this.state.restaurants}/>
            </div>
               
        </>
    }

    componentDidMount() {
        this.RestaurantRepository.getRestaurants().then(_restaurants => {this.setState({restaurants: _restaurants})});
    }
}

export default WebManagerRestaurants;