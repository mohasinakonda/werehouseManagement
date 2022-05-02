import React, { useEffect } from "react"

const AddProducts = () => {
	const sendProductInfoSever = (event) => {
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
		console.log(product)
		fetch("http://localhost:5000/product", {
			method: "post",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(product),
		})
			.then((res) => res.json())
			.then((data) => console.log(data))
	}
	return (
		<div className="w-50 mx-auto">
			<h2 className="py-3">Add product</h2>

			<form onSubmit={sendProductInfoSever}>
				<input
					className="w-100 p-2 border-style"
					type="text"
					name="product"
					placeholder="Enter Products name"
					required
				/>
				<input
					className="w-100 p-2 my-2  border-style "
					type="text"
					name="seller"
					placeholder="Enter seller name"
					required
				/>
				<input
					className="w-100 p-2 my-2  border-style "
					type="text"
					name="quantity"
					placeholder="Quantity"
					required
				/>
				<input
					className="w-100 p-2 my-2  border-style "
					type="text"
					name="img"
					placeholder="img url"
					required
				/>
				<input
					className="w-100 p-2 my-2  "
					type="text-area"
					name="description"
					placeholder="Short Description"
					required
				/>
				<input type="submit" className="btn btn-info" value="Add " />
			</form>
		</div>
	)
}

export default AddProducts
;<h2>Add Products</h2>
