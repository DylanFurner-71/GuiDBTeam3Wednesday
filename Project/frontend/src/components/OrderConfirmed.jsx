import React from 'react';
import CustomerNav from "./CustomerNav";
import { CartService } from '../services/CartService';

export class OrderConfirmed extends React.Component {
    CartService = new CartService();

    state = this.CartService.getCart();

    orders = []

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
                <h1 className="welcome">Order confirmed, thank you!</h1>
                <h4 className="text-white">Estimated time of delivery: {this.getDeliveryTime()}</h4>
                <p className="text-white">Todo: Display order total, status, and a way to review the order</p>
            </>
        )
    }
}

export default OrderConfirmed;