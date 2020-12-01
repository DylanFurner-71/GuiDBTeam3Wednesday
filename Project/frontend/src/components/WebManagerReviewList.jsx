import React from 'react';
import WebManagerNav from "./WebManagerNav";
import { ReviewsTable } from "./ReviewsTable";
import { Link } from "react-router-dom";

export class WebManagerReviewList extends React.Component {
    state = {
        id: 0
    }

    render() {
        return <>
            <WebManagerNav/>
            <div className="container">
                <ReviewsTable restaurantId={this.state.id}/>
                <Link className="btn bg-green mt-3" to="/web-manager/restaurants">Return to Restaurant List</Link>
            </div>
        </>;
    }

    componentDidMount() {
        const restaurantId = +this.props.match.params.restaurantId;
        if (restaurantId >= 0) {
            this.setState({id: restaurantId});
        }
    }
}

export default WebManagerReviewList;
