import React, {Component} from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import {connect} from "react-redux";
// import {loginUser} from "../repository/accountRepository";
import {userTypes} from "../types/userTypes";
import {loginUser} from "../repository/accountRepository";
import "react-bootstrap";
import {AccountRepository} from "../repository/accountRepository";
export default class Login extends Component {
    accountsRepository = new AccountRepository();
    constructor() {
        super();

        this.state = {
            email: "",
            password: "",
            error: {},
        };
    }
//i think we will get a prop from the api response that allows us to determine account type
    componentDidMount() {
    
    }

    componentWillReceiveProps(nextProps) {
      
    }

    onChange = e => {
        this.setState({[e.target.id]: e.target.value});
    };
    onSubmit = e => {
        e.preventDefault();
        const userData = {
            email: this.state.email,
            password: this.state.password,
        };
        //maybe pass the url parameters here to let the repository know which to call
        this.accountsRepository.login(userData); // since we handle the redirect within our component, we don't need to pass in this.props.history as a parameter
    };
    render() {
        const error = this.state.error;
        return (
            <div className="container justify-content-center">
                <div className="row mt-5">
                    <div className="col">
                        <Link to="/" id="return-home" className="text-white btn waves-effect">
                            <i className="material-icons left text-white"></i> Return to
                            home
                        </Link>
                        <form onSubmit={this.onSubmit}>
                            <div className="input-field col s12">
                                <input
                                    onChange={this.onChange}
                                    value={this.state.email}
                                    id="email"
                                    type="email"
                                />
                                <label htmlFor="email">Email</label>
                                <span className="red-text">
                                    {error.email}
                                    {error.emailnotfound}
                                </span>
                            </div>
                            <div className="input-field col s12">
                                <input
                                    onChange={this.onChange}
                                    value={this.state.password}
                                    id="password"
                                    type="password"
                                />
                                <label htmlFor="password">Password</label>
                                <span className="red-text">
                                    {error.password}
                                    {error.passwordincorrect}
                                </span>
                            </div>
                            <div className="col s12 d-flex justify-content-center align-items-center">
                                <button
                                    type="submit"
                                    className="btn hoverable bg-green text-white accent-3 rounded-lg">
                                    Login
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
