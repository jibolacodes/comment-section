import React, { useReducer, useState } from 'react'
import Vote from '../components/vote'
import Data from '../data.json'
import Reply from '../assets/images/icon-reply.svg'
import UserReply from './userReply'
const reducer = (state, action) => {
  if(action.type === 'OPEN_REPLY') {
    return {...state, isReplyOpen: true};
  }
    return state
}
const initialState = {
    isReplyOpen: false
}

const Comments = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [comments, setComments] = useState(Data.comments)
  
  const handleReply = () => {
    dispatch({type: 'OPEN_REPLY'});
  }

  return (
    <>
  {state.isReplyOpen && <UserReply />}
    {
      comments.map((comment) => {
        return (
          <div className="comment" key={comment.id}>
            <Vote />
            <div>
              <div className="up-section">
                <div className="person">
                  <img className='person-img' src={require(`../assets${comment.user.image.png}`)} alt="" />
                  <p className="name">{comment.user.username}</p>
                  <p className="time">{comment.createdAt}</p>
                </div>
                <button className="reply-open" onClick={handleReply}>
                  <img src={Reply} alt="reply" />
                  <span>Reply</span>
                </button>
              </div>
              <article>{comment.content}</article>
            </div>
          </div>
        )

      })
    }

    </>
  )
}

export default Comments
