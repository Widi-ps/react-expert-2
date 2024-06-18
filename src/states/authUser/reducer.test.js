/**
 * skenario testing
 *
 * - CommentThreadInput component
 *   - should render RegisterInput component correctly
 *   - should handle input changes correctly
 *   - should call register function when Register button is clicked
 */

import { describe, expect, it } from 'vitest'
import authUserReducer from './reducer'
import { ActionType } from './action'

describe('authUserReducer', () => {
  it('harus mengembalikan state awal ketika diberikan action yang tidak dikenali', () => {
    // Arrange
    const initialState = null
    const action = { type: 'UNKNOWN_ACTION' }

    // Action
    const nextState = authUserReducer(initialState, action)

    // Assert
    expect(nextState).toBe(initialState)
  })

  it('harus mengatur pengguna yang diautentikasi ketika diberikan action SET_AUTH_USER', () => {
    // Arrange
    const initialState = null
    const action = {
      type: ActionType.SET_AUTH_USER,
      payload: {
        authUser: {
          id: 'user-1',
          name: 'John Doe',
        },
      },
    }

    // Action
    const nextState = authUserReducer(initialState, action)

    // Assert
    expect(nextState).toEqual(action.payload.authUser)
  })

  it('harus menghapus pengguna yang diautentikasi ketika diberikan action UNSET_AUTH_USER', () => {
    // Arrange
    const initialState = {
      id: 'user-1',
      name: 'John Doe',
    }
    const action = {
      type: ActionType.UNSET_AUTH_USER,
    }

    // Action
    const nextState = authUserReducer(initialState, action)

    // Assert
    expect(nextState).toBe(null)
  })
})
