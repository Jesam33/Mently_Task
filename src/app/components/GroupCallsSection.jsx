// components/GroupCallsSection.jsx
import React from 'react';
import { Menu, MoreHorizontal, MoreVertical } from 'lucide-react';
import MeetingCard from './MeetingCard';
import group_img_1 from '../../../public/programs_2.jpg'
import group_img_2 from '../../../public/group-2.jpg'
import group_img_3 from '../../../public/group-3.jpg'


export default function GroupCallsSection() {
  const meetings = [
    {
      title: "Weekly Meeting - Product Demo Review with Testers",
      date: "Mon, Jul 30, 2024",
      time: "9:00PM - 11:00AM",
      status: "Ongoing",
      circleColor: "#008000",
      bgColor: "#D4F3D4",
      textColor: "#008000",
      participants: 8,
      mentors: [1, 2, 3],
      imageSrc: group_img_1
    },
    {
      title: "Weekly Meeting - Product Demo Review with Testers",
      date: "Mon, Jul 30, 2024",
      time: "9:00PM - 11:00AM",
      status: "Upcoming",
      circleColor: "#1C0AE1",
      bgColor: "#E0DDFF",
      textColor: "#1C0AE1",
      participants: 6,
      mentors: [1, 2, 3],
      imageSrc: group_img_2
    },
    {
      title: "Weekly Meeting - Product Demo Review with Testers",
      date: "Mon, Jul 30, 2024",
      time: "9:00PM - 11:00AM",
      status: "Upcoming",
      circleColor: "#008000",
      bgColor: "#D4F3D4",
      textColor: "#008000",
      participants: 5,
      mentors: [1, 2, 3],
      imageSrc: group_img_3
    }
  ];

  return (
    <div className="mb-8">
      <div className="flex p-4 items-center justify-between mb-1">
        <div className="flex items-center">
          <div className="w-6 h-6 mr-2 flex items-center justify-center">
            <div className=""><Menu size={20} /></div>
          </div>
          <h2 className="text-lg text-[#B0B0B0] font-[700]">Programs</h2>
        </div>
        <div className="flex items-center space-x-4">
          <button className="text-xs text-[#6F01D0] text-[12px] font-[600]">See all</button>
          <button className="text-gray-500">
            <MoreVertical size={20} />
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4">
        {meetings.map((meeting, index) => (
          <MeetingCard key={index} {...meeting} />
        ))}
      </div>
    </div>
  );
}