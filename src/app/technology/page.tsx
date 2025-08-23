import React from "react";
import Image from "next/image";

const TechnologyPage = () => {
  return (
    <div className="overflow-x-hidden min-h-screen bg-white">
      <div className="w-full">
        <Image
          alt="Manufacturing facility for skincare vending machines"
          src="/images/technology.png"
          width={1920}
          height={800}
          className="aspect-[7/4] sm:aspect-[7/3] md:aspect-[7/2.5] lg:aspect-[7/2] w-full object-cover"
        />
      </div>
      
      {/* Header Section */}
      <div className="mx-auto bg-white mt-16 sm:mt-20 md:mt-24 lg:mt-32 pb-12 px-6 lg:px-8 max-w-7xl">
        <div className="mx-auto w-full">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4 sm:mb-6">
            Technology Section
          </h2>
          <h3 className="text-2xl font-bold text-gray-800 mb-4 sm:mb-6">
            Unmatched Performance, Elegance and Adaptability
          </h3>
          <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-600 w-full">
            At Leafwater, we believe in technology that elevates the customer experience. Our vending machines are built with precision engineering, designed with aesthetic perfection, and powered by cutting-edge technology to deliver an unparalleled skincare discovery journey.
          </p>
        </div>
      </div>

      {/* Imitated, but Never Replicated Section */}
      <div className="relative bg-white mx-auto mt-5 max-w-7xl px-6 sm:mt-10 lg:px-8">
        <div className="mx-auto max-w-7xl flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Image Container - Top on mobile, Left on desktop */}
          <div className="w-full lg:w-1/2 order-1">
            <div className="relative h-64 sm:h-80 md:h-96 lg:h-[500px] w-full">
              <Image
                alt="AI Powered Skincare Vending Machine"
                src="/images/ai-engine.png"
                fill
                className="rounded-lg object-cover object-center shadow-md"
              />
            </div>
          </div>

          {/* Content Container - Bottom on mobile, Right on desktop */}
          <div className="w-full lg:w-1/2 order-2 flex items-center">
            <div className="py-8 lg:py-12">
              <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl mb-6">
                Imitated, but Never Replicated
              </h2>
              <p className="text-lg text-gray-700">
                The Leafwater AI Skincare Vending Machine sets a new standard for automated beauty retail. 
                Engineered with precision and powered by our proprietary AI Skin Analysis Engine, every unit 
                delivers unmatched performance, elegance, and adaptability. Our intelligent design ensures 
                each customer receives a skincare experience as refined as an in-person consultation—with the 
                convenience of self-service.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* GentleCare™ Dispensing Section */}
      <div className="relative bg-white mx-auto mt-5 max-w-7xl px-6 sm:mt-10 lg:px-8">
        <div className="mx-auto max-w-7xl flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Image Container - Top on mobile, Right on desktop */}
          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <div className="relative h-64 sm:h-80 md:h-96 lg:h-[500px] w-full">
              <Image
                alt="GentleCare Dispensing Technology"
                src="/images/dispensing.png"
                fill
                className="rounded-lg object-cover object-center shadow-md"
              />
            </div>
          </div>

          {/* Content Container - Bottom on mobile, Left on desktop */}
          <div className="w-full lg:w-1/2 order-2 lg:order-1 flex items-center">
            <div className="py-8 lg:py-12">
              <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl mb-6">
                GentleCare™ Dispensing
              </h2>
              <p className="text-lg text-gray-700">
                Your skincare products deserve delicate handling. GentleCare™ ensures that every product—from 
                fragile glass serum bottles to lightweight sheet masks—is dispensed with the same care as a 
                luxury store assistant. This dramatically reduces product damage, leakage, and returns, 
                ensuring customers receive their products in pristine condition—every single time.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* FlexiClip™ Merchandising Section */}
      <div className="relative bg-white mx-auto mt-5 max-w-7xl px-6 sm:mt-10 lg:px-8">
        <div className="mx-auto max-w-7xl flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Image Container - Top on mobile, Left on desktop */}
          <div className="w-full lg:w-1/2 order-1">
            <div className="relative h-64 sm:h-80 md:h-96 lg:h-[500px] w-full">
              <Image
                alt="FlexiClip Merchandising System"
                src="/images/flexi-clip.png"
                fill
                className="rounded-lg object-cover object-center shadow-md"
              />
            </div>
          </div>

          {/* Content Container - Bottom on mobile, Right on desktop */}
          <div className="w-full lg:w-1/2 order-2 flex items-center">
            <div className="py-8 lg:py-12">
              <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl mb-6">
                FlexiClip™ Merchandising
              </h2>
              <p className="text-lg text-gray-700">
                Our FlexiClip™ coil-less merchandising system gives you total flexibility to display and 
                dispense a wide variety of skincare items—from miniature travel-size creams to full-sized 
                product kits—without obstruction. With fine-tuned adjustments, your machine can adapt to 
                seasonal offers, new product lines, and changing merchandising needs.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Secure Intelligent Retrieval Section */}
      <div className="relative bg-white mx-auto mt-5 max-w-7xl px-6 sm:mt-10 lg:px-8">
        <div className="mx-auto max-w-7xl flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Image Container - Top on mobile, Right on desktop */}
          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <div className="relative h-64 sm:h-80 md:h-96 lg:h-[500px] w-full">
              <Image
                alt="Secure Intelligent Retrieval System"
                src="/images/Intelligent.png"
                fill
                className="rounded-lg object-cover object-center shadow-md"
              />
            </div>
          </div>

          {/* Content Container - Bottom on mobile, Left on desktop */}
          <div className="w-full lg:w-1/2 order-2 lg:order-1 flex items-center">
            <div className="py-8 lg:py-12">
              <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl mb-6">
                Secure Intelligent Retrieval
              </h2>
              <p className="text-lg text-gray-700">
                Security and presentation go hand-in-hand. The Leafwater retrieval system keeps products 
                protected until purchase, maintaining a clean, elegant showcase. Audio-visual cues guide 
                the customer, and advanced light sensors ensure the retrieval area is clear before 
                closing—offering both safety and peace of mind.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Hygiene & Safety First Section */}
      <div className="relative bg-white mx-auto mt-5 max-w-7xl px-6 sm:mt-10 lg:px-8">
        <div className="mx-auto max-w-7xl flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Image Container - Top on mobile, Left on desktop */}
          <div className="w-full lg:w-1/2 order-1">
            <div className="relative h-64 sm:h-80 md:h-96 lg:h-[500px] w-full">
              <Image
                alt="Hygiene and Safety Features"
                src="/images/Hygiene.png"
                fill
                className="rounded-lg object-cover object-center shadow-md"
              />
            </div>
          </div>

          {/* Content Container - Bottom on mobile, Right on desktop */}
          <div className="w-full lg:w-1/2 order-2 flex items-center">
            <div className="py-8 lg:py-12">
              <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl mb-6">
                Hygiene & Safety First
              </h2>
              <p className="text-lg text-gray-700">
                Every Leafwater machine is designed with customer safety and hygiene in mind. Optional UV-C 
                sanitizing technology keeps the dispensing area clean, while inventory-monitoring cameras 
                and PCI-compliant unattended payment systems ensure secure transactions. Whether monitoring 
                refrigeration for temperature-sensitive skincare products or running remote diagnostics, 
                our software gives easy access to all key operational controls.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Battle-Tested, Beauty-Focused Technology Section */}
      <div className="relative bg-white mx-auto mt-10 mb-20 max-w-7xl px-6 sm:mt-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl mb-8 text-center">
            Battle-Tested, Beauty-Focused Technology
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">GentleCare™ Dispensing</h3>
              <p className="text-gray-700">Eliminates drops, shakes, and product mishandling—ensuring flawless handoff every time.</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">FlexiClip™ Merchandising</h3>
              <p className="text-gray-700">Coil-free and adaptable to dispense everything from sheet masks to premium skincare kits.</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">ISO 9001:2015 Certified</h3>
              <p className="text-gray-700">Built to the highest global standards for reliability and durability.</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Patented Sanitation System</h3>
              <p className="text-gray-700">Maintains a hygienic environment, crucial for skincare product integrity.</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Variable Weight Precision</h3>
              <p className="text-gray-700">Accurately dispenses products of varying sizes and weights without error.</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Reinforced Base Design</h3>
              <p className="text-gray-700">Ensures stability and protection for delicate skincare inventory.</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Intelligent Retrieval Gate</h3>
              <p className="text-gray-700">Dual-phase security that opens on purchase and closes only after confirmed retrieval.</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Real-Time Tracking</h3>
              <p className="text-gray-700">Instantly know stock levels, bestsellers, and replenishment needs.</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Full-Width Display</h3>
              <p className="text-gray-700">Showcase your range beautifully while promoting products via high-definition visuals.</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Global Payment Integration</h3>
              <p className="text-gray-700">Accept contactless payments, Apple Pay, Google Wallet, and over 25 global payment processors.</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Customizable Branding</h3>
              <p className="text-gray-700">Personalize the interface, AI consultation scripts, and promotions to reflect your skincare brand.</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Ergonomic, Inclusive Design</h3>
              <p className="text-gray-700">User-friendly touchscreen placement and retrieval area ensure accessibility for all customers.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnologyPage;
