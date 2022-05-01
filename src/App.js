import "./App.css"
import { useEffect, useState } from "react"
import { Link, Route, Routes } from "react-router-dom"
import Home from "./conponents/Home/Home"
import AddUser from "./conponents/AddUsers/AddUser"
import User from "./conponents/Users/User"
import UserDetails from "./conponents/Users/UserDetails"

function App() {
	const [user, setUser] = useState([])

	useEffect(() => {
		fetch("http://localhost:5000/users")
			.then((res) => res.json())
			.then((data) => setUser(data))
	}, [])

	const handleUser = (event) => {
		event.preventDefault()
		const name = event.target.name.value
		const email = event.target.email.value
		const user = { name, email }
		//send data to server
		fetch("http://localhost:5000/users", {
			method: "post",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(user),
		}).then((res) => res.json())
		// .then((data) => setUser(data))
	}

	return (
		<div className="App">
			<nav style={{ textAlign: "center", padding: "20px", background: "gray" }}>
				<Link style={{ margin: "10px", textDecoration: "none" }} to="/">
					Home
				</Link>
				<Link style={{ textDecoration: "none", margin: "10px" }} to="add-user">
					Add user
				</Link>
				<Link style={{ textDecoration: "none" }} to="user">
					User
				</Link>
			</nav>
			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route path="add-user" element={<AddUser />}></Route>
				<Route path="user" element={<User></User>}></Route>
				<Route path="user/:id" element={<UserDetails></UserDetails>}></Route>
			</Routes>
		</div>
	)
}

export default App
