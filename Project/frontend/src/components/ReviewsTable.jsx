import React from 'react';
import { Rating } from './Rating'
import { Link } from "react-router-dom";
import { RestaurantRepository } from "../repository/restaurantRepository";
import { Restaurant } from '../models/Restaurant';

export class ReviewsTable extends React.Component {
    RestaurantRepository = new RestaurantRepository();

    state = {
        restaurant: new Restaurant("McDonalds", "5647 Ellsworth Ave, Dallas, TX 75205", 0),
        reviews: []
    }

    onDelete(element, index) {
        let id = element.review_id;
        this.RestaurantRepository.deleteReview(id);
        let _reviews = this.state.reviews;
        _reviews.splice(index, 1);
        this.setState({reviews: _reviews});
    }

    render() {
        return <>
            {this.state.reviews.length === 0 && (
                <p className="welcome">No reviews currently for {this.state.restaurant.name}</p>
            )}
            {this.state.reviews.length > 0 && (
            <>
                <h1 className="welcome">Reviews for {this.state.restaurant.name}</h1>
                <ul className="list-group">
                    {this.state.reviews.map((x, i) =>
                        <li className="list-group-item" key={i}>
                            <div className="row mb-0">
                                <div className="col d-flex align-items-center">
                                    <span className="mt-1">
                                        <Rating value={ x.rating }/>
                                    </span>
                                    <span className="h5 mt-2 ml-3">
                                        "{x.content}"
                                    </span>
                                </div>
                                {this.props.accountType === 3 && (
                                    <div className="col-2 d-flex align-items-center flex-row-reverse">             
                                        <button onClick={() => this.onDelete(x, i)} className="btn btn-outline-secondary">
                                            <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-trash" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                                                <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                                            </svg>
                                        </button>
                                    </div>  
                                )}
                            </div>
                        </li>)
                    }
                </ul>
            </>
            )}
        </>;
    }

    componentDidMount() {
        const id = this.props.restaurantId;
        if (id >= 0) {
            // TODO
            // this.RestaurantRepository.getRestaurant(id).then(element => this.setState({restaurant: element}));
            this.RestaurantRepository.getReviews(id).then(elements => this.setState({reviews: elements}));
        }
    }
}

export default ReviewsTable;