import React from "react";

export const MenuItemsCard = (props) => {
    return (
        <>
            <div className="p-3 mb-2 bg-primary text-white">
                <div className="d-flex flex-column">
                    <div className="p-2 font-dark">{props.name}</div>
                    <div className="p-2 font-dark">
                        <div className="d-flex flex-row text-white">
                            {props.description}
                            ${props.price}
                        </div>
                    </div>
                    <div>
                    <img src="Project/frontend/src/logo.png"/>
                    </div>
                </div>
            </div>
        </>
    )
}