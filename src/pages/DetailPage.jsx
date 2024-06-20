import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import Header from '../components/Header'
import ThreadDetail from '../components/ThreadDetail'
import {
  asyncReceiveComments,
  asyncAddCommentOnThread,
} from '../states/comments/action'
import {
  asyncToggleLikeThreadDetail,
  asyncToggleDislikeThreadDetail,
  asyncToggleNeutralLikeThreadDetail,
  asyncToggleNeutralDislikeThreadDetail,
  asyncReceiveThreadDetail,
} from '../states/threadDetail/action'

function DetailPage() {
  const { id } = useParams()
  const dispatch = useDispatch()
  const threadDetail = useSelector((states) => states.threadDetail)
  const authUser = useSelector((states) => states.authUser)

  useEffect(() => {
    dispatch(asyncReceiveThreadDetail(id))
    dispatch(asyncReceiveComments(id))
  }, [id, dispatch])

  function onLike(idUser) {
    dispatch(asyncToggleLikeThreadDetail(idUser))
  }

  function onDislike(idUser) {
    dispatch(asyncToggleDislikeThreadDetail(idUser))
  }

  function onNeutralLike(idUser) {
    dispatch(asyncToggleNeutralLikeThreadDetail(idUser))
  }

  function onNeutralDislike(idUser) {
    dispatch(asyncToggleNeutralDislikeThreadDetail(idUser))
  }
  function onAddComment(content) {
    dispatch(asyncAddCommentOnThread({ content, commentTo: id }))
    dispatch(asyncReceiveComments(id))
  }

  return (
    <div>
      <Header authUser={authUser} />
      {threadDetail && (
        <ThreadDetail
          {...threadDetail}
          addComment={onAddComment}
          authUser={authUser}
          like={onLike}
          dislike={onDislike}
          neutralLike={onNeutralLike}
          neutralDislike={onNeutralDislike}
        />
      )}
    </div>
  )
}

export default DetailPage
