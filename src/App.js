import  React from 'react';

import Plus from './assets/images/icon-plus.svg'
import Minus from './assets/images/icon-minus.svg'
import Reply from './assets/images/icon-reply.svg'
import Delete from './assets/images/icon-delete.svg'
import Edit from './assets/images/icon-edit.svg'

import Pic from './assets/images/avatars/image-amyrobson.png'
function App() {

  return (
    <main>
{/* Chat Messages */}
      <div className="container">
        <div className="comment">
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
        </div>
{/* Reply*/}
        <div className="input-text">
          <form action="#" className='reply-input'>
            <img className='person-img' src={Pic} alt="" />
            <textarea name="reply" id="reply" cols="30" rows="10"></textarea>
            <button type="submit">REPLY</button>
          </form>
        </div>

{/* =========================================== */}

        <div className="nest">
          <div className="line"></div>
          <div className="nest-center">
            <div className="nested-comment">
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
            </div>

            <div className="nested-input-text">
              <form action="#" className='nested-reply-input'>
                <img className='person-img' src={Pic} alt="" />
                <textarea name="reply" id="reply" cols="0" rows="10"></textarea>
                <button type="submit">REPLY</button>
              </form>
            </div>
          </div>
        </div>
{/* User reply */}

        <div className="nest">
          <div className="line"></div>
          <div className="nest-center">
            <div className="nested-comment">
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
                  <div className="update">
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
                <form action="#" className='nested-reply-input'>
                <textarea name="reply" id="reply" cols="0" rows="10"></textarea>
                {/* <button type="submit">REPLY</button> */}
              </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
