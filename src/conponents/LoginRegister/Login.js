import React from "react"
import {
	useAuthState,
	useSignInWithEmailAndPassword,
	useSignInWithGoogle,
} from "react-firebase-hooks/auth"
import { Link, useLocation, useNavigate } from "react-router-dom"
import auth from "../../FIrebaseConfig/FireBase.config"

import SpinContainer from "../Spinner/Spinner"
import "./login.css"
const Login = () => {
	const [user, loading] = useAuthState(auth)
	const [signInWithGoogle, googleUser] = useSignInWithGoogle(auth)

	const [signInWithEmailAndPassword, passUser, passLoading, error] =
		useSignInWithEmailAndPassword(auth)
	const navigate = useNavigate()
	const location = useLocation()
	let from = location.state?.from?.pathname || "/"

	const handleLogin = (event) => {
		event.preventDefault()
		const email = event.target.email.value
		const password = event.target.password.value
		signInWithEmailAndPassword(email, password)
	}

	if (error) {
		alert(error.message)
	}
	if (user) {
		navigate(from, { replace: true })
		// navigate("/")
	}

	const handleGoogleSignIn = () => {
		signInWithGoogle()
	}
	return (
		<div className="w-75 mx-auto">
			<h2 className="text-center py-3">Please login,</h2>
			<div className="row  align-items-center">
				<img
					className="col-lg-6 col-md-12 img-fluid"
					src="https://i.ibb.co/fYY9vLZ/3230.jpg"
					alt=""
				/>
				<div className="m-2 col-lg-5 col-md-12">
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
						Need have an account?
						<Link
							style={{ textDecoration: "none", marginLeft: "5px" }}
							to="/register"
						>
							Create account
						</Link>
					</p>
					<button
						onClick={handleGoogleSignIn}
						className="btn btn-info w-75 mx-auto"
					>
						Login with google
					</button>
				</div>
			</div>
		</div>
	)
}

export default Login
