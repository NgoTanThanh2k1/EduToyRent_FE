import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home/Home";
import StaffPage from "./Pages/StaffPage/StaffPage";
import DashBoard from "./Pages/DashBoard/DashBoard";
import Detail from "./Pages/Detail/Detail";
import Detail2 from "./Pages/Detail/Detail2";
import LoginPage from "./Pages/Login/LoginPage";
import RegisterPage from "./Pages/Register/RegisterPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {

    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/dashboard",
    element: <DashBoard />,
    children: [
      {
        path: "detail",  // Sử dụng đường dẫn tương đối, không dùng dấu "/"
        element: <Detail />,
        children: [
          {
            path: "detail2",  // Cũng là đường dẫn tương đối
            element: <Detail2 />,
          },
        ],
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
