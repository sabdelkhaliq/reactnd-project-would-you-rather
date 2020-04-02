import React, { Component } from "react";
import { handleAddAnswer } from "../actions/questions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
class QuestionAction extends Component {

    constructor(props) {
        super(props);
        this.selectOptionOne = this.selectOptionOne.bind(this);
        this.selectOptionTwo = this.selectOptionTwo.bind(this);
        this.publishAnswer = this.publishAnswer.bind(this);
        this.state = {
            optionOne: true
        }
    }

    publishAnswer = () => {
        const { qid } = this.props.match.params;
        const { authedUser } = this.props;
        const answer = this.state.optionOne ? 'optionOne' : 'optionTwo'
        this.props.dispatch(handleAddAnswer({ authedUser, qid, answer }))
    }

    selectOptionOne = () => {
        this.setState({ optionOne: true })
    }

    selectOptionTwo = () => {
        this.setState({ optionOne: false })
    }

    render() {
        const { qid } = this.props.match.params;
        const { questions, authedUser, users } = this.props;

        const question = questions[qid];
        const user = users[question.author];

        const firstOptionVotes = question.optionOne.votes;
        const secondOptionVotes = question.optionTwo.votes;

        const firstOption = firstOptionVotes.some((a) => a === authedUser);
        const secondOption = secondOptionVotes.some((a) => a === authedUser);

        const firstOptionVotesLen = firstOptionVotes.length;
        const secondOptionVotesLen = secondOptionVotes.length;

        const totalVotes = firstOptionVotesLen + secondOptionVotesLen;
        const firstOptionVotesPercentage = (firstOptionVotesLen / totalVotes) * 100;
        const secondOptionVotesPercentage = (secondOptionVotesLen / totalVotes) * 100;

        const answered = (firstOption || secondOption);

        return (
            <div>
                {answered === false ?

                    <div className="card border-primary mb-3 question-container">
                        <div className="card-header"><img alt="Example" className="question-avatar" src={user.avatarURL} /><span>{`${user.name} asks...`}</span></div>
                        <div className="card-body">
                            <h4 className="card-title">Would You Rather...</h4>
                            <input type="radio" id="optionOne" name="options" value="optionOne" onChange={this.selectOptionOne} selected></input>
                            <label htmlFor="optionOne">{question.optionOne.text}</label>
                            <input type="radio" id="optionTwo" name="options" value="optionTwo" onChange={this.selectOptionTwo}></input>
                            <label htmlFor="optionTwo">{question.optionTwo.text}</label>
                            <Link onClick={this.publishAnswer} to={`/questions/${question.id}`}>Vote</Link>
                        </div>
                    </div>
                    :
                    <div>
                        <div className="card-header"><img alt="Example" className="question-avatar" src={user.avatarURL} /><span>{`${user.name} asks...`}</span></div>
                        <div className="card-body">
                            <h4 className="card-title">Would You Rather...</h4>
                            <p>{`${question.optionOne.text}`}{firstOption && <span style={{ backgroundColor: 'red' }}> - You voted for that option</span>}</p>
                            <p>{`${firstOptionVotesLen} voted out of ${totalVotes} - ${firstOptionVotesPercentage}% voted for this option`}</p>
                            <br />
                            <p>{`${question.optionTwo.text}`}{secondOption && <span style={{ backgroundColor: 'red' }}>You voted for that option</span>}</p>
                            <p>{`${secondOptionVotesLen} voted out of ${totalVotes} - ${secondOptionVotesPercentage}% voted for this option`}</p>

                        </div>
                    </div>

                }

            </div>
        )
    }



}

function mapStateToProps({ authedUser, questions, users }) {
    return {
        questions,
        authedUser,
        users
    }
}

export default connect(mapStateToProps)(QuestionAction)