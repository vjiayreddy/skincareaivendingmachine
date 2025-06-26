"use client";

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
const Slider = dynamic(() => import("react-slick"), { ssr: false });

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Sliders = [
  "/images/banner.png",
  "/images/banner1.png",
  "/images/banner.png",
  "/images/banner1.png",
  "/images/banner.png",
];

const HowToWork = () => {
  const [mounted, setMounted] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      id: 1,
      title: "Scan QR Code",
      description: "Scan QR code on the vending machine with your smartphone",
    },
    {
      id: 2,
      title: "Complete Skin Analysis",
      description: "Answer a few questions about your skin concerns",
    },
    {
      id: 3,
      title: "Get Your Skin Profile",
      description: "View your personalized skin profile based on AI analysis",
    },
    {
      id: 4,
      title: "Personalized Product Recommendations",
      description:
        "Products suited to your skin type and condition are displayed",
    },
    {
      id: 5,
      title: "Purchase Instantly",
      description: "Make a cashless purchase directly from the machine",
    },
  ];

  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <>
      <div className="bg-neutral-900">
        <div className="max-w-7xl px-4 xl:px-0 py-10 lg:pt-20 lg:pb-20 mx-auto">
          <div className="max-w-3xl mb-10 lg:mb-14">
            <h2 className="text-white font-semibold text-2xl md:text-4xl md:leading-tight">
              How It&apos;s Work
            </h2>
            <p className="mt-1 text-neutral-400">
              We’re a dynamic group of individuals who are passionate about what
              we do and dedicated to delivering the best results for our
              clients.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 lg:items-center">
            <div className="aspect-w-16 aspect-h-9 lg:aspect-none">
              <div className="w-full h-full rounded-xl overflow-hidden">
                {mounted ? (
                  <Slider
                    dots={true}
                    infinite={true}
                    speed={500}
                    slidesToShow={1}
                    slidesToScroll={1}
                    autoplay={true}
                    autoplaySpeed={4000}
                    arrows={true}
                    className="rounded-xl"
                    beforeChange={(current, next) =>
                      setActiveStep(next % steps.length)
                    }
                    afterChange={(current) =>
                      setActiveStep(current % steps.length)
                    }
                  >
                    {Sliders.map((slider, index) => (
                      <div key={index}>
                        <img
                          className="w-full object-cover rounded-xl h-[300px] md:h-[400px] lg:h-[500px]"
                          src={slider}
                          alt={`Features Image ${index + 1}`}
                        />
                      </div>
                    ))}
                  </Slider>
                ) : (
                  <div className="w-full h-[300px] md:h-[400px] lg:h-[500px] bg-gray-200 rounded-xl flex items-center justify-center">
                    <span className="text-gray-500">Loading slider...</span>
                  </div>
                )}
              </div>
            </div>

            <div>
              <div className="mb-4">
                <h3 className="text-white text-lg font-medium uppercase">
                  Steps
                </h3>
              </div>

              {steps.map((step, index) => (
                <div key={step.id} className="flex gap-x-5 ms-1">
                  <div className="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-neutral-800">
                    <div className="relative z-10 size-8 flex justify-center items-center">
                      <span
                        className={`flex shrink-0 justify-center items-center size-8 border transition-all duration-300 ${
                          index === activeStep
                            ? "border-green-500 bg-green-500/20"
                            : "border-green-800"
                        } ${
                          index === activeStep
                            ? "text-green-400 scale-110"
                            : "text-green-500"
                        } font-semibold text-xs uppercase rounded-full`}
                      >
                        {step.id}
                      </span>
                    </div>
                  </div>

                  <div className="grow pt-0.5 pb-8 sm:pb-12">
                    <p className="text-sm md:text-base text-neutral-400">
                      <span
                        className={`${
                          index === activeStep ? "text-green-400" : "text-white"
                        } transition-colors duration-300`}
                      >
                        {step.title} :{" "}
                      </span>
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}

              <a
                className="group inline-flex items-center gap-x-2 py-2 px-3 bg-green-500 font-medium text-sm text-neutral-800 rounded-full focus:outline-hidden"
                href="#"
              >
                <svg
                  className="shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  <path
                    className="opacity-0 group-hover:opacity-100 group-focus:opacity-100 group-hover:delay-100 transition"
                    d="M14.05 2a9 9 0 0 1 8 7.94"
                  />
                  <path
                    className="opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition"
                    d="M14.05 6A5 5 0 0 1 18 10"
                  />
                </svg>
                Get a Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HowToWork;
