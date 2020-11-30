import React from 'react';
import { Review } from '../models/Review';
import WebManagerNav from "./WebManagerNav";
import {ReviewsTable} from "./ReviewsTable";

export class WebManagerReviewList extends React.Component {
    ratings = [
        "1 Star",
        "2 Stars",
        "3 Stars",
        "4 Stars",
        "5 Stars"
    ]

    // Placeholder Data, get the reviews and the name from the api via the id of the route parameter
    state = {
        restaurantName: "McDonalds",
        reviews: [new Review(0, 3, "Test Review")]
    }

    deleteReview(review) {
        // Delete the review from the api, update the state
        this.state.reviews.splice(review, 1);
        this.setState({reviews: this.state.reviews});
    }

    render() {
        return <>
            <WebManagerNav/>
            <div className="container">
                <ReviewsTable onDelete={element => this.deleteReview(element)}
                    reviews={this.state.reviews}
                    restaurantName={this.state.restaurantName}
                />
            </div>
        </>;
    }
}

export default WebManagerReviewList;
