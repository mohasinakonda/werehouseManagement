import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const UpdateProduct = () => {
	const { updateId } = useParams()
	const [updateProduct, setUpdateProduct] = useState({})
	useEffect(() => {
		const url = `http://localhost:5000/product/${updateId}`
		fetch(url)
			.then((res) => res.json())
			.then((data) => setUpdateProduct(data))
	}, [])
	const updateHandler = (event) => {
		event.preventDefault()
		const productName = event.target.name.value
		const productQuantity = 12
		const info = { productName, productQuantity }

		const url = `http://localhost:5000/update/${updateId}`
		fetch(url, {
			method: "put",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(info),
		})
			.then((res) => res.json())
			.then((data) => console.log(data))
	}
	return (
		<div>
			<h2>Update your Product : {updateId}</h2>
			<h3>{updateProduct.productName}</h3>
			<form onSubmit={updateHandler}>
				<input type="text" name="name" placeholder="update name" />
				<input type="submit" value="update" />
			</form>
		</div>
	)
}

export default UpdateProduct
