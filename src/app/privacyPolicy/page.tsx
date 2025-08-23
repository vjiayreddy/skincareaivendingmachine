const PrivacyPolicyPage = () => {
  return (
    <div className="bg-white">
      {/* Hero section with title */}
      <div className="bg-teal-50">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-teal-800 sm:text-5xl lg:text-6xl">
              Privacy Policy
            </h1>
            <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-600">
              At Leaf Water Skin Care Studio, your trust is our most valuable asset
            </p>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-teal prose-lg mx-auto">
          <p className="text-gray-700 mb-8">
            We are committed to protecting your privacy and ensuring that your personal
            and biometric data is handled with care, transparency, and the highest
            level of security.
          </p>

          {/* Section 1 */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              1. Information We Collect
            </h2>
            <div className="ml-4">
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  • Personal Information:
                </h3>
                <p className="text-gray-700">
                  Full name, email, phone number, birthday (optional), skin goals/preferences, 
                  appointment history.
                </p>
              </div>
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  • AI Skin Analysis Data:
                </h3>
                <p className="text-gray-700">
                  High-resolution facial images, mapped skin concerns, and diagnostic metrics 
                  collected by our AI scanner.
                </p>
              </div>
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  • Transactional Data:
                </h3>
                <p className="text-gray-700">
                  Purchase history of products/services and gift card usage.
                </p>
              </div>
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  • Communication Data:
                </h3>
                <p className="text-gray-700">
                  Emails or messages you exchange with us regarding appointments, feedback, 
                  or support inquiries.
                </p>
              </div>
            </div>
          </div>

          {/* Section 2 */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              2. How We Use Your Data
            </h2>
            <ul className="list-disc ml-6 space-y-2 text-gray-700">
              <li>To analyze your skin accurately and build personalized treatment plans.</li>
              <li>To track skin progress over time using AI comparison tools.</li>
              <li>To recommend specific treatments or products based on your needs.</li>
              <li>To improve service quality, training, and studio performance.</li>
              <li>To communicate with you about bookings, promotions, or skincare tips (with your permission).</li>
            </ul>
            <p className="mt-6 text-gray-700">
              We do not sell, rent, or share your personal or biometric data with third parties
              for marketing purposes. Any third-party service providers (e.g., scheduling software
              or payment processors) are contractually bound to maintain confidentiality and security.
            </p>
          </div>

          {/* Section 3 */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              3. Data Storage & Security
            </h2>
            <p className="text-gray-700 mb-4">
              All personal and AI data is encrypted and stored on secure, access-restricted platforms. 
              We follow HIPAA-inspired guidelines and industry-standard protocols for data protection.
            </p>
            <p className="text-gray-700">
              Images from the AI skin analysis are stored only to track skin progress and are never 
              used in marketing without your signed, written consent.
            </p>
          </div>

          {/* Section 4 */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              4. Your Rights
            </h2>
            <ul className="list-disc ml-6 space-y-2 text-gray-700">
              <li>Access or request a copy of your data.</li>
              <li>Ask for corrections or updates to your personal record.</li>
              <li>Withdraw consent for data usage and request deletion at any time.</li>
              <li>Decline AI skin analysis (though some services may be affected).</li>
            </ul>
            <p className="mt-6 text-gray-700">
              To exercise your rights or ask questions about your data, please email us at{" "}
              <a href="mailto:privacy@leafwater.com" className="text-teal-600 hover:text-teal-800">
                privacy@leafwater.com
              </a>
              .
            </p>
          </div>
          
          {/* Contact section */}
          <div className="bg-teal-50 p-8 rounded-lg">
            <h3 className="text-xl font-semibold text-teal-800 mb-4">
              Have Questions About Your Privacy?
            </h3>
            <p className="text-gray-700 mb-4">
              We're committed to transparency. If you have any concerns about how your data
              is handled, please don't hesitate to reach out.
            </p>
            <a
              href="/contact-us"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-teal-600 hover:bg-teal-700"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
