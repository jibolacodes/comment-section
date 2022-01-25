import  React, {useState, useEffect, useReducer} from 'react';
import Data from './data.json'
import Comments from './components/comments'



const handleSubmit = (e) => {
  e.preventDefault();
}

function App() {
  const [comments, setComments] = useState([])
  console.log(Data)

  const getData = async () => {
    const resp = await fetch(Data);
    const data = await resp.json();
  }
getData();
  return (
    <main>
      <div className="container">
        <Comments />
         <div className="input-text">
          <form action="#" className='reply-input' onSubmit={handleSubmit}>
            <img className='person-img' src='' alt="" />
            <textarea name="reply" id="reply" cols="30" rows="10"></textarea>
            <button className='btn' type="submit">SEND</button>
          </form>
        </div> 
      </div>
    </main>
  );
}

export default App;
