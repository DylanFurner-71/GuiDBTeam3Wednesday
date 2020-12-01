import React, {Component} from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {loginUser} from "../repository/accountRepository";
import "react-bootstrap";

class Login extends Component {
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
        // If logged in and user navigates to Login page, should redirect them to dashboard
        if (this.props.auth.isAuthenticated) {
            this.props.history.push("/home");
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.auth.isAuthenticated) {
            this.props.history.push("/home"); // push user to dashboard when they login
        }
        if (nextProps.error) {
            this.setState({
                error: nextProps.error
            });
        }
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
        this.props.loginUser(userData); // since we handle the redirect within our component, we don't need to pass in this.props.history as a parameter
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

Login.propTypes = {
    loginUser: PropTypes.func.isRequired,
};
const mapStateToProps = state => ({
    auth: state.auth,
    error: state.error,

});
export default connect(
    mapStateToProps,
    {loginUser}
)(Login);