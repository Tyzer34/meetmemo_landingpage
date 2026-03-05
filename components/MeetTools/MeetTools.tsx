import React from "react";
import Spaces from "../Spaces/Spaces";
import Image from "next/image";

export default function MeetTools() {
  return (
    <div>
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-6 sm:px-8 md:px-10 py-16">
        
        <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">
          
          
          <div className="text-center md:text-left">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1F1654] mb-4 w-full md:w-10/12 lg:w-9/12 mx-auto md:mx-0">
              Integrates with tools you know & love
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-[#161727] mb-6 w-full md:w-10/12 lg:w-9/12 mx-auto md:mx-0">
              Say goodbye to manual note-taking and let automation do the work. With AI-powered meeting notes, you'll capture every detail effortlessly—accurate, organized, and delivered instantly. Focus on the conversation, while MeetMemo.ai handles the notes.
            </p>

            <button className="px-6 py-2 bg-[#7054F0] text-white font-semibold rounded-full shadow-md hover:bg-[#5a3ed9] transition-all">
              Signup
            </button>
          </div>

          
          <div className="relative bg-[#E1F5FF] p-4 sm:p-6 rounded-2xl shadow-lg max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto flex justify-center items-center">
            <div className="flex justify-center items-center w-full px-6 py-6">
              <Image
                src="/Group 5.svg"
                alt="group_5_icons"
                width={350}
                height={250}
                className="w-full max-w-[250px] sm:max-w-[300px] md:max-w-[350px] h-auto"
              />
            </div>
          </div>
        </div>
      </div>
      <Spaces />
    </div>
  );
}