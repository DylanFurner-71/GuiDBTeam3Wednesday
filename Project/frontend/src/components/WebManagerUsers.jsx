import React, {Component} from "react";

import {User} from "../models/User";
import {UsersTable} from "./usersTable";
import WebManagerNav from "./WebManagerNav";
import {AccountRepository} from "../repository/accountRepository";

class WebManagerUsers extends Component{
    AccountRepository = new AccountRepository();

    state = {
        accounts: []
    };

    deleteUser(element, index){
        let id = element.account_id;
        this.AccountRepository.deleteAccount(id);
        let _accounts = this.state.accounts;
        _accounts.splice(index, 1);
        this.setState({accounts: _accounts});
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
                <UsersTable onDelete={(element, index) => this.deleteUser(element, index)} users={this.state.accounts} getAccountType={type => this.parseAccountType(type)}/>
            </div>
        </>
    }

    componentDidMount() {
        this.AccountRepository.getAccounts().then(_accounts => this.setState({accounts: _accounts}));
    }
}

export default WebManagerUsers;