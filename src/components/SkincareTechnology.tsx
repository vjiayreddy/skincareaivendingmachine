import React from 'react';
import Image from 'next/image';

const SkincareTechnology = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A4D68] mb-4">SOFTWARE SECTION</h2>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-12">
          {/* Skincare Experience */}
          <div className="max-w-4xl">
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">
              Unmatched Skincare Experience from Start to Finish
            </h3>
            <p className="text-lg text-gray-700 mb-6">
              When paired with our state-of-the-art AI skincare analysis engine, the{" "}
              <span className="text-red-600 font-medium">Leafwater</span> Vending
              Machine transforms retail into a perfect blend of precision and luxury. It offers the ease of
              online shopping—
              <span className="text-red-600 font-medium">personalized</span> to your skin—combined with the warmth of in-person
              skincare expertise. Customers can instantly discover the right products for their unique skin
              needs, backed by dermatologist-grade AI recommendations.
            </p>
          </div>
        </div>

        {/* Brand Story Section */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-gray-50 rounded-xl overflow-hidden">
          <div className="p-8">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              Let Your Technology Tell Your Brand Story
            </h3>
            <p className="text-lg text-gray-700">
              Every Leafwater Vending Machine interface is designed to reflect your brand's identity—right 
              down to the smallest detail. From the on-screen experience to the way recommendations are 
              presented, the system speaks your language, tells your story, and strengthens your presence in
              every location.
            </p>
          </div>
          
          <div className="relative h-72 sm:h-80 md:h-96 w-full">
            <div className="h-full w-full p-6 flex items-center justify-center">
              <div className="relative w-full h-full rounded-lg overflow-hidden">
                <Image
                  src="/images/ai-engine-icon.png" 
                  alt="Skincare Analysis Interface"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <h4 className="text-xl font-semibold text-gray-800 mb-2">Personalized Analysis</h4>
            <p className="text-gray-600">
              Advanced AI technology assesses skin condition and recommends products tailored to individual needs.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
              </svg>
            </div>
            <h4 className="text-xl font-semibold text-gray-800 mb-2">Customizable Interface</h4>
            <p className="text-gray-600">
              Brand-aligned UI design that ensures consistent customer experience across all touchpoints.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h4 className="text-xl font-semibold text-gray-800 mb-2">Data Analytics</h4>
            <p className="text-gray-600">
              Comprehensive insights into customer preferences and product performance to optimize your business.
            </p>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-xl p-8 text-white text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Transform Your Skincare Retail Experience</h3>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Join the revolution in skincare retail with our AI-powered vending machines that deliver personalized experiences.
          </p>
          <button className="bg-white text-blue-700 font-medium py-3 px-6 rounded-md hover:bg-gray-100 transition-colors duration-300">
            Request Demo
          </button>
        </div>
      </div>
    </section>
  );
};

export default SkincareTechnology;
