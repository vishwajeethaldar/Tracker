import { Routes, Route } from "react-router-dom";
import Home from "@/Pages/Home.tsx";
import Login from "@/Pages/Login.tsx";
import SignupPage from "@/Pages/Signup.tsx";
import ResetPassword from "@/Pages/ResetPassword.tsx";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/reset-password" element={<ResetPassword />} />
    </Routes>
  );
}
