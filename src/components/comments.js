import React, {useState} from 'react'
import Vote from '../components/vote';
import NestedReply from './nestedReply'
import SingleReply from './singleReply'
import UserInput from './userInput'
import Reply from '../assets/images/icon-reply.svg';


const Comments = ({comment, currentUser}) => {
  const [show, setShow] = useState(false);
  const [showReplies, setShowReplies] = useState([]);

  const getUserComment = () => {
    if(currentUser.username === comment.replies.user.username) {
      return <userInput />;
    }
    return <SingleReply />
  }

  const {content, createdAt, id, replies, score, user} = comment;
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
          <button 
            className="reply-open" 
            onClick={()=>setShow(!show)}>
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
          showReplies && (replies.map((reply)=>{
            return (           
            reply.user.username === currentUser.username ?
              <p>Hiii</p> :
             <SingleReply key={reply.id} reply={reply} />        
            )
          }))
        }
      </div>
    </div>
    </>
  )
}

export default Comments
