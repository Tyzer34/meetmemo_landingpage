import React from "react";
import Testimonials from "../Testimonials/Testimonials";
import Image from "next/image";

export default function MobileMeet() {
  return (
    <div>
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-10 sm:px-8 sm:py-20">
        {/* Container */}
        <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
           {/* Left Section (Text Section) */}
           <div>
            <h1 className="text-xl sm:text-2xl md:text-4xl font-bold text-[#1F1654] mb-3 sm:mb-4 sm:w-10/12">
              Mobile app for meetings on the go
            </h1>

            <p className="text-xs sm:text-sm md:text-lg text-[#161727] mb-4 sm:mb-6 sm:w-10/12">
              Say goodbye to manual note-taking and let automation do the work. With AI-powered meeting notes, you'll capture every detail effortlessly—accurate, organized, and delivered instantly.
            </p>

            <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-3 sm:space-y-0">
              <button className="px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm bg-[#7054F0] text-[#FFFFFF] font-semibold rounded-full shadow-md hover:bg-[#5a3bcf] sm:w-auto">
                Get on Playstore
              </button>
              <button className="px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm bg-[#7054F0] text-[#FFFFFF] font-semibold rounded-full shadow-md hover:bg-[#5a3bcf] sm:w-auto">
                Get on Appstore
              </button>
            </div>
          </div>
          {/* Right Section (Card Section) */}
          <div className="relative bg-[#E2F4E5] px-4 sm:px-8 py-6 sm:py-8 rounded-2xl shadow-lg max-w-md sm:max-w-xl mx-auto flex flex-col justify-between h-full md:h-auto md:min-h-[350px] lg:min-h-auto">
            {/* Header Section */}
            <div className="flex flex-col justify-center items-center w-full px-4 sm:px-4 py-5 sm:py-8 space-y-3 sm:space-y-5">
              <h1 className="text-sm sm:text-base md:text-lg text-[#1F1654] text-center py-3 sm:py-5">
                With offline meetings support
              </h1>
              {/* App Store Icons */}
              <div className="flex flex-row space-x-4 justify-center py-5">
                <div>
                  <Image src="/googleplay.svg" alt="Google Play" width={128} height={40} className="w-28 sm:w-32" />
                </div>
                <div>
                  <Image src="/applestore.svg" alt="App Store" width={128} height={40} className="w-28 sm:w-32" />
                </div>
              </div>
            </div>
            {/* Phone Image at the Bottom */}
            <div className="flex justify-center items-center mt-auto">
              <Image src="/iPhone 15-trimmed 1.svg" alt="Mobile" width={224} height={400} className="w-44 sm:w-56" />
            </div>
          </div>

         
        </div>
      </div>
      <Testimonials />
    </div>
  );
}
