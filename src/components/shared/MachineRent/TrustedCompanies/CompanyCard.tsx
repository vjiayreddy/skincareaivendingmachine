"use client";

import { motion } from "framer-motion";

interface CompanyCardProps {
  logo: string;
  name: string;
  description: string;
}

// Reusable Company Card component
const CompanyCard = ({ logo, name, description }: CompanyCardProps) => {
  return (
    <motion.div
      className="bg-white dark:bg-gray-800 rounded-lg shadow-md h-full flex flex-col transition-all duration-300 hover:shadow-lg border border-gray-100 dark:border-gray-700 overflow-hidden"
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      {/* Image section - full width on top - increased height */}
      <div className="relative w-full h-64 overflow-hidden">
        <img
          src={logo}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 flex items-end">
          <h3 className="text-lg font-semibold text-white p-4 w-full">
            {name}
          </h3>
        </div>
      </div>

      {/* Content section - below image with fixed height */}
      <div className="p-4 flex flex-col h-40">
        <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-4 mb-auto">
          {description}
        </p>

        <div className="mt-auto pt-4 border-t border-gray-100 dark:border-gray-700">
          <button className="text-green-600 hover:text-green-800 text-sm font-medium flex items-center transition-colors duration-200">
            Learn More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </motion.div>
  );
};
export default CompanyCard;