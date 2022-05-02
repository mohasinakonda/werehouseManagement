import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import Benner from "../Benner/Benner"
import Product from "../Product/Product"
import SpinContainer from "../Spinner/Spinner"
const Home = () => {
	const [product, setProduct] = useState([])
	const navigate = useNavigate()
	const addProducts = () => {
		navigate("product")
	}
	//GET USER FROM  DB AND SHOW
	useEffect(() => {
		fetch("http://localhost:5000/product")
			.then((res) => res.json())
			.then((product) => {
				setProduct(product)
			})
	}, [])

	if (!product) {
		return <SpinContainer></SpinContainer>
	}

	//DELETE USER FROM DB AND SHOW DISPLAY
	/* const handleUserDelete = (id) => {
		const proceed = window.confirm("are You sure to delete user")
		if (proceed) {
			console.log("user id", id)
			const url = `http://localhost:5000/user/${id}`
			fetch(url, {
				method: "delete",
			})
				.then((res) => res.json())
				.then((data) => {
					const restUser = user.filter((u) => u._id !== id)
					setProduct(restUser)
				})
		}
	} */

	return (
		<div>
			<Benner></Benner>
			<button
				style={{ backgroundColor: "rgba(29, 206, 241,.5)" }}
				className="d-block w-25 mx-auto btn"
				onClick={addProducts}
			>
				Add product
			</button>
			<div className="row g-3 justify-content-center py-5">
				{product.map((prdct) => (
					<Product product={prdct} />
				))}
			</div>
		</div>
	)
}

export default Home
