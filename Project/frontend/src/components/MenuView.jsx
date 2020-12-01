
import React from 'react';
import {MenuItemsCard} from "./MenuItemsCard";
import {RestaurantRepository} from "../repository/restaurantRepository";
import { RestaurantsTable } from './restaurantsTable';
import {MenuItemsForm} from "./menuItemsForm";
import {Link} from "react-router-dom";


const ProductCard = (products) => {
    return products.map((product, i) =>
    
        <div class="col-md-4">
                <div className="card h-100">
       <div className="d-flex flex-column">
                                    <span className="font-weight-light">${product.item_price}</span>
                                    <span className="text-center text-black">{product.item_details}</span>
                                  
                                         {/* <Link  type="button" className="btn btn-primary" to={'menu/' + product.id}>Product Details</Link> */}
                                         {/* <AddToCartButton onAddToCart={cartService.addToCart} product={product}/> */}
                                     </div>
      </div>
     </div>
    )
    
    };


class MenuView extends React.Component {
    restaurantRepository = new RestaurantRepository();
    state = {
        menu: [],
    }
    deleteItems(element){
}

addItem(element) {
console.log(this.state.menu);
console.log("ELEMENT", element);
this.state.menu.push(element);
this.setState({menu: this.state.menu})
console.log(this.state.menu);
}

render() {
return(
<div id = "restaurants_list">
<h1 className="text-white">Welcome</h1>
<p className="text-white">Someday you will see current orders displayed nicely below with a small navigation component to find the menu and edit it</p>
<MenuItemsForm onItemAdded={element => this.addItem(element) } restaurantId= {this.state.restaurantId} />
<div class="container">
  <div class="row h-100" style={{minHeight: "100%"}}>
  {ProductCard(this.state.menu)}
    </div>
  </div>
</div>
) 
}
componentDidMount() {
    this.restaurantRepository.getMenu(1).then(_menu => this.setState({menu: _menu}));
}
};

export default MenuView;
       