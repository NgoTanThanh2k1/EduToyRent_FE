import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home/Home";
import StaffPage from "./Pages/StaffPage/StaffPage";
import DashBoard from "./Pages/DashBoard/DashBoard";
import Detail from "./Pages/Detail/Detail";
import Detail2 from "./Pages/Detail/Detail2";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/staff",
    element: <StaffPage />,
    children: [
      {
        path: "/staff/dashboard",
        element: <DashBoard />,
      },
      {
        path: "/staff/detail",
        element: <Detail />,
        children: [
          {
            path: "/staff/detail/detail2",
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
