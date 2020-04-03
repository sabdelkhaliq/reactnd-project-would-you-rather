//Nav
//QuestionList
//Auth header

import React, { Component } from "react";
import { connect } from "react-redux";
import Question from "./Question";

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = { unanswered: true };
        this.setUnAnswered = this.setUnAnswered.bind(this);
    }

    setUnAnswered = (value) => {
        this.setState((prevState) => ({ unanswered: value }))
    }

    render() {
        let { answeredQuestions, unAnsweredQuestions, users } = this.props
        return (
            <div>
                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <button onClick={(event) => this.setUnAnswered(true)} className={(this.state.unanswered ? 'tabClicked' : 'tabUnClicked')}>
                            UnAnswered
                        </button>
                    </li>
                    <li className="nav-item">
                        <button onClick={(event) => this.setUnAnswered(false)} className={(this.state.unanswered ? 'tabUnClicked' : 'tabClicked')}>
                            Answered
                        </button>
                    </li>
                </ul>
                <hr className="my-4"/>
                <div id="myTabContent" className="tab-content">
                    <div id="unanswered" className={"tab-pane fade " + (this.state.unanswered ? 'active show' : '')}>
                        <div>
                            <ul>
                                {unAnsweredQuestions.map((q) => <li key={q.id}><Question user={users[q.author]} question={q} answered={false} /></li>)}
                            </ul>
                        </div>
                    </div>
                    <div id="answered" className={"tab-pane fade " + (!this.state.unanswered ? 'active show' : '')} >
                        <div>
                            <ul>
                                {answeredQuestions.map((q) => <li key={q.id}><Question user={users[q.author]} question={q} answered={true} /></li>)}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }


}

function mapStateToProps({ questions, authedUser, users }) {

    const questionsArr = Object.values(questions).sort((q1, q2) => q2.timestamp - q1.timestamp);
    const answeredQuestions = questionsArr.filter((question) =>
        question.optionOne.votes.some((a) => a === authedUser) ||
        question.optionTwo.votes.some((a) => a === authedUser)
    );


    const unAnsweredQuestions = questionsArr.filter((question) =>
        !question.optionOne.votes.some((a) => a === authedUser) &&
        !question.optionTwo.votes.some((a) => a === authedUser)
    );

    return {
        answeredQuestions,
        unAnsweredQuestions,
        authedUser,
        users
    }
}

export default connect(mapStateToProps)(Home)