import KeyFeatures from "@/components/shared/KeyFeature";
import HowToWork from "@/components/shared/HowToWork";
import HomeBanner from "@/components/shared/HomeBanner/HomeBanner";
import DiscoverMachine from "@/components/shared/DiscoverMachine/DIscoverMachine";
import CtaSection from "@/components/shared/CtaSection/CtaSection";
import BannerComponent from "@/components/shared/Banner";


export default function Example() {
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
