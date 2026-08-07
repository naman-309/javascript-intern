import { useState } from "react";

function AllUsers() {
    const [users, setUsers] = useState([]);
    const [message, setMessage] = useState("");

    const getAllUsers = async () => {
        // const token = localStorage.getItem("token");

        // if (!token) {
        //     setMessage("Please login first");
        //     return;
        // }

        const response = await fetch(
            "http://localhost:5000/api/auth/users",
            {
                method: "GET",

                // headers: {
                //     Authorization: `Bearer ${token}`
                // }
            }
        );

        const data = await response.json();

        setMessage(data.message);

        if (data.users) {
            setUsers(data.users);
        }
    };

    return (
        <div>
            <h2>All Users</h2>

            <button onClick={getAllUsers}>
                Get All Users
            </button>

            <p>{message}</p>

            {users.map((user) => {
                return (
                    <div key={user.id}>
                        <p>
                            {user.id} - {user.name} - {user.email}
                        </p>
                    </div>
                );
            })}
        </div>
    );
}

export default AllUsers;