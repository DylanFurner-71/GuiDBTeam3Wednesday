export class Order{
    constructor(items=[], orderId=-1, firstName='', lastName='', address='', phone=0, status='') {
        this.items = items;
        this.orderId = orderId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.phone = phone;
        this.status = status;
    }
}
export default Order;