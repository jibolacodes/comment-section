import React, {useState} from 'react';

const NestedReply = ({reply}) => {
  const [close, setClose] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setClose(!close);
  }

	return (
    <>
    
    <div className="nested-input-text">
      <form action="#" className='nested-reply-input' onSubmit={handleSubmit}>
        <img className='person-img' src='{Pic} 'alt="" />
        <textarea name="reply" 
                  id="reply" y
                  
                  cols="0" rows="10" 
                  placeholder={reply}></textarea>
        <button className='btn' type="submit">REPLY</button>
      </form>
    </div>	
    </>
  )
}

export default NestedReply