"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

const HeroBannerTwo = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animations after component mounts
    setIsVisible(true);
  }, []);

  return (
    <div className="relative h-screen overflow-hidden bg-[url('/images/bgimage.png')] bg-cover bg-center">
      {/* Overlay for better text readability */}

      {/* Main content container */}
      <div className="relative z-10 h-full flex flex-col items-center justify-between pt-30 pb-0 max-w-6xl mx-auto px-4 text-center text-white">
        {/* Main heading with highlighted text */}
        <p
          className={`text-lg block sm:hidden md:text-base lg:text-lg max-w-2xl mx-auto mb-5 transition-all duration-700 delay-500 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          Personalized skincare, powered by AI
          <span className="font-medium">anywhere and everywhere.</span>
        </p>
        <h1
          className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-2 transition-all duration-700 transform ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "-translate-y-10 opacity-0"
          }`}
        >
          India&apos;s 1st{" "}
          <span className="inline-block bg-gradient-to-r from-[#DDA979] via-[#DDC379] to-[#E9DA96] text-transparent bg-clip-text">
            AI Powered
          </span>
        </h1>
        <h1
          className={`text-4xl md:text-4xl lg:text-5xl font-bold mb-6 transition-all duration-700 delay-300 transform ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "-translate-y-10 opacity-0"
          }`}
        >
          Skincare Vending Machine
        </h1>

        {/* Subheading text */}
        <p
          className={`text-lg hidden sm:block md:text-base lg:text-lg max-w-2xl mx-auto mb-5 transition-all duration-700 delay-500 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          Personalized skincare, powered by AI - get instant analysis,
          <br />
          product recommendations, and purchase on the spot,
          <br />
          <span className="font-medium">anywhere and everywhere.</span>
        </p>
        <div className="relative w-full max-w-md mx-auto mt-auto mb-0">
          {/* Rectangular border around vending machine */}
          <div
            className={`relative mx-auto w-fit transition-all duration-1000 delay-700 transform ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-20 opacity-0"
            }`}
          >
            {/* Outer border frame */}
            <div
              className={` absolute w-[100%] sm:w-[120%] md:w-[120%] lg:w-[120%] xl:w-[120%] h-[80%] bottom-0 left-1/2 transform -translate-x-1/2 rounded-t-lg border-t border-l border-r border-gray-400 transition-all duration-1000 delay-1000 ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}
            ></div>
            {/* Vending machine image */}
            <Image
              src="/images/vending-machie.png"
              alt="AI Powered Skincare Vending Machine"
              width={320}
              height={500}
              className="relative z-10 mx-auto w-80 md:w-80 h-auto"
            />
          </div>

          {/* Info cards */}
          <div
            className={`absolute -left-2 bottom-20 md:-left-20 lg:-left-25 bg-white rounded-xl p-3 shadow-lg text-left transition-all duration-700 delay-1200 transform ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-20 opacity-0"
            }`}
          >
            <h3 className="font-bold text-black text-sm">Boost Growth</h3>
            <p className="text-gray-600 text-xs">Increase sales by 15-20%</p>
          </div>

          <div
            className={`absolute -right-6 top-1/4 md:-right-20 lg:-right-30 bg-white rounded-xl p-3 shadow-lg text-left transition-all duration-700 delay-1200 transform ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-20 opacity-0"
            }`}
          >
            <h3 className="font-bold text-black text-sm">Data analytics</h3>
            <p className="text-gray-600 text-xs">Improve customer experience</p>
          </div>

          {/* Contact Us button */}
          <div
            className={`absolute -bottom-10 left-1/2 -translate-x-1/2 transition-all duration-700 delay-1500 transform ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <button className="bg-black bg-opacity-60 text-white px-6 py-2 rounded-full border border-gray-600 hover:bg-opacity-80 transition-all duration-300">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeroBannerTwo;
