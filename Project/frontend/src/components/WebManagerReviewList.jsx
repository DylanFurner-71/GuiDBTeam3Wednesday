import React from 'react';
import WebManagerNav from "./WebManagerNav";
import { ReviewsTable } from "./ReviewsTable";

export class WebManagerReviewList extends React.Component {
    state = {
        id: 0
    }

    render() {
        return <>
            <WebManagerNav/>
            <div className="container">
                <ReviewsTable restaurantId={this.state.id}/>
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
