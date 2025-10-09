import type { RouteObject } from "react-router-dom";
import Home from "../modules/Home";
import LoginForm from "../modules/components/LoginForm";
import UsersManagement from "../modules/components/UsersManagement";
import DashboardPage from "../modules/pages/DashboardPage";
import ProtectedRoute from "../modules/components/ProtectedRoute";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <LoginForm />,
  },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <DashboardPage />
      </ProtectedRoute>
    ),
  },
  {
    path: "/users",
    element: (
      <ProtectedRoute>
        <UsersManagement />
      </ProtectedRoute>
    ),
  },
];

export default routes;