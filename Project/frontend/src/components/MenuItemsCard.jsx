import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
export const MenuItemsCard = (props) => {
    return (
        <>
            <div className="p-3 mb-2 bg-primary text-white">
                <div className="d-flex flex-column">
                    <div className="p-2">{props.name}</div>
                    <div className="p-2">
                        <div className="d-flex flex-row text-white">
                            {props.description}
                            ${props.price}
                            <img src={props.img}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}