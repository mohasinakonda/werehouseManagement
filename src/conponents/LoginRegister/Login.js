import React from "react"
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth"
import auth from "../../FIrebaseConfig/FireBase.config"

const Login = () => {
	const [signInWithEmailAndPassword, user, loading, error] =
		useSignInWithEmailAndPassword(auth)
	/*  */
	const handleLogin = (event) => {
		event.preventDefault()
		const email = event.target.email.value
		const password = event.target.password.value
		signInWithEmailAndPassword(email, password)
	}
	return (
		<div>
			<form onSubmit={handleLogin}>
				<input type="email" name="email" placeholder="Enter Email" required />
				<input
					type="password"
					name="password"
					placeholder="Enter password"
					required
				/>
				<input type="submit" value="Login" />
			</form>
			<p>
				Need have an account?<Link to="/register">Create account</Link>
			</p>
			<button>Login with google</button>
		</div>
	)
}

export default Login
