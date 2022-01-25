import React, {useState} from 'react';
import Vote from '../components/vote';
import NestedReply from './nestedReply'
import Reply from '../assets/images/icon-reply.svg';
import Pic from '../assets/images/avatars/image-amyrobson.png';


const SingleReply = ({reply}) => {
  const [showNestInput, setShowNestInput] = useState(false)
  console.log(reply);
  const handleNestReply = () => {
    return setShowNestInput(!showNestInput);
  }
  return ( 
    <>
      <div className="nested-comment">
        <Vote score={reply.score}/>
        <div>
         <div className="up-section">
          <div className="person">
            <img className='person-img' 
            src={require(`../assets${reply.user.image.png}`)} 
            alt="" />
            <p className="name">{reply.user.username}</p>
            <p className="time">{reply.createdAt}</p>
          </div>
          <button className="reply-open" onClick={handleNestReply}>
            <img src={Reply} alt="reply" />
            <span>Reply</span>
          </button>
         </div>
        <article>{reply.content}</article>
        </div>
      </div> 
      {showNestInput && <NestedReply reply={reply}/>}
    </>
    )
  }

export default SingleReply;
