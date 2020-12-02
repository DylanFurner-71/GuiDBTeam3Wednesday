
import React from 'react';
import {MenuItemsCard} from "./MenuItemsCard";
import {RestaurantRepository} from "../repository/restaurantRepository";
import { RestaurantsTable } from './restaurantsTable';
import {MenuItemsForm} from "./menuItemsForm";
import {Link} from "react-router-dom";
import EmployeeNav from "./EmployeeNav";

const ProductCard = (products) => {
    return products.map((product, i) =>
        <div className="col-md-4"                 key = {i}
>

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
        employee: {},
    }
    deleteItems(element){
}

addItem(element) {
console.log(this.state.menu);
console.log("ELEMENT", element);
this.restaurantRepository.addMenuItem(element);

let m = this.state.menu;
m.push(element);
this.setState({menu: m})
//put a new item on the menu - small route
console.log(this.state.menu);
}

render() {
return(
<div id = "restaurants_list">
<EmployeeNav restId={this.state.employee.org_id} id={this.state.employee.account_id}/>
<h1 className="text-white">Welcome</h1>
<p className="text-white">Someday you will see current orders displayed nicely below with a small navigation component to find the menu and edit it</p>
<MenuItemsForm onItemAdded={element => this.addItem(element) } restaurantId= {this.state.employee.org_id} />
<div class="container">
  <div class="row h-100" style={{minHeight: "100%"}}>
  {ProductCard(this.state.menu)}
    </div>
  </div>
</div>
) 
}


componentWillMount() {
    const employee = JSON.parse(localStorage.getItem('user'));
    if (localStorage === null) {
      this.setState({
        employee: {}
      });
      
    }
    else {
        console.log(employee);
      this.setState({
        employee: employee[0]
      });
    }
  }

componentDidMount() {
    this.restaurantRepository.getMenu(this.state.employee.org_id).then(_menu => this.setState({menu: _menu}));
}
};

export default MenuView;
       