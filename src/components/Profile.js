import React, { useContext, useEffect } from "react";
import UserContext from "./context/User/UserContext";

const Profile = () => {
	const { selectedUser } = useContext(UserContext);

	return (
		<>
			{selectedUser ? (
				<div className="card card-body text-center d-flex justify-content-center">
					<img src={selectedUser.avatar} alt="" className="car-img-top rounded-circle img-fluid" style={{ width: 180 }} />
					<h1>
						{selectedUser.first_name} {selectedUser.last_name}
					</h1>
					<p>{selectedUser.email}</p>
				</div>
			) : (
				<h1>No User Selected</h1>
			)}
		</>
	);
};

export default Profile;
