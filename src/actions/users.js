export const GET_ALL_USERS = 'GET_ALL_USERS'

export function getAllUsers (users) {
  return {
    type: GET_ALL_USERS,
    users,
  }
}