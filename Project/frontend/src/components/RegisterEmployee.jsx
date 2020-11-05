import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { register } from "../respository/accountRepository";
class RegisterEmployee extends Component {
    constructor() {
        super();
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            password2: "",
            error: "",
            restaurantAddress: "",
            restaurantName: "",
        };
    }
    componentDidMount() {
        // If logged in and user navigates to Register page, should redirect them to dashboard
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.error) {
            this.setState({
                error: nextProps.error
            });
        }
    }
    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    };
    onSubmit = e => {
        e.preventDefault();
        const newUser = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            password: this.state.password,
            password2: this.state.password2,
            restaurantName: this.state.restaurantName,
            restaurantAddress: this.state.restaurantAddress
        };
        this.props.registerUser(newUser, this.props.history);
    };
    render() {
        const { error } = this.state;
        return (
            <div className="container mt-5">
            <div className="row">
                <div className="col s8">
                    <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                        <h4 className="text-white">
                            Register a restaurant employee account below
                        </h4>
                    </div>
                    <form noValidate onSubmit={this.onSubmit}>
                        <div className="input-field col s12">
                            <input
                                onChange={this.onChange}
                                value={this.state.firstName}
                                error={error.firstName}
                                id="firstName"
                                type="text"
                                placeholder="First Name"
                            />
                            <label htmlFor="firstName"></label>
                            <span className="red-text">{error.firstName}</span>
                        </div>
                        <div className="input-field col s12">
                            <input
                                onChange={this.onChange}
                                value={this.state.lastName}
                                error={error.lastName}
                                id="lastName"
                                type="text"
                                placeholder="Last Name"
                            />
                            <label htmlFor="lastName"></label>
                            <span className="red-text">{error.lastName}</span>
                        </div>
                        <div className="input-field col s12">
                            <input
                                onChange={this.onChange}
                                value={this.state.email}
                                error={error.email}
                                id="email"
                                type="email"
                                placeholder="Email"

                            />
                            <span className="red-text">{error.email}</span>
                        </div>
                        <div className="input-field col s12">
                            <label htmlFor="email"></label>
            <input type="text"
                id="restaurantName"
                name="restaurantName"
                value={this.state.restaurantName}
                placeholder="Restaurant Name"
                onChange={ e => this.setState({ restaurantName: e.target.value })}
                />
                </div>
                <div className="input-field col s12">
                            <label htmlFor="email"></label>
            <input type="text"
                id="email"
                name="email"
                value={this.state.restaurantAddress}
                placeholder="Restaurant Address"
                onChange={ e => this.setState({ restaurantAddress: e.target.value })}
                />
                </div>
                        <div className="input-field col s12">
                            <input
                                onChange={this.onChange}
                                value={this.state.password}
                                error={error.password}
                                id="password"
                                type="password"
                                placeholder="Password"

                            />
                            <label htmlFor="password"></label>
                            <span className="red-text">{error.password}</span>
                        </div>
                        <div className="input-field col s12">
                            <input
                                onChange={this.onChange}
                                value={this.state.password2}
                                error={error.password2}
                                id="password2"
                                type="password"
                                placeholder="Confirm Password"

                            />
                            <label htmlFor="password2"></label>
                            <span className="red-text">{error.password2}</span>
                        </div>
                        <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                            <button
                                style={{
                                    width: "150px",
                                    borderRadius: "3px",
                                    letterSpacing: "1.5px",
                                    marginTop: "1rem"
                                }}
                                type="submit"
                                className="btn btn-large waves-effect waves-light hoverable bg-green text-white accent-3"
                                onClick = {this.onSubmit}
                            >
                                Sign up
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        );
    }
}
RegisterEmployee.propTypes = {
    register: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    error: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
    auth: state.auth,
    error: state.error
});
export default connect(
    mapStateToProps,
    { register }
)(withRouter(RegisterEmployee));