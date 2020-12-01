import React from 'react';
import { CartService } from '../services/CartService';
import { Link } from 'react-router-dom';

export class MenuItemList extends React.Component {
    CartService = new CartService();

    render() {
        return <>
            <div className="container-lg">
                <ul className="list-group">
                    {
                    this.props.menu.map((item, i) =>
                        <li className="m-3 card" key={i}>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col text-left">
                                        <p className="h4">{item.item_details}
                                            <span className="font-weight-light text-muted font-italic"></span>
                                        </p>
                                    </div>
                                    <div className="col text-right">
                                        <p className="h4">${item.item_price.toFixed(2)}</p>
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
}