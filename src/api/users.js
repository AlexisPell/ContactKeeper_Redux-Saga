import axios from 'axios'

export const fetchUsers = async () => {
	const res = await axios.get('http://localhost:5000/contacts')
	return res.data
}

export const addUser = async (form) => {
	const res = await axios.post(
		'http://localhost:5000/contacts',
		JSON.stringify(form),
		{
			headers: { 'Content-Type': 'application/json' },
		}
	)
	return res.data
}

export const deleteUser = async (id) => {
	const res = await axios.delete(`http://localhost:5000/contacts/${id}`)
	return {}
}

export const updateUser = async (form) => {
	const res = await axios.put(
		`http://localhost:5000/contacts/${form.id}`,
		JSON.stringify(form),
		{
			headers: { 'Content-Type': 'application/json' },
		}
	)
	return res.data
}
