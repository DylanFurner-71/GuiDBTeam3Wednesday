import React from 'react';
import { MenuItem } from '../models/MenuItem';
import {
    useParams
  } from "react-router-dom";
export class MenuItemsForm extends React.Component {
  constructor() {
    // let {restaurantId} = useParams();
    super();
    this.state = {
        item: {},
        employee: {},

    };

  }
    onAddClick() {
        const t = {
            item_details: this.state.itemName, 
            item_price: Number(this.state.price),
            menu_id: this.state.employee.org_id, 
            };
        this.props.onItemAdded(t);

        this.setState({
           item: {}
        });
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
    render() {
            return <>
            <form className="container">
            <h3 className="action">Add Menu Item</h3>
            <div className="form-group">
                <label htmlFor="name">Item Name</label>
                <input type="text"
                    id="name"
                    name="name"
                    className="form-control"
                    value={this.state.itemName}
                    onChange={ event => this.setState({ itemName: event.target.value }) } 
                    />
            </div>
            <div className="form-group">
                <label htmlFor="description">Item Description</label>
                <input type="text"
                    id="description"
                    name="description"
                    className="form-control"
                    value={this.state.description}
                    onChange={ event => this.setState({ description: event.target.value }) } />
            </div>
            <div className="form-group">
                <label htmlFor="imgURL">Item IMG URL this will change some day to an image upload**</label>
                <input type="text"
                    id="imgURl"
                    name="imgURL"
                    className="form-control"
                    value={this.state.imgUrl}
                    onChange={ event => this.setState({ imgUrl: event.target.value }) } />
            </div>
            <div className="form-group">
                <label htmlFor="ItemPrice">Price</label>
                <input type="number"
                    id="ItemPrice"
                    name="ItemPrice"
                    className="form-control"
                    value={this.state.price}
                    onChange={ event => this.setState({ price: event.target.value }) } />
            </div>
            <input className="bg-primary" type="button" value="Submit"
            onClick={ () => this.onAddClick()}                                    />
      </form>
   </>
    }
}