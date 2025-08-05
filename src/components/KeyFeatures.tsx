"use client";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function KeyFeatures() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("key-features");
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

  const features = [
    {
      icon: "/images/ai-icon.svg",
      title: "AI-Powered Precision",
      description:
        "Dermatologist-grade analysis using advanced machine learning algorithms.",
    },
    {
      icon: "/images/touch-icon.svg",
      title: "Seamless Experience",
      description:
        "Seamless touchscreen interaction for quick analysis and purchases.",
    },
    {
      icon: "/images/report-icon.svg",
      title: "Real-Time Reports",
      description:
        "Instant analysis and insights delivered the moment scan is complete.",
    },
    {
      icon: "/images/inventory-icon.svg",
      title: "Smart Inventory Management",
      description:
        "Automated tracking and optimization system that alerts and informs you.",
    },
    {
      icon: "/images/product-icon.svg",
      title: "Trusted Products",
      description: "Curated list of safe and effective skincare products",
    },
    {
      icon: "/images/scalable-icon.svg",
      title: "Scalable Model",
      description:
        "Designed for malls, salons, gyms, commercial spaces and more.",
    },
  ];

  return (
    <section id="key-features" className="py-10 sm:py-24 md:py-28 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-12 transition-all duration-700 transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Key Features
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-600">
            Experience the future of skincare with our innovative vending
            machine
            <br />
            technology. Each feature is designed to enhance your skincare
            journey.
          </p>
        </div>

        {/* Desktop view with grid */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg p-10 transition-all duration-700 transform ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
              style={{
                transitionDelay: `${150 * index}ms`,
                borderWidth: "1px",
                borderStyle: "dashed",
                borderColor: "#e5e7eb",
              }}
            >
              <div className="flex flex-col items-center text-center">
                {/* Dotted pattern circles */}
                <svg
                  className="absolute top-0 left-0 w-full"
                  height="50"
                  viewBox="0 0 400 35"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="xMidYMid slice"
                >
                  <defs>
                    <pattern
                      id={`dotPattern-${index}`}
                      x="0"
                      y="0"
                      width="8"
                      height="8"
                      patternUnits="userSpaceOnUse"
                      patternContentUnits="userSpaceOnUse"
                    >
                      <circle cx="2" cy="2" r="1" fill="#e5e7eb" />
                    </pattern>
                    <linearGradient id={`fadeGradient-${index}`} x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="white" stopOpacity="1" />
                      <stop offset="100%" stopColor="white" stopOpacity="0" />
                    </linearGradient>
                    <mask id={`fadeMask-${index}`}>
                      <rect width="100%" height="100%" fill={`url(#fadeGradient-${index})`} />
                    </mask>
                  </defs>
                  <rect
                    x="0"
                    y="0"
                    width="100%"
                    height="100%"
                    fill={`url(#dotPattern-${index})`}
                    mask={`url(#fadeMask-${index})`}
                  />
                </svg>
                <div className="w-12 h-20 mb-4 flex items-center justify-center">
                  <div className="text-amber-400">
                    {/* Replace with actual icons when available */}
                    {feature.title.includes("AI") && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-10 h-10"
                      >
                        <path d="M16.5 7.5h-9v9h9v-9Z" />
                        <path
                          fillRule="evenodd"
                          d="M8.25 2.25A.75.75 0 0 1 9 3v.75h2.25V3a.75.75 0 0 1 1.5 0v.75H15V3a.75.75 0 0 1 1.5 0v.75h.75a3 3 0 0 1 3 3v.75H21A.75.75 0 0 1 21 9h-.75v2.25H21a.75.75 0 0 1 0 1.5h-.75V15H21a.75.75 0 0 1 0 1.5h-.75v.75a3 3 0 0 1-3 3h-.75V21a.75.75 0 0 1-1.5 0v-.75h-2.25V21a.75.75 0 0 1-1.5 0v-.75H9V21a.75.75 0 0 1-1.5 0v-.75h-.75a3 3 0 0 1-3-3v-.75H3A.75.75 0 0 1 3 15h.75v-2.25H3a.75.75 0 0 1 0-1.5h.75V9H3a.75.75 0 0 1 0-1.5h.75v-.75a3 3 0 0 1 3-3h.75V3a.75.75 0 0 1 .75-.75Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                    {feature.title.includes("Seamless") && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-10 h-10"
                      >
                        <path
                          fillRule="evenodd"
                          d="M8.25 6.75a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM15.75 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM2.25 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM6.31 15.117A6.745 6.745 0 0 1 12 12a6.745 6.745 0 0 1 6.709 7.498.75.75 0 0 1-.372.568A12.696 12.696 0 0 1 12 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 0 1-.372-.568 6.787 6.787 0 0 1 1.019-4.38Z"
                          clipRule="evenodd"
                        />
                        <path d="M5.082 14.254a8.287 8.287 0 0 0-1.308 5.135 9.687 9.687 0 0 1-1.764-.44l-.115-.04a.563.563 0 0 1-.373-.487l-.01-.121a3.75 3.75 0 0 1 3.57-4.047ZM20.226 19.389a8.287 8.287 0 0 0-1.308-5.135 3.75 3.75 0 0 1 3.57 4.047l-.01.121a.563.563 0 0 1-.373.486l-.115.04c-.567.2-1.156.349-1.764.441Z" />
                      </svg>
                    )}
                    {feature.title.includes("Real-Time") && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-10 h-10"
                      >
                        <path
                          fillRule="evenodd"
                          d="M2.25 13.5a8.25 8.25 0 0 1 8.25-8.25.75.75 0 0 1 .75.75v6.75H18a.75.75 0 0 1 0 1.5h-6.75a.75.75 0 0 1-.75-.75V6a6.75 6.75 0 1 0 .75 13.5H18a.75.75 0 0 1 0 1.5h-6.75A8.25 8.25 0 0 1 2.25 13.5Zm10.5-6a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V8.25a.75.75 0 0 1 .75-.75Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                    {feature.title.includes("Smart Inventory") && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-10 h-10"
                      >
                        <path d="M3.375 3C2.339 3 1.5 3.84 1.5 4.875v.75c0 1.036.84 1.875 1.875 1.875h17.25c1.035 0 1.875-.84 1.875-1.875v-.75C22.5 3.839 21.66 3 20.625 3H3.375Z" />
                        <path
                          fillRule="evenodd"
                          d="m3.087 9 .54 9.176A3 3 0 0 0 6.62 21h10.757a3 3 0 0 0 2.995-2.824L20.913 9H3.087Zm6.133 2.845a.75.75 0 0 1 1.06 0l1.72 1.72 1.72-1.72a.75.75 0 1 1 1.06 1.06l-1.72 1.72 1.72 1.72a.75.75 0 1 1-1.06 1.06L12 15.685l-1.72 1.72a.75.75 0 1 1-1.06-1.06l1.72-1.72-1.72-1.72a.75.75 0 0 1 0-1.06Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                    {feature.title.includes("Trusted") && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-10 h-10"
                      >
                        <path
                          fillRule="evenodd"
                          d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 0 0 4.25 22.5h15.5a1.875 1.875 0 0 0 1.865-2.071l-1.263-12a1.875 1.875 0 0 0-1.865-1.679H16.5V6a4.5 4.5 0 1 0-9 0ZM12 3a3 3 0 0 0-3 3v.75h6V6a3 3 0 0 0-3-3Zm-3 8.25a3 3 0 1 0 6 0v-.75a.75.75 0 0 1 1.5 0v.75a4.5 4.5 0 1 1-9 0v-.75a.75.75 0 0 1 1.5 0v.75Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                    {feature.title.includes("Scalable") && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-10 h-10"
                      >
                        <path d="M18.375 2.25c-1.035 0-1.875.84-1.875 1.875v15.75c0 1.035.84 1.875 1.875 1.875h.75c1.035 0 1.875-.84 1.875-1.875V4.125c0-1.036-.84-1.875-1.875-1.875h-.75ZM9.75 8.625c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v9.375c0 1.035-.84 1.875-1.875 1.875h-.75a1.875 1.875 0 0 1-1.875-1.875V8.625ZM3 13.125c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v4.875c0 1.035-.84 1.875-1.875 1.875h-.75A1.875 1.875 0 0 1 3 18V13.125Z" />
                      </svg>
                    )}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile view with swiper */}
        <div className="block md:hidden mb-20 mt-12">  
          <Swiper
            modules={[Pagination, Navigation]}
            spaceBetween={20}
            slidesPerView={1}
            pagination={{ 
              clickable: true,
              bulletClass: 'custom-bullet',
              bulletActiveClass: 'custom-bullet-active'
            }}
            className={`transition-all duration-700 pb-16 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
          >
            {features.map((feature, index) => (
              <SwiperSlide key={index}>
                <div
                  className={`bg-white rounded-lg p-10 transition-all duration-700 transform ${
                    isVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-10 opacity-0"
                  }`}
                  style={{
                    transitionDelay: `${150 * index}ms`,
                    borderWidth: "1px",
                    borderStyle: "dashed",
                    borderColor: "#e5e7eb",
                    marginBottom: 30
                  }}
                >
                  <div className="flex flex-col items-center text-center">
                    {/* Dotted pattern circles */}
                    <svg
                      className="absolute top-0 left-0 w-full"
                      height="50"
                      viewBox="0 0 400 35"
                      xmlns="http://www.w3.org/2000/svg"
                      preserveAspectRatio="xMidYMid slice"
                    >
                      <defs>
                        <pattern
                          id={`dotPatternMobile-${index}`}
                          x="0"
                          y="0"
                          width="8"
                          height="8"
                          patternUnits="userSpaceOnUse"
                          patternContentUnits="userSpaceOnUse"
                        >
                          <circle cx="2" cy="2" r="1" fill="#e5e7eb" />
                        </pattern>
                      </defs>
                      <rect
                        width="100%"
                        height="100%"
                        fill={`url(#dotPatternMobile-${index})`}
                      />
                    </svg>
                    <div className="mb-6 text-gray-800">
                      {feature.title.includes("AI-Powered") && (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-10 h-10"
                        >
                          <path
                            fillRule="evenodd"
                            d="M9 4.5a.75.75 0 0 1 .721.544l.813 2.846a3.75 3.75 0 0 0 2.576 2.576l2.846.813a.75.75 0 0 1 0 1.442l-2.846.813a3.75 3.75 0 0 0-2.576 2.576l-.813 2.846a.75.75 0 0 1-1.442 0l-.813-2.846a3.75 3.75 0 0 0-2.576-2.576l-2.846-.813a.75.75 0 0 1 0-1.442l2.846-.813A3.75 3.75 0 0 0 7.466 7.89l.813-2.846A.75.75 0 0 1 9 4.5ZM18 1.5a.75.75 0 0 1 .728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 0 1 0 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 0 1-1.456 0l-.258-1.036a2.625 2.625 0 0 0-1.91-1.91l-1.036-.258a.75.75 0 0 1 0-1.456l1.036-.258a2.625 2.625 0 0 0 1.91-1.91l.258-1.036A.75.75 0 0 1 18 1.5ZM16.5 15a.75.75 0 0 1 .712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 0 1 0 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 0 1-1.422 0l-.395-1.183a1.5 1.5 0 0 0-.948-.948l-1.183-.395a.75.75 0 0 1 0-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0 1 16.5 15Z"
                            clipRule="evenodd"
                          />
                        </svg>
                      )}
                      {feature.title.includes("Seamless") && (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-10 h-10"
                        >
                          <path
                            fillRule="evenodd"
                            d="M3 6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6Zm4.5 7.5a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0v-2.25a.75.75 0 0 1 .75-.75Zm3.75-1.5a.75.75 0 0 0-1.5 0v4.5a.75.75 0 0 0 1.5 0V12Zm2.25-3a.75.75 0 0 1 .75.75v6.75a.75.75 0 0 1-1.5 0V9.75A.75.75 0 0 1 13.5 9Zm3.75-1.5a.75.75 0 0 0-1.5 0v9a.75.75 0 0 0 1.5 0v-9Z"
                            clipRule="evenodd"
                          />
                        </svg>
                      )}
                      {feature.title.includes("Real-Time") && (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-10 h-10"
                        >
                          <path
                            fillRule="evenodd"
                            d="M2.25 13.5a8.25 8.25 0 0 1 8.25-8.25.75.75 0 0 1 .75.75v6.75H18a.75.75 0 0 1 0 1.5h-6.75a.75.75 0 0 1-.75-.75V6a6.75 6.75 0 1 0 .75 13.5H18a.75.75 0 0 1 0 1.5h-6.75A8.25 8.25 0 0 1 2.25 13.5Zm10.5-6a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V8.25a.75.75 0 0 1 .75-.75Z"
                            clipRule="evenodd"
                          />
                        </svg>
                      )}
                      {feature.title.includes("Smart Inventory") && (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-10 h-10"
                        >
                          <path d="M3.375 3C2.339 3 1.5 3.84 1.5 4.875v.75c0 1.036.84 1.875 1.875 1.875h17.25c1.035 0 1.875-.84 1.875-1.875v-.75C22.5 3.839 21.66 3 20.625 3H3.375Z" />
                          <path
                            fillRule="evenodd"
                            d="m3.087 9 .54 9.176A3 3 0 0 0 6.62 21h10.757a3 3 0 0 0 2.995-2.824L20.913 9H3.087Zm6.133 2.845a.75.75 0 0 1 1.06 0l1.72 1.72 1.72-1.72a.75.75 0 1 1 1.06 1.06l-1.72 1.72 1.72 1.72a.75.75 0 1 1-1.06 1.06L12 15.685l-1.72 1.72a.75.75 0 1 1-1.06-1.06l1.72-1.72-1.72-1.72a.75.75 0 0 1 0-1.06Z"
                            clipRule="evenodd"
                          />
                        </svg>
                      )}
                      {feature.title.includes("Trusted") && (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-10 h-10"
                        >
                          <path
                            fillRule="evenodd"
                            d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 0 0 4.25 22.5h15.5a1.875 1.875 0 0 0 1.865-2.071l-1.263-12a1.875 1.875 0 0 0-1.865-1.679H16.5V6a4.5 4.5 0 1 0-9 0ZM12 3a3 3 0 0 0-3 3v.75h6V6a3 3 0 0 0-3-3Zm-3 8.25a3 3 0 1 0 6 0v-.75a.75.75 0 0 1 1.5 0v.75a4.5 4.5 0 1 1-9 0v-.75a.75.75 0 0 1 1.5 0v.75Z"
                            clipRule="evenodd"
                          />
                        </svg>
                      )}
                      {feature.title.includes("Scalable") && (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-10 h-10"
                        >
                          <path d="M18.375 2.25c-1.035 0-1.875.84-1.875 1.875v15.75c0 1.035.84 1.875 1.875 1.875h.75c1.035 0 1.875-.84 1.875-1.875V4.125c0-1.036-.84-1.875-1.875-1.875h-.75ZM9.75 8.625c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v9.375c0 1.035-.84 1.875-1.875 1.875h-.75a1.875 1.875 0 0 1-1.875-1.875V8.625ZM3 13.125c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v4.875c0 1.035-.84 1.875-1.875 1.875h-.75A1.875 1.875 0 0 1 3 18V13.125Z" />
                        </svg>
                      )}
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-800">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
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
            background-color:rgb(153, 155, 154);
            opacity: 0.7;
            cursor: pointer;
            transition: all 0.3s ease;
            margin: 0 2px;
          }
          .custom-bullet-active {
            background-color: #379F6B; /* Green color as shown in screenshot */
            opacity: 1;
            width: 20px;
            border-radius: 3px;
          }
        `}</style>
      </div>
    </section>
  );
}
