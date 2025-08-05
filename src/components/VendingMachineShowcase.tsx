import React from 'react';

export default function VendingMachineShowcase() {
  return (
    <section className="py-16 bg-gradient-to-br from-indigo-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Product Demo</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            The Future of Skincare Retail
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Our AI-powered vending machines offer personalized skincare recommendations through advanced skin analysis.
          </p>
        </div>

        <div className="mt-16 lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div className="relative h-64 sm:h-72 md:h-96 lg:h-full lg:max-h-[500px]">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-xl shadow-lg p-6 flex items-center justify-center">
              {/* Placeholder for vending machine image */}
              <div className="relative w-full h-full bg-white rounded-lg shadow-inner flex flex-col items-center justify-center p-4">
                <div className="w-full h-3/4 bg-gray-100 rounded-t-lg flex items-center justify-center">
                  <span className="text-gray-400">Interactive Touch Screen</span>
                </div>
                <div className="w-full h-1/4 bg-gray-200 rounded-b-lg flex items-center justify-center">
                  <span className="text-gray-500">Product Dispensing Area</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-10 lg:mt-0">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Experience the Revolution in Skincare
            </h3>
            
            <dl className="space-y-10">
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <dt className="text-lg leading-6 font-medium text-gray-900">
                    AI Skin Analysis
                  </dt>
                  <dd className="mt-2 text-base text-gray-500">
                    Advanced computer vision identifies skin type, concerns, and optimal product matches in seconds.
                  </dd>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <dt className="text-lg leading-6 font-medium text-gray-900">
                    Premium Product Selection
                  </dt>
                  <dd className="mt-2 text-base text-gray-500">
                    Each machine is stocked with high-quality skincare products curated for different skin types and concerns.
                  </dd>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <dt className="text-lg leading-6 font-medium text-gray-900">
                    Seamless Experience
                  </dt>
                  <dd className="mt-2 text-base text-gray-500">
                    Intuitive touchscreen interface makes selecting and purchasing products quick and easy.
                  </dd>
                </div>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
