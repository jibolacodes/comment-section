import React, {useState} from 'react';
import Vote from '../components/vote';
import NestedReply from './nestedReply'
import Reply from '../assets/images/icon-reply.svg';
import Pic from '../assets/images/avatars/image-amyrobson.png';


const SingleReply = ({reply}) => {
  const {content, createdAt, id, replyingTo, score, user} = reply;
  return ( 
    <>
      <div className="nested-comment">
        <Vote score={score}/>
        <div>
         <div className="up-section">
          <div className="person">
            <img className='person-img' 
              src={require(`../assets${user.image.png}`)}
              alt="" />
            <p className="name">{user.username}</p>
            <p className="time">{createdAt}</p>
          </div>
          <button className="reply-open">
            <img src={Reply} alt="reply" />
            <span>Reply</span>
          </button>
         </div>
        <article>{content}</article>
        </div>
      </div> 
    </>
    )
  }

export default SingleReply;
