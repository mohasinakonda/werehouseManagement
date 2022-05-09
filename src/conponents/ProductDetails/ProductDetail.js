import React, { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { toast } from "react-toastify"

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
	console.log(quantity)
	const navigate = useNavigate()
	useEffect(() => {
		fetch(`https://mohasin-laptop-market.herokuapp.com/product/${productId}`)
			.then((res) => res.json())
			.then((data) => {
				setQuantity(data.productQuantity)
				setProduct(data)
			})
	}, [quantity])
	const updateStock = (event) => {
		event.preventDefault()
		const updateQuantity = Number(event.target.updateQuantity.value)
		if (updateQuantity <= 0) {
			alert("please input valid input")
			return
		}
		const newQuantity = Number(productQuantity) + updateQuantity
		setQuantity(newQuantity)
		const restProduct = { productName, productImg, productSeller }
		console.log(restProduct)

		fetch(`https://mohasin-laptop-market.herokuapp.com/update/${productId}`, {
			method: "put",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify({
				productName,
				productImg,
				productSeller,

				productDescription,
				productQuantity: newQuantity,
			}),
		})
			.then((res) => res.json())
			.then((data) => {
				event.target.reset()
				toast("product quantity update!!")
			})
	}
	const handleStock = () => {
		const updatedQuantity = productQuantity - 1

		setQuantity(updatedQuantity)

		fetch(`https://mohasin-laptop-market.herokuapp.com/update/${productId}`, {
			method: "put",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify({
				productName,
				productImg,
				productSeller,

				productDescription,

				productQuantity: updatedQuantity,
			}),
		})
			.then((res) => {
				res.json()
			})
			.then((data) => {
				toast("product delivered!!")
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
					{quantity}
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
