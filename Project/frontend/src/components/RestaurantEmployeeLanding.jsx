import React, {Component} from "react";
import { AccountRepository } from "../repository/accountRepository";
import { RestaurantRepository } from "../repository/restaurantRepository";
import EmployeeNav from "./EmployeeNav";
import { Link } from 'react-router-dom';

class RestaurantEmployeeLanding extends Component {
  localStorage = {};
  accountRepository = new AccountRepository();
  restaurantRepository = new RestaurantRepository();
  constructor() { 
    super();
    this.state = {
        employee: [],
    };
  }

  render() {
    return <>
        <EmployeeNav restId={this.state.employee.org_id} id={this.state.employee.account_id}/>
        <div className="container">       
          <h3 className="welcome">Welcome, please select an option.</h3>
          <div className="row">
              <div className="col-2"></div>
              <div className="col-8">
                  <Link className="btn-block bg-green text-black h2 rounded-lg p-3 text-decoration-none" to={"orders/" + this.state.employee.org_id}>Current Orders</Link>
              </div>
              <div className="col-2"></div>
          </div>
          <div className="row">
              <div className="col-2"></div>
              <div className="col-8">
                  <Link className="btn-block bg-green text-black h2 rounded-lg p-3 text-decoration-none" to={"restaurant/" + this.state.employee.org_id + "/past-orders"}>Past Orders</Link>
              </div>
              <div className="col-2"></div>
          </div>
          <div className="row">
              <div className="col-2"></div>
              <div className="col-8">
                  <Link className="btn-block bg-green text-black h2 rounded-lg p-3 text-decoration-none" to={"menu/" + this.state.employee.org_id}>My Menu</Link>
              </div>
              <div className="col-2"></div>
          </div>
        </div>
    </>;
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
  }
}
export default RestaurantEmployeeLanding;