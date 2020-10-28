import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import login from "./login";

export const LoginCard = (props) => {
    return (
        <>
            <div className="p-3 mb-2 bg-primary text-white">
                <div className="d-flex flex-column">
                    <div className="p-2">{props.accountType}</div>
                    <div className="p-2">
                        <div className="d-flex flex-row text-white">
                            <div className="p-2 mb-2  pb-10% pt-10%">
                                <Link
                                    to={`/login/${props.accountType}`}
                                    style={{
                                        width: "140px",
                                        borderRadius: "3px",
                                        fontWeight: "bold"
                                    }}
                                    className="btn btn-large btn-flat waves-effect white black-text"
                                >Log In</Link>
                            </div>
                            <div className="p-2 mb-2 ">
                                <Link
                                    to={`/register/${props.accountType}`}
                                    style={{
                                        width: "140px",
                                        borderRadius: "3px",
                                        fontWeight: "bold"
                                    }}
                                    className="btn btn-large btn-flat waves-effect white black-text"
                                >Register</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}