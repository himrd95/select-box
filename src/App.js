import React from 'react';
import './App.css';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';

function App() {
	const [isLogged, setIsLogged] = React.useState(false);
	const handleLoginState = (state) => {
		setIsLogged(state);
	};
	return (
		<div className='App'>
			{isLogged ? (
				<Home />
			) : (
				<Login handleLoginState={handleLoginState} />
			)}
		</div>
	);
}

export default App;
