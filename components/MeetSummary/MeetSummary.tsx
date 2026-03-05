import React from "react";
import Productivity from "../Productivity/Productivity";
import Image from "next/image";

export default function MeetingAutomationSection() {
  return (
    <div>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-6 md:px-10 py-10 md:py-16">
        
        <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center">
          
          <div>
            <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-[#1F1654] mb-3 md:w-10/12">
              Automate meeting notes like magic
            </h1>
            <div className="flex flex-wrap gap-2 md:gap-3 mb-4">
              <button className="px-3 md:px-5 py-1 text-xs sm:text-sm md:text-base lg:text-lg bg-[#EBE6FF] text-[#502EE7] font-medium rounded-lg shadow-sm hover:bg-[#EBE6FF]">
                Highlight Key Points
              </button>
              <button className="px-3 md:px-5 py-1 text-xs sm:text-sm md:text-base lg:text-lg bg-[#EBE6FF] text-[#502EE7] font-medium rounded-lg shadow-sm hover:bg-[#EBE6FF]">
                Create Action Items
              </button>
            </div>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-[#161727] mb-4 md:w-10/12">
              Say goodbye to manual note-taking. With AI-powered meeting notes,
              you'll capture every detail effortlessly—accurate, organized, and
              delivered instantly.
            </p>
            <button className="px-5 py-2 bg-[#7054F0] text-white font-semibold rounded-full shadow-md hover:bg-[#5A3FCF]">
              Signup
            </button>
          </div>

          
          <div className="relative bg-[#F1E8FE] p-3 sm:p-5 md:p-6 lg:p-8 rounded-2xl shadow-lg max-w-sm w-full mx-auto">
            
            <div className="flex flex-wrap justify-center md:justify-center space-x-2 sm:space-x-3 md:space-x-3 lg:space-x-4 mt-3 sm:mt-6 md:mt-8 lg:mt-10 mb-3 sm:mb-5 md:mb-6 lg:mb-8">
              <Image src="/meet.svg" alt="meets" width={64} height={64} className="w-8 sm:w-12 md:w-14 lg:w-16 h-8 sm:h-12 md:h-14 lg:h-16 object-cover" />
              <Image src="/Frame 17.svg" alt="meets" width={64} height={64} className="w-8 sm:w-12 md:w-14 lg:w-16 h-8 sm:h-12 md:h-14 lg:h-16 object-cover" />
              <Image src="/Frame 16.svg" alt="meets" width={64} height={64} className="w-8 sm:w-12 md:w-14 lg:w-16 h-8 sm:h-12 md:h-14 lg:h-16 object-cover" />
            </div>

           
            <div className="relative p-3 sm:p-4 md:p-5 lg:p-6 bg-white border-b-2 sm:border-b-4 md:border-b-4 lg:border-b-6 border-r-2 sm:border-r-4 md:border-r-4 lg:border-r-6 rounded-xl shadow-sm border-[#B7A7FF] mb-3 sm:mb-6 md:mb-8 lg:mb-10">
              <h4 className="text-xs sm:text-sm md:text-base lg:text-lg font-medium text-[#161727] mb-1 text-center md:text-left">
                📖 Meeting Summary
              </h4>
              <p className="text-xs sm:text-sm md:text-base lg:text-lg text-[#161727] text-center md:text-left">
                The CFO presented revenue figures, reporting a 10% growth in Q3
                compared to last quarter.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Productivity />
    </div>
  );
}
