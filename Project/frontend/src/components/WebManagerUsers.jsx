import React, {Component} from "react";

import {User} from "../models/User";
import {UsersTable} from "./usersTable";
import WebManagerNav from "./WebManagerNav";

class WebManagerUsers extends Component{

    // Placeholder data
    users = [new User(0, "John", "Smith", "email.com", 0), 
            new User(1, "Guy", "Fieri", "email.net", 1)];
   
    state = {
        users: this.users
    };

    deleteUsers(element){
       this.state.users.splice(element, 1);
       this.setState({users: this.state.users});
    }

    parseAccountType(type) {
        switch (type) {
            case 0:
                return "Customer";
            case 1:
                return "Restaurant Employee";
            case 2:
                return "Driver";
            case 3:
                return "Web Manager";
        }
    }

    render() {
        return <>
            <WebManagerNav/>
            <div className="container">
                <UsersTable onDelete={element => this.deleteUsers(element)} users={this.state.users} getAccountType={type => this.parseAccountType(type)}/>
            </div>
               
        </>
    }
}

export default WebManagerUsers;