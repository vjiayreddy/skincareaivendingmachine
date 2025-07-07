"use client";
import React, { useEffect, useRef, useState } from "react";
import DotShape from "./DotShaped";
import HeroHeadings from "./Headings";

const HomeHeroBanner = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const trigger = useRef<HTMLButtonElement | any>(null);
  const modal = useRef<HTMLDivElement>(null);

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }: any) => {
      if (!modal.current) return;
      if (
        !modalOpen ||
        modal.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setModalOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: any) => {
      if (!modalOpen || keyCode !== 27) return;
      setModalOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  return (
    <>
      <div className="relative py-16 px-4 lg:pb-[110px] lg:pt-[90px] bg-gradient-to-br from-blue-50 via-white to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-3 lg:px-0 xxl:px-0 xl:px-0">
          <div className="flex flex-wrap items-center justify-center lg:justify-between">
            <HeroHeadings />
            <div className="hidden px-4 lg:block lg:w-1/12"></div>
            <div className="w-full md:w-8/12 lg:w-6/12 mt-12 lg:mt-0">
              <div className="mx-auto text-center">
                <div className="relative z-10 mt-16 inline-block lg:mt-0">
                  <img
                    src="/images/ai_vm.jpeg"
                    alt="hero"
                    className="mx-auto h-[500px] max-w-full rounded-lg shadow-xl"
                  />
                  <div className="absolute inset-0 flex h-full w-full items-center justify-center">
                    <button
                      ref={trigger}
                      onClick={() => setModalOpen(!modalOpen)}
                      className="flex h-[70px] w-[70px] items-center justify-center rounded-full bg-white bg-opacity-75 duration-300 hover:bg-opacity-100 hover:shadow-xl"
                    >
                      <svg
                        width="12"
                        height="15"
                        viewBox="0 0 12 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.5 6.63397C12.1667 7.01888 12.1667 7.98112 11.5 8.36602L1.75 13.9952C1.08333 14.3801 0.249999 13.899 0.249999 13.1292L0.25 1.87083C0.25 1.10103 1.08333 0.619909 1.75 1.00481L11.5 6.63397Z"
                          fill="#3056D3"
                        />
                      </svg>
                    </button>
                  </div>
                  <span className="absolute -right-6 -top-6 z-[-1]">
                    <DotShape />
                  </span>
                  <span className="absolute -bottom-6 -left-6 z-[-1]">
                    <DotShape />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`fixed left-0 top-0 z-50 flex h-screen w-full items-center justify-center bg-black bg-opacity-70 ${
            modalOpen ? "block" : "hidden"
          }`}
        >
          <div
            ref={modal}
            onFocus={() => setModalOpen(true)}
            onBlur={() => setModalOpen(false)}
            className="mx-auto w-full max-w-[550px] bg-white"
          >
            <iframe
              className="h-[320px] w-full"
              src={
                modalOpen === true
                  ? "https://www.youtube.com/embed/LXb3EKWsInQ?autoplay=1&mute=1"
                  : ""
              }
            ></iframe>
          </div>

          <button
            onClick={() => setModalOpen(false)}
            className="absolute right-0 top-0 flex h-20 w-20 cursor-pointer items-center justify-center text-body-color hover:bg-black"
          >
            <svg viewBox="0 0 16 15" className="h-8 w-8 fill-current">
              <path d="M3.37258 1.27L8.23258 6.13L13.0726 1.29C13.1574 1.19972 13.2596 1.12749 13.373 1.07766C13.4864 1.02783 13.6087 1.00141 13.7326 1C13.9978 1 14.2522 1.10536 14.4397 1.29289C14.6272 1.48043 14.7326 1.73478 14.7326 2C14.7349 2.1226 14.7122 2.24439 14.6657 2.35788C14.6193 2.47138 14.5502 2.57419 14.4626 2.66L9.57258 7.5L14.4626 12.39C14.6274 12.5512 14.724 12.7696 14.7326 13C14.7326 13.2652 14.6272 13.5196 14.4397 13.7071C14.2522 13.8946 13.9978 14 13.7326 14C13.6051 14.0053 13.478 13.984 13.3592 13.9375C13.2404 13.8911 13.1326 13.8204 13.0426 13.73L8.23258 8.87L3.38258 13.72C3.29809 13.8073 3.19715 13.8769 3.08559 13.925C2.97402 13.9731 2.85405 13.9986 2.73258 14C2.46737 14 2.21301 13.8946 2.02548 13.7071C1.83794 13.5196 1.73258 13.2652 1.73258 13C1.73025 12.8774 1.753 12.7556 1.79943 12.6421C1.84586 12.5286 1.91499 12.4258 2.00258 12.34L6.89258 7.5L2.00258 2.61C1.83777 2.44876 1.74112 2.23041 1.73258 2C1.73258 1.73478 1.83794 1.48043 2.02548 1.29289C2.21301 1.10536 2.46737 1 2.73258 1C2.97258 1.003 3.20258 1.1 3.37258 1.27Z" />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};

export default HomeHeroBanner;
