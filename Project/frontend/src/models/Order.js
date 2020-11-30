export class Order{
    constructor(items=[], orderId=-1, firstName='', lastName='', address='', phone=0, status='', restaurantId=0) {
        this.items = items;
        this.orderId = orderId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.phone = phone;
        this.status = status;
        this.restaurantId = restaurantId;
    }
}
export default Order;