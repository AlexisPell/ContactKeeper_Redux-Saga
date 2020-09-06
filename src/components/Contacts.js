import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getUsers } from './../actions/users'

import Contact from './Contact'

const Contacts = ({ getUsers, users: { users } }) => {
	useEffect(() => {
		getUsers()
	}, [])

	return (
		<div>
			<h2 className='text-secondary m-3'>Contacts</h2>
			{users.map((user) => (
				<Contact key={user.id} user={user} />
			))}
		</div>
	)
}

const mapStateToProps = (state) => ({
	users: state.users,
})

export default connect(mapStateToProps, { getUsers })(Contacts)
