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
	const navigate = useNavigate()
	useEffect(() => {
		fetch(`http://localhost:5000/product/${productId}`)
			.then((res) => res.json())
			.then((data) => setProduct(data))
	}, [])
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
					{" "}
					<b>Stock :</b>
					{productQuantity}
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
			</div>
		</div>
	)
}

export default ProductDetail
