import React, {Component} from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {loginUser} from "../respository/accountRepository";
import {userTypes} from "../types/userTypes";
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
                <div style={{marginTop: "4rem"}} className="row">
                    <div className="col offset-s2">
                        <Link to="/" id="return-home" className="btn-flat waves-effect">
                            <i className="material-icons left"></i> Return to
                            home
                        </Link>
                        <div className="col s12" style={{paddingLeft: "11.250px"}}>
                            <h4 className="welcome">
                                <b>Login</b> below
                            </h4>
                        </div>
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
                            <div className="col s12" style={{paddingLeft: "11.250px"}}>
                                <button
                                    style={{
                                        width: "150px",
                                        borderRadius: "3px",
                                        letterSpacing: "1.5px",
                                        marginTop: "1rem"
                                    }}
                                    type="submit"
                                    className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                                >
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