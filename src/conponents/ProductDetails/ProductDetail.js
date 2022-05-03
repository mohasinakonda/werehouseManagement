import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const ProductDetail = () => {
	const { productId } = useParams()
	const [product, setProduct] = useState({})
	useEffect(() => {
		fetch(`http://localhost:5000/product/${productId}`)
			.then((res) => res.json())
			.then((data) => console.log(data))
	}, [])
	return (
		<div>
			<h2>Details for:{productId} </h2>
			<p>{product.productName}</p>
		</div>
	)
}

export default ProductDetail
