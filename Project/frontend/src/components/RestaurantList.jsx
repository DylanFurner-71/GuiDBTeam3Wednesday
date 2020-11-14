import React from 'react';
import { getRestaurants } from '../repository/restaurantRepository';

export class RestaurantList extends React.Component {

    render() {
        return (
            <>
                <h1 className="welcome">Select a restaurant:</h1>
                {this.props.restaurants.length === 0 && (
                <p className="p-3 bg-light">No restaurants available</p>
                )}
                {this.props.restaurants.length > 0 && (
                <ul className="list-group">
                    {
                        this.props.restaurants.map((x, i) =>
                            <li key={i}>
                                <div className="container">
                                    <div className="card bg-white">
                                        <a className="card-block stretched-link text-decoration-none" href={"/menu/" + x.name}>
                                            <div className="card-body">
                                                <p className="font-weight-bold">{x.name}</p>
                                                <p className="text-secondary">{x.address}</p>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </li>)
                    }
                </ul>
                )}
            </>
    )}
}

export default RestaurantList;
