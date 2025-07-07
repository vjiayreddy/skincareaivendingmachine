"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  CogIcon,
  LockClosedIcon,
  ServerIcon,
  ShieldCheckIcon,
  BeakerIcon,
  SparklesIcon,
  ChartBarIcon,
  DeviceTabletIcon,
  ShoppingCartIcon,
  BuildingStorefrontIcon,
  CubeIcon,
  QrCodeIcon
} from "@heroicons/react/24/outline";

// Map of icon components by name for dynamic rendering
const iconMap: { [key: string]: any } = {
  CloudArrowUpIcon,
  LockClosedIcon,
  ArrowPathIcon,
  ShieldCheckIcon,
  CogIcon,
  ServerIcon,
  BeakerIcon,
  SparklesIcon,
  ChartBarIcon,
  DeviceTabletIcon,
  ShoppingCartIcon,
  BuildingStorefrontIcon,
  CubeIcon,
  QrCodeIcon
};

// Function to match title to most appropriate icon
const getIconForTitle = (title: string) => {
  const titleLower = title.toLowerCase();
  
  if (titleLower.includes('ai') || titleLower.includes('machine learning')) return 'SparklesIcon';
  if (titleLower.includes('touchless') || titleLower.includes('experience')) return 'DeviceTabletIcon';
  if (titleLower.includes('reports') || titleLower.includes('analytics')) return 'ChartBarIcon';
  if (titleLower.includes('inventory') || titleLower.includes('management')) return 'CubeIcon';
  if (titleLower.includes('products') || titleLower.includes('skincare')) return 'BeakerIcon';
  if (titleLower.includes('scan') || titleLower.includes('code')) return 'QrCodeIcon';
  if (titleLower.includes('scalable') || titleLower.includes('model')) return 'BuildingStorefrontIcon';
  if (titleLower.includes('purchase') || titleLower.includes('buy')) return 'ShoppingCartIcon';
  
  // Default fallback
  return 'CogIcon';
};

// Feature data - can be moved to external JSON file later
const featuresData = [
  {
    name: "AI-Powered Precision",
    description:
      "Dermatologist-grade analysis using advanced machine learning algorithms.",
    iconName: "SparklesIcon"
  },
  {
    name: "Touchless Experience",
    description:
      "Seamless hands-free interaction powered by advanced gesture recognition technology.",
    iconName: "DeviceTabletIcon"
  },
  {
    name: "Real-Time Reports",
    description:
      "Instant analysis and insights delivered the moment your assessment is complete.",
    iconName: "ChartBarIcon"
  },
  {
    name: "Smart Inventory Management",
    description:
      "Automated tracking and optimization that keeps your stock levels perfectly balanced.",
    iconName: "CubeIcon"
  },
  {
    name: "Trusted Products",
    description:
      "Curated list of safe and effective skincare products.",
    iconName: "BeakerIcon"
  },
  {
    name: "Scalable Model",
    description:
      "Designed for malls, salons, gyms, commercial spaces and more.",
    iconName: "BuildingStorefrontIcon"
  },
];

export default function KeyFeatures() {
  // State for tracking which cards have been animated
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  
  // Function to check if an element is in viewport
  const isElementInViewport = (el: Element) => {
    const rect = el.getBoundingClientRect();
    return (
      rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.bottom >= 0
    );
  };
  
  // Set up intersection observer to animate cards when they come into view
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const index = parseInt(entry.target.getAttribute('data-index') || '0', 10);
          setVisibleItems(prev => [...prev, index]);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });
    
    // Observe all feature cards
    const cards = document.querySelectorAll('.feature-card');
    cards.forEach(card => observer.observe(card));
    
    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative bg-white py-24 sm:py-32 lg:py-40 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute left-10 top-40 h-72 w-72 rounded-full bg-emerald-50 opacity-50"
          initial={{ opacity: 0 }}
          animate={{
            opacity: 0.5,
            x: [0, 50, 0],
            y: [0, 30, 0],
            scale: [1, 1.05, 1]
          }}
          transition={{
            opacity: { duration: 1 },
            x: { duration: 20, repeat: Infinity, repeatType: "reverse" },
            y: { duration: 15, repeat: Infinity, repeatType: "reverse" },
            scale: { duration: 8, repeat: Infinity, repeatType: "reverse" }
          }}
        />
        <motion.div 
          className="absolute right-10 top-60 h-56 w-56 rounded-full bg-sky-50 opacity-60"
          initial={{ opacity: 0 }}
          animate={{
            opacity: 0.6,
            x: [0, -40, 0],
            y: [0, -25, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{
            opacity: { duration: 1 },
            x: { duration: 18, repeat: Infinity, repeatType: "reverse", delay: 0.5 },
            y: { duration: 12, repeat: Infinity, repeatType: "reverse", delay: 1 },
            scale: { duration: 10, repeat: Infinity, repeatType: "reverse", delay: 2 }
          }}
        />
        <motion.div 
          className="absolute left-1/3 bottom-40 h-64 w-64 rounded-full bg-amber-50 opacity-50"
          initial={{ opacity: 0 }}
          animate={{
            opacity: 0.5,
            x: [0, -60, 0],
            y: [0, 40, 0],
            scale: [1, 1.15, 1]
          }}
          transition={{
            opacity: { duration: 1 },
            x: { duration: 25, repeat: Infinity, repeatType: "reverse", delay: 1 },
            y: { duration: 20, repeat: Infinity, repeatType: "reverse", delay: 1.5 },
            scale: { duration: 12, repeat: Infinity, repeatType: "reverse", delay: 0.5 }
          }}
        />
      </div>
      
      <div className="mx-auto max-w-md px-6 text-center sm:max-w-3xl lg:max-w-7xl lg:px-8 relative z-10">
        <h2 className="text-lg font-semibold text-green-700">
          Vending Machine
        </h2>
        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Key Features
        </p>
        <p className="mx-auto mt-5 max-w-prose text-xl text-gray-500">
          Experience the future of skincare with our innovative vending machine technology. 
          Each feature designed to enhance your skincare journey.
        </p>
        <div className="mt-20">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {featuresData.map((feature, index) => {
              const IconComponent = iconMap[feature.iconName];
              return (
                <div 
                  key={feature.name} 
                  className={`feature-card pt-6 transition-all duration-700 ${visibleItems.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                  data-index={index}
                >
                  <div className="flow-root rounded-lg bg-gray-50 px-6 pb-8 hover:shadow-lg transition-shadow duration-300 hover:-translate-y-1 h-full">
                    <div className="-mt-6">
                      <div>
                        <span className="inline-flex items-center justify-center rounded-xl bg-green-700 p-3 shadow-lg transform transition-transform hover:scale-110 duration-300">
                          {IconComponent && (
                            <IconComponent
                              aria-hidden="true"
                              className="size-8 text-white"
                            />
                          )}
                        </span>
                      </div>
                      <h3 className="mt-8 text-lg/8 font-semibold tracking-tight text-gray-900">
                        {feature.name}
                      </h3>
                      <p className="mt-5 text-base/7 text-gray-600">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
