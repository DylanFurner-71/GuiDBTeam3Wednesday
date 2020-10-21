import React, {Component} from "react";
import {Link} from "react-router-dom";

class Landing extends Component {
    render() {
        return (
            <div style={{ height: "75vh" }} className="justify-content-center container valign-wrapper">
                <div className="row">
                    <div className="col center-align">
                        <img id="logo" style={{ width: "100px", height: "100px"}} src="../logo.png" alt="Logo" />
                        <h1>
                            <b>Welcome</b> to Newber Eats
                        </h1>
                        <p className="flow-text grey-text text-darken-1">
                             Your newest undifferentiated food delivery app!
                        </p>
                        <div>
                            <Link
                                to="/login"
                                style={{
                                    width: "140px",
                                    borderRadius: "3px",
                                    letterSpacing: "1.5px",
                                    padding: "12px"
                                }}
                                className="btn btn-large btn-flat waves-effect blue black-text"
                            >Log In</Link>
                            <Link
                                to="/register"
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
        );
    }
}

export default Landing;
