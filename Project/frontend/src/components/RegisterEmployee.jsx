import React, { Component } from "react";
import { Link } from "react-router-dom";
import { AccountRepository } from "../repository/accountRepository";
import { RestaurantRepository } from "../repository/restaurantRepository";
class RegisterEmployee extends Component {
    constructor() {
        super();
        this.accountRepository = new AccountRepository();
        this.restaurantRepository = new RestaurantRepository();
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            password2: "",
            org: "",
            adminCode: '',
            account_type: "2",
            restaurants: [],
            error: '',
        };
    }
    componentDidMount() {
        this.restaurantRepository.getRestaurants().then(restaurants => this.setState({restaurants}))
        // If logged in and user navigates to Register page, should redirect them to dashboard
    }
    componentWillReceiveProps() {
  
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
            org: this.state.org,
        };
        this.accountRepository.register(newUser, this.state.account_type).then(res => {
            this.setState({firstName: '', email: '', password: ''})
            if (res) {
            this.props.history.push("/login")}});;
    };
    handleChangeCategory = (e) => {
        this.setState({org: e.target.value});
        }
    render() {
        const { error } = this.state;
        return (
            <div className="container mt-5">
            <Link to="/" id="return-home" className="text-white btn-flat btn waves-effect mb-5">
                <i className="material-icons left text-white"></i> Return to
                home
            </Link>
            <div className="row">
                <div className="col s8">
                    <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                        <h4 className="text-white">
                            Register a Restaurant Employee account below
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
                                maxLength="18"
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
                                maxLength="18"
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
                                maxLength="18"
                            />
                            <span className="red-text">{error.email}</span>
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
                        <div className="form-group row">
          <div className="form-group col s12">
      <label for="inputState">Category</label>
      <select id="inputState" className="form-control"
      onChange={this.handleChangeCategory}>
        <option selected>Select the restaurant you work at</option>
        {this.state.restaurants.map((items, i) => (
        <option
          key={i}
          value={items.restaurant_id}
        >
                    {items.restaurant_name}
        </option>
      ))}      
      </select>
      </div>
      </div>
                        <div className="col s12">
                            <button
                                type="submit"
                                className="btn btn-lg hoverable bg-green text-white accent-3"
                                    onClick = {this.onSubmit}>
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

export default RegisterEmployee;