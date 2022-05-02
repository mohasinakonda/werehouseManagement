import React from "react"
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth"
import { Link } from "react-router-dom"
import auth from "../../FIrebaseConfig/FireBase.config"

// import auth from "../../FirebaseConfig"

const Register = () => {
	const [createUserWithEmailAndPassword] =
		useCreateUserWithEmailAndPassword(auth)
	/*  */
	const handleLogin = (event) => {
		event.preventDefault()
		const email = event.target.email.value
		const password = event.target.password.value
		createUserWithEmailAndPassword(email, password)
	}
	return (
		<div>
			<h2>Please Register Here</h2>
			<form onSubmit={handleLogin}>
				<input type="email" name="email" placeholder="Enter Email" required />
				<input
					type="password"
					name="password"
					placeholder="Enter password"
					required
				/>
				<input type="submit" value="Register" />
			</form>
			<p>
				Already have an account? <Link to="login">Login</Link>
			</p>
			<button>Login with google</button>
		</div>
	)
}

export default Register
