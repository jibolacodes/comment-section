import React from 'react'
import Vote from '../components/vote';
import Edit from '../assets/images/icon-edit.svg';
import Delete from '../assets/images/icon-delete.svg'


const UserInput= ({content, currentUser}) => {

  return (
    <div className="comment">
      <Vote />
      <div>
        <div className="update-section">
          <div className="user">
            <img className='person-img' 
              src={require(`../assets${currentUser.image.png}`)}
              alt="" />
            <p className="name">{currentUser.username}</p>
            <p className="tag">you</p>
            <p className="time">Now</p>
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
      </div>
    </div>   
  )
}

export default UserInput