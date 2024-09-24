
import * as React from "react";
import * as ReactDOM from "react-dom/client";


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Login from "./Components/Pages/Login/Login";
import SignIn from "./Components/Pages/signIn/signIn";
import Home from "./Components/Home/Home";
import HomePage from "./Components/Pages/homePage/homePage";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/signIn",
    element: <SignIn/>,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/homePage",
    element: <HomePage/>,
  },




]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);