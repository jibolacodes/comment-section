import React from 'react'
import Vote from '../components/vote';
import SingleReply from './singleReply'
import CurrentUserInput from './nestUserInput'
import Reply from '../assets/images/icon-reply.svg';

const Comments = ({comment, currentUser}) => {

  const {content, id, replies, score, user} = comment;
  return (
    <>
    <div className="comment" key={id}>
      <Vote score={score}/>
      <div>
        <div className="up-section">
          <div className="person">
            <img className='person-img' 
              src={require(`../assets${user.image.png}`)}
              alt="" />
            <p className="name">{user.username}</p>
            <p className="time"></p>
          </div>
          <button className="reply-open" >
            <img src={Reply} alt="reply" />
            <span>Reply</span>
          </button>
        </div>
        <article>{content}</article>
      </div>
    </div>
    <div className="nest">
      <div className="line"></div>
      <div className="nest-center">
        {
          comment && (replies.map((reply)=>{
            return (
            reply.user.username === currentUser.username ?
            <CurrentUserInput key={reply.id} reply={reply}
            /> : <SingleReply key={reply.id} reply={reply} />        
            )
          }))
        }
      </div>
    </div>
    </>
  )
}

export default Comments
