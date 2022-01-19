import React from 'react';
import Vote from '../components/vote';
import SingleReply from './singleReply';
import Reply from '../assets/images/icon-reply.svg';
import { useEffect, useState } from 'react/cjs/react.development';

const SingleComment = ({comment}) => {
  const [replies,setReplies] = useState(comment);
  console.log(replies);
  useEffect(() => {
    setReplies();
  }, [])
  return <>
    <div className="comment" key={comment.id}>
    <Vote score={comment.score}/>
    <div>
      <div className="up-section">
        <div className="person">
          <img className='person-img' src={require(`../assets${comment.user.image.png}`)} alt="" />
          <p className="name">{comment.user.username}</p>
          <p className="time">{comment.createdAt}</p>
        </div>
        <button className="reply-open">
          <img src={Reply} alt="reply" />
          <span>Reply</span>
        </button>
      </div>
      <article>{comment.content}</article>
    </div>
  </div>
  {/* {replies && replies.map((reply) => {
    <SingleReply reply={reply} key={reply.id}/>
  })} */}
  {replies && <SingleReply />}
  </>;
};

export default SingleComment;
