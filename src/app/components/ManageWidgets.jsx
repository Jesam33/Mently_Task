// components/ManageWidgets.jsx
import React from 'react';
import { Grid } from 'lucide-react';

export default function ManageWidgets() {
  return (
    <div className="">
      <button className="flex w-fit justify-end items-center gap-2 px-8 py-3  text-sm text-purple-700">
        <Grid size={16} />
        <span className='text-lg font-[600] text-[#1F0954]'>Manage Widgets</span>
      </button>
    </div>
  );
}