import React from "react";
import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage";
import Login from "../pages/Login";
import AuthProvider from "../context/AuthProvider";
import ProtectedRoute from "./ProtectedRoute";
import { Outlet, createBrowserRouter } from "react-router-dom";
import HeartPages from "../pages/HeartPages";
import QuynhPage from "../pages/QuynhPage";

const AuthLayout = () => {
  return (
    <AuthProvider>
      <Outlet />
    </AuthProvider>
  );
};

export default createBrowserRouter([
  {
    element: <AuthLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        element: <Login />,
        path: "/login",
      },
      {
        element: <ProtectedRoute />,
        children: [
          {
            element: <Home />,
            path: "/",
          },
          {
            element: <HeartPages />,
            path: "/heart",
          },
          {
            element: <QuynhPage />,
            path: "/quynh",
          },
        ],
      },
    ],
  },
]);
