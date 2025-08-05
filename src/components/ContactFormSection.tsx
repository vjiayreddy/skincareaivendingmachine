"use client";
import { useState } from "react";

export default function ContactFormSection() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    countryCode: '+91',
    notes: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState<{ success: boolean; message: string } | null>(null);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleCountryCodeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      countryCode: e.target.value
    }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitResult(null);
    
    try {
      // Create FormData object instead of using JSON
      const formDataToSend = new FormData();
      formDataToSend.append('phoneNumber', formData.phoneNumber);
      formDataToSend.append('firstName', formData.firstName);
      formDataToSend.append('lastName', formData.lastName);
      formDataToSend.append('countryCode', formData.countryCode);
      formDataToSend.append('notes', formData.notes);
      
      const response = await fetch("https://backend.leafwater.in:8001/vending-machine-contact-form/create", {
        method: 'POST',
        // Remove the Content-Type header - browser will set it automatically with the boundary
        body: formDataToSend
      });
      
      const data = await response.json();
      
      if (response.ok) {
        setSubmitResult({
          success: true,
          message: 'Your request has been submitted successfully!'
        });
        
        // Reset the form
        setFormData({
          firstName: '',
          lastName: '',
          phoneNumber: '',
          countryCode: '+91',
          notes: ''
        });
      } else {
        setSubmitResult({
          success: false,
          message: data.message || 'Something went wrong. Please try again.'
        });
      }
    } catch (_error) {
      setSubmitResult({
        success: false,
        message: 'Failed to connect to the server. Please check your internet connection.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <section className="py-16 bg-white" id="contact">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Get in touch</h2>
          <p className="mt-2 text-lg text-gray-600">You can reach us anytime</p>
        </div>
        
        <div className="w-full max-w-4xl mx-auto">
          {submitResult && (
            <div className={`md:col-span-2 p-4 mb-6 rounded-md ${submitResult.success ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}>
              {submitResult.message}
            </div>
          )}
          
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="md:col-span-1">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              />
            </div>
            
            <div className="md:col-span-1">
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              />
            </div>
            
            <div className="md:col-span-2 flex">
              <select
                name="countryCode"
                value={formData.countryCode}
                onChange={handleCountryCodeChange}
                className="w-24 px-3 py-3 border border-gray-300 border-r-0 rounded-l-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              >
                <option value="+91">+91</option>
                <option value="+1">+1</option>
                <option value="+44">+44</option>
                <option value="+61">+61</option>
                <option value="+971">+971</option>
              </select>
              <input
                type="tel"
                name="phoneNumber"
                placeholder="Phone Number"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
                pattern="[0-9]{10}"
                title="Please enter a valid 10-digit phone number"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-r-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              />
            </div>
            
            <div className="md:col-span-2">
              <textarea
                name="notes"
                placeholder="Additional notes (optional)"
                value={formData.notes}
                onChange={handleChange}
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              ></textarea>
            </div>
            
            <div className="md:col-span-2 flex justify-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-8 py-3 bg-[#356A5A] text-white font-medium rounded-full hover:bg-teal-800 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Submitting...' : 'Get a call back'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
