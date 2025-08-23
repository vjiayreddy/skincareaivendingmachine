"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function CustomBusinessSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("custom-business-section");
      if (element) {
        const position = element.getBoundingClientRect();
        if (position.top < window.innerHeight - 100) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check on initial render

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      id="custom-business-section"
      className="py-24 bg-gray-50 overflow-hidden relative"
    >
      {/* Background circle decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gray-200 rounded-full transform translate-x-1/2 -translate-y-1/4 opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gray-200 rounded-full transform -translate-x-1/3 translate-y-1/3 opacity-30"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left side with image */}
          <div
            className={`md:w-1/2 transition-all duration-1000 transform ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-20 opacity-0"
            }`}
          >
            <div className="mx-auto w-[100%] h-[100%] sm:w-[80%] sm:h-[80%] md:w-[70%] md:h-[70%] lg:w-[60%] lg:h-[60%] xl:w-[60%] xl:h-[60%] relative">
              <Image
                src="/images/unparalled.png"
                alt="AI Powered Skincare Vending Machine"
                width={300}
                height={300}
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          {/* Right side with content */}
          <div className="md:w-1/2 md:pl-8">
            <h2
              className={`text-3xl md:text-4xl font-bold text-gray-800 mb-4 transition-all duration-700 transform ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              Unparalleled Customizability
              <span className="">for your business</span>
            </h2>
            <p
              className={`text-gray-600 mb-8 transition-all duration-700 delay-300 transform ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              One solution, built from the ground up — intelligent hardware
              paired with proprietary AI software for a truly automated retail
              experience.
            </p>
            <div
              className={`transition-all duration-700 delay-500 transform ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <Link
                href="/contact-us"
                className="inline-flex items-center justify-center px-6 py-3 bg-[#356A5A] text-white font-medium rounded-md hover:bg-green-800 transition-colors duration-300"
              >
              Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
