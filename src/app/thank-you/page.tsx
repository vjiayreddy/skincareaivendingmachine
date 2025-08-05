import React from "react";
import Link from 'next/link';

export const metadata = {
  title: "Thank You | AI Skincare Vending Machine",
  description: "Thank you for your interest in our AI-powered skincare vending machines."
};

export default function ThankYou() {
  return (
    <main className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <svg 
          className="mx-auto h-24 w-24 text-green-500" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" 
          />
        </svg>
        
        <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
          <span className="block">Thank You!</span>
        </h1>
        
        <div className="mt-6">
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            We&apos;ve received your message and will get back to you as soon as possible.
          </p>
          
          <div className="mt-12">
            <p className="text-lg text-gray-600 mb-8">
              Our team typically responds within 24-48 business hours.
            </p>
            
            <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">What&apos;s Next?</h2>
              <ul className="text-left space-y-4 text-gray-600">
                <li className="flex items-start">
                  <svg 
                    className="h-6 w-6 text-green-500 mr-2" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M5 13l4 4L19 7" 
                    />
                  </svg>
                  A member of our team will review your inquiry
                </li>
                <li className="flex items-start">
                  <svg 
                    className="h-6 w-6 text-green-500 mr-2" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M5 13l4 4L19 7" 
                    />
                  </svg>
                  We&apos;ll reach out via email to schedule a consultation
                </li>
                <li className="flex items-start">
                  <svg 
                    className="h-6 w-6 text-green-500 mr-2" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M5 13l4 4L19 7" 
                    />
                  </svg>
                  We&apos;ll provide detailed information about our products and services
                </li>
              </ul>
            </div>
            
            <div className="mt-10">
              <Link 
                href="/"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
