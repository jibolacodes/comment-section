import  React, {useState, useEffect} from 'react';
import Data from './data.json'
import Comments from './components/comments'
import UserInput from './components/userInput'
import Form from './components/form'

function App() {
  const data = JSON.parse(JSON.stringify(Data));
  const filteredComments = data.comments;
  const currentUser = data.currentUser

  const [comments, setComments] = useState([]);
  const [inputs, setInputs] = useState([])
  const [content, setContent] = useState('');

  useEffect(() => {
    setComments(filteredComments);
  },[])

  //commenting on main page
  const handleSubmit = (e) => {
    e.preventDefault();
    if(content){
      const newContent = {content}
      setInputs((inputs) => {
        return [...inputs, newContent]
      });
      setContent('')
    } else {
      console.log('empty values')
    }
  }

  return (
    <main>
      <div className="container">
      {/* Comments From Other Users */}
        {
          comments.map((comment)=> {
            return <Comments 
              comment={comment} 
              key={comment.id}
              currentUser={currentUser}
              />        
          })
        }
      {/* Comment From currentUser */}
        {
          inputs.map((input)=>{
            return (
              <UserInput 
                content={input.content} 
                currentUser={currentUser}
              />
            )
          })
        }
      {/* Input Form */}
        <Form 
          handleSubmit={handleSubmit}
          content={content}
          setContent={setContent}
        />
      </div>
    </main>
  );
}

export default App;
