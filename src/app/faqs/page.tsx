"use client";
import React from "react";
import AccordionItem from "@/components/shared/FaqListItem/FaqListItem";

// AI Skincare Vending Machine FAQ Data
const faqData = [
  {
    header: "How does the AI skincare vending machine work?",
    text: "Our AI skincare vending machine uses advanced facial recognition and skin analysis technology. When you approach the machine, it scans your face, analyzes your skin condition (including hydration levels, oil production, texture, and concerns), and recommends personalized skincare products that address your specific needs. The touchscreen interface guides you through the entire process, from analysis to selection and payment.",
  },
  {
    header: "What skin concerns can the AI vending machine detect?",
    text: "Our advanced AI technology can detect and analyze multiple skin concerns including dehydration, excess oil production, fine lines, wrinkles, dark spots, hyperpigmentation, acne, redness, sensitivity, and uneven skin tone. The machine uses a combination of high-resolution imaging and machine learning algorithms trained on diverse skin types and conditions.",
  },
  {
    header: "How accurate is the AI skin analysis?",
    text: "Our AI skin analysis technology has been tested and refined with dermatologists to achieve over 95% accuracy in detecting common skin conditions. The system continuously learns and improves through machine learning algorithms that have been trained on thousands of skin samples across different ages, ethnicities, and skin types.",
  },
  {
    header: "Is my skin data kept private?",
    text: "Yes, we take your privacy very seriously. All skin scans and personal data are encrypted and securely stored. Your information is never shared or sold to third parties. You can opt to have your data deleted immediately after your transaction, or stored securely for improved personalization during future visits. Our privacy policy complies with GDPR, CCPA, and other global privacy standards.",
  },
  {
    header: "What payment methods are accepted?",
    text: "Our vending machines accept multiple payment methods including credit/debit cards, mobile payments (Apple Pay, Google Pay, Samsung Pay), as well as contactless payments. Some locations may also support payment through QR codes linked to popular payment apps. All transactions are securely processed and protected.",
  },
  {
    header: "What skincare brands are available in the vending machines?",
    text: "Our machines stock a carefully curated selection of high-quality skincare brands, ranging from trusted drugstore options to premium clinical formulations. The selection varies by location but typically includes both well-known global brands and innovative indie skincare lines that meet our standards for efficacy, quality ingredients, and sustainability.",
  },
  {
    header: "Can I return products purchased from the vending machine?",
    text: "If you're unsatisfied with your purchase, you can request a return within 14 days. Simply scan the QR code on your receipt (which can be emailed to you) or visit our website to initiate the return process. Each return is evaluated based on our return policy, and refunds are typically processed within 3-5 business days.",
  },
  {
    header: "Where are these AI skincare vending machines located?",
    text: "Our AI skincare vending machines are strategically located in high-traffic areas including shopping malls, upscale hotels, university campuses, corporate buildings, airports, and select beauty retailers. Use our mobile app or website to find the nearest machine to your location. We're continuously expanding our network to new cities and locations.",
  },
  {
    header:
      "Can the machine recommend products for sensitive skin or allergies?",
    text: "Absolutely! The AI analysis includes sensitivity detection, and you can manually input specific allergies or sensitivities during the consultation process. The machine will filter out products containing ingredients you should avoid and only recommend suitable formulations for sensitive skin types. All ingredient lists are transparently displayed before purchase.",
  },
  {
    header: "How often should I use the AI skin analysis feature?",
    text: "For optimal results, we recommend using the skin analysis feature every 4-6 weeks, as this allows enough time for your current skincare routine to show effects. However, your skin condition can change due to seasons, stress, hormones, and other factors, so you're welcome to get analyzed whenever you feel your skincare needs have changed. Regular analysis helps track improvements and adjust recommendations accordingly.",
  },
  {
    header: "Do the machines offer samples before purchase?",
    text: "Select locations feature our premium models that do offer sample dispensing for certain products. The sample function allows you to test textures and see how products feel on your skin before committing to a full-size purchase. The availability of samples varies by location and is clearly indicated on the machine's interface.",
  },
  {
    header:
      "Can I access my skin analysis history and previous recommendations?",
    text: "Yes, by creating a free account and scanning the QR code during each session, your skin analysis results and product recommendations are saved to your profile. You can access this information anytime through our mobile app or website to track changes in your skin health over time and review previous product recommendations.",
  },
];

const FaqPage = () => {
  return (
    <section className="relative z-10 overflow-hidden bg-gradient-to-b from-white to-teal-50 py-16 md:py-20 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-[60px] max-w-[520px] text-center lg:mb-20">
          <span className="mb-2 block text-lg font-semibold text-primary">
            FAQ
          </span>
          <h2 className="text-3xl font-bold text-dark sm:text-4xl md:text-[40px] dark:text-white">
            Any Questions? Look Here
          </h2>
          <p className="mt-4 text-base text-body-color dark:text-dark-6">
            Learn more about our AI-powered skincare vending machines
          </p>
        </div>

        <div className="-mx-4 flex flex-wrap">
          {faqData.map((item, index) => (
            <div key={index} className="w-full px-4 lg:w-1/2">
              <AccordionItem
                key={index}
                header={item.header}
                text={item.text}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 right-0 z-[-1]">
        <svg
          width="1440"
          height="886"
          viewBox="0 0 1440 886"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.5"
            d="M193.307 -273.321L1480.87 1014.24L1121.85 1373.26C1121.85 1373.26 731.745 983.231 478.513 729.927C225.976 477.317 -165.714 85.6993 -165.714 85.6993L193.307 -273.321Z"
            fill="url(#paint0_linear)"
          />
          <defs>
            <linearGradient
              id="paint0_linear"
              x1="1308.65"
              y1="1142.58"
              x2="602.827"
              y2="-418.681"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#3056D3" stop-opacity="0.36" />
              <stop offset="1" stop-color="#F5F2FD" stop-opacity="0" />
              <stop offset="1" stop-color="#F5F2FD" stop-opacity="0.096144" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default FaqPage;
