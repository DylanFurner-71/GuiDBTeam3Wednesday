
import React from 'react';
import {MenuItemsCard} from "./MenuItemsCard";
import RestaurantRepository from "../repository/restaurantRepository";
import { RestaurantsTable } from './restaurantsTable';
class MenuView extends React.Component {
    restaurantRepository = new RestaurantRepository();
    state = {

    }
    deleteItems(element){
this.state.restaurants.splice(element, 1);
this.setState({restaurants: this.state.restaurants});
}

addItem(element) {
console.log(this.state.menu);
console.log("ELEMENT", element);
this.state.menu.push(element);
console.log(this.state.menu);
this.setState({restaurants: this.state.menu });
}

render() {
return(
<div id = "restaurants_list">
<h1 className="text-white">Welcome, {this.state.}</h1>
<p className="text-white">Someday you will see current orders displayed nicely below with a small navigation component to find the menu and edit it</p>
{/* <MenuItemsForm onItemAdded={element => this.addItem(element) }restaurantID= {this.state.restaurantID} menuID = {this.state.menuID} /> */}
</div>
) 
}
componentDidMount() {
    this.restaurantRepository.getMenu()
}
};

export default MenuView;
       