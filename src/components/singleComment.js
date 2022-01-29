<<<<<<< HEAD
import React, { useEffect, useState } from 'react';
=======
import React, { useState, useReducer } from 'react';
>>>>>>> 36bfb394ac0ef5b38ff998c33ff45defa326b76a
import Vote from '../components/vote';
import SingleReply from './singleReply';
import NestedReply from './nestedReply'
import UserComment from './userComment'
import Reply from '../assets/images/icon-reply.svg';

const SingleComment = ({comment, replies}) => {
  const [showReply, setShowReply] = useState([])
  const [showInput, setShowInput] = useState(false);
  const handleReply = () => {
    return setShowInput(!showInput);
  }
  return <>
    <div className="comment" key={comment.id}>
    <Vote score={comment.score}/>
      <div>
        <div className="up-section">
          <div className="person">
            <img className='person-img' 
              src={require(`../assets${comment.user.image.png}`)} 
<<<<<<< HEAD
              alt="" 
            />
=======
              alt="" />
>>>>>>> 36bfb394ac0ef5b38ff998c33ff45defa326b76a
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

{/*    <div className="nest">
      <div className="line"></div>
      <div className="nest-center">
        { showInput && <NestedReply />}
        {showReply && (replies.map(reply => {
          return (
            <SingleReply 
            key={reply.id} 
            reply={reply} />
            )
        }))}
      </div>
    </div>
*/}  </>;
};

export default SingleComment;