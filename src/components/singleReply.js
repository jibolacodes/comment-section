import React from 'react';
import Vote from '../components/vote';
import Reply from '../assets/images/icon-reply.svg';
import Pic from '../assets/images/avatars/image-amyrobson.png';


const SingleReply = () => {
  return (
    <div className="nest">
      <div className="line"></div>
      <div className="nest-center">
        <div className="nested-comment">
          <Vote />
          <div>
           <div className="up-section">
            <div className="person">
              <img className='person-img' src={Pic} alt="" />
              <p className="name">amyrobson</p>
              <p className="time">1 day ago</p>
            </div>
            <button className="reply-open">
              <img src={Reply} alt="reply" />
              <span>Reply</span>
            </button>
           </div>
          <article></article>
          </div>
        </div> 
      </div>
    </div>
    )
  }

export default SingleReply;
