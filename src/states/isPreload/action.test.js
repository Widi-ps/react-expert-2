/**
 * skenario testing
 *
 * - asyncPreloadProcess Thunk
 *   - should dispatch setAuthUserActionCreator when getOwnProfile succeeds
 *   - should dispatch setAuthUserActionCreator with argument null when getOwnProfile API call fails
 */

import { hideLoading, showLoading } from 'react-redux-loading-bar'
import { describe, vi, it, expect, beforeEach, afterEach } from 'vitest'
import api from '../../utils/api'
import { setAuthUserActionCreator } from '../authUser/action'
import { asyncPreloadProcess, setIsPreloadActionCreator } from './action'

// Mock responses
const fakeErrorResponse = () => {
  throw new Error('Ups something wrong')
}

const fakeUsersResponse = [
  {
    id: 'u1',
    name: 'User-1',
    email: 'user@user',
    avatar: 'user.png',
  },
]

describe('asyncPreloadProcess Thunk', () => {
  beforeEach(() => {
    // Backup original API method
    api._getOwnProfile = api.getOwnProfile
  })

  afterEach(() => {
    // Restore original API method
    api.getOwnProfile = api._getOwnProfile
    delete api._getOwnProfile
  })

  it('should dispatch setAuthUserActionCreator when getOwnProfile succeeds', async () => {
    // Stub implementation to return fake user response
    api.getOwnProfile = () => Promise.resolve(fakeUsersResponse)

    // Mock dispatch function
    const dispatch = vi.fn()

    // Execute the thunk
    await asyncPreloadProcess()(dispatch)

    // Assert dispatch calls
    expect(dispatch).toHaveBeenCalledWith(showLoading())
    expect(dispatch).toHaveBeenCalledWith(
      setAuthUserActionCreator(fakeUsersResponse),
    )
    expect(dispatch).toHaveBeenCalledWith(setIsPreloadActionCreator(false))
    expect(dispatch).toHaveBeenCalledWith(hideLoading())
  })

  it('should dispatch setAuthUserActionCreator with argument null when getOwnProfile API call fails', async () => {
    // Stub implementation to return fake error response
    api.getOwnProfile = () => Promise.reject(fakeErrorResponse)

    // Mock dispatch function
    const dispatch = vi.fn()

    // Execute the thunk
    await asyncPreloadProcess()(dispatch)

    // Assert dispatch calls
    expect(dispatch).toHaveBeenCalledWith(showLoading())
    expect(dispatch).toHaveBeenCalledWith(setAuthUserActionCreator(null))
    expect(dispatch).toHaveBeenCalledWith(setIsPreloadActionCreator(false))
    expect(dispatch).toHaveBeenCalledWith(hideLoading())
  })
})
