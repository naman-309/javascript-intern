import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const navigate = useNavigate();

    const loginUser = async (event) => {
        event.preventDefault();

        const response = await fetch(
            "http://localhost:5000/api/auth/login",
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    email: email,
                    password: password
                })
            }
        );

        const data = await response.json();

        setMessage(data.message);

        if (data.token) {
            localStorage.setItem("token", data.token);

            navigate("/profile");
        }
    };

    return (
        <div>
            <h2>Login</h2>

            <form onSubmit={loginUser}>
                <input
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                />

                <br /><br />

                <input
                    type="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                />

                <br /><br />

                <button type="submit">
                    Login
                </button>
            </form>

            <p>{message}</p>
        </div>
    );
}

export default Login;