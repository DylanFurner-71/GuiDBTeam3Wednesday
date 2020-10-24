import React, {Component} from "react";

import {userTypes} from "../types/userTypes";

class WebManagerLanding extends Component{
    constructor(userFirstName, userLastName) { //sets the users full name and restaurants array
        super();
        this.state = {
            userFullName: userFirstName + " " + userLastName,
            // restaurants: new Array("Restaurant 1", "Restaurant 2", "Restaurant 3") //so this will someday be an array of objectsbut for now its this
        };
    }

    // deleteRestaurants(element){
    //    restaurants.splice(element, 1);
    // }

    // addRestaurant(id, name, address) {
    //     new_restaurant = new Restaurant(id, name, address);
    // }

    render() {
        const {userFullName, restaurants} = this.state;
        return(
            <div id = "restaurants_list">
                <h1 class="welcome">Welcome, {userFullName}</h1>
                <table>
                    <tr>
                        <th>Restaurant</th>
                        <th></th> 
                    </tr>
                    <tr>
                        {/* <th>{restaurants[0]}</th> */}
                        <th>{"restaurants[0]"}</th>
                        <th><button type="button" id="delete_button" onclick="deleteRestaurants('0')">Delete</button></th> 
                    </tr>
                    <tr>
                        <th>{"restaurants[1]"}</th>
                        <th><button type="button" id="delete_button" onclick="deleteRestaurants('1')">Delete</button></th> 
                    </tr>
                    <tr>
                        <th>{"restaurants[2]"}</th>
                        <th><button type="button" id="delete_button" onclick="deleteRestaurants('2')">Delete</button></th> 
                    </tr>
                </table>

                <h2>Add Restaurant</h2>
                <form>
                    <label for="ID">Restaurant ID:</label> 
                    <input type="text" id="ID" value="12345"></input>

                    <label for="name">Restaurant Name:</label>
                    <input type="text" id="name" value="Chick fil a"></input>

                    <label for="address">Restaurant Address:</label>
                    <input type="text" id="address" value="1234 Bay Street"></input>
                    <br></br>
                </form>
                <button type="button" id="add_button" onclick="addRestaurant(document.getElementById('ID').value, document.getElementById('name').value, document.getElementById('address').value)">Add Restaurant</button> 
            </div>
        ) 
    }
}
export default WebManagerLanding;