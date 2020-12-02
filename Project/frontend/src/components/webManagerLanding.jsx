import React, {Component} from "react";
import { Link } from 'react-router-dom';
import WebManagerNav from "./WebManagerNav";

class WebManagerLanding extends Component{
    localStorage = {};

    state = {
        // Placeholder data
        firstName: "First",
        lastName: "Last"
    };

    componentWillMount() {
        const employee = JSON.parse(localStorage.getItem('user'));
        if (localStorage === null) {
          this.setState({
            employee: {}
          });
          
        }
        else {
          this.setState({
            employee: employee[0]
          });
        }
      }

componentDidMount() {
}

    render() {
        return <>
            <WebManagerNav/>
            <div className="container">
                <h1 className="welcome mb-5">Welcome {this.state.firstName} {this.state.lastName}!</h1>
                <div className="row">
                    <div className="col-2"></div>
                    <div className="col-8">
                        <Link className="btn-block bg-green text-black h2 rounded-lg p-3 text-decoration-none" to="restaurants">Manage Restaurants</Link>
                    </div>
                    <div className="col-2"></div>
                </div>
                <div className="row">
                    <div className="col-2"></div>
                    <div className="col-8">
                        <Link className="btn-block bg-green text-black h2 rounded-lg p-3 text-decoration-none" to="users">Manage Users</Link>
                    </div>
                    <div className="col-2"></div>
                </div>
            </div>
        </>
    }
}

export default WebManagerLanding;