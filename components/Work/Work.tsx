import React from "react";
import MeetSummary from "../MeetSummary/MeetSummary";
import Image from "next/image";

export default function ItWork() {
  return (
    <div className="w-full bg-[#F8F9FA] ">
      <div className="py-10 px-4">
       
      <h1 className="text-xl sm:text-3xl font-semibold text-center text-[#1F1654] mb-8 sm:mb-10">
        How It Works
      </h1>

      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        
        <div className="rounded-2xl overflow-hidden shadow-lg p-5 sm:p-6 bg-[#F1E8FE] border border-[#E3D8FE]">
          <div className="flex items-center justify-between">
            
            <Image
              src="/photo.svg"
              alt="img"
              width={160}
              height={120}
              className="w-40 sm:w-50 rounded-lg shadow-md max-w-full"
            />

            
            <div className="relative flex flex-col items-center">
              <Image
                src="/3images.svg"
                alt="3_images"
                width={56}
                height={56}
                className="w-12 sm:w-14 rounded-full shadow-sm max-w-full"
              />
              <div className="absolute left-1/2 transform -translate-x-1/2 -top-3 sm:-top-5">
                <Image
                  src="/arrowimg.svg"
                  alt="arrow"
                  width={32}
                  height={32}
                  className="w-6 sm:w-8 max-w-full"
                />
              </div>
            </div>
          </div>

          
          <div className="mt-4 sm:mt-6">
            <h1 className="text-lg sm:text-xl font-semibold text-[#1F1654]">
              MeetMemo AI Joins Your Meetings
            </h1>
            <p className="text-sm text-[#161727] mt-2">
              Say goodbye to manual note-taking and let automation do the work.
            </p>
          </div>
        </div>



       
        <div className="bg-[#E2F4E5] p-5 sm:p-6 rounded-2xl shadow-lg border border-[#CDEBCE]">
          <div className="flex items-center mb-4 space-x-3 sm:space-x-4">
            <Image src="/designmeet.svg" alt="designmeet" width={96} height={72} className="w-14 sm:w-24 rounded-md max-w-full" />
            <h4 className="text-lg sm:text-xl font-semibold text-[#61A461]">Design Meeting</h4>
          </div>
          <div className="relative mb-4 p-3 bg-white border-b-4 sm:border-b-8 border-r-4 sm:border-r-8 rounded-xl shadow-sm border-[#BFECBF]">
            <h4 className="text-sm sm:text-lg font-medium text-[#161727] mb-2">📖 Meeting Summary</h4>
            <p className="text-xs sm:text-sm text-[#161727]">
              The meeting opened with project updates, during which the design team reported the completion of Design System 2.0.
            </p>
          </div>
          <h3 className="text-lg sm:text-xl font-semibold text-[#0E2332] mt-4">
            Get Summary, Action Points + AI Chat
          </h3>
          <p className="text-sm sm:text-base text-[#0E2332] mt-2">
            Say goodbye to manual note-taking and let automation do the work.
          </p>
        </div>

       
        <div className="bg-[#E9F5FE] p-5 sm:p-6 rounded-2xl shadow-lg border border-[#D1EAFD]">
          <h3 className="text-center text-lg sm:text-xl font-semibold text-[#51BFFA] mb-4">
            Project X
          </h3>
          <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-3 sm:space-y-0 sm:space-x-6">
            <div className="space-y-3 sm:space-y-4">
              <div className="p-3 bg-white border-b-4 sm:border-b-8 border-r-4 sm:border-r-8 rounded-xl shadow-sm border-[#51BFFA] text-center">
                <p className="text-sm sm:text-base text-[#161727]">Design Meeting</p>
              </div>
              <div className="p-3 bg-white border-b-4 sm:border-b-8 border-r-4 sm:border-r-8 rounded-xl shadow-sm border-[#51BFFA] text-center">
                <p className="text-sm sm:text-base text-[#161727]">Development Meeting</p>
              </div>
            </div>
            <Image src="/4group.svg" alt="4_img" width={128} height={128} className="w-20 sm:w-32 h-20 sm:h-32 mt-3 sm:mt-0 max-w-full" />
          </div>
          <h3 className="text-lg sm:text-xl font-semibold text-[#162132] mt-6">
            Organize & Share with Spaces
          </h3>
          <p className="text-sm sm:text-base text-[#162132] mt-2">
            Say goodbye to manual note-taking and let automation do the work.
          </p>
        </div>
      </div>
      </div>

      <MeetSummary />
    </div>
  );
}