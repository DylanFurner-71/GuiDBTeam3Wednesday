
import React from 'react';
import {MenuItemsCard} from "./MenuItemsCard";

<<<<<<< HEAD
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
=======
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
                        <div className="p-2">{menuItem.name}</div>
                        <div className="p-2">
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
>>>>>>> dafd5bba3e6374841ea45419a08af3eacf30442f
}

export default MenuView;
