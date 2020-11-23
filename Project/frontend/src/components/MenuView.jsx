
import React from 'react';
import {MenuItemsCard} from "./MenuItemsCard";

class MenuView extends React.Component {
    render() {
        return (
            <>
            <h3 className="list-group-item bg-secondary text-white list-name"> Menu </h3>
            <ul className="list-group">
                {
                this.props.menu.map((menuItem, i) => 
            <li className="list-group-item" key={i}>
                <div className="p-3 mb-2 bg-primary text-white">
                    <div >
                        <div className="p-2 font-dark">{menuItem.name}</div>
                        <div className="p-2 font-dark">
                            <div >
                                {menuItem.description}
                                ${menuItem.price}
                            </div>
                        </div>
                    </div>
                </div>
                </li>
                )
                }

                </ul>
            </>
        );
    }
}

export default MenuView;
