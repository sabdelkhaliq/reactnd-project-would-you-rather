import React, { Component } from "react";
class AnsweredQuestion extends Component {

    render() {
        
        return (
            <div>
                <div className="card border-primary mb-3 question-container">
                    <div className="card-header"><img alt="Example" className="question-avatar" src={this.props.user.avatarURL} /><span>{`${this.props.user.name} asks...`}</span></div>
                    <div className="card-body">
                        <h4 className="card-title">Would You Rather...</h4>
                    </div>
                </div>
            </div>
        )
    }
}

export default AnsweredQuestion