"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FiMenu, FiArrowRight } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = ["Use Cases", "Pricing", "About Us"];

  return (
    <div className="relative max-w-4xl w-full md:mx-auto p-2 md:p-5">
      <nav className="rounded-full overflow-hidden shadow-lg">
        <div className="gradient-bg p-[2px] rounded-full">
          <div className="p-2 backdrop-blur-sm rounded-full flex items-center justify-between size-full relative z-10">
            <div className="w-full flex justify-between lg:justify-normal items-center gap-6">
              <Link href="/" className="ml-2">
                <Image
                  src="/logo_dark-cropped.svg"
                  alt="Logo"
                  width={30}
                  height={35}
                  className="rounded"
                />
              </Link>
              {navLinks.map((link) => (
                <NavLink key={link} text={link} />
              ))}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="block lg:hidden text-gray-950 text-2xl"
                onClick={() => setIsOpen((prev) => !prev)}
              >
                <FiMenu className="text-white" />
              </motion.button>
            </div>
            <div className="hidden lg:flex items-center gap-4">
              <DemoButton navMenu={false} />
            </div>
          </div>
        </div>
      </nav>
      <NavMenu isOpen={isOpen} setIsOpen={setIsOpen} navLinks={navLinks} />
    </div>
  );
};

const NavLink = ({ text }: { text: string }) => (
  <a
    href="#"
    rel="nofollow"
    className="hidden lg:block h-[30px] overflow-hidden font-medium"
  >
    <motion.div whileHover={{ y: -30 }}>
      {[0, 1, 2].map((index) => (
        <span key={index} className="flex items-center h-[30px] text-white">
          {text}
        </span>
      ))}
    </motion.div>
  </a>
);

const DemoButton = ({ navMenu }: { navMenu: boolean }) => (
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className={cn(
      "rounded-full px-6 py-3 font-medium whitespace-nowrap bg-[#7054F0] text-white",
      navMenu && "w-full"
    )}
  >
    <Link href="/schedule-demo">Get Started Free</Link>
  </motion.button>
);

const NavMenu = ({
  isOpen,
  setIsOpen,
  navLinks,
}: {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  navLinks: string[];
}) => (
  <motion.div
    initial={false}
    animate={isOpen ? "open" : "closed"}
    variants={menuVariants}
    className="absolute p-4 m-2 bg-white shadow-xl border z-50 left-0 right-0 top-full origin-top flex flex-col gap-4 rounded-lg"
  >
    {navLinks.map((link) => (
      <MenuLink key={link} text={link} onClick={() => setIsOpen(false)} />
    ))}
    <div className="flex items-center gap-4">
      <DemoButton navMenu={true} />
    </div>
  </motion.div>
);

const MenuLink = ({ text, onClick }: { text: string; onClick: () => void }) => (
  <motion.a
    onClick={onClick}
    variants={menuLinkVariants}
    rel="nofollow"
    href="#"
    className="h-[30px] overflow-hidden font-medium text-lg flex items-start gap-2"
  >
    <motion.span variants={menuLinkArrowVariants}>
      <FiArrowRight className="h-[30px] text-gray-950" />
    </motion.span>
    <motion.div whileHover={{ y: -30 }}>
      <span className="flex items-center h-[30px] text-gray-500">{text}</span>
      <span className="flex items-center h-[30px] text-indigo-600">{text}</span>
    </motion.div>
  </motion.a>
);

const menuVariants = {
  open: {
    scaleY: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
  closed: {
    scaleY: 0,
    transition: {
      when: "afterChildren",
      staggerChildren: 0.1,
    },
  },
};

const menuLinkVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: -10,
    opacity: 0,
  },
};

const menuLinkArrowVariants = {
  open: {
    x: 0,
  },
  closed: {
    x: -4,
  },
};

export default Navbar;
