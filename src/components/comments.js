import React, { useReducer, useState, useEffect } from 'react'
import JSONData from '../data.json'
import SingleComment from './singleComment'

const Comments = () => {
  const data = JSON.parse(JSON.stringify(JSONData));
  const filteredComments = data.comments;
  const [comments, setComments] = useState([]);
  
  useEffect(() => {
    setComments(filteredComments);
  },[])

  return (
    <>
    {
      comments.map((comment) => {
       return (
          <SingleComment 
          comment={comment} 
          key={comment.id}
          replies = {comment.replies}
          />
        )
      })
    }
    </>
    
  )
}

export default Comments
