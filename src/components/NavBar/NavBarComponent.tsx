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
    <header className="flex border-b border-gray-200 w-full items-center bg-white dark:bg-dark">
      <div className="px-6 w-7xl mx-auto">
        <div className="relative  -mx-4 flex items-center justify-between">
          <div className="w-60 max-w-full px-4">
            <Link href="/#" className="block w-full py-5 lg:py-3">
              <img
                src="/images/logo/logo.svg"
                alt="logo"
                className="dark:hidden"
              />
              <img
                src="/images/logo/logo.svg"
                alt="logo"
                className="hidden dark:block"
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
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color dark:bg-white"></span>
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color dark:bg-white"></span>
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color dark:bg-white"></span>
              </button>
              <nav
                className={`absolute right-4 top-full z-50 w-full max-w-[250px] justify-center justify-end rounded-lg bg-white  py-5 shadow dark:bg-dark-2 lg:static lg:flex lg:w-full lg:max-w-full lg:bg-transparent lg:py-0 lg:shadow-none ${
                  !open && "hidden"
                } `}
              >
                <ul className="block lg:flex">
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
