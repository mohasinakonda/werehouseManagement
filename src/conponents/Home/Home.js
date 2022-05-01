import React, { useEffect, useState } from "react"

const Home = () => {
	/* const [user, setUser] = useState([])
	//GET USER FROM  DB AND SHOW
	useEffect(() => {
		fetch("http://localhost:5000/user")
			.then((res) => res.json())
			.then((users) => setUser(users))
	}, [])

	//DELETE USER FROM DB AND SHOW DISPLAY
	const handleUserDelete = (id) => {
		const proceed = window.confirm("are You sure to delete user")
		if (proceed) {
			console.log("user id", id)
			const url = `http://localhost:5000/user/${id}`
			fetch(url, {
				method: "delete",
			})
				.then((res) => res.json())
				.then((data) => {
					const restUser = user.filter((u) => u._id !== id)
					setUser(restUser)
				})
		}
	} */
	return (
		<div>
			<h2>Welcome to our home page</h2>
			{/* <p> user:{user.length}</p>
			{user.map((u) => (
				<p key={u._id}>
					{u.name} <button onClick={() => handleUserDelete(u._id)}>X</button>
				</p>
			))} */}
		</div>
	)
}

export default Home
