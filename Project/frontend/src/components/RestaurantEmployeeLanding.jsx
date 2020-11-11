import React, {Component} from "react";
import '../App.css';
import { Restaurant } from "../models/Restaurant";
import { MenuItemsForm } from "./menuItemsForm";
import MenuView from "./MenuView";

class RestaurantEmployeeLanding extends Component {
    restaurant = [new Restaurant("McDonalds", "5647 Ellsworth Ave, Dallas, TX 75205"), 
    new Restaurant("Raising Cane's", "2916 Dyer Street, University Park, TX, 75206"),
    new Restaurant("Barley House", "5612 SMU Boulevard, Dallas, TX, 75206")];

constructor(userFirstName, userLastName) { //sets the users full name and restaurants array
super();
this.state = {
    userFirstName: "Dylan",
    userLastName: "Furner",
    RestaurantName: "Sushi King",
    RestaurantAddress: "9 S Newhaven Ct, Rogers, AR 72758",
    RestaurantID: 1,
    MenuID: 1,
// userFullName: userFirstName + " " + userLastName,
//the line below is nonesense right now. It would someday pull up the list of existing restaurants from the api
    menu: [],
};
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
const {userFullName} = this.state;
return(
<div id = "restaurants_list">
<h1 className="welcome">Welcome, {this.state.userFirstName}</h1>
Someday you will see current orders displayed nicely below with a small navigation component to find the menu and edit it
<MenuItemsForm onItemAdded={element => this.addItem(element) }restaurantID= {this.state.restaurantID} menuID = {this.state.menuID} />
<MenuView menu={this.state.menu}/>
</div>
) 
}
}
export default RestaurantEmployeeLanding;



/*
Restaurant		First Name
restaurant address		Last Name
		Email
		Password
*/