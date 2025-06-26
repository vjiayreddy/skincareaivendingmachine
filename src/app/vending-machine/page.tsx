import React from "react";
import Banner from "@/components/shared/MachineRent/Banner";
import TrustedCompanies from "@/components/shared/MachineRent/TrustedCompanies";
import ContentSection from "@/components/shared/MachineRent/TrustedCompanies/ContentSection";
import ContentSectionAlt from "@/components/shared/MachineRent/TrustedCompanies/ContentSectionAlt";
import WhyChoose from "@/components/shared/MachineRent/WhyChoose/ContentSection";


const MachineRent = () => {
  return (
    <>
     <Banner/>
     <TrustedCompanies/>
     <ContentSection/>
     <ContentSectionAlt/>
     <WhyChoose/>
    </>
  );
};

export default MachineRent;
