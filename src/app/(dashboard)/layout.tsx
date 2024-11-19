"use client";

import Navbar from "@/components/dashboard/Navbar";
import Sidebar from "@/components/dashboard/Sidebar";
import { useState } from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
  return (
    <>
      <Sidebar
        sidebarIsOpen={sidebarIsOpen}
        setSidebarIsOpen={setSidebarIsOpen}
      />
      <div className="lg:ml-64">
        <Navbar
          sidebarIsOpen={sidebarIsOpen}
          setSidebarIsOpen={setSidebarIsOpen}
        />
        <section className="mt-16 p-3">{children}</section>
      </div>
    </>
  );
}
