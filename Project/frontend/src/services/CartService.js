import { Cart } from './../models/Cart';
import { CartItem } from './../models/CartItem';

export class CartService {
    getCart() {
        return window.cart || new Cart();
    }

    getRestaurantId() {
        let cart = window.cart || new Cart();
        return cart.restaurantId || 0;
    }

    setRestaurantId(id) {
        let cart = window.cart || new Cart();
        cart.restaurantId = id;
        window.cart = cart;
    }

    addToCart(menuItem) {
        let cart = window.cart || new Cart();
        let existing = cart.items.find(x => x.menuItem.item_details == menuItem.item_details);
        if (existing) {
            existing.quantity += 1;
            existing.totalPrice = existing.menuItem.item_price * existing.quantity;
        } else {
            cart.items.push(new CartItem(menuItem, 1, menuItem.item_price));
        }

        cart.total = cart.items.map(x => x.totalPrice).reduce((x, y) => x + y);
        window.cart = cart;
    }

    clearCart() {
        window.cart = new Cart();
        return new Cart();
    }
}

export default CartService;