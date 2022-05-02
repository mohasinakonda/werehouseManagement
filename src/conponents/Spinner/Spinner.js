import React from "react"
import { Spinner } from "react-bootstrap"

const SpinContainer = () => {
	return (
		<div
			className="d-flex align-items-center justify-content-center w-100"
			style={{ height: "300px" }}
		>
			<Spinner animation="grow" variant="info" />
		</div>
	)
}

export default SpinContainer
