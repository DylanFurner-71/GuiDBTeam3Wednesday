import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import login from "./login";

export const LoginCard = (props) => {
    return (
        <>
<<<<<<< HEAD
            <div className="p-3 mb-2 bg-primary text-white">
                <div className="d-flex flex-column">
                    <div className="p-2">{props.accountType}</div>
                    <div className="p-2">
                        <div className="d-flex flex-row text-white">
                            <div className="p-2 mb-2  pb-10% pt-10%">
                                <Link
                                    to={`/login`}
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
                                    to={`/${props.accountType}/register`}
                                    style={{
                                        width: "140px",
                                        borderRadius: "3px",
                                        fontWeight: "bold"
                                    }}
                                    className="btn btn-large btn-flat waves-effect white black-text"
                                >Register</Link>
                            </div>
=======
        <div className="row mr-3">
            <div className="col-1"></div>
            <div className="col-10 p-1 mb-2 bg-green text-white">
                <div className="p-2 mb-3">{props.accountType}</div>
                    <div className="row">
                        <div className="font-weight-bold mb-2 col-12">
                            <Link
                                to={`/login/${props.accountType}`}
                                style={{
                                    borderRadius: "0.5em",
                                }}
                                className="btn-large btn-flat waves-effect white black-text"
                            >Log In</Link>
                        </div>
                    </div>
                    <div className="row">
                        <div className="font-weight-bold mb-2 col-12">
                            <Link
                                to={`/register/${props.accountType}`}
                                style={{
                                    borderRadius: "0.5em",
                                }}
                                className="btn-large btn-flat waves-effect white black-text"
                            >Register</Link>
>>>>>>> 14147131c0bba429824b55f1139469d00d0c2a39
                        </div>
                    </div>
            </div>
            <div className="col-1"></div>
        </div>
        </>
    )
}