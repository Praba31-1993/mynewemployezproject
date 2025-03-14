"use client";
import React  from "react";
import SuperAdminDashboard from "./screens/superadmin";

import dynamic from "next/dynamic";

const Dashboard = () => {
  const Sidebar = dynamic(() => import("../sidebar/layout"), { ssr: false });
  return (
    <Sidebar>
      <SuperAdminDashboard />
    </Sidebar>
  );
};

export default Dashboard;
