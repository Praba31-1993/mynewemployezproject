"use client";
import React, { useState, useEffect } from "react";
import SuperAdminDashboard from "./screens/superadmin";
import HrDashboard from "./screens/hr";
import ManagerDashboard from "./screens/manager";
import EmployeeDashboard from "./screens/employee";
import RecruiterDashboard from "./screens/recruiter";
import Immigratorcoordinator from "./screens/immigratorcoordinator";
import PayrollAdminDashboard from "./screens/payrolladmin";
import TimecoordinatorDashboard from "./screens/timecoordinator";
import PayRoleExecutiveDashboard from "./screens/payrollexecutive";
import SalesManagerDashboard from "./screens/salesManager";
import Sidebar from "../sidebar/page";
import dynamic from "next/dynamic";
const Dashboard = () => {
  const [role, setRole] = useState<string | null>(null);
  const Sidebar = dynamic(() => import("../sidebar/layout"), {
    ssr: false,
  });
  const SuperAdminDynamicDashboard = dynamic(
    () => import("./screens/superadmin"),
    {
      ssr: false,
    }
  );

  const EmployeeDynamicDashboard = dynamic(() => import("./screens/employee"), {
    ssr: false,
  });
  useEffect(() => {
    if (typeof window !== "undefined") {
      const userRole = localStorage.getItem("Role");
      setRole(userRole);
    }
  }, []);

  return (
    <Sidebar>
      {role === "SA" && <SuperAdminDynamicDashboard />}

      {role === "E" && <EmployeeDynamicDashboard />}
    </Sidebar>
  );
};

export default Dashboard;
