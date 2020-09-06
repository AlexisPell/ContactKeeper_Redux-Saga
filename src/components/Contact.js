import React from 'react'
import { connect } from 'react-redux'
import { deleteUser, getUser } from './../actions/users'

const Contact = ({ deleteUser, getUser, user: { name, phone, type, id } }) => {
	const onClick = () => {
		getUser(id)
	}

	return (
		<div className='card my-2'>
			<div className='card-body'>
				<h5 className='card-title'>{name}</h5>
				<h6 className='card-subtitle my-2 text-muted'>{phone}</h6>
				<h6 className='card-subtitle my-1'>Contact Type:</h6>
				<p className='card-text'>{type}</p>
				<button onClick={onClick} className='btn btn-secondary btn-sm'>
					Edit
				</button>
				<button
					onClick={() => deleteUser(id)}
					className='btn btn-danger btn-sm ml-3'
				>
					Delete
				</button>
			</div>
		</div>
	)
}

export default connect(null, { deleteUser, getUser })(Contact)
