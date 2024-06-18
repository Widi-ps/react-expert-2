import { hideLoading, showLoading } from 'react-redux-loading-bar'
import api from '../../utils/api'

const ActionType = {
  RECEVE_USERS: 'RECEIVE_USERS',
}

function receiveUsersActionCreator(users) {
  return {
    type: ActionType.RECEVE_USERS,
    payload: {
      users,
    },
  }
}

function asyncRegisterUser({ name, email, password }) {
  return async (dispatch) => {
    dispatch(showLoading())
    try {
      await api.register({ name, email, password })
    } catch (error) {
      alert(error.message)
    }
    dispatch(hideLoading())
  }
}

export { ActionType, asyncRegisterUser, receiveUsersActionCreator }
