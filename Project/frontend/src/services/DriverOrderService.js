import { Order } from './../models/Order';

export class DriverOrderService {
    getOrder() {
        return window.order || new Order();
    }
    
    setOrder(order) {
        window.order = order;
        window.order.status = "In Progress";
    }

    setStatus(status) {
        window.order.status = status;
    }

    clearOrder() {
        window.order = new Order();
        return new Order();
    }
}

export default DriverOrderService;
