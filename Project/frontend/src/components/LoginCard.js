import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import login from "./login";

export const LoginCard = (props) => {
    
    return (
        <>
        <div className="row mr-3">
            <div className="col-1"></div>
            <div className="col-10 p-3 mb-1 bg-green rounded-lg">
                <div className="p-2 font-dark mb-3">{props.accountType}</div>
                    <div className="row">
                        <div className="font-weight-bold mb-2 col-12">
                            <Link
                                to={`/login`}
                                style={{
                                    borderRadius: "0.25em",
                                }}
                                className="btn-large btn-block btn-flat waves-effect white black-text"
                            >Log In</Link>
                        </div>
                    </div>
                    <div className="row">
                        <div className="font-weight-bold mb-2 col-12">
                            <Link
                                to={`/${props.accountType}/register`}
                                style={{
                                    borderRadius: "0.25em",
                                }}
                                className="btn-large btn-block btn-flat waves-effect white black-text"
                            >Register</Link>
                        </div>
                    </div>
            </div>
            <div className="col-1"></div>
        </div>
        </>
    )
}