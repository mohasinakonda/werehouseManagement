import "./App.css"
import { useEffect, useState } from "react"
import { Link, Route, Routes } from "react-router-dom"
import Home from "./conponents/Home/Home"
import Header from "./conponents/Header/Header"
import "bootstrap/dist/css/bootstrap.min.css"
import Login from "./conponents/LoginRegister/Login"
import Register from "./conponents/LoginRegister/Register"

function App() {
	/* const [user, setUser] = useState([])

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
 */
	return (
		<div>
			<Header></Header>
			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route path="/login" element={<Login />}></Route>
				<Route path="/register" element={<Register />}></Route>
			</Routes>
		</div>
	)
}

export default App
