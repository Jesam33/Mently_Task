"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Home,
  FileText,
  Activity,
  Users,
  MessageSquare,
  DollarSign,
  Award,
  BarChart2,
  Settings,
  LogOut,
  X,
  ChevronRight,
  ChevronLeft,
  Menu
} from "lucide-react";
import Image from "next/image";

const SidebarItem = ({
  icon,
  title,
  active,
  href = "#",
  isCollapsed,
}) => (
  <Link href={href} className="block w-full">
    <div
      className={`flex items-center px-3 py-2 text-xs md:text-sm cursor-pointer rounded-md mx-1 my-1 transition-colors duration-200
      ${active
        ? "bg-white text-purple-900 font-semibold"
        : "text-white/80 hover:bg-purple-800/50"}`}
    >
      <div className="w-4 mr-2">{icon}</div>
      {/* Hide text when collapsed on all screen sizes */}
      <span className={`${isCollapsed ? 'hidden' : 'inline-block'}`}>
        {title}
      </span>
    </div>
  </Link>
);

export default function Sidebar({ activeTab, isOpen, setIsOpen }) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  // Auto-collapse on medium screens
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024 && window.innerWidth >= 768) {
        setIsCollapsed(true);
      } else if (window.innerWidth >= 1024) {
        setIsCollapsed(false);
      }
    };

    // Initial check
    handleResize();

    // Set up the event listener
    window.addEventListener('resize', handleResize);

    // Clean up
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Close sidebar when clicking outside on mobile
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (
        isOpen &&
        !e.target.closest(".sidebar-container") &&
        !e.target.closest(".sidebar-toggle")
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen, setIsOpen]);

  const toggleSidebarCollapse = () => {
    console.log("Toggling Sidebar Mode", !isCollapsed);
    setIsCollapsed(!isCollapsed);
  };

  return (
    <>
      {/* Sidebar Overlay (Mobile) */}
      {isOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Toggle Button
      <button 
        className="md:hidden fixed top-4 left-4 z-50 bg-purple-600 p-2 rounded-md sidebar-toggle"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Sidebar"
      >
        <Menu size={20} color="white" />
      </button> */}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full 
          ${isCollapsed ? 'w-16' : 'w-52'} 
          bg-[#340260] text-white z-40 flex flex-col shadow-lg transition-all duration-300 sidebar-container
          ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 md:relative`}
      >
        {/* Logo Header with toggle button */}
        <div className="flex items-center justify-between p-4 border-b border-purple-800/30">
          {/* Show logo on small screens or when not collapsed on medium/large */}
          <div className={`h-8 w-24 relative ${isCollapsed ? 'hidden' : 'block'}`}>
            <Image
              src="/techrity-logo.png"
              alt="Techrity Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          
          {/* Toggle collapse button - visible on all screen sizes */}
          <button
            onClick={toggleSidebarCollapse}
            className="text-white hover:bg-purple-700/50 p-1.5 rounded-md ml-auto"
            aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            {isCollapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
          </button>
        </div>

        {/* Close Button (Mobile) */}
        <div className="md:hidden flex justify-end px-4 py-2">
          <button
            onClick={() => setIsOpen(false)}
            className="text-white bg-purple-700 hover:bg-purple-600 p-1.5 rounded-md"
            aria-label="Close sidebar"
          >
            <X size={18} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto pt-2 space-y-2 px-2 py-2 scrollbar-thin">
          <SidebarItem
            icon={<Home size={16} />}
            title="Dashboard" 
            active={activeTab === "dashboard"}
            href="/dashboard"
            isCollapsed={isCollapsed}
          />
          <SidebarItem
            icon={<FileText size={16} />}
            title="Programs" 
            active={activeTab === "programs"}
            href="/programs"
            isCollapsed={isCollapsed}
          />
          <SidebarItem
            icon={<Activity size={16} />}
            title="Activities" 
            active={activeTab === "activities"}
            href="/activities"
            isCollapsed={isCollapsed}
          />
          <SidebarItem
            icon={<Users size={16} />}
            title="Users" 
            active={activeTab === "users"}
            href="/users"
            isCollapsed={isCollapsed}
          />
          <SidebarItem
            icon={<MessageSquare size={16} />}
            title="Forums" 
            active={activeTab === "forums"}
            href="/forums"
            isCollapsed={isCollapsed}
          />
          <SidebarItem
            icon={<DollarSign size={16} />}
            title="Finances" 
            active={activeTab === "finances"}
            href="/finances"
            isCollapsed={isCollapsed}
          />
          <SidebarItem
            icon={<Award size={16} />}
            title="Rewards" 
            active={activeTab === "rewards"}
            href="/rewards"
            isCollapsed={isCollapsed}
          />
          <SidebarItem
            icon={<BarChart2 size={16} />}
            title="Analytics" 
            active={activeTab === "analytics"}
            href="/analytics"
            isCollapsed={isCollapsed}
          />
          <SidebarItem
            icon={<Settings size={16} />}
            title="Settings" 
            active={activeTab === "settings"}
            href="/settings"
            isCollapsed={isCollapsed}
          />
          <SidebarItem
            icon={<LogOut size={16} />}
            title="Log Out" 
            active={activeTab === "logout"}
            href="/logout"
            isCollapsed={isCollapsed}
          />
        </nav>
      </div>
    </>
  );
}