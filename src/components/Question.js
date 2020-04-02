import React, { Component } from "react";
import { Link } from "react-router-dom";
class Question extends Component {

    render() {
        return (
            <div>
                <div className="card border-primary mb-3 question-container">
                    <div className="card-header"><img alt="Example" className="question-avatar" src={this.props.user.avatarURL} /><span>{`${this.props.user.name} asks...`}</span></div>
                    <div className="card-body">
                        <h4 className="card-title">Would You Rather...</h4>
                        <p>{`${this.props.question.optionOne.text} or ${this.props.question.optionTwo.text}`}</p>
                        <Link to={`/questions/${this.props.question.id}`}>{this.props.answered ? 'Show Results' : 'Answer Question'}</Link>

                    </div>
                </div>
            </div >
        )
    }
}

export default Question