import React, { useState } from "react"
import {
	useAuthState,
	useSendEmailVerification,
	useSendPasswordResetEmail,
	useSignInWithEmailAndPassword,
	useSignInWithGoogle,
} from "react-firebase-hooks/auth"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import auth from "../../FIrebaseConfig/FireBase.config"
import SpinContainer from "../Spinner/Spinner"

import "./login.css"
const Login = () => {
	const [email, setEmail] = useState("")
	const [user, loading] = useAuthState(auth)
	const [signInWithGoogle, googleUser, googleLoading] =
		useSignInWithGoogle(auth)
	const [sendPasswordResetEmail, Resetsending] = useSendPasswordResetEmail(auth)

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
	if (Resetsending || googleLoading || passLoading) {
		return <SpinContainer></SpinContainer>
	}
	if (error) {
		toast(error.message)
	}
	if (user) {
		navigate(from, { replace: true })
		// navigate("/")
	}
	const getEmail = (event) => {
		setEmail(event.target.value)
	}
	const handleGoogleSignIn = () => {
		signInWithGoogle()
	}
	const resetPassword = async (event) => {
		await sendPasswordResetEmail(email)
		toast("Sent email for reset password")
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
							onChange={getEmail}
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
					<p className="pt-3 m-0">
						Forget password?{" "}
						<button
							style={{ outline: "none", border: "none", color: "#0d6efd" }}
							className="btn "
							onClick={resetPassword}
						>
							Reset password
						</button>
					</p>

					<p className="pt-3 ">
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
