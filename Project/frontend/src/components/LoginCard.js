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
                        <div className="d-flex flex-row bg-success text-white">
                            <div className="p-2 mb-2 bg-secondary pb-10% pt-10%">
                                <Link
                                    to={`/login/${props.accountType}`}
                                    style={{
                                        width: "140px",
                                        borderRadius: "3px",
                                        letterSpacing: "1.5px",
                                        padding: "12px"
                                    }}
                                    className="btn btn-large btn-flat waves-effect blue black-text"
                                >Log In</Link>
                            </div>
                            <div className="p-2 mb-2 bg-secondary">
                                <Link
                                    to={`/register/${props.accountType}`}
                                    style={{
                                        width: "140px",
                                        borderRadius: "3px",
                                        letterSpacing: "1.5px",
                                        padding: "12px"
                                    }}
                                    className="btn btn-large btn-flat waves-effect blue black-text"
                                >Register</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}