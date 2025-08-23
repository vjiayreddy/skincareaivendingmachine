"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function ServicesOverview() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("services-overview");
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

  const services = [
    {
      title: "AI Skincare Engine",
      description:
        "Core algorithm for facial scanning, analysis, and product recommendation.",
      icon: "/images/ai-engine-icon.png",
    },
    {
      title: "Vending Machine",
      description:
        "Automated dispensing machine integrated with payment system and product shelf.",
      icon: "/images/vending-machine-icon.png",
    },
    {
      title: "Full Solution",
      description:
        "Plug-and-play unit combining software, hardware, and backend dashboard.",
      icon: "/images/ai-engine-icon.png",
    },
  ];

  return (
    <section
      id="services-overview"
      className="py-8 sm:py-24 md:py-28 lg:py-32 text-white relative bg-cover bg-center"
      style={{
        backgroundImage:
          'linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url("/images/service_bg.png")',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2
            className={`text-3xl md:text-4xl font-bold mb-6 transition-all duration-700 transform ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            Services Provided
          </h2>
          <p
            className={`max-w-3xl mx-auto text-lg text-gray-300 transition-all duration-700 delay-300 transform ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            Our system leverages a proprietary “AI Skincare Engine” for instant
            facial scanning, skin profiling, and personalized product
            picks—delivered via a seamless plug-and-play vending unit. Capable
            of increasing sales by 15–20%, it represents the first-of-its-kind
            AI skincare vending experience in India..
          </p>
        </div>

        {/* Mobile view with swiper */}
        <div className="block md:hidden mb-20">
          <Swiper
            modules={[Pagination, Navigation]}
            spaceBetween={20}
            slidesPerView={1}
            pagination={{
              clickable: true,
              bulletClass: "custom-bullet",
              bulletActiveClass: "custom-bullet-active",
            }}
            className={`transition-all duration-700 pb-16 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            {services.map((service, index) => (
              <SwiperSlide key={index}>
                <div
                  className={`bg-white rounded-lg p-8 text-center h-full transition-all duration-700 transform ${
                    isVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-20 opacity-0"
                  }`}
                  style={{
                    transitionDelay: `${300 + index * 150}ms`,
                    marginBottom: 30,
                  }}
                >
                  <div className="flex justify-center mb-6">
                    <div className="relative w-24 h-24">
                      <Image
                        src={service.icon}
                        alt={service.title}
                        width={100}
                        height={100}
                        className="object-contain"
                      />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Desktop view with grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`bg-white  rounded-lg p-8 text-center transition-all duration-700 transform ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-20 opacity-0"
              }`}
              style={{ transitionDelay: `${300 + index * 150}ms` }}
            >
              <div className="flex justify-center mb-6">
                <div className="relative w-24 h-24">
                  <Image
                    src={service.icon}
                    alt={service.title}
                    width={100}
                    height={100}
                    className="object-contain"
                  />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Add custom styles for pagination bullets to match design */}
      <style jsx global>{`
        .swiper-pagination {
          display: flex;
          justify-content: center;
          gap: 6px;
          position: absolute;
          bottom: -40px;
          left: 0;
          right: 0;
        }
        .custom-bullet {
          width: 6px;
          height: 6px;
          display: inline-block;
          border-radius: 50%;
          background-color: white;
          opacity: 0.7;
          cursor: pointer;
          transition: all 0.3s ease;
          margin: 0 2px;
        }
        .custom-bullet-active {
          background-color: #379f6b; /* Green color as shown in screenshot */
          opacity: 1;
          width: 20px;
          border-radius: 3px;
        }
      `}</style>
    </section>
  );
}
