import React from 'react'
import './App.css'

import Navbar from './components/Navbar'
import Contacts from './components/Contacts'
import ContactForm from './components/ContactForm'

const App = () => {
	return (
		<div className='App'>
			<Navbar />
			<div className='container contacts'>
				<div className='row'>
					<div className='col'>
						<ContactForm />
					</div>
					<div className='col'>
						<Contacts />
					</div>
				</div>
			</div>
		</div>
	)
}

export default App
