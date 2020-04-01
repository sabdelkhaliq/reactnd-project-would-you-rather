//Nav
//QuestionList
//Auth header

import React, { Component } from "react";
import { connect } from "react-redux";
import AnsweredQuestion from "./AnsweredQuestion";

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
        let { answeredQuestions, unAnsweredQuestions, authedUser, users } = this.props

        console.log(answeredQuestions);
        console.log(unAnsweredQuestions);


        answeredQuestions.forEach(q=> console.log(users[q.author]));

        return (
            <div>
                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <button onClick={(event) => this.setUnAnswered(true)} >
                            UnAnswered
                        </button>
                    </li>
                    <li className="nav-item">
                        <button onClick={(event) => this.setUnAnswered(false)} >
                            Answered
                        </button>
                    </li>
                </ul>
                <div id="myTabContent" className="tab-content">
                    <div id="unanswered" className={"tab-pane fade " + (this.state.unanswered ? 'active show' : '')}>
                        <div>


                        </div>
                    </div>
                    <div id="answered" className={"tab-pane fade " + (!this.state.unanswered ? 'active show' : '')} >
                        <div>
                            <ul>
                                {answeredQuestions.map((q) => <li key={q.id}><AnsweredQuestion user={users[q.author]} question={q} /></li>)}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }


}

function mapStateToProps({ questions, authedUser, users }) {

    const answeredQuestions = Object.values(questions).filter((question) =>
        question.optionOne.votes.some((a) => a === authedUser) ||
        question.optionTwo.votes.some((a) => a === authedUser)
    )


    const unAnsweredQuestions = Object.values(questions).filter((question) =>
        !question.optionOne.votes.some((a) => a === authedUser) &&
        !question.optionTwo.votes.some((a) => a === authedUser)
    )

    return {
        answeredQuestions,
        unAnsweredQuestions,
        authedUser,
        users
    }
}

export default connect(mapStateToProps)(Home)