import React, { useEffect } from "react";
import { Navigate, Outlet, createBrowserRouter } from "react-router-dom";
import HealthPage from "./pages/HealthPage";
import RequiresAuth from "./components/RequiresAuth";
import { useAuth0 } from "@auth0/auth0-react";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <RequiresAuth>
        <Outlet />
      </RequiresAuth>
    ),
    children: [
      {
        index: true,
        element: <HealthPage />,
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to="/" replace />,
  },
]);

export default router;
