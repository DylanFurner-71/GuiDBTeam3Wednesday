import React from 'react';
import CustomerNav from "./CustomerNav";
import { CartService } from '../services/CartService';
import { ReviewForm } from './ReviewForm';
import { RestaurantRepository } from '../repository/restaurantRepository';
import { OrderRepository } from '../repository/orderRepository';

export class OrderConfirmed extends React.Component {
    CartService = new CartService();
    RestaurantRepository = new RestaurantRepository();
    OrderRepository = new OrderRepository();

    cart = this.CartService.getCart();

    state = {
      order: [{status: ""}],
      isReviewed: false
    }

    addReview(review) {
      let id = +this.props.match.params.restaurantId;
      let r = {
        account_id: review.userId,
        rating: review.rating,
        content: review.comment
      }
      this.RestaurantRepository.addReview(id, r);
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
        return <>
        {console.log(this.state.order)}
          <CustomerNav />
          <div className="container">
            <h1 className="welcome">Order confirmed, thank you!</h1>
            <h2 className="text-white">Order Status: {this.state.order[0].status}</h2>
            <h3 className="text-white bg-white"><hr></hr></h3>
            <h4 className="text-white mb-4">Estimated time of delivery: {this.getDeliveryTime()}</h4>
            {(!this.state.isReviewed && this.state.status == "Delivered") && (
              <ReviewForm onReviewAdded={ review => this.addReview(review) } />
            )}
            {(this.state.isReviewed) && (
              <h4 className="text-white">Thank you for leaving a review!</h4>
            )}
          </div>
      </>;
    }

    componentDidMount() {
      this.OrderRepository.getOrderStatus(this.CartService.getOrderId()).then(element => this.setState({order: element}));
    }
}

export default OrderConfirmed;