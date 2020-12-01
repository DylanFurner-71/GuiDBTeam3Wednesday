import React from 'react';
import { Link } from "react-router-dom";

export class RestaurantList extends React.Component {

    render() {
        return (
            <>
                <div className="container">
                    <h1 className="welcome">Select a restaurant:</h1>
                    {this.props.restaurants.length === 0 && (
                    <p className="p-3 bg-light">No restaurants available</p>
                    )}
                    {this.props.restaurants.length > 0 && (
                    <ul className="list-group">
                        {this.props.restaurants.map((x, i) =>
                            <li key={i}>
                                <div className="card">
                                    <div className="bg-white">
                                        <a className="card-block text-decoration-none" href={"/menu/" + x.id}>
                                            <div className="card-body">
                                                <p className="font-weight-bold">{x.name}</p>
                                                <p className="text-secondary">{x.address}</p>
                                            </div>
                                        </a>
                                        <Link className="btn btn-sm bg-green mb-3" to={"restaurant/" + x.id}>Reviews</Link>
                                    </div>
                                </div>
                            </li>)
                        }
                    </ul>
                    )}
                </div>
            </>
    )}
}

export default RestaurantList;
