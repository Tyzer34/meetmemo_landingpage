"use client"

import React, { useState } from 'react';
import ItWork from '../Work/Work';
import { Menu, X } from 'lucide-react';
import Link from "next/link";
import Pricing from '../Pricing/Pricing';
import WaitlistForm from '../Waitlist/waitlist-form';

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
            <div className="mt-6 flex flex-col sm:flex-row gap-4">
              <Link href="/schedule-demo">
                <button className="bg-[#7054F0] text-white py-2 px-6 rounded-full">Get Started Free</button>
              </Link>
              <button className="border-2 border-[#EBE6FF] text-[#7054F0] py-2 px-6 rounded-full">Learn More</button>
            </div>
            
            {/* Email Capture - Waitlist Form */}
            <div className="mt-8">
              <WaitlistForm />
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
