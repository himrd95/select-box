import React from 'react';
import './Login.css';
import validateEmail from '../../helpers';

const init = {
	email: '',
	password: '',
};
const Login = ({ handleLoginState }) => {
	const [payload, setPayLoad] = React.useState(init);

	const handlechange = (e) => {
		const { name, value } = e.target;
		setPayLoad({ ...payload, [name]: value });
	};

	const emailCheck = () => {
		if (payload.email === '') {
			alert("Email can't be empty.");
			return;
		}
		if (!validateEmail(payload.email)) {
			return;
		}
	};

	const handleLogin = () => {
		emailCheck();
		if (payload.password === '') {
			alert("Password can't be empty.");
			return;
		}
		const pass = payload.password.split('').map(Number);
		const sum = pass.reduce((a, e) => a + e, 0);
		if (sum !== 10) {
			alert('Password is invalid');
			return;
		}
		handleLoginState(true);
	};
	return (
		<div className='card'>
			<h3>Login</h3>
			<label htmlFor=''>Email</label>
			<br />
			<input
				className='email'
				type='email'
				placeholder='Enter your email'
				onChange={handlechange}
				name='email'
			/>
			<br />
			<label htmlFor=''>Password</label>
			<br />
			<input
				className='password'
				type='password'
				placeholder='Enter your password'
				onChange={handlechange}
				name='password'
				onClick={emailCheck}
			/>
			<br />
			<button onClick={handleLogin}>Login</button>
		</div>
	);
};

export default Login;
