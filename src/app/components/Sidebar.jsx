// components/Sidebar.jsx
import React from 'react';
import Link from 'next/link';
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
  Grid,
  HelpCircle
} from 'lucide-react';
import techrity_logo from '../../../public/techrity-logo.png';
import Image from 'next/image';

const SidebarItem = ({ icon, title, active, href = '#', comingSoon }) => (
  <Link href={href}>
    <div className={`flex items-center px-4 py-3 text-sm cursor-pointer rounded-md mx-2 my-1 transition-colors duration-200
      ${active ? 'bg-white text-purple-900 font-semibold' : 'text-white/80 hover:bg-purple-800/50'}`}>
      <div className="w-5 mr-3">{icon}</div>
      <span>{title}</span>
      {comingSoon && (
        <span className="ml-auto text-[10px] text-white/50 italic">Coming Soon</span>
      )}
    </div>
  </Link>
);

export default function Sidebar({ activeTab }) {
  return (
    <div className="w-[260px] bg-[#340260] text-white flex flex-col h-screen fixed">
      {/* Logo Header */}
      <div className="flex items-center justify-between px-6 py-6 ">
        <div className="flex items-center">
        <Image 
            src={techrity_logo} // Place your logo in the public folder
            alt="Techrity Logo"
            width={150}
            height={150}
            className="mr-2"
          />
          {/* <span className="font-semibold text-lg">techrity</span> */}
        </div>
        <div className="border border-white/20 p-1 rounded">
          <Grid size={16} />
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-2 overflow-y-auto pt-8">
        <SidebarItem icon={<Home size={18} />} title="Dashboard" active={activeTab === 'dashboard'} href="/dashboard" />
        <SidebarItem icon={<FileText size={18} />} title="Programs" active={activeTab === 'programs'} href="/programs" />
        <SidebarItem icon={<Activity size={18} />} title="Activities" active={activeTab === 'activities'} href="/activities" />
        <SidebarItem icon={<Users size={18} />} title="Users" active={activeTab === 'users'} href="/users" />
        <SidebarItem icon={<MessageSquare size={18} />} title="Forums" active={activeTab === 'forums'} href="/forums" />
        <SidebarItem icon={<DollarSign size={18} />} title="Finances" active={activeTab === 'finances'} href="/finances" />
        <SidebarItem icon={<Award size={18} />} title="Rewards" active={activeTab === 'rewards'} href="/rewards" />
        <SidebarItem icon={<BarChart2 size={18} />} title="Analytics" active={activeTab === 'analytics'} href="/analytics" comingSoon />
        <SidebarItem icon={<Settings size={18} />} title="Settings" active={activeTab === 'settings'} href="/settings" />
        <SidebarItem icon={<LogOut size={18} />} title="Log Out" active={activeTab === 'logout'} href="/logout" />
      </nav>

      {/* Help Desk + Toggle */}
      <div className="px-4 pt-3 pb-8  border-purple-800 mt-auto">
        <div className="bg-[#4c2173] p-3 rounded-md text-xs mb-4">
          <div className="flex items-start gap-2">
            <HelpCircle size={14} className="mt-0.5 text-white/60" />
            <div>
              <p className="text-white/80 leading-tight">Got some questions, enquiries or need help?</p>
              <button className="text-yellow-400 underline mt-1">
                Visit Techrity Help Desk here
              </button>
            </div>
          </div>
        </div>

        {/* Classic Mode Toggle */}
        <div className="flex items-center justify-between text-xs">
          <span>Switch to Classic Mode</span>
          <div className="relative w-10 h-5 bg-gray-600 rounded-full">
            <div className="absolute right-0 w-5 h-5 bg-white rounded-full shadow-md"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
