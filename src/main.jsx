import { Children, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import Root from "./Pages/Root.jsx";
import Home from "./Pages/Home.jsx";
import MyProfile from "./Pages/MyProfile.jsx";
import AuthProvider from "./Provider/AuthProvider.jsx";
import Login from "./Pages/Login.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      { index: true, element: <Home></Home> },
      ,
      {
        path: "/home",
        element: <Home></Home>,
        loader: () => fetch("data.json"),
      },
      {
        path: "/myProfile",
        element: <MyProfile></MyProfile>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/resister",
        element: <App></App>,
      },
    ],
  },
  {
    path: "/myProfile",
    element: <App></App>,
  },
  {
    path: "/login",
    element: <App></App>,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
