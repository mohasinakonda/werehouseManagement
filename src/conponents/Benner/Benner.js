import React from "react"
import { Carousel } from "react-bootstrap"
import img from "../../assets/bannerLaptop.jpeg"
import "./Banner.css"

const Benner = () => {
	return (
		<div className="banner-header">
			<div className="w-100 ">
				<img
					style={{ height: "90vh" }}
					className=" w-100 img-fluid"
					src={img}
					alt="First slide"
				/>
			</div>
			<div className="banner-info ">
				<div className="banner-text">
					<h2 className="text-center">Choose one, stay connected</h2>
					<p className="text-center">
						This is our first priority to add and delivery good service
					</p>
				</div>
			</div>
		</div>
	)
}

export default Benner
