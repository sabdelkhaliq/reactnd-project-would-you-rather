import React from "react";

export default function User({ user, rank }) {
    return (
        <div>
            <div className="card border-primary mb-3 question-container">
                <span>{`Rank is ${rank}`}</span> <div className="card-header"><img alt="user-avatar" className="question-avatar" src={user.avatarURL} /><span>{`${user.name}`}</span></div>
                <div className="card-body">
                    <p>{`The number of questions the user asked: ${user.questions.length}`}</p>
                    <p>{`The number of questions the user answered: ${Object.keys(user.answers).length}`}</p>
                    <h5 className="text-warning">{`Score:  ${(Object.keys(user.answers).length)+(user.questions.length)}`}</h5>
                </div>
            </div>
        </div >
    )
}