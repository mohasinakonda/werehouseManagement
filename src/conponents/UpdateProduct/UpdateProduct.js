import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const UpdateProduct = () => {
	const { updateId } = useParams()
	const [updateProduct, setUpdateProduct] = useState({})
	useEffect(() => {
		const url = `https://mohasin-laptop-market.herokuapp.com/product/${updateId}`
		fetch(url)
			.then((res) => res.json())
			.then((data) => setUpdateProduct(data))
	}, [])
	const updateHandler = (event) => {
		event.preventDefault()
		const productName = event.target.product.value
		const productSeller = event.target.seller.value
		const productQuantity = event.target.quantity.value
		const productImg = event.target.img.value
		const productDescription = event.target.description.value
		const product = {
			productName,
			productDescription,
			productQuantity,
			productSeller,
			productImg,
		}

		const url = `https://mohasin-laptop-market.herokuapp.com/update/${updateId}`
		fetch(url, {
			method: "put",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(product),
		})
			.then((res) => res.json())
			.then((data) => {
				alert(productName, "update")
				event.target.reset()
				console.log(data)
			})
	}
	return (
		<div className="w-50 mx-auto">
			<h2 className="py-3"> Updating for {updateProduct.productName} </h2>

			<form onSubmit={updateHandler}>
				<input
					className="w-100 p-2 border-style"
					type="text"
					name="product"
					placeholder="update Products name"
					required
				/>
				<input
					className="w-100 p-2 my-2  border-style "
					type="text"
					name="seller"
					placeholder="update seller name"
					required
				/>
				<input
					className="w-100 p-2 my-2  border-style "
					type="text"
					name="quantity"
					placeholder=" update Quantity"
					required
				/>
				<input
					className="w-100 p-2 my-2  border-style "
					type="text"
					name="img"
					placeholder="update img url"
					required
				/>

				<textarea
					name="description"
					cols="75"
					rows="5"
					style={{ outline: "none" }}
					className="border-2 border-info"
					placeholder="update short description"
				></textarea>
				<input
					type="submit"
					className="d-block w-100 mx-auto btn btn-info"
					value="update product"
				/>
			</form>
		</div>
	)
}

export default UpdateProduct
