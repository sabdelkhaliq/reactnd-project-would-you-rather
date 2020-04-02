import React, { Fragment, Component } from 'react';
import Nav from './Nav'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import NewQuestion from './NewQuestion'
import Home from './Home'
import Login from './Login'
import LeaderBoard from './LeaderBoard'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import NotFound404 from './NotFound404';
import QuestionAction from './QuestionAction';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <Router>
        <Fragment>
          <div className="halfParent center">
            {this.props.loading === true
              ? <div>
                <Switch>
                  <Route path='/' exact component={Login} />
                  <Route component={NotFound404} />
                </Switch>
              </div>
              :
              <div>
                <Nav />
                <div>
                <div className="jumbotron" id="homeJumbotron">
                  <Route path='/' exact component={Home} />
                  <Route path='/add' exact component={NewQuestion} />
                  <Route path='/questions/:qid' component={QuestionAction} />
                  <Route path='/leaderboard' exact component={LeaderBoard} />
                </div>
                </div>
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
