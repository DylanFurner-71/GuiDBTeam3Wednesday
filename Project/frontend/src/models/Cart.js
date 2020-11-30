export class Cart{
    constructor(items=[], total=0, restaurantId) {
        this.items = items;
        this.total = total;
        this.restaurantId = restaurantId;
    }
}