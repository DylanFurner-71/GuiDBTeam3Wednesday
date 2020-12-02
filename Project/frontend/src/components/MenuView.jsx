
import React from 'react';
import {RestaurantRepository} from "../repository/restaurantRepository";
import {MenuItemsForm} from "./menuItemsForm";
import EmployeeNav from "./EmployeeNav";
import {ProductCard} from "./ProductCard";

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
       