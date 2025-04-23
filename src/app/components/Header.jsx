// components/Header.jsx
import React from 'react';
import { Bell, User, MessageSquare } from 'lucide-react';
import Image from 'next/image';
import user_header_logo from '../../../public/user-header.png'; 
export default function Header() {
  return (
    <header className="bg-white shadow-sm z-10">
      <div className="flex items-center justify-between px-6 py-3">
        <div className="flex-1"></div>
        <div className="flex items-center space-x-4">
          <button className="p-2 rounded-full hover:bg-gray-100 relative">
            <Bell size={24} className="text-gray-600" />
            <div className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></div>
          </button>
          <div className="flex items-center">
            <div className="w-9 h-9 rounded-full bg-[#8B72FC] flex items-center justify-center text-white">
               <Image 
                        src={user_header_logo}
                        alt="Techrity Logo"
                        width={50}
                        height={50}
                      />
            </div>
            <div className="ml-2 text-sm">
              <div>Techrity Foundation</div>
              <div className="text-xs text-gray-500">Member</div>
            </div>
          </div>
          <button className="p-1 rounded-full bg-purple-100 text-purple-700">
            <MessageSquare size={16} />
          </button>
        </div>
      </div>
    </header>
  );
}