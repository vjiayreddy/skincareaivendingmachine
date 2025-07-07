import IndustryCard from "@/components/shared/IndustryCard";
import React from "react";

const industries = [
  {
    title: "Skincare and Cosmetic Brands",
    content: `Enhance product launches and brand experiences with cutting-edge technology solutions.
Drive customer engagement through innovative digital displays and interactive experiences.`,
    image:
      "https://cdn.abacus.ai/images/64f4979a-538b-425d-940f-0c3c1e1d4a42.png",
  },
  {
    title: "Beauty Clinics and Dermatologists",
    content: `Streamline patient consultations with advanced diagnostic and visualization tools.
Elevate clinic ambiance while providing educational content for enhanced patient care.`,
    image: "https://cdn.abacus.ai/images/04d85625-48b4-4870-8c38-d21187363118.png",
  },
  {
    title: "Malls and Retail Spaces",
    content: `Transform shopping experiences with dynamic digital signage and interactive kiosks.
Boost foot traffic and sales through engaging visual merchandising solutions.`,
    image: "https://cdn.abacus.ai/images/0df70416-e770-4d28-8e2c-8d43b9093037.png",
  },
  {
    title: "Airports and Lounges",
    content: `Provide travelers with premium relaxation and entertainment experiences.
Enhance passenger satisfaction with modern amenities and digital convenience features.`,
    image: "https://cdn.abacus.ai/images/49d80fdb-640d-4eb9-9326-e838b04f523e.png",
  },
  {
    title: "Salons & Spas",
    content: `Create luxurious, tech-enhanced environments that elevate client relaxation.
Offer personalized beauty consultations and treatments with innovative equipment.`,
    image: "https://cdn.abacus.ai/images/af3d64f9-e132-4e86-abaf-7c7ea14a9bbc.png",
  },
  {
    title: "Fitness Centers & Wellness Hubs",
    content: `Integrate smart technology to optimize workout experiences and member engagement.
Provide comprehensive wellness solutions that motivate and track fitness progress.`,
    image: "https://cdn.abacus.ai/images/b6e3a580-8a30-4df9-a917-5ab3bc967c1b.png",
  },
  {
    title: "Corporate Offices",
    content: `Transform shopping experiences with dynamic digital signage and interactive kiosks.
Boost foot traffic and sales through engaging visual merchandising solutions.`,
    image: "https://cdn.abacus.ai/images/7d1fe937-ee7b-4d3f-b94a-650cbdba854b.png",
  },
];

const Industries = () => {
  return (
    <div>
      <div className="xl:mx-auto xl:max-w-full">
        <img
          alt=""
          src="https://cdn.abacus.ai/images/68f5cc84-f417-4153-a538-3d0555bf88ec.png"
          className="aspect-7/2 w-full object-cover"
        />
      </div>
      <div className="mx-auto mt-32  max-w-7xl  sm:mt-32">
        <div className="mx-auto max-w-3xl lg:mx-0">
          <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
            Industries We Serve
          </h2>
          <p className="mt-6 text-lg/8 text-gray-600">
            Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam
            voluptatum cupiditate veritatis in accusamus quisquam.
          </p>
        </div>
      </div>
      {industries.map((item, index) => (
        <IndustryCard key={index} {...item} />
      ))}
    </div>
  );
};

export default Industries;
