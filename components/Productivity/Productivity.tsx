import React from "react";
import MeetTools from "../MeetTools/MeetTools";
import Image from "next/image";

export default function Productivity() {
  return (
    <div>
      <div className="flex items-center justify-center bg-gray-50 px-4 sm:px-6 md:px-8 py-10">
        
        <div className="max-w-7xl w-full flex flex-col md:flex-row items-center gap-6 sm:gap-10 md:gap-12 lg:gap-28">
          
          <div className="relative bg-[#E2F4E5] p-4 sm:p-5 md:p-4 rounded-3xl shadow-lg w-full sm:max-w-lg md:w-1/2 lg:w-2/5">
           
            <div className="space-y-3 mt-4 sm:mt-5 md:mt-6 px-3 sm:px-4 md:px-5 mb-3 sm:mb-5 md:mb-6">
              
              <div className="relative p-3 sm:p-4 md:p-4 bg-white border-b-4 border-r-4 rounded-xl shadow-sm border-[#BFECBF] flex items-center justify-between">
                <div className="flex flex-col text-left">
                  <p className="text-[#0E2332] text-base sm:text-lg md:text-xl font-bold">Design 2.0 Meeting</p>
                  <p className="text-sm sm:text-md md:text-lg text-[#3C813C]">Today</p>
                </div>
                <Image
                  src="/people.svg"
                  alt="people Icon"
                  width={96}
                  height={72}
                  className="w-14 sm:w-18 md:w-20 lg:w-24 h-auto object-cover"
                />
              </div>

              <div className="relative p-3 sm:p-4 md:p-4 bg-white border-b-4 border-r-4 rounded-xl shadow-sm border-[#BFECBF] flex items-center justify-between">
                <div className="flex flex-col text-left">
                  <p className="text-[#161727] text-base sm:text-lg md:text-xl font-bold">SEO Campaign Launch</p>
                  <p className="text-sm sm:text-md md:text-lg text-[#3C813C]">Yesterday</p>
                </div>
                <Image
                  src="/2people.svg"
                  alt="2peoples"
                  width={96}
                  height={72}
                  className="w-14 sm:w-18 md:w-20 lg:w-24 h-auto object-cover"
                />
              </div>

              <div className="flex justify-center sm:justify-start mt-2">
                <button className="text-[#3C813C] bg-[#BFECBF] rounded-3xl w-20 h-8 md:h-9">
                  View More
                </button>
              </div>

            </div>
          </div>

         
          <div className="text-center md:text-left max-w-lg sm:max-w-xl md:w-1/2 lg:w-3/5">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1F1654] mb-4">
              Easy, seamless, and intuitive
            </h1>
            <p className="text-sm sm:text-lg md:text-xl text-[#161727] mb-6">
              Say goodbye to manual note-taking and let automation do the work. With AI-powered meeting notes, you'll capture every detail effortlessly—accurate, organized, and delivered instantly. Focus on the conversation, while MeetMemo.ai handles the notes.
            </p>
            <button className="px-5 sm:px-6 md:px-6 py-2 bg-[#7054F0] text-white font-semibold rounded-full shadow-md hover:bg-[#5a3bcf]">
              Signup
            </button>
          </div>
        </div>
      </div>
      <MeetTools />
    </div>
  );
}
