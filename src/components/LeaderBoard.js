import React, { Component } from "react";
import { connect } from "react-redux";
import User from "./User";
class LeaderBoard extends Component {
    render() {
        const { users } = this.props;
        const usersArr = Object.values(users).sort((u1, u2) => (u2.questions.length + Object.keys(u2.answers).length) - (u1.questions.length + Object.keys(u1.answers).length));
        return (
            <div>
                <ul>
                    {usersArr.map((user, index) => <li key={user.id}><User user={user} rank={(index + 1)} /></li>)}
                    <li></li>
                </ul>
            </div>
        )
    }
}

function mapStateToProps({ users }) {
    return {
        users
    }
}

export default connect(mapStateToProps)(LeaderBoard)