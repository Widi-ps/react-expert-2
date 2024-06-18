import api from '../../utils/api';

const ActionType = {
  RECEIVE_THREADS: 'RECEIVE_THREADS',
  ADD_THREAD: 'ADD_THREAD',
  TOGGLE_LIKE_THREAD: 'TOGGLE_LIKE_THREAD',
  TOGGLE_DISLIKE_THREAD: 'TOGGLE_DISLIKE_THREAD',
  TOGGLE_NEUTRAL_LIKE_THREAD: 'TOGGLE_NEUTRAL_LIKE_THREAD',
  TOGGLE_NEUTRAL_DISLIKE_THREAD: 'TOGGLE_NEUTRAL_DISLIKE_THREAD',
};

function receiveThreadsActionCreator(threads) {
  return {
    type: ActionType.RECEIVE_THREADS,
    payload: {
      threads,
    },
  };
}

function addThreadActionCreator(thread) {
  return {
    type: ActionType.ADD_THREAD,
    payload: {
      thread,
    },
  };
}

function asyncAddThread({ title, category, body }) {
  return async (dispatch) => {
    try {
      const thread = await api.createThread({ title, category, body });
      dispatch(addThreadActionCreator(thread));
    } catch (error) {
      alert(error.message);
    }
  };
}

function toggleLikeThreadActionCreator({ threadId, userId }) {
  return {
    type: ActionType.TOGGLE_LIKE_THREAD,
    payload: {
      threadId,
      userId,
    },
  };
}

function toggleDislikeThreadActionCreator({ threadId, userId }) {
  return {
    type: ActionType.TOGGLE_DISLIKE_THREAD,
    payload: {
      threadId,
      userId,
    },
  };
}

function toggleNeutralLikeThreadActionCreator({ threadId, userId }) {
  return {
    type: ActionType.TOGGLE_NEUTRAL_LIKE_THREAD,
    payload: {
      threadId,
      userId,
    },
  };
}

function toggleNeutralDislikeThreadActionCreator({ threadId, userId }) {
  return {
    type: ActionType.TOGGLE_NEUTRAL_DISLIKE_THREAD,
    payload: {
      threadId,
      userId,
    },
  };
}

function asyncToggleLikeThread(threadId) {
  return async (dispatch, getState) => {
    const { authUser } = getState();

    dispatch(toggleLikeThreadActionCreator({ threadId, userId: authUser.id }));

    try {
      await api.toggleUpVoteThread(threadId);
    } catch (error) {
      alert(error.message);
      dispatch(
        toggleLikeThreadActionCreator({ threadId, userId: authUser.id })
      );
    }
  };
}

function asyncToggleDislikeThread(threadId) {
  return async (dispatch, getState) => {
    const { authUser } = getState();
    dispatch(
      toggleDislikeThreadActionCreator({ threadId, userId: authUser.id })
    );

    try {
      await api.toggleDownVoteThread(threadId);
    } catch (error) {
      alert(error.message);
      dispatch(
        toggleDislikeThreadActionCreator({ threadId, userId: authUser.id })
      );
    }
  };
}

function asyncToggleNeutralLikeThread(threadId) {
  return async (dispatch, getState) => {
    const { authUser } = getState();

    dispatch(
      toggleNeutralLikeThreadActionCreator({ threadId, userId: authUser.id })
    );

    try {
      await api.toggleNeutralVoteThread(threadId);
    } catch (error) {
      alert(error.message);
      dispatch(
        toggleNeutralLikeThreadActionCreator({ threadId, userId: authUser.id })
      );
    }
  };
}

function asyncToggleNeutralDislikeThread(threadId) {
  return async (dispatch, getState) => {
    const { authUser } = getState();
    dispatch(
      toggleDislikeThreadActionCreator({ threadId, userId: authUser.id })
    );

    try {
      await api.toggleNeutralVoteThread(threadId);
    } catch (error) {
      alert(error.message);
      dispatch(
        toggleDislikeThreadActionCreator({ threadId, userId: authUser.id })
      );
    }
  };
}

export {
  ActionType,
  receiveThreadsActionCreator,
  addThreadActionCreator,
  asyncAddThread,
  toggleLikeThreadActionCreator,
  toggleDislikeThreadActionCreator,
  toggleNeutralLikeThreadActionCreator,
  toggleNeutralDislikeThreadActionCreator,
  asyncToggleLikeThread,
  asyncToggleDislikeThread,
  asyncToggleNeutralLikeThread,
  asyncToggleNeutralDislikeThread,
};
