import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="text-red-700 flex flex-col">
      <Link to="/dashboard">Dashboard</Link>
      <Link to="detail">Detail</Link>
      <Link to="detail">Siuu</Link>
    </div>
  );
};

export default Sidebar;
