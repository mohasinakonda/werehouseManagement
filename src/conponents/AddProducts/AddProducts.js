import React from "react"

import { useAuthState } from "react-firebase-hooks/auth"
import { toast } from "react-toastify"
import auth from "../../FIrebaseConfig/FireBase.config"

const AddProducts = () => {
	const [user] = useAuthState(auth)
	const sendProductInfoSever = (event) => {
		event.preventDefault()
		const productName = event.target.product.value
		const userEmail = event.target.email.value
		const productSeller = event.target.seller.value
		const productQuantity = event.target.quantity.value
		const productImg = event.target.img.value
		const productDescription = event.target.description.value
		const product = {
			productName,
			userEmail,
			productDescription,
			productQuantity,
			productSeller,
			productImg,
		}
		// console.log(product)
		fetch("https://mohasin-laptop-market.herokuapp.com/product", {
			method: "post",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(product),
		})
			.then((res) => res.json())
			.then((data) => {
				event.target.reset()
				toast("product added my stock")
			})
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
					className="w-100 p-2 border-style"
					type="email"
					name="email"
					value={user.email}
					placeholder="Enter Products name"
					readOnly
					disabled
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

				<textarea
					name="description"
					cols="75"
					rows="5"
					style={{ outline: "none" }}
					className="border-2 border-info"
					placeholder="short description"
				></textarea>
				<input
					type="submit"
					className="d-block w-100 mx-auto btn btn-info"
					value="Add product"
				/>
			</form>
		</div>
	)
}

export default AddProducts
