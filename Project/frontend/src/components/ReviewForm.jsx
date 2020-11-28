import React from 'react';
import { Review } from '../models/Review';
import { Rating } from './Rating'

export class ReviewForm extends React.Component {
    ratings = [
        "1 Star",
        "2 Stars",
        "3 Stars",
        "4 Stars",
        "5 Stars"
    ]

    state = {
        userId: 0,
        rating: 0,
        comment: ''
    };

    onSubmit() {
        this.props.onReviewAdded(
            new Review(
                this.state.userId,
                this.state.rating,
                this.state.comment
            )
        );
    }

    render() {
        return <>
            <div className="card mt-3">
                <div className="card-header bg-green">
                    <p className="text-white h3">Leave a review</p>
                </div>
                <div className="card-body">
                    <form>
                        <div className="row">
                            <div className="col-4">
                                <p className="text-dark h5 text-left">Order Rating:</p>
                            </div>
                            <div className="col-4">
                                <select
                                    name="review_rating"
                                    id="review_rating"
                                    className="form-control"
                                    value={this.state.rating}
                                    onChange={event => this.setState({ rating: event.target.value })}>
                                    <option></option>
                                    {
                                        this.ratings.map((x, i) =>
                                            <option key={i} value={i+1}>{ x }</option>)
                                    }
                                </select>
                            </div>
                            <div className="col-4">
                                <p><Rating value={ this.state.rating }/></p>
                            </div>
                        </div>
                        <div className="row mb-4">
                            <label htmlFor="review_comment" className="text-dark h5 text-left ml-3">Add a comment:</label>
                            <div className="col-12">
                                <textarea
                                    rows="5"
                                    type="textarea"
                                    name="review_comment"
                                    id="review_comment"
                                    className="form-control"
                                    value={this.state.comment}
                                    onChange={event => this.setState({ comment: event.target.value })} />
                            </div>
                        </div>
                        <div className="row m-1">
                            <div>
                                <button
                                    type="button"
                                    className="btn bg-green text-white"
                                    onClick={ () => this.onSubmit() }>
                                    Submit
                                    </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div> 
        </>;
    }
}
