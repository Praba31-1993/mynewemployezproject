"use client";
export const dynamic = "force-dynamic"; // Keep this

import React from "react";
import { default as dynamicImport } from "next/dynamic"; // Renamed import

const Sidebar = dynamicImport(() => import("../sidebar/layout"), { ssr: false });

const Dashboard = () => {
  return (
    <Sidebar>
     <div className="">ABC</div>
    </Sidebar>
  );
};

export default Dashboard;
