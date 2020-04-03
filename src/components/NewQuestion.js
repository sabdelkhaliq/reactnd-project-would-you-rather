import React, { Component } from "react";
import { doAPIAddQuestion } from "../actions/questions";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
class NewQuestion extends Component {

    constructor(props) {
        super(props);
        this.state = { firstOption: "", secondOption: "", questionAdded: false };
        this.updateFirstOption = this.updateFirstOption.bind(this);
        this.updateSecondOption = this.updateSecondOption.bind(this);

    }

    publishQuestion = () => {
        this.props.dispatch(doAPIAddQuestion(this.state.firstOption, this.state.secondOption))
        alert("Question Added!")
        this.setState({ questionAdded: true })
    }

    updateFirstOption = (firstOption) => {
        this.setState({ firstOption: firstOption })
    }

    updateSecondOption = (secondOption) => {
        this.setState({ secondOption: secondOption })
    }

    render() {
        let { firstOption, secondOption } = this.state;
        if (this.state.questionAdded === true) {
            return <Redirect to='/' />
        }
        return (

            <div>
                <hr className="my-4"></hr>
                <ul>
                <div className="card border-primary mb-3 question-container">
                    <div className="card-header"><span>Ask New Question</span></div>
                    <div className="card-body">
                        <h4 className="card-title">Would You Rather...</h4>
                        <div className="form-group">
                        <label className="col-form-label col-form-label-sm" htmlFor="inputSmall">First Option</label>
                        <input className="form-control form-control-sm" value={firstOption} placeholder="First option" onChange={(event) => this.updateFirstOption(event.target.value)}></input>
                        <label className="col-form-label col-form-label-sm" htmlFor="inputSmall">Second Option</label>
                        <input className="form-control form-control-sm" value={secondOption} placeholder="Second option" onChange={(event) => this.updateSecondOption(event.target.value)} />
                        </div>
                        <hr className="my-4"/>
                        <div>
                        <button className="btn btn-warning btn-lg" placeholder="Publish Question" disabled={!firstOption || !secondOption}
                            onClick={(event) => this.publishQuestion(event)} >Publish
                    </button>
                    </div>
                    </div>

                </div>
                </ul>
            </div>
            

        )

    }

}

export default connect()(NewQuestion)