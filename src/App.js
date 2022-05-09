import "./App.css"
import { useEffect, useState } from "react"
import { Link, Route, Routes } from "react-router-dom"
import Home from "./conponents/Home/Home"
import Header from "./conponents/Header/Header"
import "bootstrap/dist/css/bootstrap.min.css"
import Login from "./conponents/LoginRegister/Login"
import Register from "./conponents/LoginRegister/Register"
import AddProducts from "./conponents/AddProducts/AddProducts"
import ProductDetails from "./conponents/ProductDetails/ProductDetail"
import NotFound from "./conponents/NotFound/NotFound"
import UpdateProduct from "./conponents/UpdateProduct/UpdateProduct"
import ManageProducts from "./conponents/ManageProducts/ManageProducts"
import RequireAuth from "./conponents/RequierAuth/RequireAuth"
import Blogs from "./conponents/Blogs/Blogs"
import MyItem from "./conponents/MyItem/MyItem"
function App() {
	/* const [user, setUser] = useState([])

	useEffect(() => {
		fetch("https://mohasin-laptop-market.herokuapp.com/users")
			.then((res) => res.json())
			.then((data) => setUser(data))
	}, [])

	const handleUser = (event) => {
		event.preventDefault()
		const name = event.target.name.value
		const email = event.target.email.value
		const user = { name, email }
		//send data to server
		fetch("https://mohasin-laptop-market.herokuapp.com/users", {
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
				<Route path="/blogs" element={<Blogs />}></Route>
				<Route
					path="/add-product"
					element={
						<RequireAuth>
							<AddProducts />
						</RequireAuth>
					}
				></Route>
				<Route
					path="/manage-product"
					element={
						<RequireAuth>
							<ManageProducts />
						</RequireAuth>
					}
				></Route>
				<Route
					path="/myItem"
					element={
						<RequireAuth>
							<MyItem></MyItem>
						</RequireAuth>
					}
				></Route>
				<Route path="product/:productId" element={<ProductDetails />}></Route>{" "}
				<Route
					path="update/:updateId"
					element={
						<RequireAuth>
							<UpdateProduct />
						</RequireAuth>
					}
				></Route>
				<Route path="*" element={<NotFound></NotFound>}></Route>
			</Routes>
		</div>
	)
}

export default App
