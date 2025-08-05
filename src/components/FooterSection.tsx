"use client";
import Link from "next/link";
import Image from "next/image";

// Quick Links constant
const QUICK_LINKS = [
  { name: "MANUFACTURING", href: "/manufacturing" },
  { name: "HOME", href: "/" },
  { name: "CONTACT US", href: "/contact" },
];

// Legal Links constant
const LEGAL_LINKS = [
  { name: "TERMS OF SERVICE", href: "/terms" },
  { name: "PRIVACY POLICY", href: "/privacy" },
  { name: "COOKIE POLICY", href: "/cookies" },
  { name: "ACCESSIBILITY POLICY", href: "/accessibility" },
  { name: "TRADING POLICY", href: "/trading" },
];

export default function FooterSection() {
  return (
    <footer className="bg-white border-t border-gray-200">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-teal-800 uppercase tracking-wider mb-4">
              QUICK LINKS
            </h3>
            <ul className="space-y-3">
              {QUICK_LINKS.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-gray-600 hover:text-gray-900">
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
                  <Link href={link.href} className="text-gray-600 hover:text-gray-900">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Reach Out */}
          <div>
            <h3 className="text-sm font-semibold text-teal-800 uppercase tracking-wider mb-4">
              REACH OUT
            </h3>
            <Link href="/contact" className="text-gray-600 hover:text-gray-900 block mb-4">
              CONTACT US
            </Link>
            <div className="flex space-x-4">
              <Link href="https://facebook.com" aria-label="Facebook" className="text-gray-500 hover:text-gray-900">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </Link>
              <Link href="https://instagram.com" aria-label="Instagram" className="text-gray-500 hover:text-gray-900">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </Link>
              <Link href="https://whatsapp.com" aria-label="WhatsApp" className="text-gray-500 hover:text-gray-900">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm6.958 17.83c-.365.857-1.45 1.913-2.381 2.131-1.595.373-3.947.266-7.305-1.618-3.912-2.188-6.73-7.042-6.787-7.229-.173-.508-1.27-3.53 1.115-6.442 1.031-1.259 2.384-1.549 3.06-1.549.625 0 1.685.113 1.685.113s.874-.097 1.316.854c.456.979 1.312 2.859 1.429 3.072.173.314.211.628.042.878-.148.216-.55.685-.846.988-.297.301-.702.685-.297 1.323.405.638 1.754 2.736 3.458 4.139 1.677 1.38 3.204 1.956 3.89 2.097.685.141 1.119.032 1.58-.218.619-.337 1.354-.946 1.354-1.84 0-.431.106-.695.476-.92.307-.19 1.875-.936 2.248-1.208.374-.271.653-.235.891-.083.239.153 2.248 1.56 2.248 1.56s.271.183.03.914z" />
                </svg>
              </Link>
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
            <svg className="h-6 w-6 text-black mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            <span className="text-sm text-gray-700">Shopping is secure with Leafwater</span>
          </div>
          
          {/* Payment methods */}
          <div className="text-center mb-4">
            <p className="text-sm text-gray-700 mb-3">We accept:</p>
            <div className="flex justify-center space-x-4">
              <div className="h-8 w-12 relative">
                <Image src="/images/visa.png" alt="Visa" width={48} height={32} className="object-contain" />
              </div>
              <div className="h-8 w-12 relative">
                <Image src="/images/mastercard.png" alt="Mastercard" width={48} height={32} className="object-contain" />
              </div>
             
              <div className="h-8 w-12 relative">
                <Image src="/images/applepay.png" alt="Apple Pay" width={48} height={32} className="object-contain" />
              </div>
              <div className="h-8 w-12 relative">
                <Image src="/images/googlepay.png" alt="Google Pay" width={48} height={32} className="object-contain" />
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
            <p className="text-sm text-gray-600 mr-2">All Products are made in India</p>
            <Link href="#" className="text-sm text-teal-700 underline">
              CHANGE COUNTRY
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
