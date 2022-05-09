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
	const [user] = useAuthState(auth)
	const logoutHandle = () => {
		signOut(auth)
		navigate("login")
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
							<>
								<Nav.Link as={Link} to="manage-product">
									Manage Product
								</Nav.Link>
								<Nav.Link as={Link} to="myItem">
									My Product
								</Nav.Link>
								<Nav.Link as={Link} to="add-product">
									Add Product
								</Nav.Link>
								<button className="btn" onClick={logoutHandle} role="link">
									Log Out
								</button>
							</>
						)}
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	)
}

export default Header
