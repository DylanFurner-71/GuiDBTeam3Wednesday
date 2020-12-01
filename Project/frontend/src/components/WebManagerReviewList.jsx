import React from 'react';
import WebManagerNav from "./WebManagerNav";
import { ReviewsTable } from "./ReviewsTable";
import { Link } from "react-router-dom";

export class WebManagerReviewList extends React.Component {
    state = {
        id: +this.props.match.params.restaurantId
    }

    render() {
        return <>
            <WebManagerNav/>
            <div className="container">
                <ReviewsTable accountType={3} restaurantId={this.state.id}/>
                <Link className="btn bg-green mt-3" to="/web-manager/restaurants">Return to Restaurant List</Link>
            </div>
        </>;
    }
}

export default WebManagerReviewList;
