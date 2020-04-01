import React, { Component } from 'react';
import { removeAuthedUser } from "../actions/authedUser";
import { connect } from "react-redux";

class AuthHeader extends Component {


    logoutUser = () => {
        this.props.dispatch(removeAuthedUser());
    }

    render() {
        let { user } = this.props;
        return (
            <div>
                <p>Welcome, {user.name}</p>
                <button placeholder="Logout user"
                    onClick={(event) => this.logoutUser(event)} >Logout!
            </button>
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