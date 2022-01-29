import React from 'react'
import Vote from '../components/vote';

const UserComment = () => {
	return (
    <div className="user-comment-update">
			<Vote />
      <div>
        <div className="update-section">
          <div className="user">
            <img className='person-img' src='{Pic}' alt="" />
            <p className="name">amyrobson</p>
            <p className="tag">you</p>
            <p className="time">1 day ago</p>
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
        <form action="#" className='user-input'>
        <textarea name="reply" id="user-reply" cols="0" rows="10"></textarea>  
        <div className="user-btn">
          <button className='btn' type="submit">UPDATE</button>
        </div>
        </form>
      </div>
    </div>
	)
}

export default UserComment