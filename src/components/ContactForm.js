import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { addUser, updateUser, clearUser } from './../actions/users'

const ContactForm = ({ addUser, updateUser, clearUser, users: { user } }) => {
	useEffect(() => {
		if (user !== null) {
			const { name, phone, type } = user
			setForm({ name, phone, type })
		}
	}, [user])

	const [form, setForm] = useState({
		name: '',
		phone: '',
		type: '',
	})
	const { name, phone, type } = form

	const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

	const onSubmit = (e) => {
		e.preventDefault()
		if (user === null) {
			addUser(form)
		} else {
			const updForm = form
			updForm.id = user.id
			updateUser(updForm)
		}
		setForm({
			name: '',
			phone: '',
			type: '',
		})
		clearUser()
	}

	return (
		<form onSubmit={onSubmit}>
			<h2 className='text-secondary m-3'>Contact Form</h2>
			<div className='input-group input-group-sm mb-3'>
				<div className='input-group-prepend'>
					<span className='input-group-text'>Name</span>
				</div>
				<input
					name='name'
					className='form-control'
					onChange={onChange}
					value={name}
				/>
			</div>
			<div className='input-group input-group-sm mb-3'>
				<div className='input-group-prepend'>
					<span className='input-group-text'>Phone</span>
				</div>
				<input
					name='phone'
					className='form-control'
					onChange={onChange}
					value={phone}
				/>
			</div>
			<div className='input-group input-group-sm mb-3'>
				<div className='input-group-prepend'>
					<span className='input-group-text'>Type</span>
				</div>
				<input
					name='type'
					className='form-control'
					onChange={onChange}
					value={type}
				/>
			</div>
			<button type='submit' className='btn btn-success btn-sm'>
				Emit form
			</button>
			<button
				onClick={() => {
					clearUser()
					setForm({
						name: '',
						phone: '',
						type: '',
					})
				}}
				className='btn btn-danger btn-sm ml-3'
			>
				Clear
			</button>
		</form>
	)
}

const mapStateToProps = (state) => ({
	users: state.users,
})

export default connect(mapStateToProps, { addUser, updateUser, clearUser })(
	ContactForm
)
