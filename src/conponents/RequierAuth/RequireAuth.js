import React from "react"
import { useAuthState } from "react-firebase-hooks/auth"
import { Navigate, useLocation } from "react-router-dom"
import auth from "../../FIrebaseConfig/FireBase.config"
import SpinContainer from "../Spinner/Spinner"
const RequireAuth = ({ children }) => {
	const location = useLocation()
	const [user, loading] = useAuthState(auth)
	if (loading) {
		return <SpinContainer></SpinContainer>
	}

	if (!user) {
		return <Navigate to="/login" state={{ from: location }} replace></Navigate>
	}
	return children
}

export default RequireAuth
