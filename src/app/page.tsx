import CustomBusinessSection from "@/components/CustomBusinessSection";
import HeroBannerTwo from "@/components/HeroBannerTwo";
import HowItWorks from "@/components/HowItWorks";
import ServicesOverview from "@/components/ServicesOverview";
import KeyFeatures from "@/components/KeyFeatures";
import InvestmentCTA from "@/components/InvestmentCTA";
import ContactFormSection from "@/components/ContactFormSection";
import NewsletterSubscriptionBar from "@/components/NewsletterSubscriptionBar";


export const metadata = {
  title: "AI-Powered Skincare Vending Machine | Home",
  description:
    "Revolutionary vending machines that analyze skin conditions in real-time and recommend personalized skincare products.",
};

const HomePage = () => {
  return (
    <>
      <HeroBannerTwo />
      <CustomBusinessSection />
      <ServicesOverview />
      <HowItWorks />
      <KeyFeatures />
      <InvestmentCTA />
      <ContactFormSection />
      <NewsletterSubscriptionBar />
    </>
  );
};
export default HomePage;
