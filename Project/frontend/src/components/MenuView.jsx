
import React from 'react';
import {MenuItemsCard} from "./MenuItemsCard";

export const MenuView = (props) => {

    return (
        <>
        <h3 className="list-group-item bg-secondary text-white list-name"> Menu </h3>
        <div className="container">
            <div className="row">
            {
            props.menu.map((menuItem, i) => 
        <div className="col-md-4" key={i}>
            <MenuItemsCard name = {menuItem.name} description={menuItem.description} price={menuItem.price} imgUrl={menuItem.imgUrl}/>
            </div>
            )
            }
</div>
            </div>
        </>
    );
}

export default MenuView;
