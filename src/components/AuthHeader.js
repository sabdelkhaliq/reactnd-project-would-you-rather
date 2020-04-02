import React, { Component } from 'react';
import { removeAuthedUser } from "../actions/authedUser";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
class AuthHeader extends Component {


    logoutUser = () => {
        this.props.dispatch(removeAuthedUser());
    }
    render() {
        let { user } = this.props;
        return (
<div class="form-inline my-2 my-lg-0">
                <p>Welcome, {user.name}</p>
                <Link className="btn btn-secondary my-2 my-sm-0" to="/" onClick={(event) => this.logoutUser(event)}> Logout!</Link>

            </div>
        )
    }
}

function mapStateToProps({ users, authedUser }) {
    return {

        user: users[authedUser]
    }
}

export default connect(mapStateToProps)(AuthHeader)