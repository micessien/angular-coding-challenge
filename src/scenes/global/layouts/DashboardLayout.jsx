import React from "react";
import { Outlet } from "react-router-dom";
// Components
import Topbar from "../../global/Topbar";
import Sidebar from "../../global/Sidebar";

const DashboardLayout = () => {
  return (
    <>
      <Sidebar />
      <main className="content">
        <Topbar />
        <Outlet />
      </main>
    </>
  );
};

export default DashboardLayout;
