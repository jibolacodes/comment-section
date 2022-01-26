import React from 'react'

const Form = ({handleSubmit,content,setContent}) => {
	return (
  		<div className="input-text">
				<form action="#" className='reply-input' onSubmit={handleSubmit}>
						<img className='person-img' src='' alt="" />
						<textarea 
								name="reply" 
								id="reply" 
								cols="30" 
								rows="10"
								value={content}
								onChange={(e)=>setContent(e.target.value)}
						>
						</textarea>
						<button className='btn' type="submit">SEND</button>
				</form>
  		</div> 
  	)
}

export default Form