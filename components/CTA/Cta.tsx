import Link from "next/link";
import React from "react";

const Cta = () => {
  return (
    <div>
      <div className="flex justify-center gap-4 flex-col items-center relative max-w-[21rem] mx-auto lg:max-w-4xl w-full lg:px-12 px-8 lg:py-16 py-8  bg-[rgba(255,_255,_255,_0.01)] overflow-hidden border border-gray-200 rounded-[32px]  ">
        <div className="">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className=" absolute  -translate-x-[52%]  -translate-y-[52%]"
              width="1251"
              height="800"
              viewBox="0 0 1758 1571"
              fill="none"
            >
              <g filter="url(#filter0_f_495_2864)">
                <path
                  d="M352.651 880.119C350.651 719.155 347.85 388.135 352.651 351.763H409.52V881.002L352.651 880.119Z"
                  fill="#6950FC"
                ></path>
                <path
                  d="M817.805 1220.88L352.651 917.197H434.829L881.977 1197.04L1329.12 917.197H1408L949.349 1220.88L881.977 1197.04L817.805 1220.88Z"
                  fill="#6950FC"
                ></path>
                <path
                  d="M1351.13 879.237C1349.13 718.273 1346.33 387.252 1351.13 350.88H1408V880.119L1351.13 879.237Z"
                  fill="#6950FC"
                ></path>
              </g>
              <defs>
                <filter
                  id="filter0_f_495_2864"
                  x="0"
                  y="0.880371"
                  width="1758"
                  height="1570"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood
                    floodOpacity="0"
                    result="BackgroundImageFix"
                  ></feFlood>
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  ></feBlend>
                  <feGaussianBlur
                    stdDeviation="175"
                    result="effect1_foregroundBlur_495_2864"
                  ></feGaussianBlur>
                </filter>
              </defs>
            </svg>
          </div>
        </div>
        <div>
          <p className="text-black font-semibold tracking-normal lg:-tracking-[2px] text-2xl text-center lg:text-4xl ">
            Automate your meeting notes
          </p>
        </div>
        <div>
          <p className="text-[#959499] text-xl lg:text-xl font-normal  tracking-normal lg:-tracking-[1px] text-center">
            For large businesses that needs more control, dedicated support and
            a customized experience, we have our self-hosted offering.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center gap-8">
          {/* <div className="flex justify-center items-center gap-4 flex-row text-sm text-black">
            <p>SAAS</p>
            <p>.</p>
            <p>Products</p>
            <p>.</p>
            <p>AI Automations</p>
          </div> */}
          <div className="z-10">
            <Link href="/schedule-demo">
              <button className="box-shadow py-4 text-white px-8 font-medium z-20 bg-[#7054F0] rounded-full">
                Get Started Free
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cta;
