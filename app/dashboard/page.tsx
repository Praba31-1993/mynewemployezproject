"use client";
export const dynamic = "force-dynamic"; // Keep this

import React from "react";
import { default as dynamicImport } from "next/dynamic"; // Renamed import
import SuperAdminDashboard from "./screens/superadmin";

const Sidebar = dynamicImport(() => import("../sidebar/layout"), {
  ssr: false,
});
const MemoizedSidebar = React.memo(Sidebar);

const Dashboard = () => {
  return (
    <Sidebar>
      <SuperAdminDashboard />
    </Sidebar>
  );
};

export default Dashboard;
