import { createBrowserRouter } from "react-router";
import { Home } from "./pages/Home";
import { AdminLogin } from "./pages/AdminLogin";
import { AdminDashboard } from "./pages/AdminDashboard";
import { AdminSetupPage } from "./pages/AdminSetupPage";
import { NotFound } from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/admin/login",
    Component: AdminLogin,
  },
  {
    path: "/admin/dashboard",
    Component: AdminDashboard,
  },
  {
    path: "/admin/setup",
    Component: AdminSetupPage,
  },
  {
    path: "*",
    Component: NotFound,
  },
]);