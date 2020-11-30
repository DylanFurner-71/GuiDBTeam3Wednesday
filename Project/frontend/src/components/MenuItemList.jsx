import React from 'react';
import { RestaurantRepository } from '../repository/restaurantRepository';
import { CartService } from '../services/CartService';
import { Link } from 'react-router-dom';
import { MenuItem } from '../models/MenuItem'

export class MenuItemList extends React.Component {
    RestaurantRepository = new RestaurantRepository();
    CartService = new CartService();

    state = {
        // Placeholder data
        items: [
            new MenuItem("Steak", "12oz", 36.50, 0, 0),
            new MenuItem("Hamburger", "Cheese, Lettuce, Tomato, Onion", 14.95, 0, 1)
        ]
    };

    render() {
        return <>
            <div className="container-lg">
                <ul className="list-group">
                    {
                    this.state.items.map((item, i) =>
                        <li className="m-3 card" key={i}>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col text-left">
                                        <p className="h4">{item.name}
                                            <span className="font-weight-light text-muted font-italic"> - {item.description}</span>
                                        </p>
                                    </div>
                                    <div className="col text-right">
                                        <p className="h4">${item.price.toFixed(2)}</p>
                                    </div>
                                </div>
                                <Link className="btn bg-green btn-block" to={"/order/cart"} onClick={() => this.CartService.addToCart(item)}>Add to Cart</Link>
                            </div>
                        </li>)
                    }  
                </ul>
            </div>
        </>;
    }

    componentDidMount() {
        if (this.props.id) {
            // this.RestaurantRepository.getMenu(id).then(items => this.setState({items: items}));
        }
    }
}