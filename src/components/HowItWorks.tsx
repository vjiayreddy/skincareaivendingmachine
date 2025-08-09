"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
// Import Swiper React components and styles
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function HowItWorks() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('how-it-works');
      if (element) {
        const position = element.getBoundingClientRect();
        if (position.top < window.innerHeight - 100) {
          setIsVisible(true);
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial render
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const steps = [
    {
      number: 1,
      title: "Scan your face",
      icon: "/images/face_id.png" // Will replace with proper icon
    },
    {
      number: 2,
      title: "Answer a few simple questions",
      icon: "❓" // Will replace with proper icon
    },
    {
      number: 3,
      title: "Get your skin profile",
      icon: "📋" // Will replace with proper icon
    },
    {
      number: 4,
      title: "Personalized product recommendations",
      icon: "🎯" // Will replace with proper icon
    },
    {
      number: 5,
      title: "Buy directly from machine",
      icon: "🛒" // Will replace with proper icon
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className={`text-3xl md:text-4xl font-bold text-gray-900 mb-4 transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            How it works
          </h2>
          <p className={`max-w-3xl mx-auto text-lg text-gray-600 transition-all duration-700 delay-200 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            AI meets skincare: Analyze, recommend, and deliver the perfect<br />
            product—instantly, with zero human error.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-20">
          {/* Left side - Swiper slides */}
          <div className={`w-full md:w-1/2 transition-all duration-1000 transform ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
            <div className="relative w-full h-[300px] sm:h-[350px] md:h-[400px] rounded-lg overflow-hidden shadow-lg">
              <Swiper
                modules={[Autoplay]}
                spaceBetween={30}
                slidesPerView={1}
                navigation={false}
                pagination={{ clickable: true }}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                onSlideChange={(swiper) => setActiveStep(swiper.activeIndex)}
                className="h-full w-full"
                style={{ height: '100%', width: '100%', position: 'relative' }}
              >
                <SwiperSlide>
                  <div className="relative w-full h-full" style={{ display: 'block', overflow: 'hidden', height: '100%' }}>
                    <Image
                      src="/images/scan-face.png"
                      alt="Scan your face"
                      fill
                      style={{ objectFit: 'cover', display: 'block', width: '100%', height: '100%', position: 'absolute' }}
                      className="object-cover"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="relative w-full h-full" style={{ display: 'block', overflow: 'hidden', height: '100%' }}>
                    <Image
                      src="/images/scan_complete.png"
                      alt="Answer a few simple questions"
                      fill
                      style={{ objectFit: 'cover', display: 'block', width: '100%', height: '100%', position: 'absolute' }}
                      className="object-cover"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="relative w-full h-full" style={{ display: 'block', overflow: 'hidden', height: '100%' }}>
                    <Image
                      src="/images/get-report.png"
                      alt="Get your skin profile"
                      fill
                      style={{ objectFit: 'cover', display: 'block', width: '100%', height: '100%', position: 'absolute' }}
                      className="object-cover"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="relative w-full h-full" style={{ display: 'block', overflow: 'hidden', height: '100%' }}>
                    <Image
                      src="/images/products.png"
                      alt="Personalized product recommendations"
                      fill
                      style={{ objectFit: 'cover', display: 'block', width: '100%', height: '100%', position: 'absolute' }}
                      className="object-cover"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="relative w-full h-full" style={{ display: 'block', overflow: 'hidden', height: '100%' }}>
                    <Image
                      src="/images/payment.png"
                      alt="Buy directly from machine"
                      fill
                      style={{ objectFit: 'cover', display: 'block', width: '100%', height: '100%', position: 'absolute' }}
                      className="object-cover"
                    />
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
          
          {/* Right side - Steps */}
          <div className="md:w-1/2 space-y-6">
            {steps.map((step, index) => (
              <div 
                key={index}
                className={`flex items-center gap-4 transition-all duration-700 transform ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'} ${activeStep === index ? 'text-green-600 font-semibold' : ''}`}
                style={{ transitionDelay: `${300 + index * 150}ms` }}
              >
                <div className={`flex-shrink-0 w-10 h-10 rounded-full ${activeStep === index ? 'bg-[#356A5A] scale-110' : 'bg-gray-300'} transition-all duration-300 text-white font-medium flex items-center justify-center`}>
                  {step.number}
                </div>
                <div className="flex items-center gap-3">
                  {/* <Image src={step.icon} alt={step.title} width={20} height={20} /> */}
                  <span className="text-gray-800">{step.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
