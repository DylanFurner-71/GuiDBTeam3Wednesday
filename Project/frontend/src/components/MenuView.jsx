
import React from 'react';
import {MenuItemsCard} from "./MenuItemsCard";
import {RestaurantRepository} from "../repository/restaurantRepository";
import { RestaurantsTable } from './restaurantsTable';
import {MenuItemsForm} from "./menuItemsForm";
import {Link} from "react-router-dom";
import EmployeeNav from "./EmployeeNav";
import {ProductCard} from "./ProductCard";

// const ProductCard = (products) => {
//   return products.map((product, i) =>
//       <div className="col-md-4 mb-3" key = {i}>
//         <div className="card h-100">
//           <div className="d-flex flex-column">
//               <span className="text-center text-black mt-3">{product.item_details}</span>
//               <span className="font-weight-light">${product.item_price}</span>
//               <button onClick={() => onDelete(product.item_id, i)} className="btn btn-outline-secondary">
//                 <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-trash" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
//                     <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
//                     <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
//                 </svg>
//               </button>
//           </div>
//         </div>
//       </div>
//   )
// };

class MenuView extends React.Component {
  restaurantRepository = new RestaurantRepository();
  state = {
      menu: [],
      employee: {},
  }

  onDelete(id, index) {
    console.log(id);
    this.restaurantRepository.deleteMenuItem(id);
    let _menu = this.state.menu;
    _menu.splice(index, 1);
    this.setState({menu: _menu});
  }

  addItem(element) {
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
      <MenuItemsForm onItemAdded={element => this.addItem(element) } restaurantId= {this.state.employee.org_id} />
      <div className="container">
        <div className="row h-100" style={{minHeight: "100%"}}>
          <ProductCard products={this.state.menu} onDelete={(element, index) => this.onDelete(element, index)}/>
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
       