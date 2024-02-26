import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import LogIn from "../pages/LogIn";
import SingUp from "../pages/SingUp";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: '/login',
    element: <LogIn />
  },
  {
    path: '/register',
    element: <SingUp />
  }
]);
