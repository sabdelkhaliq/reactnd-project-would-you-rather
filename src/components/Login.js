import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeAuthedUser, setAuthedUser } from '../actions/authedUser'

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = { value: "-1" };
        this.loginUser = this.loginUser.bind(this);
        this.setSelectedUser = this.setSelectedUser.bind(this);
    }

    componentDidMount() {
        this.props.dispatch(removeAuthedUser());
    }

    setSelectedUser = (event) => {
        this.setState({ value: event.target.value });
    }

    loginUser = () => {
            this.props.dispatch(setAuthedUser(this.state.value));
    }

    render() {
        let { users } = this.props;
        return (
            <div>
                please login
                <select value={this.state.value} onChange={(event) => this.setSelectedUser(event)}>
                    <option value="-1" disabled >
                        Select a user to login
                    </option>
                    {Object.values(users).map((user) =>
                        <option key={user.id} value={user.id} >
                            {user.name}
                        </option>
                    )
                    }</select>
                <button placeholder="Login user" disabled={this.state.value==="-1"}
                    onClick={(event) => this.loginUser(event)} >Login
                    </button>
            </div>
        )
    }

}


function mapStateToProps({ users }) {
    return {
        users: users
    }
}

export default connect(mapStateToProps)(Login)