
import * as API from '../utils/_DATA.js'
export const GET_ALL_QUESTIONS = 'GET_ALL_QUESTIONS'
export const ADD_QUESTION = 'ADD_QUESTION'
export const ANSWER_QUESTION = 'ANSWER_QUESTION'


export function getAllQuestions(questions) {
    return {
        type: GET_ALL_QUESTIONS,
        questions
    }
}

function addQuestion({ id, timestamp, author, optionOne, optionTwo }) {
    return {
        type: ADD_QUESTION,
        id,
        timestamp,
        author,
        optionOne,
        optionTwo
    }
}

function addAnswer({ authedUser, qid, answer }) {
    return {
        type: ANSWER_QUESTION,
        authedUser,
        qid,
        answer
    }
}

export function doAPIAddQuestion(firstOption, secondOption) {
    return (dispatch, getState) => {
        //anti pattern but acceptable
        const { authedUser } = getState()

        return API._saveQuestion({
            firstOption,
            secondOption,
            author: authedUser
            })
            .then((question) => {
                console.log('creating question...', question);
                dispatch(addQuestion(question))
            })
            .catch((error) => {
                console.log('error saving question.')
                alert('Cannot save new question.');
            })
    }
}

export function handleAddAnswer(answer) {
    return (dispatch) => {
        dispatch(addAnswer(answer))
        return API._saveQuestionAnswer(answer)
            .then(() => console.log('saved'))
            .catch((error) => {
                console.log('error saving answer');
            })
    }
}