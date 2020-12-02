import React, {Component} from "react";
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
            case "user":
            case "customer":
                return "Customer";
            case "employee":
                return "Restaurant Employee";
            case "driver":
                return "Driver";
            case "admin":
            case "web-manager":
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