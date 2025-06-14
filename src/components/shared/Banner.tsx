import React from "react";

const BannerComponent = () => {
  return (
    <div className="lg:relative bg-gray-100">
      <div className="mx-auto w-full max-w-7xl pt-16 pb-20 text-center lg:py-40 lg:text-left">
        <div className="px-6 sm:px-8 lg:w-1/2 xl:pr-16">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
            <span className="block xl:inline">
              India’s First <span className="text-green-700">AI</span> Skincare
            </span>{" "}
            <span className="block text-green-700 xl:inline">
              Vending Machine
            </span>
          </h1>
          <p className="mx-auto mt-3 max-w-md text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
            Personalised skincare, powered by AI — Get instant analysis, product recommendations, and purchase on the spot.
          </p>
          <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
            <div className="rounded-md shadow-sm">
              <a
                href="#"
                className="flex w-full items-center justify-center rounded-md border border-transparent bg-green-800 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 md:px-10 md:py-4 md:text-lg"
              >
                Get a Demo
              </a>
            </div>
            <div className="mt-3 rounded-md shadow-sm sm:mt-0 sm:ml-3">
              <a
                href="#"
                className="flex w-full items-center justify-center rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-green-700 hover:bg-gray-50 md:px-10 md:py-4 md:text-lg"
              >
                Partner With Us
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-64 w-full sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:h-full lg:w-1/2">
        <img
          alt=""
          src="https://cdn.abacus.ai/images/02a9544b-4703-4440-a5f3-23be20881765.png"
          className="absolute inset-0 size-full object-cover"
        />
      </div>
    </div>
  );
};

export default BannerComponent;
