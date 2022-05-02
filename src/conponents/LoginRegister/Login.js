import React from "react"
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth"
import { Link, useNavigate } from "react-router-dom"
import auth from "../../FIrebaseConfig/FireBase.config"
import "./login.css"
const Login = () => {
	const [signInWithEmailAndPassword, user, loading, error] =
		useSignInWithEmailAndPassword(auth)
	const navigate = useNavigate()
	const handleLogin = (event) => {
		event.preventDefault()
		const email = event.target.email.value
		const password = event.target.password.value
		signInWithEmailAndPassword(email, password)
	}
	if (user) {
		navigate("/")
	}

	return (
		<div className="w-75 mx-auto">
			<h2 className="text-center py-3">Please login,</h2>
			<div className="row  align-items-center">
				<img
					className="col-6 img-fluid"
					src="https://i.ibb.co/fYY9vLZ/3230.jpg"
					alt=""
				/>
				<div className="m-2 col-5">
					<form onSubmit={handleLogin}>
						<input
							className="w-100 p-2 border-style"
							type="email"
							name="email"
							placeholder="Enter Email"
							required
						/>
						<input
							className="w-100 p-2 my-2  border-style "
							type="password"
							name="password"
							placeholder="Enter password"
							required
						/>
						<input
							className="btn btn-info w-75 mx-auto"
							type="submit"
							value="Login"
						/>
					</form>
					<p className="py-3">
						Need have an account?<Link to="/register">Create account</Link>
					</p>
					<button className="btn btn-info w-75 mx-auto">
						Login with google
					</button>
				</div>
			</div>
		</div>
	)
}

export default Login
