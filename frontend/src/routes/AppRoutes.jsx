import { Routes, Route } from "react-router-dom";
import MainPage from "../pages/MainPage.jsx";
import User from "../pages/User.jsx";
import Login from "../pages/Login.jsx";
import Register from "../pages/Register.jsx";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/users/:id" element={<User />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<h1>404 - Page Not Found</h1>} />
    </Routes>
  );
};

export default AppRoutes;
