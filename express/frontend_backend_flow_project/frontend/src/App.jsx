import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar.jsx"
import Register from "./pages/Register.jsx";
import Login from "./pages/Login.jsx";
import Profile from "./pages/Profile.jsx";
import AllUsers from "./pages/AllUsers.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/users" element={<AllUsers />} />
      </Routes>

    </>

  );
}

export default App
