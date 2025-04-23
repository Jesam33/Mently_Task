// components/ProgramCard.jsx
import { Settings } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function ProgramCard({
  title,
  description,
  status,
  category,
  categoryColor = "pink-500",
  mentors = [],
  circleColor,
  bgColor,
  textColor,
  imageSrc = "/api/placeholder/400/150",
}) {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <div className="relative">
        {/* <div className={`absolute top-0 left-0 bg-${categoryColor} text-white text-xs py-1 px-2`}>{category}</div> */}
        {/* <img src={imageSrc} alt={title} /> */}
        <Image
          src={imageSrc}
          alt="Techrity Logo"
          width={100}
          height={100}
          className="w-full h-20 object-cover"
        />
        <div className="absolute top-2 right-2 p-1 z-20 bg-black/30 rounded-full">
          <Settings size={20} className="text-white" />
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-4 inset-0 z-1 bg-black/60">
          <h3 className="text-white text-xl font-[700] max-w-[80%] z-10">
            {title}
          </h3>
          <div
            className="flex items-center px-3 gap-1 w-fit py-0.5 rounded-full mt-1 z-10"
            style={{ backgroundColor: bgColor }}
          >
            <div
              className={`w-2 h-2 rounded-full`}
              style={{ backgroundColor: circleColor }}
            ></div>
            <span
              className="text-xs"
              style={{
                color: textColor,
              }}
            >
              {status}
            </span>
          </div>
        </div>
      </div>
      <div className="p-4">
        <p className="text-xs text-gray-600">{description}</p>
        <div className="flex items-center justify-between mt-3">
          <div className="flex items-center">
            <div className="flex -space-x-2">
              {mentors.length > 0 ? (
                mentors.map((mentor, index) => (
                  <div
                    key={index}
                    className="w-6 h-6 rounded-full border-2 border-white overflow-hidden relative"
                  >
                    <Image
                      src={`https://i.pravatar.cc/150?img=${index + 1}`}
                      alt={`Mentor ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))
              ) : (
                <div className="w-6 h-6 rounded-full border-2 border-white overflow-hidden relative">
                  <Image
                    src="https://i.pravatar.cc/150?img=1"
                    alt="Dummy Mentor"
                    fill
                    className="object-cover"
                  />
                </div>
              )}
            </div>
            <span className="text-xs text-gray-500 ml-2">Mentors</span>
          </div>

          <div className="flex items-center space-x-2">
            <button className="text-xs text-purple-700 px-3 py-1 border border-purple-700 rounded-md">
              View Details
            </button>
            <button className="text-xs text-white px-3 py-1 bg-purple-700 rounded-md">
              Explore
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
