"use client";

const TermsPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <div className="bg-white shadow-sm rounded-lg overflow-hidden">
        {/* Header */}
        <div className="bg-teal-800 py-6 px-6">
          <h1 className="text-2xl font-bold text-white">Terms & Conditions</h1>
        </div>
        
        {/* Introduction */}
        <div className="p-6 border-b border-gray-200">
          <p className="text-gray-700">
            These Terms & Conditions govern the use of services and digital tools offered by 
            Leaf Water Skin Care Studio. By booking an appointment or using our AI skin analysis system, 
            you agree to the following terms:
          </p>
        </div>
        
        {/* Section 1 */}
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-teal-800 mb-4">1. Appointments & Scheduling</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Clients are required to arrive on time for all appointments. A grace period of 10 minutes is allowed.</li>
            <li>We ask for 24 hours&apos; notice to cancel or reschedule appointments. Late cancellations and no-shows may be charged a fee or forfeit the session.</li>
            <li>Repeated no-shows may result in loss of booking privileges.</li>
          </ul>
        </div>
        
        {/* Section 2 */}
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-teal-800 mb-4">2. Use of AI Skin Scanning Technology</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Clients who undergo AI skin scanning acknowledge and accept that biometric imaging will be captured and analyzed to provide a personalized skincare experience.</li>
            <li>This data is stored securely and used exclusively for treatment customization and progress tracking.</li>
            <li>Your participation in AI scans is optional, but declining may limit the accuracy of our assessments and treatment outcomes.</li>
          </ul>
        </div>
        
        {/* Section 3 */}
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-teal-800 mb-4">3. Product Sales & Services</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>All skincare product sales are final unless the item is damaged or incorrect.</li>
            <li>Service packages and memberships are non-transferable and subject to availability.</li>
            <li>We reserve the right to change service pricing, descriptions, or product offerings at any time.</li>
          </ul>
        </div>
        
        {/* Section 4 */}
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-teal-800 mb-4">4. Medical Disclaimer</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Our treatments are not a substitute for dermatological or medical care. Clients must disclose known allergies, conditions (such as pregnancy or skin sensitivities), or medication use prior to treatments.</li>
            <li>Leaf Water Skin Care Studio is not responsible for reactions or results arising from incomplete disclosures.</li>
          </ul>
        </div>
        
        {/* Section 5 */}
        <div className="p-6">
          <h2 className="text-xl font-semibold text-teal-800 mb-4">5. Image & Testimonial Usage</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>We may request your permission to share before-and-after photos, testimonials, or feedback on our website or social media. No content will be used without your signed release.</li>
          </ul>
        </div>

        {/* Last Updated */}
        <div className="bg-gray-50 px-6 py-4 text-right">
          <p className="text-sm text-gray-600">Last updated: August 23, 2025</p>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;
