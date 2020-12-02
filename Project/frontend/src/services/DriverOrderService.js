export class DriverOrderService {
    getOrderId() {
        return window.orderId || -1;
    }
    
    setOrderId(id) {
        window.orderId = id;
    }

    clearOrder() {
        window.orderId = -1
        return -1;
    }
}

export default DriverOrderService;
