/**
 * skenario testing
 *
 * - CommentThreadInput component
 *   - should return the initial state when given an unknown action
 *   - should adds comments when given the ADD_COMMENT_THREAD action
 *   - should receive comments when given the RECEIVE_COMMENTS action
 *   - should toggle like on comments when given the action TOGGLE_LIKE_COMMENT
 *   - should toggle dislike on comments when given the TOGGLE_DISLIKE_COMMENT action
 *   - should toggle neutral like on comments when given the TOGGLE_NEUTRAL_LIKE_COMMENT action
 *   - should toggle neutral dislike on comments when given the TOGGLE_NEUTRAL_DISLIKE_COMMENT action
 */

import { describe, it, expect } from 'vitest';
import { ActionType } from './action';
import commentsReducer from './reducer';

describe('commentsReducer', () => {
  it('should return the initial state when given an unknown action', () => {
    // Arrange
    const initialState = [];
    const action = { type: 'UNKNOWN_ACTION' };

    // Action
    const nextState = commentsReducer(initialState, action);

    // Assert
    expect(nextState).toBe(initialState);
  });

  it('should adds comments when given the ADD_COMMENT_THREAD action', () => {
    // Arrange
    const initialState = [];
    const action = {
      type: ActionType.ADD_COMMENT_THREAD,
      payload: {
        comment: {
          id: 'comment-1',
          content: 'This is a comment',
          upVotesBy: [],
          downVotesBy: [],
        },
      },
    };

    // Action
    const nextState = commentsReducer(initialState, action);

    // Assert
    expect(nextState).toEqual([action.payload.comment]);
  });

  it('should receive comments when given the RECEIVE_COMMENTS action', () => {
    // Arrange
    const initialState = [];
    const action = {
      type: ActionType.RECEIVE_COMMENTS,
      payload: {
        comments: [
          {
            id: 'comment-1',
            content: 'This is a comment',
            upVotesBy: [],
            downVotesBy: [],
          },
        ],
      },
    };

    // Action
    const nextState = commentsReducer(initialState, action);

    // Assert
    expect(nextState).toEqual(action.payload.comments);
  });

  it('should toggle like on comments when given the action TOGGLE_LIKE_COMMENT', () => {
    // Arrange
    const initialState = [
      {
        id: 'comment-1',
        content: 'This is a comment',
        upVotesBy: [],
        downVotesBy: [],
      },
    ];
    const action = {
      type: ActionType.TOGGLE_LIKE_COMMENT,
      payload: {
        commentId: 'comment-1',
        userId: 'user-1',
      },
    };

    // Action
    const nextState = commentsReducer(initialState, action);

    // Assert
    expect(nextState[0].upVotesBy).toContain('user-1');
  });

  it('should toggle dislike on comments when given the TOGGLE_DISLIKE_COMMENT action', () => {
    // Arrange
    const initialState = [
      {
        id: 'comment-1',
        content: 'This is a comment',
        upVotesBy: [],
        downVotesBy: [],
      },
    ];
    const action = {
      type: ActionType.TOGGLE_DISLIKE_COMMENT,
      payload: {
        commentId: 'comment-1',
        userId: 'user-1',
      },
    };

    // Action
    const nextState = commentsReducer(initialState, action);

    // Assert
    expect(nextState[0].downVotesBy).toContain('user-1');
  });

  it('should toggle neutral like on comments when given the TOGGLE_NEUTRAL_LIKE_COMMENT action', () => {
    // Arrange
    const initialState = [
      {
        id: 'comment-1',
        content: 'This is a comment',
        upVotesBy: ['user-1'],
        downVotesBy: [],
      },
    ];
    const action = {
      type: ActionType.TOGGLE_NEUTRAL_LIKE_COMMENT,
      payload: {
        commentId: 'comment-1',
        userId: 'user-1',
      },
    };

    // Action
    const nextState = commentsReducer(initialState, action);

    // Assert
    expect(nextState[0].upVotesBy).not.toContain('user-1');
  });

  it('should toggle neutral dislike on comments when given the TOGGLE_NEUTRAL_DISLIKE_COMMENT action', () => {
    // Arrange
    const initialState = [
      {
        id: 'comment-1',
        content: 'This is a comment',
        upVotesBy: [],
        downVotesBy: ['user-1'],
      },
    ];
    const action = {
      type: ActionType.TOGGLE_NEUTRAL_DISLIKE_COMMENT,
      payload: {
        commentId: 'comment-1',
        userId: 'user-1',
      },
    };

    // Action
    const nextState = commentsReducer(initialState, action);

    // Assert
    expect(nextState[0].downVotesBy).not.toContain('user-1');
  });
});
