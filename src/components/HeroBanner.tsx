import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function HeroBanner() {
  return (
    <div className="relative bg-gray-900 overflow-hidden">
      {/* Dark overlay with slight opacity */}
      <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
      
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gray-800">
          {/* Would be replaced with actual image in production */}
          <div className="w-full h-full opacity-30 bg-[url('/images/background.jpg')]" 
               style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-20">
        <div className="relative pt-6 pb-16 sm:pb-24">
          {/* Navigation will be part of Navbar component */}
          
          <main className="mt-16 sm:mt-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6">
              <div className="text-center md:flex md:items-center md:justify-between md:space-x-8 lg:space-x-16">
                <div className="md:w-1/2 md:text-left">
                  <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                    <span className="block">India&apos;s 1st AI-Powered</span>
                    <span className="block text-green-400">Skincare Vending Machine</span>
                  </h1>
                  <p className="mt-3 max-w-md mx-auto text-base text-gray-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl md:mx-0">
                    Revolutionary vending machines that analyze skin conditions in real-time and recommend personalized skincare products.
                  </p>
                  <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row justify-center md:justify-start gap-4">
                    <Link 
                      href="/contact-us" 
                      className="rounded-md shadow px-6 py-3 bg-[#356A5A] text-white font-medium hover:bg-[#356A5A] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition duration-150"
                    >
                      Request a Demo
                    </Link>
                    <Link 
                      href="/manufacturing" 
                      className="rounded-md px-6 py-3 bg-transparent text-white font-medium border border-green-400 hover:bg-green-900 hover:bg-opacity-20 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition duration-150"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
                <div className="mt-12 relative md:w-1/2 md:mt-0">
                  <div className="relative mx-auto w-full max-w-md">
                    {/* Vending machine image with chat bubble */}
                    <div className="relative">
                      <Image 
                        src="/images/vending-machine.png" 
                        alt="AI Skincare Vending Machine" 
                        width={400} 
                        height={600} 
                        className="mx-auto object-contain"
                        priority
                      />
                      
                      {/* Chat bubble overlay */}
                      <div className="absolute top-0 right-0 bg-white rounded-xl p-3 shadow-lg transform translate-x-1/4 -translate-y-1/4">
                        <p className="text-xs font-medium text-gray-800">How can I help with your skin?</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
