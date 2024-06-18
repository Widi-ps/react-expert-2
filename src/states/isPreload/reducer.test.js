/**
 * skenario testing
 *
 * - isPreloadReducer
 *   - should restore the initial state when given an unknown action
 *   - should change isPreload when given the SET_IS_PRELOAD action
 */

import { describe, it, expect } from 'vitest';
import { ActionType } from './action';
import isPreloadReducer from './reducer';

describe('isPreloadReducer', () => {
  it('should restore the initial state when given an unknown action', () => {
    // Arrange
    const initialState = true;
    const action = { type: 'UNKNOWN_ACTION' };

    // Action
    const nextState = isPreloadReducer(initialState, action);

    // Assert
    expect(nextState).toBe(initialState);
  });

  it('should change isPreload when given the SET_IS_PRELOAD action', () => {
    // Arrange
    const initialState = true;
    const action = {
      type: ActionType.SET_IS_PRELOAD,
      payload: {
        isPreload: false,
      },
    };

    // Action
    const nextState = isPreloadReducer(initialState, action);

    // Assert
    expect(nextState).toBe(false);
  });
});
