import { MoreHorizontal } from 'lucide-react'

export default function UsersCHatSection() {
  return (
    <div className="mb-8">
      <div className="section-header">
        <div className="section-title">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 18.86H17.24C16.44 18.86 15.68 19.17 15.12 19.73L13.41 21.42C12.63 22.19 11.36 22.19 10.58 21.42L8.87 19.73C8.31 19.17 7.54 18.86 6.75 18.86H6C4.34 18.86 3 17.53 3 15.89V4.97C3 3.33 4.34 2 6 2H18C19.66 2 21 3.33 21 4.97V15.88C21 17.52 19.66 18.86 18 18.86Z" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12.07 8.95C12.03 8.95 11.97 8.95 11.93 8.95C10.86 8.91 10.01 8.04 10.01 6.97C10.01 5.88 10.89 5 11.98 5C13.07 5 13.95 5.88 13.95 6.97C13.94 8.04 13.09 8.92 12.07 8.95Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M9.25 11.96C7.24 12.72 7.24 14.02 9.25 14.78C11 15.45 13.7 15.45 15.45 14.78C17.46 14.02 17.46 12.73 15.45 11.96C13.71 11.29 11.01 11.29 9.25 11.96Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span>Users</span>
        </div>
        
        <div className="flex items-center">
          <button className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-md text-sm mr-2 flex items-center gap-1">
            All
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19.9201 8.95001L13.4001 15.47C12.6301 16.24 11.3701 16.24 10.6001 15.47L4.08008 8.95001" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          
          <button className="text-gray-600">
            <MoreHorizontal size={20} />
          </button>
        </div>
      </div>
      
      <div className="bg-white p-5 rounded-lg shadow-sm">
        <div className="flex justify-center mb-5">
          <div className="relative w-48 h-48">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              {/* Blue segment */}
              <path 
                d="M 50,50 L 50,0 A 50,50 0 0,1 85,15 Z" 
                fill="#2196F3"
              />
              {/* Pink segment */}
              <path 
                d="M 50,50 L 85,15 A 50,50 0 0,1 100,50 Z" 
                fill="#FF4081"
              />
              {/* Orange segment */}
              <path 
                d="M 50,50 L 100,50 A 50,50 0 0,1 85,85 Z" 
                fill="#FFA000"
              />
              {/* Green segment */}
              <path 
                d="M 50,50 L 85,85 A 50,50 0 0,1 50,100 Z" 
                fill="#4CAF50"
              />
              {/* Circle in middle */}
              <circle cx="50" cy="50" r="30" fill="white" />
              {/* Text in middle */}
              <text x="50" y="50" textAnchor="middle" dominantBaseline="middle" fontSize="12" fontWeight="bold">
                240
              </text>
              <text x="50" y="62" textAnchor="middle" dominantBaseline="middle" fontSize="8">
                Users
              </text>
            </svg>
          </div>
        </div>
        
        <div className="grid grid-cols-4 gap-4 text-sm">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-blue-500"></span>
            <span>Students</span>
            <span className="ml-auto font-medium">200</span>
          </div>
          
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-pink-500"></span>
            <span>Mentors</span>
            <span className="ml-auto font-medium">8</span>
          </div>
          
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
            <span>Programs</span>
            <span className="ml-auto font-medium">22</span>
          </div>
          
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-green-500"></span>
            <span>Others</span>
            <span className="ml-auto font-medium">10</span>
          </div>
        </div>
      </div>
    </div>
  )
}