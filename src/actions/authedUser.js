export const SET_AUTHED_USER = 'SET_AUTHED_USER'
export const REMOVE_AUTHED_USER = 'REMOVE_AUTHED_USER'

export function setAuthedUser (userId) {
  return {
    type: SET_AUTHED_USER,
    userId,
  }
}

export function removeAuthedUser (userId) {
  return {
    type: REMOVE_AUTHED_USER
  }
}