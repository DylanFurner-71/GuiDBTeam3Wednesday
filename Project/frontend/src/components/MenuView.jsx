
import React from 'react';
import {MenuItemsCard} from "./MenuItemsCard";

export const MenuView = (props) => {

    return (
        <>
        <h3 className="list-group-item bg-secondary text-white list-name"> Menu </h3>
        <ul className="list-group">
            {
            props.menu.map((menuItem, i) => 
        <li className="list-group-item" key={i}>
     <div className="p-3 mb-2 bg-primary text-white">
                <div >
                    <div className="p-2">{menuItem.name}</div>
                    <div className="p-2">
                        <div >
                            {menuItem.description}
                            ${menuItem.price}
                        </div>
                        <img src={menuItem.img}/>

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


