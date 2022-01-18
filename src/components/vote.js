import React from 'react'
import Plus from '../assets/images/icon-plus.svg'
import Minus from '../assets/images/icon-minus.svg'

const Vote = () => {
	return (
		<div className="vote">
			<button>
				<img src={Plus} alt="plus" />
			</button>
			<span>0</span>
			<button>
				<img src={Minus} alt="minus" />
			</button>
	</div>
    )
}

export default Vote
