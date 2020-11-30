
import React from 'react';
import {MenuItemsCard} from "./MenuItemsCard";

class MenuView extends React.Component {
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
<h1 className="text-white">Welcome, {this.state.userFirstName}</h1>
<p className="text-white">Someday you will see current orders displayed nicely below with a small navigation component to find the menu and edit it</p>
<MenuItemsForm onItemAdded={element => this.addItem(element) }restaurantID= {this.state.restaurantID} menuID = {this.state.menuID} />
</div>
) 
}
};

export default MenuView;
       