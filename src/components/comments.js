import React, { useReducer, useState, useEffect } from 'react'
import JSONData from '../data.json'
import SingleComment from './singleComment'

const Comments = () => {
  const [comments, setComments] = useState([]);
  const data = JSON.parse(JSON.stringify(JSONData));
  const filteredComments = data.comments;

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
          key={comment.id} />
        )
      })
    }
    </>
    
  )
}

export default Comments
