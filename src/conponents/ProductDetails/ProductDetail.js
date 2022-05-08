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
		fetch(`http://localhost:5000/product/${productId}`)
			.then((res) => res.json())
			.then((data) => setProduct(data))
	}, [])

	const handleStock = () => {
		// setQuantity(quantity - 1)
		const updatedQuantity = productQuantity - 1
		console.log(quantity)
		setQuantity(productQuantity - 1)

		fetch(`http://localhost:5000/update/${productId}`, {
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
					update {quantity}
				</p>
				<p>
					<b>Description :</b> {productDescription}
				</p>
				<button
					onClick={() => updateProductHandle(_id)}
					className="btn btn-info"
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
