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
            <div className="jumbotron center halfParent">
                <h3>Would You Rather?</h3>
                <p>Please, login to continue...</p>
                <hr className="my-4"/>
                <select className="form-control form-control-sm" value={this.state.value} onChange={(event) => this.setSelectedUser(event)}>
                    <option value="-1" disabled >
                        Select a user to login
                    </option>
                    {Object.values(users).map((user) =>
                        <option key={user.id} value={user.id} >
                            {user.name}
                        </option>
                    )
                    }</select>
                <button className="spacer btn btn-primary btn-lg" placeholder="Login user" disabled={this.state.value==="-1"}
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