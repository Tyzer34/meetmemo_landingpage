"use client"

import React, { useState } from 'react';
import ItWork from '../Work/Work';
import { Menu, X } from 'lucide-react';
import Link from "next/link";
import Pricing from '../Pricing/Pricing';

function Demo() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="relative">
      {/* Navbar */}
      <div className="flex items-center justify-center bg-[#F7F9FC] w-full py-6">
        <nav className="flex items-center justify-between px-6 py-3 bg-white rounded-full shadow-md w-full max-w-3xl mx-auto">
          <div className="flex-grow">
            <img src="/logo_meetmemo.svg" alt="Logo" width={40} height={40} className="w-8 h-8" />
          </div>

          {/* Desktop Menu */}
          <ul className="hidden sm:flex sm:space-x-10 text-[#161727] font-medium">
            <Link href=''><li className="cursor-pointer hover:text-[#7054F0]">Use Cases</li></Link>
            <Link href='#pricing'><li className="cursor-pointer hover:text-[#7054F0]">Pricing</li></Link>
            <Link href=''><li className="cursor-pointer hover:text-[#7054F0]">About</li></Link>
            <Link href='#demo'><li className="cursor-pointer hover:text-[#7054F0]">Schedule a Demo</li></Link>
          </ul>

          {/* Mobile Menu Button */}
          <div className="sm:hidden">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-white shadow-md rounded-lg p-4 absolute top-16 left-0 w-full">
          <ul className="space-y-4 text-center text-[#161727] font-medium">
            <li><a href="" className="block">Use Cases</a></li>
            <li><a href="#pricing" className="block">Pricing</a></li>
            <li><a href="" className="block">About</a></li>
            <li><a href="#demo" className="block">Schedule a Demo</a></li>
          </ul>
        </div>
      )}

      {/* Main Content */}
      <div className="bg-[#F7F9FC] p-6">
        <div className="flex flex-col-reverse sm:flex-row items-center justify-between max-w-6xl mx-auto">
          <div className="flex-1 sm:pr-6 text-center sm:text-left">
            <img src="/meeticons.svg" alt="meet_icons" className="mx-auto sm:mx-0 w-35 h-35 mb-4" />
            <h1 className="text-2xl sm:text-4xl font-semibold text-[#1F1654] max-w-xl mx-auto sm:mx-0">
              Goodbye to Manual Note Taking, Let AI Take Over
            </h1>
            <p className="mt-4 text-lg text-[#161727] max-w-lg mx-auto sm:mx-0">
              Transform your team’s meetings with MeetMemo.ai. Get automated notes, AI-generated summaries, seamless task management,
              and a centralized knowledge hub that ensures every conversation drives results.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-4 items-center justify-center sm:justify-start">
              <button className="bg-[#7054F0] text-white py-2 px-6 rounded-full">Signup</button>
              <button className="border-2 border-[#EBE6FF] text-[#7054F0] py-2 px-6 rounded-full">Learn More</button>
              <a 
                href="https://apps.apple.com/app/meetmemo" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#161727] hover:text-[#7054F0] transition-colors"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                <span className="text-sm font-medium">Download iOS App</span>
              </a>
            </div>
          </div>

          
          <div className="flex-1 sm:ml-8">
            <img src="/Demovisual.svg" alt="demo_visual" className="w-full h-auto max-h-64 sm:max-h-[70vh]" />
          </div>
        </div>
      </div>

      <ItWork />
    </div>
  );
}

export default Demo;
