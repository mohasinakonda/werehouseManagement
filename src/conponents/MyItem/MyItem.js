import React, { useEffect, useState } from "react"
import { useAuthState } from "react-firebase-hooks/auth"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import auth from "../../FIrebaseConfig/FireBase.config"

const MyItem = () => {
	const [user] = useAuthState(auth)
	const [item, setItem] = useState([])
	useEffect(() => {
		const email = user.email
		const url = ` https://mohasin-laptop-market.herokuapp.com/myItem?email=${email}`
		fetch(url)
			.then((res) => res.json())
			.then((data) => {
				setItem(data)
			})
	}, [user])
	const navigate = useNavigate()
	const handleUpdate = (id) => {
		navigate(`/update/${id}`)
	}
	const deleteHandler = (id) => {
		const proceedDelete = window.confirm("Are you sure to delete !")
		if (proceedDelete) {
			const url = `https://mohasin-laptop-market.herokuapp.com/product/${id}`
			fetch(url, {
				method: "delete",
			})
				.then((res) => res.json())
				.then((data) => {
					const restProducts = item.filter((u) => u._id !== id)
					toast("Item delete success")
					setItem(restProducts)
				})
		}
	}
	if (item.length === 0) {
		return <h2 className="text-center">There is no more product found</h2>
	}
	return (
		<div>
			<h2 className="pt-5">My products</h2>
			<table className="table table-bordered table-dark">
				<thead className="w-100 bg-dark">
					<tr className="d-flex justify-content-around">
						<th scope="col">product image</th>
						<th scope="col">product name</th>
						<th scope="col">action</th>
					</tr>
				</thead>

				<tbody className="bg-info">
					{item.map((product) => (
						<div
							key={product._id}
							className="d-flex justify-content-around align-items-center"
						>
							<div className="  my-2">
								<img
									style={{ height: "100px", width: "150px" }}
									className="img-fluid"
									src={product.productImg}
									alt=""
								/>
							</div>
							<p className="w-25">{product.productName}</p>
							<div>
								<button
									onClick={() => handleUpdate(product._id)}
									className="btn btn-info me-2"
								>
									update
								</button>
								<button
									onClick={() => deleteHandler(product._id)}
									className="btn btn-danger"
								>
									delete
								</button>
							</div>
						</div>
					))}
				</tbody>
			</table>
		</div>
	)
}

export default MyItem
