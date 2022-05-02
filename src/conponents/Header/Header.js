// import { Button } from "bootstrap"
import { signOut } from "firebase/auth"
import React from "react"
import { Container, Nav, Navbar } from "react-bootstrap"
import { useAuthState } from "react-firebase-hooks/auth"
import { Link, useNavigate } from "react-router-dom"
import auth from "../../FIrebaseConfig/FireBase.config"
import SpinContainer from "../Spinner/Spinner"

const Header = () => {
	const navigate = useNavigate()
	const [user, loading] = useAuthState(auth)
	const logoutHandle = () => {
		signOut(auth)
		navigate("login")
	}
	if (loading) {
		return <SpinContainer></SpinContainer>
	}
	return (
		<Navbar collapseOnSelect expand="lg" bg="info" variant="light">
			<Container>
				<Navbar.Brand as={Link} to="/">
					Laptop Mart
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="me-auto">
						<Nav.Link as={Link} to="/">
							Home
						</Nav.Link>
						<Nav.Link as={Link} to="blogs">
							Blogs
						</Nav.Link>
					</Nav>
					<Nav>
						{!user ? (
							<Nav.Link as={Link} to="login">
								Login
							</Nav.Link>
						) : (
							<button onClick={logoutHandle}>Log Out</button>
						)}
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	)
}

export default Header
