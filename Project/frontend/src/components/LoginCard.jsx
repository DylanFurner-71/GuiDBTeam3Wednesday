import React from "react";
import { Link } from "react-router-dom";

export const LoginCard = props => {
    return <>
        <div className="container">
            <div className="p-2 mb-1 bg-green rounded-lg">
                <div className="font-dark mb-3">
                    {props.accountType}
                </div>
                <div className="row">
                    <div className="col"></div>
                    <div className="col-10 ml-3 mr-3">
                        <Link
                            to={`/login`}
                            className="btn btn-lg btn-block white rounded-lg"
                        >Log In</Link>
                    </div>
                    <div className="col"></div>
                </div>
                <div className="row">
                    <div className="col"></div>
                    <div className="col-10 ml-3 mr-3">
                        <Link
                            to={`/${props.routeType}/register`}
                            className="btn btn-lg btn-block white rounded-lg"
                        >Register</Link>
                    </div>
                    <div className="col"></div>
                </div>
            </div>
        </div>
    </>;
}
