"use client";
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function InvestmentCTA() {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('investment-cta');
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

  return (
    <section 
      id="investment-cta" 
      className="relative h-[400px] lg:h-[450px] w-full overflow-hidden bg-black"
    >
      {/* Background image */}
      <div className="absolute inset-0 w-full h-full">
        <Image 
          src="/images/bgimage.png" 
          alt="Vending Machines" 
          fill 
          className="object-cover opacity-70"
        />
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
          <div className="flex flex-col md:flex-row md:items-center justify-between h-full py-12">
            <div className={`max-w-2xl transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">
                Invest in <span className="bg-gradient-to-r from-amber-500 to-amber-300 bg-clip-text text-transparent">vending machines</span>,
                <br />
                Be <span className="bg-gradient-to-r from-amber-500 to-amber-300 bg-clip-text text-transparent">your own boss</span>.
              </h2>
              
              <p className="mt-4 text-lg text-gray-300 leading-relaxed">
                Own a Low cost, profitable vending franchise. Low-risk investment
                <br className="hidden md:block" />
                with high returns and comprehensive training and support.
              </p>
            </div>
            
            <div className={`mt-6 md:mt-0 transition-all duration-700 delay-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <Link 
                href="/contact-us"
                className="inline-block px-8 py-3 border border-transparent text-lg font-medium rounded-md text-black bg-white hover:bg-gray-200 transition-colors"
              >
                Partner with us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
