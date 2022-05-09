import React from "react"
import "./Product.css"
import { Card, Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
const Product = (props) => {
	const {
		_id,
		productName,
		productImg,
		productSeller,
		productQuantity,
		productDescription,
	} = props.product
	const navigate = useNavigate()
	const showProductDetails = (id) => {
		navigate(`/product/${id}`)
	}

	return (
		<div className="col-lg-4 col-md-6 col-sm-12  ">
			<Card
				className="cart-item "
				style={{ width: "18rem", margin: "10px", height: "700px" }}
			>
				<Card.Img
					variant="top"
					style={{ height: "300px" }}
					className="img-fluid pt-2"
					src={productImg}
				/>
				<Card.Body>
					<Card.Title> {productName}</Card.Title>
					<Card.Title>
						<b>Stock :</b> {productQuantity}
					</Card.Title>
					<Card.Text>
						<b>seller : </b> {productSeller}
					</Card.Text>
					<Card.Text>
						<b>Description : </b>
						{productDescription?.slice(0, 100)}
					</Card.Text>
					<Button
						onClick={() => showProductDetails(_id)}
						className="cart-btn"
						style={{
							backgroundColor: "rgba(29, 206, 241,.5)",
							color: "black",
							position: "absolute",
							bottom: "0",
							display: "block",
							width: "80%",
							margin: "0 auto",
						}}
					>
						show Details
					</Button>
				</Card.Body>
			</Card>
		</div>
	)
}
export default Product
