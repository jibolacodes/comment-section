import React from 'react'
import JSONData from '../data.json'
import Plus from '../assets/images/icon-plus.svg'
import Minus from '../assets/images/icon-minus.svg'

const Vote = ({score}) => {

	return (
		<div className="vote">
			<button>
				<img src={Plus} alt="plus" />
			</button>
			<span>{score}</span>
			<button>
				<img src={Minus} alt="minus" />
			</button>
	</div>
    )
}

export default Vote
