"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import StrikethroughAnimation from "./StrikeAnimation";
import OvalAnimation from "./OvalAnimation";
import Link from "next/link";

export default function Pricing() {
  const [selected, setSelected] = useState<"M" | "A">("M");

  return (
    <section className="w-full text-black bg-white px-4 lg:px-8 py-12 lg:pb-24 relative overflow-hidden">
      <Heading selected={selected} setSelected={setSelected} />
      <PriceCards selected={selected} />
      <TopLeftCircle />
      <BottomRightCircle />
    </section>
  );
}

const SELECTED_STYLES = "text-white font-medium rounded-lg py-3 w-28 relative";
const DESELECTED_STYLES =
  "font-medium rounded-lg py-3 w-28 hover:bg-slate-100 transition-colors relative";

interface HeadingProps {
  selected: "M" | "A";
  setSelected: React.Dispatch<React.SetStateAction<"M" | "A">>;
}

const Heading = ({ selected, setSelected }: HeadingProps) => {
  return (
    <div className="mb-6 md:mb-12 relative z-10">
      <h3 className="font-semibold text-5xl lg:text-7xl text-center mb-6">
        Pricing plans
      </h3>
      <p className="text-center mx-auto max-w-lg mb-8">
        Lorem ipsum dolor sit amet consectetur. Pulvinar eu rhoncus tincidunt
        eget mattis netus ridiculus.
      </p>
      <div className="flex items-center justify-center gap-3">
        <button
          onClick={() => setSelected("M")}
          className={selected === "M" ? SELECTED_STYLES : DESELECTED_STYLES}
        >
          Monthly
          {selected === "M" && <BackgroundShift />}
        </button>
        <div className="relative">
          <button
            onClick={() => setSelected("A")}
            className={selected === "A" ? SELECTED_STYLES : DESELECTED_STYLES}
          >
            Annual
            {selected === "A" && <BackgroundShift />}
          </button>
          {/* <CTAArrow /> */}
        </div>
      </div>
    </div>
  );
};

const BackgroundShift = () => (
  <motion.span
    layoutId="bg-shift"
    className="absolute inset-0 bg-black rounded-lg -z-10"
  />
);

const CTAArrow = () => (
  <div className="absolute  lg:-right-[100px] -right-[70px] top-1 lg:top-2 sm:top-0">
    <motion.svg
      width="95"
      height="62"
      viewBox="0 0 95 62"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="scale-50 sm:scale-75"
      initial={{ scale: 0.7, rotate: 5 }}
      animate={{ scale: 0.75, rotate: 0 }}
      transition={{
        repeat: Infinity,
        repeatType: "mirror",
        duration: 1,
        ease: "easeOut",
      }}
    >
      <path
        d="M14.7705 15.8619C33.2146 15.2843 72.0772 22.1597 79.9754 54.2825"
        stroke="#7D7BE5"
        strokeWidth="3"
      />
      <path
        d="M17.7987 7.81217C18.0393 11.5987 16.4421 15.8467 15.5055 19.282C15.2179 20.3369 14.9203 21.3791 14.5871 22.4078C14.4728 22.7608 14.074 22.8153 13.9187 23.136C13.5641 23.8683 12.0906 22.7958 11.7114 22.5416C8.63713 20.4812 5.49156 18.3863 2.58664 15.9321C1.05261 14.6361 2.32549 14.1125 3.42136 13.0646C4.37585 12.152 5.13317 11.3811 6.22467 10.7447C8.97946 9.13838 12.7454 8.32946 15.8379 8.01289"
        stroke="#7D7BE5"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </motion.svg>
    <span className="block text-sm w-fit bg-indigo-500 text-white shadow px-2.5 py-1.5 rounded -mt-1 ml-8 -rotate-2 font-light italic">
      Save 12$
    </span>
  </div>
);

interface PriceCardProps {
  selected: "M" | "A";
}

const PriceCards = ({ selected }: PriceCardProps) => (
  <div className="flex flex-col lg:flex-row gap-8 lg:gap-4 w-full max-w-6xl mx-auto relative z-10">
    {/* PRO  */}
    <div className="w-full bg-white p-6 border-[1px] border-slate-300 rounded-xl">
      <div className="flex flex-col justify-center items-center">
        <p className="text-2xl font-bold mb-2">Business</p>
        <p className="text-sm text-slate-500 mb-4">Min. 5 users</p>
      </div>
      <div className="overflow-hidden mb-1">
        <AnimatePresence mode="wait">
          {selected === "M" ? (
            // Parent Container with Flex for Horizontal Alignment
            <div className="flex flex-col items-center text-6xl font-bold text-indigo-500">
              <div className="flex relative mx-2 items-center">
                <span className="text-4xl text-black">$12</span>
                <StrikethroughAnimation />
              </div>
              <span className="text-sm text-slate-500">per user / month</span>

              <div className="flex items-center">
                <OvalAnimation textData="Free" />
                <div></div>
              </div>
            </div>
          ) : (
            // Parent Container with Flex for Horizontal Alignment
            <div className="flex flex-col  items-center text-6xl font-bold text-indigo-500">
              <div className="flex  relative mx-2 items-center">
                <span className="text-4xl text-black">$120</span>
                <StrikethroughAnimation />
              </div>
              <span className="text-sm text-slate-500">per user / month</span>

              <div className="flex items-center">
                <OvalAnimation textData="Free" />
                <div></div>
              </div>
            </div>
          )}
        </AnimatePresence>
      </div>
      <p className="text-xs text-slate-400 text-center mt-2">
        10+ users: contact us for custom pricing
      </p>

      <motion.button
        whileHover={{ scale: 1.015 }}
        whileTap={{ scale: 0.985 }}
        className="box-shadow py-4 text-white px-8 font-medium z-20 uppercase w-full mt-20"
        onClick={() => {
          const checkoutUrl = process.env.NEXT_PUBLIC_CHECKOUT_URL;
          if (checkoutUrl) {
            window.open(checkoutUrl, "_blank");
          } else {
            // Fallback: open schedule demo or show alert
            window.location.href = "/schedule-demo";
          }
        }}
      >
        Try Now!
      </motion.button>
    </div>

    {/* ENTERPRISE */}
    <div className="w-full bg-white p-6 border-[1px] border-slate-300 rounded-xl">
      <div className="flex flex-col justify-center items-center">
        <p className="text-2xl font-bold mb-2">Enterprise</p>
        {/* <p className="text-lg mb-6">Everything to go public</p> */}
      </div>
      <div className="overflow-hidden mb-16">
        <AnimatePresence mode="wait">
          <div className="mt-10 text-center">
            Get enterprise-level features without the hefty price tag. MeetMemo
            brings the future of meetings to you, at a cost that works
            efficiently for both you and your business.
          </div>
        </AnimatePresence>
      </div>

      <motion.button
        whileHover={{ scale: 1.015 }}
        whileTap={{ scale: 0.985 }}
        className="w-full py-4 mt-12 font-semibold bg-black text-white rounded-lg uppercase"
      >
        <Link href="/schedule-demo" className="inline-block size-full">
          Schedule a Demo
        </Link>
      </motion.button>
    </div>
  </div>
);

const TopLeftCircle = () => {
  return (
    <motion.div
      initial={{ rotate: "0deg" }}
      animate={{ rotate: "360deg" }}
      transition={{ duration: 100, ease: "linear", repeat: Infinity }}
      className="w-[450px] h-[450px] rounded-full border-2 border-slate-500 border-dotted absolute z-0 -left-[250px] -top-[200px]"
    />
  );
};

const BottomRightCircle = () => {
  return (
    <motion.div
      initial={{ rotate: "0deg" }}
      animate={{ rotate: "-360deg" }}
      transition={{ duration: 100, ease: "linear", repeat: Infinity }}
      className="w-[450px] h-[450px] rounded-full border-2 border-slate-500 border-dotted absolute z-0 -right-[250px] -bottom-[200px]"
    />
  );
};
