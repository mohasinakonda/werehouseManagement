import React from "react"

const Footer = () => {
	const time = new Date().getFullYear()
	return (
		<div style={{ height: "150px" }} className="bg-dark p-3 text-white">
			<p className="text-center">&copy; laptop mart 2017-{time}</p>
		</div>
	)
}

export default Footer
