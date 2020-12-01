import React, {Component} from "react";

import {User} from "../models/User";
import {UsersTable} from "./usersTable";
import WebManagerNav from "./WebManagerNav";
import {AccountRepository} from "../repository/accountRepository";

class WebManagerUsers extends Component{
    AccountRepository = new AccountRepository();

    // Placeholder data
    users = [new User(0, "John", "Smith", "email.com", 0), 
            new User(1, "Guy", "Fieri", "email.net", 1)];
   
    state = {
        users: this.users
    };

    deleteUser(element, index){
        let id = element.account_id;
        this.AccountRepository.deleteAccount(id);
        let _users = this.state.users;
        _users.splice(index, 1);
        this.setState({users: _users});
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
            default:
                return "No Type";
        }
    }

    render() {
        return <>
            <WebManagerNav/>
            <div className="container">
                <UsersTable onDelete={(element, index) => this.deleteUser(element, index)} users={this.state.users} getAccountType={type => this.parseAccountType(type)}/>
            </div>
               
        </>
    }
}

export default WebManagerUsers;