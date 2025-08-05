"use client";
import { useState } from "react";
import Image from "next/image";

export default function ContactInfo() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    countryCode: "+91", // Default country code
    notes: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCountryCodeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      countryCode: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitResult(null);

    // Prepare the data to submit

    try {
      const response = await fetch(
        "https://backend.leafwater.in:8001/vending-machine-contact-form/create",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            phoneNumber: formData.phoneNumber,
            firstName: formData.firstName,
            lastName: formData.lastName,
            countryCode: formData.countryCode,
            notes: formData.notes,
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        setSubmitResult({
          success: true,
          message: "Your request has been submitted successfully!",
        });

        // Reset the form
        setFormData({
          firstName: "",
          lastName: "",
          phoneNumber: "",
          countryCode: "+91",
          notes: "",
        });
      } else {
        setSubmitResult({
          success: false,
          message: data.message || "Something went wrong. Please try again.",
        });
      }
    } catch (_error) {
      setSubmitResult({
        success: false,
        message:
          "Failed to connect to the server. Please check your internet connection.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-0">
            {/* Left side - Contact Info & Image */}
            <div className="lg:col-span-5 p-6 bg-gray-50">
              <div className="flex flex-col h-full">
                {/* Contact Information */}
                <div className="mb-8">
                  {/* Phone */}
                  <div className="flex items-center mb-4">
                    <div className="bg-[#356A5A] text-white p-2 rounded-md mr-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 font-medium">
                        PHONE NUMBER
                      </p>
                      <p   style={{
                  color: "black",
                }} className="text-base ">+91 8977016605</p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-center">
                    <div className="bg-[#356A5A] text-white p-2 rounded-md mr-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 font-medium">
                        E-MAIL ADDRESS
                      </p>
                      <p   style={{
                  color: "black",
                }} className="text-base">reachleafwater@gmail.com</p>
                    </div>
                  </div>
                </div>

                {/* Vending Machine Image */}
                <div className="flex-grow flex items-center justify-center">
                  <div className="relative h-64 w-64 rounded-full overflow-hidden border-4 border-gray-200">
                    <Image
                      src="/images/unparalled.png"
                      alt="AI Skincare Vending Machine"
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Form */}
            <div className="lg:col-span-7 p-6">
              {submitResult && (
                <div
                  className={`p-4 mb-4 rounded-md ${
                    submitResult.success
                      ? "bg-green-50 text-green-800"
                      : "bg-red-50 text-red-800"
                  }`}
                >
                  {submitResult.message}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name Fields - Side by Side */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First Name"
                        style={{
                  color: "black",
                }}
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-teal-500"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                        style={{
                  color: "black",
                }}
                      name="lastName"
                      placeholder="Last Name"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-teal-500"
                      required
                    />
                  </div>
                </div>

                {/* Phone with country code */}
                <div className="flex">
                  <select
                    name="countryCode"
                      style={{
                  color: "black",
                }}
                    value={formData.countryCode}
                    onChange={handleCountryCodeChange}
                    className="w-20 px-2 py-2 border border-gray-300 border-r-0 rounded-l-md focus:outline-none focus:ring-1 focus:ring-teal-500 bg-gray-50"
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
                      style={{
                  color: "black",
                }}
                    placeholder="Phone Number"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-r-md focus:outline-none focus:ring-1 focus:ring-teal-500"
                    required
                    pattern="[0-9]{10}"
                    title="Please enter a valid 10-digit phone number"
                  />
                </div>

                {/* Notes */}
                <div>
                  <textarea
                    name="notes"
                      style={{
                  color: "black",
                }}
                    placeholder="Additional notes (optional)"
                    value={formData.notes}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-teal-500"
                  />
                </div>

                {/* Submit Button */}
                <div className="flex justify-start">
                  <button
                    type="submit"
                    className="px-6 py-3 bg-[#356A5A] text-white font-medium rounded-md hover:bg-teal-800 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Get a call back"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
