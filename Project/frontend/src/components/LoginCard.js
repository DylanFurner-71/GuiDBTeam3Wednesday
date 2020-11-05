import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import login from "./login";

export const LoginCard = (props) => {
    return (
        <>
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
                        </div>
                    </div>
            </div>
            <div className="col-1"></div>
        </div>
        </>
    )
}

/*
import React from 'react';

export class PhoneEditor extends React.Component {
    phoneTypes = [
        'fax',
        'mobile',
        'home',
        'landline'
    ];

    state = {
        type: '',
        number: ''
    };

    onAddClick() {
        this.props.onPhoneAdded({
            type: this.state.type,
            number: this.state.number
        });

        this.setState({
            type: '',
            number: ''
        });
    }

    render() {
        return <>
           <div className="row mt-4 mb-4">
                <div className="col-3">
                    <select
                        name="newPhone_type"
                        id="newPhone_type"
                        className="form-control"
                        value={this.state.type}
                        onChange={event => this.setState({ type: event.target.value })}>
                        <option></option>
                        {
                            this.phoneTypes.map((x, i) =>
                                <option key={i}>{ x }</option>)
                        }
                    </select>
                </div>
                <div className="col-6">
                    <input
                        type="text"
                        name="newPhone_number"
                        id="newPhone_number"
                        className="form-control"
                        value={this.state.number}
                        onChange={event => this.setState({ number: event.target.value })} />
                </div>
                <div className="col-3">
                    <button
                        type="button"
                        className="btn btn-success btn-block"
                        onClick={ () => this.onAddClick() }>
                        Add
                        </button>
                </div>
            </div>
        </>
    }
}
*/

/*
import React from 'react';

export const PhoneList = props => <>
    <ul className="list-group">
        <li className="list-group-item bg-info text-white">Phone Numbers</li>
        {
            props.phoneNumbers.map((x, i) =>
                <li className="list-group-item" key={i}>
                    {x.number}
                    <span className="badge badge-info float-right">{x.type}</span>
                </li>)
        }
    </ul>
</>;
*/