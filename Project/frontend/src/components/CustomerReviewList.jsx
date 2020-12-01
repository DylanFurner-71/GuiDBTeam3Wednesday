import React from 'react';
import CustomerNav from "./CustomerNav";
import { ReviewsTable } from "./ReviewsTable";
import { Link } from "react-router-dom";

export class CustomerReviewList extends React.Component {
    state = {
        id: +this.props.match.params.restaurantId
    }

    render() {
        return <>
            <CustomerNav/>
            <div className="container">
                <ReviewsTable accountType={0} restaurantId={this.state.id}/>
                <Link className="btn bg-green mt-3" to="/customer/home">Return to Restaurant List</Link>
            </div>
        </>;
    }
}

export default CustomerReviewList;
