import React from 'react';
import { Restaurant } from '../models/Restaurant';
export class DeleteRestaurantForm extends React.Component {
  constructor() {
    super();
    this.state = {
        selected: 0,
    };

  }
    onAddClick() {
        this.props.onRestaurantDeleted(this.state.selected);

        this.setState({
           selected: 0
        });
    }
createItems(numRestaurants){
  const items =[];
  for (let i = 0; i < numRestaurants; i++) {             
    items.push(<option key={i} value={i}>{i+1}</option>);   
    //here I will be creating my options dynamically based on
    //what props are currently passed to the parent component
}
return items;

}
    displayOptionsRestaurants(numRestaurants){
     return this.createItems(numRestaurants);
    }


    render() {
            return <>
            <form className="container">
            <h2 className="action">Delete Restaurant</h2>
            <div className="form-group">
                <label htmlFor="departmentId">Select Restaurant by index of the list above</label>
                <div className="row">
                <select id="departmentId"
                    type="number"
                    className="form-control col-12 ml-2 mr-2"
                    value={this.state.selected}
                    style={{width: "40%"}}
                    onChange={ event => this.setState({ selected: event.target.value }) }>
                        <option></option>
                        {this.displayOptionsRestaurants(this.props.numRestaurants)}
                </select>
                        </div>
            </div>
            <input className="bg-green" type="button" value="Submit"
            onClick={ () => this.onAddClick()}                                    />
      </form>
   </>
    }
}