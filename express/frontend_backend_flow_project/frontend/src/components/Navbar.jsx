import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav>
            <Link to="/register">Register</Link>
            {" | "}
            <Link to="/login">Login</Link>
            {" | "}
            <Link to="/profile">Profile</Link>
            {" | "}
            <Link to="/users">All Users</Link>
        </nav>
    );
}

export default Navbar;