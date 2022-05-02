import React from "react"
import {
	useCreateUserWithEmailAndPassword,
	useSignInWithGoogle,
} from "react-firebase-hooks/auth"
import { Link, useNavigate } from "react-router-dom"
import auth from "../../FIrebaseConfig/FireBase.config"
import SpinContainer from "../Spinner/Spinner"

const Register = () => {
	const [createUserWithEmailAndPassword, userHook, loadingHook] =
		useCreateUserWithEmailAndPassword(auth)
	const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth)
	const navigate = useNavigate()
	if (user || userHook) {
		navigate("/")
	}
	if (loading || loadingHook) {
		return <SpinContainer></SpinContainer>
	}
	const handleLogin = (event) => {
		event.preventDefault()
		const email = event.target.email.value
		const password = event.target.password.value
		createUserWithEmailAndPassword(email, password)
	}
	const handleGoogleSignIn = () => {
		signInWithGoogle()
	}
	return (
		<div className="w-75 mx-auto">
			<h2 className="text-center py-3">Please Register Here</h2>
			<div className="row  align-items-center">
				<img
					className="col-lg-6 col-md-12 img-fluid"
					src="https://i.ibb.co/KmXdh7Q/wepik-202242-114420.png"
					alt=""
				/>
				<div className="m-2 col-lg-5 col-md-12">
					<form onSubmit={handleLogin}>
						<input
							className="w-100 p-2 border-style"
							type="text"
							name="name"
							placeholder="Enter full name"
						/>
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
							value="Register"
						/>
					</form>
					<p className="py-3">
						Already have an account?
						<Link
							style={{ textDecoration: "none", marginLeft: "5px" }}
							to="/login"
						>
							Login
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

export default Register
