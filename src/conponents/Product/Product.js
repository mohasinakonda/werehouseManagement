import React from "react"
import "./Product.css"
import { Card, Button } from "react-bootstrap"
const Product = (props) => {
	const {
		_id,
		productName,
		productImg,
		productSeller,
		productQuantity,
		productDescription,
	} = props.product

	const showProductDetails = (id) => {
		console.log(id)
	}

	return (
		<Card
			style={{ width: "18rem", margin: "10px", height: "700px" }}
			className="col-lg-3 col-md-6 col-sm-12  cart-item"
		>
			<Card.Img variant="top" className="img-fluid pt-2" src={productImg} />
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
					{productDescription}
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
	)
}
export default Product
