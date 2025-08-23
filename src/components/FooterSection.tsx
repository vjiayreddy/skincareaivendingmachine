"use client";
import Link from "next/link";
import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

// Quick Links constant
const QUICK_LINKS = [
  { name: "HOME", href: "/" },
  { name: "SOFTWARE", href: "/software" },
  { name: "TECHNOLOGY", href: "/technology" },
  { name: "MANUFACTURING", href: "/manufacturing" },
  { name: "CONTACT US", href: "/contact-us" },
];

// Legal Links constant
const LEGAL_LINKS = [
  { name: "TERMS OF SERVICE", href: "/termsAndConditions" },
  { name: "PRIVACY POLICY", href: "/privacyPolicy" },
];

export default function FooterSection() {
  return (
    <footer className="bg-white border-t border-gray-200">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-teal-800 uppercase tracking-wider mb-4">
              QUICK LINKS
            </h3>
            <ul className="space-y-3">
              {QUICK_LINKS.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-gray-900"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold text-teal-800 uppercase tracking-wider mb-4">
              LEGAL
            </h3>
            <ul className="space-y-3">
              {LEGAL_LINKS.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-gray-900"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Reach Out */}
          <div>
            <h3 className="text-sm font-semibold text-teal-800 uppercase tracking-wider mb-4">
              FOLLOW US
            </h3>
            <div>
          
            <div className="flex space-x-4">
              <Link
                href="https://facebook.com"
                target="_blank"
                aria-label="Facebook"
              >
                <FaFacebookF className="text-gray-700 hover:text-[#2b614f] text-xl" />
              </Link>
              <Link
                href="https://www.instagram.com/leafwater.skincare/?igsh=MTViMm9qY25tZHRhZQ%3D%3D#"
                target="_blank"
                aria-label="Instagram"
              >
                <FaInstagram className="text-gray-700 hover:text-[#2b614f] text-xl" />
              </Link>
              <Link
                href="https://www.youtube.com/@leafwaterskincare"
                target="_blank"
                aria-label="WhatsApp"
              >
                <FaYoutube className="text-gray-700 hover:text-[#2b614f] text-xl" />
              </Link>
            </div>
          </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-200 mx-4 sm:mx-6 lg:mx-8"></div>

      {/* Bottom section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Secure shopping */}
        <div className="flex flex-col items-center justify-center mb-8">
          <div className="flex items-center mb-4">
            <svg
              className="h-6 w-6 text-black mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
            <span className="text-sm text-gray-700">
              Shopping is secure with Leafwater
            </span>
          </div>

          {/* Payment methods */}
          <div className="text-center mb-4">
            <p className="text-sm text-gray-700 mb-3">We accept:</p>
            <div className="flex justify-center space-x-4">
              <div className="h-8 w-12 relative">
                <Image
                  src="/images/payment/gpay.png"
                  alt="Visa"
                  width={48}
                  height={32}
                  className="object-contain"
                />
              </div>
              <div className="h-8 w-12 relative">
                <Image
                  src="/images/payment/paytm.png"
                  alt="Mastercard"
                  width={48}
                  height={32}
                  className="object-contain"
                />
              </div>

              <div className="h-8 w-12 relative">
                <Image
                  src="/images/payment/phonepe.png"
                  alt="Apple Pay"
                  width={48}
                  height={32}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Copyright and country */}
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-200 pt-8">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-gray-600">© 2025 Leafwater Ltd.</p>
          </div>
          <div className="flex items-center">
            <p className="text-sm text-gray-600 mr-2">
              All Products are made in India
            </p>
            <Link href="#" className="text-sm text-teal-700 underline">
              CHANGE COUNTRY
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
