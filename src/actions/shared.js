import * as API from '../utils/_DATA.js'
import { getAllQuestions } from './questions';
import { getAllUsers } from './users';

export function handleInitialData() {
    return (dispatch) => {
        Promise.all([
            API._getUsers(),
            API._getQuestions(),
        ]).then(([ users, questions ]) => {
                dispatch(getAllQuestions(questions))
                dispatch(getAllUsers(users))
            })
    }
} 