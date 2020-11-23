import React, {Component} from "react";
import '../App.css';
import CustomerNav from "./CustomerNav";
import { MenuItem } from '../models/MenuItem'
import { MenuItemList } from './MenuItemList'
import { RestaurantRepository } from '../repository/restaurantRepository';

class RestaurantView extends Component {
    RestaurantRepository = new RestaurantRepository();

    // Temp Data
    state = {
        name : 'McDonalds',
        address: '',
        id: 0,
        menu: []
    }

    render() {
        return <>
            <CustomerNav myOrderFlag={true}/>
            <div className="container">
                <h1 className="welcome">{this.state.name}</h1>
                <MenuItemList id={+this.props.match.params.restaurantId}/>
            </div>
        </>;
    }

    componentDidMount() {
        const id = +this.props.match.params.restaurantId;
        if (id) {
            // this.RestaurantRepository.getRestaurant(id).then(restaurant => this.setState(restaurant));
        }
    }
}

export default RestaurantView
