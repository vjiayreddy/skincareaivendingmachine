"use client";
import React, { useState } from "react";
import ListItem from "./NavLink";
import Link from "next/link";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Vending Machine", href: "/vending-machine" },
  { name: "Manufacturing", href: "/manufacturing" },
  { name: "Faq", href: "/faqs" },
];

const NavigationBar = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="flex border-b border-gray-200 w-full  items-center bg-[#356A5A]  text-white fixed top-0 left-0 right-0 z-50 shadow-sm">
      <div className="px-6 w-full mx-auto">
        <div className="relative  -mx-4 flex items-center justify-between">
          <div className="w-60 max-w-full px-4">
            <Link href="/#" className="block w-full py-5 lg:py-3">
              <img
                src="https://leafwater.in/logos/logo_gold_white.png"
                alt="logo"
              />
            </Link>
          </div>
          <div className="flex w-full items-center justify-between px-4">
            <div className="w-full">
              <button
                onClick={() => setOpen(!open)}
                className={` ${
                  open && "navbarTogglerActive"
                } absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden`}
              >
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-white "></span>
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-white "></span>
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-white "></span>
              </button>
              <nav
                className={`absolute right-4 top-full z-50 w-full max-w-[250px] rounded-lg bg-white py-4 px-6 shadow-lg border border-gray-100 dark:bg-dark-2 dark:border-gray-700 lg:static lg:flex lg:w-full lg:max-w-full lg:bg-transparent lg:py-0 lg:px-0 lg:border-0 lg:shadow-none lg:justify-end ${
                  !open && "hidden"
                } `}
              >
                <ul className="block space-y-3 lg:space-y-0 lg:flex lg:items-center lg:justify-end lg:gap-8 lg:ml-auto">
                  {navItems.map((item) => (
                    <ListItem key={item.name} NavLink={item.href}>
                      {item.name}
                    </ListItem>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavigationBar;
