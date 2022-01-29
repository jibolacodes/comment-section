import React from 'react'
import Vote from '../components/vote';
import Edit from '../assets/images/icon-edit.svg';
import Delete from '../assets/images/icon-delete.svg'


const UserComment = () => {
  return (
    <div className="comment">
      <Vote />
      <div>
        <div className="up-section">
          <div className="person">
            <img className='person-img' 
              src='{require(`../assets${comment.user.image.png}`)'}
              alt="" />
            <p className="name"></p>
            <p className="time"></p>
          </div>
          <div className="update-btns">
            <button className="delete">
              <img src='{Delete}' alt="reply" />
              <span>Delete</span>
            </button>
            <button className="edit">
              <img src='{Edit}' alt="reply" />
              <span>Edit</span>
            </button>
          </div>
        </div>
        <article></article>
      </div>
    </div>   
  )
}

export default UserComment