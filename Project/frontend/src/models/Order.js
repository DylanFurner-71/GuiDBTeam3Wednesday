export class Order{
    items = "";
    orderId = "";
    firstName = "";
    lastName = "";
    address = "";
    phone = ""
    
    constructor(items,orderId,firstName, lastName,address,phone) {
        this.items = items;
        this.orderId = orderId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.phone = phone;
    }
}
export default Order;