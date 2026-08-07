import { useState } from "react";

function Profile() {
    const [profile, setProfile] = useState(null);
    const [message, setMessage] = useState("");

    const getProfile = async () => {
        const token = localStorage.getItem("token");

        if (!token) {
            setMessage("Please login first");
            return;
        }

        const response = await fetch(
            "http://localhost:5000/api/auth/profile",
            {
                method: "GET",

                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        );

        const data = await response.json();

        setMessage(data.message);

        if (data.profile) {
            setProfile(data.profile);
        }
    };

    const logoutUser = () => {
        localStorage.removeItem("token");
        setProfile(null);
        setMessage("Logged out successfully");
    };

    return (
        <div>
            <h2>Profile</h2>

            <button onClick={getProfile}>
                Get My Profile
            </button>

            {" "}

            <button onClick={logoutUser}>
                Logout
            </button>

            <p>{message}</p>

            {profile && (
                <div>
                    <p>ID: {profile.id}</p>
                    <p>Name: {profile.name}</p>
                    <p>Email: {profile.email}</p>
                </div>
            )}
        </div>
    );
}

export default Profile;