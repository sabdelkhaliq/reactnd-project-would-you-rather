import React from "react";

export default function User({ user, rank }) {
    return (
        <div>
            <div className="card border-primary mb-3 question-container">
                <span>{`#${rank}`}</span> <div className="card-header"><img alt="Example" className="question-avatar" src={user.avatarURL} /><span>{`${user.name}`}</span></div>
                <div className="card-body">
                    <p>{`the number of questions the user asked: ${user.questions.length}`}</p>
                    <p>{`the number of questions the user answered: ${Object.keys(user.answers).length}`}</p>
                </div>
            </div>
        </div >
    )
}