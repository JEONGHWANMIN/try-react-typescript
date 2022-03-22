import React, { useState } from "react";

function LoggedIn() {
	const handleLogin = () => {
		setIsLoggedIn(true);
	};
	const handleLogout = () => {
		setIsLoggedIn(false);
	};
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	return (
		<div>
			<button onClick={handleLogin}>Login</button>
			<button onClick={handleLogout}>Logout</button>
			<div>User is {isLoggedIn ? "logged in" : "logged out"}</div>
		</div>
	);
}

export default LoggedIn;
