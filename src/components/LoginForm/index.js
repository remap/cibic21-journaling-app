import React, {useState} from 'react';
import { LoginRWGPS } from '../../utils/clientActions';

import './style.css'

/* eslint-disable jsx-a11y/anchor-is-valid */

const LoginForm = ({GoNav})=>{
	const [inputField , setInputField] = useState({
		email: '',
		password: ''
	    })

	const inputsHandler = (e) =>{
		setInputField( {...inputField, [e.target.name]: e.target.value} )
	}


	const FormSubmit = (e)=>{
		LoginRWGPS(inputField.email, inputField.password).then(data=>{
			localStorage.setItem("rwgps", JSON.stringify(data.user))
			window.location.href = '/?username='+ encodeURIComponent(data.user.id) + "&name=" + encodeURIComponent(data.user.name) + "&loc=BA"
			//navigate('/?username='+ encodeURIComponent(data.user.id) + "&name=" + encodeURIComponent(data.user.name))
		}).catch(error=>{
			console.log(error)
		})
	}

	let prevLogin = localStorage.getItem("rwgps")
	if(prevLogin != null){
		let userData = JSON.parse(prevLogin)
		window.location.href = '/?username='+ encodeURIComponent(userData.id) + "&name=" + encodeURIComponent(userData.name) + "&loc=BA"
	}


	return (
		<div className="LoginForm">
			<div className='LoginFieldsWrapper'>
				<div className='LoginFields' onSubmit={FormSubmit}>
					<label>
						Email
						<input autocomplete="false" type="text" placeholder='Email' onChange={inputsHandler} name="email" value={inputField.email}></input>
					</label>
					<label>
						Password
						<input autocomplete="false" type="password" placeholder='Password' onChange={inputsHandler} name="password" value={inputField.password}></input>
					</label>
					<button onClick={FormSubmit}>Login</button>
				</div>
			
				<div className='AccountContact'>
					<h2>Don't have an account?</h2>
					<a href="#">contact us</a>
				</div>

			</div>

			<div className='Legal'>
				<h2>Privacy & Cookies</h2>
				<p>This site uses cookies to collect information for the CiBiC (CiBiC Bicycle Commuting) research project. These cookies are used to connect your submissions to the interpretive cartography.</p>
			</div>

		</div>
	)
}

export default LoginForm