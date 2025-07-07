import KeyFeatures from "@/components/shared/KeyFeature";
import HowToWork from "@/components/shared/HowToWork";
import DiscoverMachine from "@/components/shared/DiscoverMachine/DIscoverMachine";
import CtaSection from "@/components/shared/CtaSection/CtaSection";
import BannerComponent from "@/components/shared/Banner";


export default function HomePage() {
  return (
    <>
      <BannerComponent/>
      <HowToWork/>
      <KeyFeatures />
      <DiscoverMachine/>
      <CtaSection/>
    </>
  );
}
