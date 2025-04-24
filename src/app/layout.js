"use client";
import React, { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import "./globals.css";
import { usePathname } from "next/navigation";

export default function RootLayout({ children }) {
  const pathname = usePathname();

  const getActiveTab = () => {
    if (pathname.includes("/")) return "dashboard";
    if (pathname.includes("/programs")) return "programs";
    if (pathname.includes("/activities")) return "activities";
    if (pathname.includes("/users")) return "users";
    if (pathname.includes("/forums")) return "forums";
    if (pathname.includes("/finances")) return "finances";
    if (pathname.includes("/rewards")) return "rewards";
    if (pathname.includes("/analytics")) return "analytics";
    if (pathname.includes("/settings")) return "settings";
    return "";
  };

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);

  const activeTab = getActiveTab();

  return (
    <html lang="en" className="h-full">
      <body className="h-full overflow-hidden">
        <div className="flex h-full">
          <Sidebar
            activeTab={activeTab}
            isOpen={isSidebarOpen}
            setIsOpen={setIsSidebarOpen}
          />

          <div className="flex flex-col flex-1 h-full overflow-hidden">
            <Header
              isSidebarOpen={isSidebarOpen}
              onToggleSidebar={toggleSidebar}
            />

            <div className="flex-1 overflow-y-auto  bg-[#f4f5fa]">
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
