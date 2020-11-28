import React from 'react';
import CustomerNav from "./CustomerNav";
import { CartService } from '../services/CartService';
import { ReviewForm } from './ReviewForm';
import { RestaurantRepository } from '../repository/restaurantRepository';

export class OrderConfirmed extends React.Component {
    CartService = new CartService();
    RestaurantRepository = new RestaurantRepository();

    cart = this.CartService.getCart();

    state = {
      isReviewed: false
    }

    orders = []

    addReview(review) {
      let id = +this.props.match.params.restaurantId;
      this.RestaurantRepository.addReview(id, review);
      this.setState({isReviewed: true});
  }

    getDeliveryTime() {
        var dt = new Date();
        // 45 minutes from now (placeholder)
        dt.setMinutes(dt.getMinutes() + 45);
        var arr = dt.toString().split(' ');

        // Convert military time to standard
        var time = arr[4].split(':'); // convert to array

        var hours = Number(time[0]);
        var minutes = Number(time[1]);
        
        var timeValue;
        if (hours > 0 && hours <= 12) {
          timeValue= "" + hours;
        } else if (hours > 12) {
          timeValue= "" + (hours - 12);
        } else if (hours === 0) {
          timeValue= "12";
        }
         
        timeValue += (minutes < 10) ? ":0" + minutes : ":" + minutes;  // get minutes
        timeValue += (hours >= 12) ? " PM" : " AM";  // get AM/PM
        // Return clock time only
        return timeValue;
    }

    render() {
        return (
            <>
                <CustomerNav />
                <div className="container">
                  <h1 className="welcome">Order confirmed, thank you!</h1>
                  <h4 className="text-white">Estimated time of delivery: {this.getDeliveryTime()}</h4>
                  <p className="text-white">Todo: Display order total and status</p>
                  {(!this.state.isReviewed) && (
                    <ReviewForm onReviewAdded={ review => this.addReview(review) } />
                  )}
                  {(this.state.isReviewed) && (
                    <h4 className="text-white">Thank you for leaving a review!</h4>
                  )}
                </div>
            </>
        )
    }
}

export default OrderConfirmed;