import React from 'react';
import Vote from '../components/vote';

import Plus from '../assets/images/icon-plus.svg'
import Minus from '../assets/images/icon-minus.svg'
import Reply from '../assets/images/icon-reply.svg'
import Delete from '../assets/images/icon-delete.svg'
import Edit from '../assets/images/icon-edit.svg'

import Pic from '../assets/images/avatars/image-amyrobson.png'


const SingleReply = ({reply}) => {
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
