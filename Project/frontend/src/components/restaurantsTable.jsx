import React from 'react';


export const RestaurantsTable = props => {
return (
<>
<h3 className="list-group-item bg-secondary text-white">Restaurants </h3>
    <ul className="list-group">
        {
            props.restaurants.map((x, i) =>
                <li className="list-group-item" key={i}>
                    <div className="d-flex flex-row justify-content-between">
                    <span className="badge badge-light">{x.restaurantName}</span>
                    <span className="badge badge-light">{x.restaurantAddress}</span>
                    </div>
                    <span className="badge badge-light">"{x.menu}"</span>
                </li>)
        }
    </ul>
</>
);
    };