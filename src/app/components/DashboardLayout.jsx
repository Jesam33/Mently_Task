// components/DashboardLayout.jsx
import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import ManageWidgets from './ManageWidgets';

export default function DashboardLayout({ children, activeTab = 'dashboard' }) {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar activeTab={activeTab} />
      
      <div className="flex-1 flex flex-col overflow-hidden relative">
        <Header />
        <ManageWidgets />
        
        <main className="flex-1 overflow-y-auto p-6 bg-gray-100">
          {children}
        </main>
      </div>
    </div>
  );
}