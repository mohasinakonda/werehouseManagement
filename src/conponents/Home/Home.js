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
				if (!product) {
					return <SpinContainer></SpinContainer>
				}
				setProduct(product)
			})
	}, [])

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
			<div className="row justify-content-center container mx-auto py-5">
				{product?.slice(0, 6)?.map((prdct) => (
					<Product key={prdct._id} product={prdct} />
				))}
				<button onClick={() => navigate("/manage")} className="btn btn-info">
					Manage Products
				</button>
			</div>
		</div>
	)
}

export default Home
