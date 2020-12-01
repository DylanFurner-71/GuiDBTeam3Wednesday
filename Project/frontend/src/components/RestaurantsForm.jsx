import React from 'react';
import { Restaurant } from '../models/Restaurant';

export class RestaurantsForm extends React.Component {
  constructor() {
    super();
    this.state = {
        restaurantName: '',
        restaurantAddress: '',
    };

  }
    onAddClick() {
        const t = new Restaurant(this.state.restaurantName, this.state.restaurantAddress);
        this.props.onRestaurantAdded(t);

        this.setState({
            restaurantName: '',
           restaurantAddress: '',
        });
    }

    render() {
            return <>
            <form className="container">
            <h2 className="welcome mt-4">Add Restaurant</h2>
            <div className="form-group">
                <label htmlFor="name">Restaurant Name</label>
                <input type="text"
                    id="name"
                    name="name"
                    className="form-control"
                    value={this.state.restaurantName}
                    onChange={ event => this.setState({ restaurantName: event.target.value }) } 
                    />
            </div>
            <div className="form-group">
                <label htmlFor="RestaurantAddress">Restaurant Address</label>
                <input type="text"
                    id="RestaurantAddress"
                    name="RestaurantAddress"
                    className="form-control"
                    value={this.state.restaurantAddress}
                    onChange={ event => this.setState({ restaurantAddress: event.target.value }) } />
            </div>
            <input className="bg-green mb-4 text-black" type="button" value="Submit"
            onClick={ () => this.onAddClick()}                                    />
      </form>
   </>
    }
}