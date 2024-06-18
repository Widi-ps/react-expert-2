import React from 'react';
import PropTypes from 'prop-types';
import ThreadItem from './ThreadItem';

function ThreadList({ threads, like, dislike, neutralLike, neutralDislike }) {
  return threads.map((thread) => (
    <ThreadItem
      key={thread.id}
      {...thread}
      like={like}
      dislike={dislike}
      neutralLike={neutralLike}
      neutralDislike={neutralDislike}
    />
  ));
}
ThreadList.propTypes = {
  threads: PropTypes.array.isRequired,
  like: PropTypes.func.isRequired,
  dislike: PropTypes.func.isRequired,
  neutralLike: PropTypes.func.isRequired,
  neutralDislike: PropTypes.func.isRequired,
};

export default ThreadList;
