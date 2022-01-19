import  React from 'react';
import Comments from './components/comments'
import Pic from './assets/images/avatars/image-amyrobson.png'
function App() {

  return (
    <main>
      <div className="container">
        <Comments />
{/* =========================================== */}

        <div className="nest">
          <div className="line"></div>
            <div className="nest-center">
              {/* <div className="nested-comment">
              <div className="vote">
                <button>
                  <img src={Plus} alt="plus" />
                </button>
                <span>0</span>
                <button>
                  <img src={Minus} alt="minus" />
                </button>
              </div>
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
                <article>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                  Nulla explicabo voluptatum voluptatem magnam asperiores 
                  sequi voluptate deleniti reprehenderit vitae itaque?
                </article>
              </div>
            </div> */}


            {/* <div className="nested-input-text">
              <form action="#" className='nested-reply-input'>
                <img className='person-img' src={Pic} alt="" />
                <textarea name="reply" id="reply" cols="0" rows="10"></textarea>
                <button className='btn' type="submit">REPLY</button>
              </form>
            </div> */}



            {/* <div className="user-comment-update">
              <div className="vote">
                <button>
                  <img src={Plus} alt="plus" />
                </button>
                <span>0</span>
                <button>
                  <img src={Minus} alt="minus" />
                </button>
              </div>
              <div>
                <div className="update-section">
                  <div className="user">
                    <img className='person-img' src={Pic} alt="" />
                    <p className="name">amyrobson</p>
                    <p className="tag">you</p>
                    <p className="time">1 day ago</p>
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
                <form action="#" className='user-input'>
                <textarea name="reply" id="user-reply" cols="0" rows="10"></textarea>  
                <div className="user-btn">
                  <button className='btn' type="submit">UPDATE</button>
                </div>
                </form>
              </div>
            </div> */}
          </div>
        </div>

{/* Send*/}
        {/* <div className="input-text">
          <form action="#" className='reply-input'>
            <img className='person-img' src={Pic} alt="" />
            <textarea name="reply" id="reply" cols="30" rows="10"></textarea>
            <button className='btn' type="submit">SEND</button>
          </form>
        </div> */}
      </div>
    </main>
  );
}

export default App;
