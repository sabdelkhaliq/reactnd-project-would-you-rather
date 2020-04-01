import React, { Fragment, Component } from 'react';
import Nav from './Nav'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import NewQuestion from './NewQuestion'
import Home from './Home'
import Login from './Login'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import AuthHeader from './AuthHeader';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <Router>
        <Fragment>
          <div className='container'>
            {this.props.loading === true
              ? <Login />
              :
              <div>
                <Nav />
                <AuthHeader />
                <Route path='/' exact component={Home} />
                <Route path='/add' component={NewQuestion} />
              </div>}
          </div>
        </Fragment>
      </Router>
    )
  }
}

function mapStateToProps({ authedUser }) {
  return {
    loading: authedUser === null
  }
}

export default connect(mapStateToProps)(App)
