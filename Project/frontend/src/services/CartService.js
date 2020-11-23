import { Cart } from './../models/Cart';
import { CartItem } from './../models/CartItem';

export class CartService {
    getCart() {
        return window.cart || new Cart();
    }

    addToCart(menuItem) {
        let cart = window.cart || new Cart();
        let existing = cart.items.find(x => x.menuItem.id == menuItem.id);
        if (existing) {
            existing.quantity += 1;
            existing.totalPrice = existing.menuItem.price * existing.quantity;
        } else {
            cart.items.push(new CartItem(menuItem, 1, menuItem.price));
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