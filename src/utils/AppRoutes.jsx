import React from "react";
import { Navigate } from "react-router-dom";
import SignUp from "../components/SignUp";
import Login from "../components/Login";
import ForgotPassword from "../components/ForgotPassword";
import ResetPassword from "../components/ResetPassword";
import Home from "../components/Home";
import ProtectedRoute from "../utils/ProtectedRoutes";
import TopBar from "../components/TopBar";
import AdminRoutes from "./AdminRoutes";
import UserRoutes from "./UserRoutes";
import UserDashboard from "../components/userDashboard";
import AdminDashboard from "../components/adminDashboard";

const AppRoutes = [
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />,
  },
  {
    path: "/reset-password",
    element: <ResetPassword />,
  },
  {
    path: "/home",
    element: (
      <ProtectedRoute>
        <TopBar />
        <Home />
      </ProtectedRoute>
    ),
  },
  {
    path: "/user-dashboard",
    element: (
      <UserRoutes>
        <TopBar />
        <UserDashboard />
      </UserRoutes>
    ),
  },
  {
    path: "/admin-dashboard",
    element: (
      <AdminRoutes>
        <TopBar />
        <AdminDashboard />
      </AdminRoutes>
    ),
  },
  {
    path: "*",
    element: <Navigate to="/login" />,
  },
];

export default AppRoutes;
