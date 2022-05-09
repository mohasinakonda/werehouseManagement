import React, { useEffect, useState } from "react"
import UserNav from "./UserNav"

const User = () => {
	const [users, setUsers] = useState([])
	useEffect(() => {
		fetch("https://mohasin-laptop-market.herokuapp.com/user")
			.then((res) => res.json())
			.then((users) => setUsers(users))
	}, [])
	const userHandle = (id) => {
		console.log(id)
	}
	return (
		<div>
			<UserNav></UserNav>
			<h2>All users here</h2>
			{users.map((user) => (
				<p key={user._id}>
					{user.name}
					<button onClick={() => userHandle(user._id)}>see details</button>
				</p>
			))}
		</div>
	)
}

export default User
