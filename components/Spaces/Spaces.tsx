import React from "react";
import Link from "next/link";
import MobileMeet from "../MobileMeet/MobileMeet";

export default function Spaces() {
  return (
    <div>
      <div className="flex items-center justify-center bg-gray-50 px-4 sm:px-6 md:px-10 py-10">
        
        <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-20 xl:gap-28 items-center">
          
          <div className="flex justify-center md:justify-end">
            <div className="relative bg-[#F1E8FE] p-4 sm:p-5 md:p-6 lg:p-8 py-8 sm:py-12 md:py-10 lg:py-14 rounded-2xl shadow-lg w-full max-w-lg sm:max-w-xl md:max-w-md lg:max-w-lg xl:max-w-2xl flex flex-col items-center">
              <h1 className="text-center text-[#806FCE] font-semibold text-lg sm:text-xl md:text-xl lg:text-2xl py-3 sm:py-4 md:py-4">
                Spaces / Project X
              </h1>
              <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 md:space-x-0 md:space-y-4 lg:space-x-6 lg:space-y-0 mb-4 sm:mb-6">
                <div className="space-y-3 sm:space-y-4">
                  <div className="relative p-3 sm:p-4 bg-white border-b-4 sm:border-b-6 md:border-b-6 lg:border-b-8 border-r-4 sm:border-r-6 md:border-r-6 lg:border-r-8 rounded-xl shadow-sm border-[#B7A7FF] text-center">
                    <p className="text-[#161727] text-sm sm:text-base md:text-lg lg:text-lg">
                      Design Meeting
                    </p>
                  </div>
                  <div className="relative p-3 sm:p-4 bg-white border-b-4 sm:border-b-6 md:border-b-6 lg:border-b-8 border-r-4 sm:border-r-6 md:border-r-6 lg:border-r-8 rounded-xl shadow-sm border-[#B7A7FF] text-center">
                    <p className="text-[#161727] text-sm sm:text-base md:text-lg lg:text-lg whitespace-nowrap">
                      Development Meeting
                    </p>
                  </div>
                </div>
                <div className="flex justify-center md:justify-start lg:justify-center">
                  <img
                    src="/4group.svg"
                    alt="4_img"
                    className="w-20 h-20 sm:w-24 sm:h-24 md:w-24 md:h-24 lg:w-32 lg:h-32 xl:w-36 xl:h-36"
                  />
                </div>
              </div>
            </div>
          </div>

         
          <div className="md:pl-8 lg:pl-16 xl:pl-20 text-center md:text-left">
            <h1 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#1F1654] mb-3 sm:mb-4 w-full md:w-10/12">
              Knowledge Hub - Spaces Heading
            </h1>
            <p className="text-sm sm:text-base md:text-base lg:text-lg xl:text-xl text-[#161727] mb-4 sm:mb-6 w-full md:w-10/12">
              Say goodbye to manual note-taking and let automation do the work.
              With AI-powered meeting notes, you'll capture every detail
              effortlessly—accurate, organized, and delivered instantly. Focus
              on the conversation, while MeetMemo.ai handles the notes.
            </p>

            <Link href="/schedule-demo">
              <button className="px-5 sm:px-6 py-2 bg-[#7054F0] text-white font-semibold rounded-full shadow-md hover:bg-[#5a3bcf]">
                Get Started Free
              </button>
            </Link>
          </div>
        </div>
      </div>
      <MobileMeet />
    </div>
  );
}
