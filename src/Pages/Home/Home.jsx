import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Sidebar from "../../Component/Sidebar";

const Home = () => {
  return (
    <div className="flex">
      <div className="">
        <Sidebar />
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Home;
