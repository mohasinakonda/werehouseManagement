// import { Button } from "bootstrap"
import React from "react"
import {
	Button,
	Container,
	Form,
	FormControl,
	Nav,
	Navbar,
	NavDropdown,
} from "react-bootstrap"
import { Link } from "react-router-dom"

const Header = () => {
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
						<Nav.Link as={Link} to="login">
							Login
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	)
}

export default Header
