export class MenuItem {
    constructor(name, description, price, restaurantID, id=0) {
      this.name = name;
      this.description = description;
      this.price = price;
      this.restaurantID = restaurantID;
      this.id = id;
    }
}