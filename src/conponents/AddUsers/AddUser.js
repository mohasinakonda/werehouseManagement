import React from "react"

const AddUser = () => {
	const handleUser = (event) => {
		event.preventDefault()
		const name = event.target.name.value
		const userEmail = event.target.email.value
		const user = { name, userEmail }
		fetch("http://localhost:5000/user", {
			method: "post",
			headers: {
				"content-type": "application/json",
				
			},
			body: JSON.stringify(user),
		}).then((res) => res.json())
		event.target.reset()
	}
	return (
		<div>
			<h2>Please add user</h2>
			<form onSubmit={handleUser}>
				<input name="name" type="text" placeholder="enter user name" />
				<br />
				<input name="email" type="email" placeholder="enter user email" />
				<br />
				<input type="submit" value="add user" />
			</form>
		</div>
	)
}

export default AddUser
