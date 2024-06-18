/**
 * skenario testing
 *
 * - leaderboardsReducer
 *   - should restore the initial state when given an unknown action
 *   - should return leaderboards when given the RECEIVE_LEADERBOARDS action
 */

import { describe, it, expect } from 'vitest';
import { ActionType } from './action';
import leaderboardsReducer from './reducer';

describe('leaderboardsReducer', () => {
  it('should restore the initial state when given an unknown action', () => {
    // Arrange
    const initialState = [];
    const action = { type: 'UNKNOWN_ACTION' };

    // Action
    const nextState = leaderboardsReducer(initialState, action);

    // Assert
    expect(nextState).toEqual(initialState);
  });

  it('should return leaderboards when given the RECEIVE_LEADERBOARDS action', () => {
    // Arrange
    const initialState = [];
    const action = {
      type: ActionType.RECEIVE_LEADERBOARDS,
      payload: {
        leaderboards: [
          { id: 1, name: 'User 1', score: 100 },
          { id: 2, name: 'User 2', score: 90 },
        ],
      },
    };

    // Action
    const nextState = leaderboardsReducer(initialState, action);

    // Assert
    expect(nextState).toEqual(action.payload.leaderboards);
  });
});
