"use client";
import { useState } from "react";

export default function NewsletterSubscriptionBar() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) return;
    
    setIsSubmitting(true);
    setSubmitError('');
    
    try {
      // Mock subscription - replace with actual API call
      await new Promise(resolve => setTimeout(resolve, 800));
      setSubmitSuccess(true);
      setEmail('');
      
      // Reset success message after 3 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 3000);
    } catch (error) {
      setSubmitError('Failed to subscribe. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full bg-[#356A5A] py-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-3 sm:space-y-0">
          <div className="sm:mr-6">
            <p className="text-white text-sm font-medium">
              We&apos;ll keep you posted on new products and great launches
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="flex w-full sm:w-auto">
            <div className="relative flex-grow">
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full h-10 px-4 text-sm text-gray-700 placeholder-gray-500 bg-white border-0 focus:ring-0 focus:outline-none"
                required
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              aria-label="Subscribe"
              className="h-10 w-10 bg-teal-800 hover:bg-teal-900 transition-colors flex items-center justify-center"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5 text-white" 
                viewBox="0 0 20 20" 
                fill="currentColor"
              >
                <path 
                  fillRule="evenodd" 
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" 
                  clipRule="evenodd" 
                />
              </svg>
            </button>
          </form>
          
          {submitSuccess && (
            <p className="text-white text-sm ml-3">
              Thanks for subscribing!
            </p>
          )}
          
          {submitError && (
            <p className="text-red-200 text-sm ml-3">
              {submitError}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
