import React from "react";
import ContactUsHeader from "@/components/ContactUsHeader";
import ContactInfo from "@/components/ContactInfo";
import NewsletterSubscriptionBar from "@/components/NewsletterSubscriptionBar";
import FooterSection from "@/components/FooterSection";

export const metadata = {
  title: "Contact Us | AI Skincare Vending Machine",
  description:
    "Get in touch with us about our AI-powered skincare vending machines. Request a demo or franchise information.",
};

export default function ContactUs() {
  return (
    <main className="min-h-screen">
      <ContactUsHeader />
      <ContactInfo />
      <NewsletterSubscriptionBar />
      <FooterSection />
    </main>
  );
}
