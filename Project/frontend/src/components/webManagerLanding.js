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
            </div>
        ) 
    }
}
export default WebManagerLanding;