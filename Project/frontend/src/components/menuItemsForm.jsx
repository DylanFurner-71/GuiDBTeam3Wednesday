import React from 'react';
import { MenuItem } from '../temporaryObjects/restaurantModel';
export class MenuItemsForm extends React.Component {
  constructor() {
    super();
    this.state = {
        restaurantName: '',
        restaurantAddress: '',
        price: 0.0,
        description: '',
        itemName: '',
        imgUrl: '',
        restaurantID: 1,
        menuID: 1

    };

  }
    onAddClick() {
        const t = new MenuItem(this.state.itemName, this.state.description, this.state.price, this.state.imgUrl, this.props.restaurantID, this.props.menuID);
        this.props.onItemAdded(t);

        this.setState({
            restaurantName: '',
           restaurantAddress: '',
           restaurantName: '',
           restaurantAddress: '',
           price: 0.0,
           description: '',
           itemName: '',
           imgUrl: '',
           restaurantID: 1,
           menuID: 1
        });
    }

    render() {
            return <>
            <form className="container">
            <h3 class="action">Add Menu Item</h3>
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
                    onChange={ event => this.setState({ imgURl: event.target.value }) } />
            </div>
            <div className="form-group">
                <label htmlFor="imgURL">Price</label>
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