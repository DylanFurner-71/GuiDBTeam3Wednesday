import React from 'react';

export class MenuItemsForm extends React.Component {
  constructor() {
    super();
    this.state = {
        itemName: "",
        itemPrice: "",
        employee: {},

    };
  }

  onSubmit() {
    const t = {
      item_details: this.state.itemName, 
      item_price: Number(this.state.itemPrice),
      menu_id: this.state.employee.org_id, 
    };

    this.props.onItemAdded(t);
    this.setState({
      itemName: "",
      itemPrice: ""
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
      this.setState({
        employee: employee[0]
      });
    }
  }
  
  render() {
    return <>
      <form className="container">
        <h3 className="action mt-3">Add Menu Item</h3>
        <div className="form-group">
            <label htmlFor="name">Item Name</label>
            <input type="text"
                id="name"
                name="name"
                className="form-control text-white"
                value={this.state.itemName}
                onChange={ event => this.setState({ itemName: event.target.value }) } 
            />
        </div>
        <div className="form-group">
            <label htmlFor="ItemPrice">Item Price</label>
            <input type="number"
                id="ItemPrice"
                name="ItemPrice"
                className="form-control text-white"
                value={this.state.itemPrice}
                onChange={ event => this.setState({ itemPrice: event.target.value }) } />
        </div>
        <input className="bg-green rounded-lg mb-3" type="button" value="Submit"
        onClick={() => this.onSubmit()}/>
      </form>
    </>
  }
}