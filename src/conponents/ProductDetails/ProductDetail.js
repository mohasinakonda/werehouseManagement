import React, { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

const ProductDetail = () => {
	const { productId } = useParams()
	const [product, setProduct] = useState({})
	const {
		_id,
		productName,
		productImg,
		productSeller,
		productQuantity,
		productDescription,
	} = product
	const [quantity, setQuantity] = useState(0)
	const navigate = useNavigate()
	useEffect(() => {
		fetch(`https://mohasin-laptop-market.herokuapp.com/product/${productId}`)
			.then((res) => res.json())
			.then((data) => setProduct(data))
	}, [])
	const updateStock = (event) => {
		const updateQuantity = Number(event.target.updateQuantity.value)
		const newQuantity = productQuantity + updateQuantity
		const updateProduct = { ...product, newQuantity }
		fetch(`https://mohasin-laptop-market.herokuapp.com/update/${productId}`, {
			method: "put",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(updateProduct),
		})
			.then((res) => res.json())
			.then((data) => {
				alert("product quantity update!!")
				console.log(data)
			})
	}
	const handleStock = () => {
		// setQuantity(quantity - 1)
		const updatedQuantity = productQuantity - 1

		setQuantity(productQuantity - 1)

		fetch(`https://mohasin-laptop-market.herokuapp.com/update/${productId}`, {
			method: "put",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify({
				productQuantity: updatedQuantity,
			}),
		})
			.then((res) => res.json())
			.then((data) => {
				alert("product delivered!!")
				console.log(data)
			})
	}
	const updateProductHandle = (id) => {
		navigate(`/update/${id}`)
	}
	return (
		<div className="row align-items-center justify-content-center p-5">
			<div className="col-lg-6 col-md-6 col-sm-12">
				<img className="w-100" src={productImg} alt="" />
			</div>
			<div className="col-lg-5 col-md-6 col-sm-12">
				<h2>{productName}</h2>
				<p>
					<b>Seller :</b> {productSeller}
				</p>
				<p>
					<b>Stock :</b>
					{productQuantity}
				</p>
				<p>
					<b>Description :</b> {productDescription}
				</p>
				<form onSubmit={updateStock}>
					<input
						className="w-25 m-2"
						type="number"
						name="updateQuantity"
						id=""
					/>
					<input className="btn btn-info" type="submit" value="update Stock" />
				</form>
				<button
					onClick={() => updateProductHandle(_id)}
					className="btn btn-info mx-2"
				>
					Update product
				</button>
				<button onClick={handleStock} className="btn btn-info">
					delivered item
				</button>
			</div>
		</div>
	)
}

export default ProductDetail
