import React from 'react'
import Vote from './vote';
import Delete from '../assets/images/icon-delete.svg'
import Edit from '../assets/images/icon-edit.svg'

const NestUserInput = ({reply}) => {
  const {content, createdAt, id, replyingTo, score, user} = reply;
	return (
    <div className="user-comment-update">
			<Vote score={score}/>
      <div>
        <div className="update-section">
          <div className="user">
            <img className='person-img' src={require(`../assets${user.image.png}`)} alt="" />
            <p className="name">{user.username}</p>
            <p className="tag">you</p>
            <p className="time">{createdAt}</p>
          </div>
          <div className="update-btns">
            <button className="delete">
              <img src={Delete} alt="reply" />
              <span>Delete</span>
            </button>
            <button className="edit">
              <img src={Edit} alt="reply" />
              <span>Edit</span>
            </button>
          </div>
        </div>
        <article>{content}</article>
        {/* <form action="#" className='user-input'>
        <textarea name="reply" id="user-reply" cols="0" rows="10"></textarea>  
        <div className="user-btn">
          <button className='btn' type="submit">UPDATE</button>
        </div>
        </form> */}
      </div>
    </div>
	)
}

export default NestUserInput;