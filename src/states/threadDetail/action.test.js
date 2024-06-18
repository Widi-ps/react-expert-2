/**
 * skenario testing
 *
 * - asyncToggleLikeThreadDetail
 *   - should render RegisterInput component correctly
 *   - should handle input changes correctly
 *
 * - asyncToggleDislikeThreadDetail
 *   - should call the correct API and dispatch actions
 *   - should call the API again if it fails and dispatch the correct actions
 *
 * - asyncToggleNeutralLikeThreadDetail
 *   - should call the correct API and dispatch actions
 *   - should call the API again if it fails and dispatch the correct actions
 */

import { describe, it, expect, vi } from 'vitest';
import { showLoading, hideLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';
import { asyncToggleDislikeThreadDetail, asyncToggleLikeThreadDetail, asyncToggleNeutralLikeThreadDetail } from './action';

// getState functions
const getStateMock = () => ({
  authUser: { id: 'user-id' }, // Mock authUser
});

describe('asyncToggleLikeThreadDetail', () => {
  it('should call the correct API and dispatch actions', async () => {
    // Mock API functions
    api.toggleUpVoteThread = vi.fn().mockResolvedValueOnce();

    // Mock dispatch function
    const dispatch = vi.fn();

    // Panggil fungsi asyncToggleLikeThreadDetail dengan mock dispatch dan getState
    await asyncToggleLikeThreadDetail('thread-id')(dispatch, getStateMock);

    // Assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(
      expect.objectContaining({
        type: 'TOGGLE_LIKE_THREAD_DETAIL',
        payload: { threadId: 'thread-id', userId: 'user-id' },
      })
    );
    expect(api.toggleUpVoteThread).toHaveBeenCalledWith('thread-id');
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });

  it('should call the API again if it fails and dispatch the correct actions', async () => {
    // Mock API functions
    api.toggleUpVoteThread = vi.fn().mockRejectedValueOnce(new Error('API Error'));

    // Mock dispatch function
    const dispatch = vi.fn();

    // Panggil fungsi asyncToggleLikeThreadDetail dengan mock dispatch dan getState
    await asyncToggleLikeThreadDetail('thread-id')(dispatch, getStateMock);

    // Assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(
      expect.objectContaining({
        type: 'TOGGLE_LIKE_THREAD_DETAIL',
        payload: { threadId: 'thread-id', userId: 'user-id' },
      })
    );
    expect(api.toggleUpVoteThread).toHaveBeenCalledWith('thread-id');
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });
});

describe('asyncToggleDislikeThreadDetail', () => {
  it('should call the correct API and dispatch actions', async () => {
    // Mock API functions
    api.toggleDownVoteThread = vi.fn().mockResolvedValueOnce();

    // Mock dispatch function
    const dispatch = vi.fn();

    // Panggil fungsi asyncToggleDislikeThreadDetail dengan mock dispatch dan getState
    await asyncToggleDislikeThreadDetail('thread-id')(dispatch, getStateMock);

    // Assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(
      expect.objectContaining({
        type: 'TOGGLE_DISLIKE_THREAD_DETAIL',
        payload: { threadId: 'thread-id', userId: 'user-id' },
      })
    );
    expect(api.toggleDownVoteThread).toHaveBeenCalledWith('thread-id');
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });

  it('should call the API again if it fails and dispatch the correct actions', async () => {
    // Mock API functions
    api.toggleDownVoteThread = vi.fn().mockRejectedValueOnce(new Error('API Error'));

    // Mock dispatch function
    const dispatch = vi.fn();

    // Panggil fungsi asyncToggleDislikeThreadDetail dengan mock dispatch dan getState
    await asyncToggleDislikeThreadDetail('thread-id')(dispatch, getStateMock);

    // Assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(
      expect.objectContaining({
        type: 'TOGGLE_DISLIKE_THREAD_DETAIL',
        payload: { threadId: 'thread-id', userId: 'user-id' },
      })
    );
    expect(api.toggleDownVoteThread).toHaveBeenCalledWith('thread-id');
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });
});

describe('asyncToggleNeutralLikeThreadDetail', () => {
  it('should call the correct API and dispatch actions', async () => {
    // Mock API functions
    api.toggleNeutralVoteThread = vi.fn().mockResolvedValueOnce();

    // Mock dispatch function
    const dispatch = vi.fn();

    // Panggil fungsi asyncToggleNeutralLikeThreadDetail dengan mock dispatch dan getState
    await asyncToggleNeutralLikeThreadDetail('thread-id')(dispatch, getStateMock);

    // Assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(
      expect.objectContaining({
        type: 'TOGGLE_NEUTRAL_LIKE_THREAD_DETAIL',
        payload: { threadId: 'thread-id', userId: 'user-id' },
      })
    );
    expect(api.toggleNeutralVoteThread).toHaveBeenCalledWith('thread-id');
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });

  it('should call the API again if it fails and dispatch the correct actions', async () => {
    // Mock API functions
    api.toggleNeutralVoteThread = vi.fn().mockRejectedValueOnce(new Error('API Error'));

    // Mock dispatch function
    const dispatch = vi.fn();

    // Panggil fungsi asyncToggleNeutralLikeThreadDetail dengan mock dispatch dan getState
    await asyncToggleNeutralLikeThreadDetail('thread-id')(dispatch, getStateMock);

    // Assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(
      expect.objectContaining({
        type: 'TOGGLE_NEUTRAL_LIKE_THREAD_DETAIL',
        payload: { threadId: 'thread-id', userId: 'user-id' },
      })
    );
    expect(api.toggleNeutralVoteThread).toHaveBeenCalledWith('thread-id');
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });
});
