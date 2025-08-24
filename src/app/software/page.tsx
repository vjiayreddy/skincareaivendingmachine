import React from "react";
import Image from "next/image";

const SoftwarePage = () => {
  return (
    <div className="overflow-x-hidden min-h-screen   bg-white">
      <div className="w-full">
        <Image
          alt="Manufacturing facility for skincare vending machines"
          src="/images/software_2.png"
          width={1920}
          height={800}
          className="aspect-[7/4] sm:aspect-[7/3] md:aspect-[7/2.5] lg:aspect-[7/2] w-full object-cover"
        />
      </div>
      <div className="mx-auto bg-white mt-16 sm:mt-20 md:mt-24 lg:mt-32 pb-12 px-6 lg:px-8 max-w-7xl">
        <div className="mx-auto w-full">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4 sm:mb-6">
            Software Section
          </h2>
          <h3 className="text-2xl  font-bold text-gray-800 mb-4 sm:mb-6">
            Unmatched Skincare Experience from Start to Finish
          </h3>
          <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-600 w-full">
            When paired with our state-of-the-art AI skincare analysis engine,
            the Leafwater Vending Machine transforms retail into a perfect blend
            of precision and luxury. It offers the ease of online
            shopping—personalized to your skin—combined with the warmth of
            in-person skincare expertise. Customers can instantly discover the
            right products for their unique skin needs, backed by
            dermatologist-grade AI recommendations.
          </p>
        </div>
      </div>

      <div className="relative bg-white mx-auto mt-5  max-w-7xl px-6 sm:mt-10 lg:px-8">
        <div className="mx-auto max-w-7xl flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Image Container - Top on mobile, Left on desktop */}
          <div className="w-full lg:w-1/2 order-1">
            <div className="relative h-64 sm:h-80 md:h-96 lg:h-[500px] w-full">
              <Image
                alt="Skincare Technology Interface"
                src="/images/get-report.png"
                fill
                className="rounded-lg object-cover object-center shadow-md"
              />
            </div>
          </div>

          {/* Content Container - Bottom on mobile, Right on desktop */}
          <div className="w-full lg:w-1/2 order-2 flex items-center">
            <div className="py-8 lg:py-12">
              <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl mb-6">
                Let Your Technology Tell Your Brand Story
              </h2>
              <p className="text-lg text-gray-700">
                Every Leafwater Vending Machine interface is designed to reflect
                your brand&apos;s identity—right down to the smallest detail. From
                the on-screen experience to the way recommendations are
                presented, the system speaks your language, tells your story,
                and strengthens your presence in every location.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative bg-white mx-auto mt-5 max-w-7xl px-6 sm:mt-10 lg:px-8">
        <div className="mx-auto max-w-7xl flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Image Container - Top on mobile, Left on desktop */}
          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <div className="relative h-64 sm:h-80 md:h-96 lg:h-[500px] w-full">
              <Image
                alt="Skincare Technology Interface"
                src="/images/accessbility.webp"
                fill
                className="rounded-lg object-cover object-center shadow-md"
              />
            </div>
          </div>

          {/* Content Container - Bottom on mobile, Right on desktop */}
          <div className="w-full lg:w-1/2 order-2 lg:order-1 flex items-center">
            <div className="py-8 lg:py-12">
              <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl mb-6">
                Inclusive by Design
              </h2>
              <p className="text-lg text-gray-700">
                Leafwater Vending Machines are built with accessibility at their
                core. Features such as reachable control panels, tactile
                buttons, and clear audible instructions ensure every customer,
                including those with disabilities, can enjoy the convenience of
                AI-powered skincare without barriers.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative bg-white mx-auto mt-5 max-w-7xl px-6 sm:mt-10 lg:px-8">
        <div className="mx-auto max-w-7xl flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Image Container - Top on mobile, Left on desktop */}
          <div className="w-full lg:w-1/2 order-1">
            <div className="relative h-64 sm:h-80 md:h-96 lg:h-[500px] w-full">
              <Image
                alt="Skincare Technology Interface"
                src="/images/vm.jpeg"
                fill
                className="rounded-lg object-cover object-center shadow-md"
              />
            </div>
          </div>

          {/* Content Container - Bottom on mobile, Right on desktop */}
          <div className="w-full lg:w-1/2 order-2 flex items-center">
            <div className="py-8 lg:py-12">
              <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl mb-6">
                Seamless, Future-Proof Integration
              </h2>
              <p className="text-lg text-gray-700">
                Our vending platform is engineered for flexibility. Whether
                integrating your proprietary loyalty app, adding new payment
                methods, or refreshing the entire interface design, the
                Leafwater system adapts without compromising stability or
                compatibility. Strategic modular architecture means near
                plug-and-play upgrades and effortless scalability.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative bg-white mx-auto mb-20 max-w-7xl px-6 sm:mt-10 lg:px-8">
        <div className="mx-auto max-w-7xl flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Image Container - Top on mobile, Left on desktop */}
          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <div className="relative h-64 sm:h-80 md:h-96 lg:h-[500px] w-full">
              <Image
                alt="Skincare Technology Interface"
                src="/images/consultancy.webp"
                fill
                className="rounded-lg object-cover object-center shadow-md"
              />
            </div>
          </div>

          {/* Content Container - Bottom on mobile, Right on desktop */}
          <div className="w-full lg:w-1/2 order-2 lg:order-1 flex items-center">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl mb-6">
                Your Best Skincare Consultant, Working 24/7
              </h2>
              <p className="text-lg text-gray-700">
                Stay connected to every vending location with our powerful
                management dashboard. From real-time AI skin analysis metrics to
                sales, inventory, and replenishment status, you have instant
                control—anytime, anywhere. IoT integration ensures you can:
                <br />
                <b>1.Monitor live stock levels and product expiry dates</b>
                <br />
                <b>2.Track AI skin scans and popular product demand</b>
                <br />
                <b>3.Schedule remote updates and maintenance</b>
                <br />
                <b>4.Control environmental settings for product preservation</b>
              </p>
              <h4 className="text-2xl font-semibold tracking-tight text-gray-900 mt-6 mb-6">
                Always Customized, Always On-Brand
              </h4>
              <p className="text-lg text-gray-700">
                Our software is built to fit your needs—whether it’s third-party
                integrations, localized promotions, or seasonal branding. Every
                Leafwater machine reflects your image, delivers your voice, and
                strengthens your market presence, while working around the clock
                to drive sales and delight customers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SoftwarePage;
