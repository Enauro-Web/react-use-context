import React, { useContext, useEffect } from "react";
import UserContext from "./context/User/UserContext";

const UserList = () => {
	const { users, getUsers, getProfile } = useContext(UserContext);
	useEffect(() => {
		getUsers();
	}, []);

	return (
		<div className="list-group h-100">
			{users.map((user) => (
				<a
					href="#1"
					className="list-group-item list-group-item-action d-flex flex-row justify-content-start"
					key={user.id}
					onClick={() => getProfile(user.id)}
				>
					<img alt="img" src={user.avatar} className="img-fluid mr-4 rounded-circle" width={70}></img>
					<p>
						{user.first_name} {user.last_name}
					</p>
				</a>
			))}
		</div>
	);
};

export default UserList;
