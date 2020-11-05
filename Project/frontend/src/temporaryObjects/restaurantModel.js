export class Restaurant {
    constructor(restaurantName, restaurantAddress, restuarantID) {
      this.restaurantName = restaurantName;
      this.restaurantAddress = restaurantAddress;
    this.restuarantID = restuarantID;
      }
  }

  export class MenuItem {
    constructor(name, description, price, img, restaurantID, menuID){
      this.name = name;
      this.description = description;
      this.price = price;
      this.img = img;
      this.restaurantID = restaurantID;
      this.menuId = menuID;
    }
  }