"use client";

import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CompanyCard from "./CompanyCard";

// Sample trusted companies data
const trustedCompanies = [
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
    image:
      "https://cdn.abacus.ai/images/04d85625-48b4-4870-8c38-d21187363118.png",
  },
  {
    title: "Malls and Retail Spaces",
    content: `Transform shopping experiences with dynamic digital signage and interactive kiosks.
    Boost foot traffic and sales through engaging visual merchandising solutions.`,
    image:
      "https://cdn.abacus.ai/images/0df70416-e770-4d28-8e2c-8d43b9093037.png",
  },
  {
    title: "Airports and Lounges",
    content: `Provide travelers with premium relaxation and entertainment experiences.
    Enhance passenger satisfaction with modern amenities and digital convenience features.`,
    image:
      "https://cdn.abacus.ai/images/49d80fdb-640d-4eb9-9326-e838b04f523e.png",
  },
  {
    title: "Salons & Spas",
    content: `Create luxurious, tech-enhanced environments that elevate client relaxation.
    Offer personalized beauty consultations and treatments with innovative equipment.`,
    image:
      "https://cdn.abacus.ai/images/af3d64f9-e132-4e86-abaf-7c7ea14a9bbc.png",
  },
  {
    title: "Fitness Centers & Wellness Hubs",
    content: `Integrate smart technology to optimize workout experiences and member engagement.
    Provide comprehensive wellness solutions that motivate and track fitness progress.`,
    image:
      "https://cdn.abacus.ai/images/b6e3a580-8a30-4df9-a917-5ab3bc967c1b.png",
  },
  {
    title: "Corporate Offices",
    content: `Transform shopping experiences with dynamic digital signage and interactive kiosks.
    Boost foot traffic and sales through engaging visual merchandising solutions.`,
    image:
      "https://cdn.abacus.ai/images/7d1fe937-ee7b-4d3f-b94a-650cbdba854b.png",
  },
];

// Main TrustedCompanies component
const TrustedCompanies = () => {
  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="py-16 lg:py-24 bg-gray-50 dark:bg-dark overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          className="mx-auto mb-12 max-w-[600px] text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-green-600 mb-2 block text-lg font-semibold">
            Our Trusted Partners
          </span>
          <h2 className="text-dark dark:text-white mb-4 text-3xl font-bold sm:text-4xl">
            Companies Who Trust Our AI Skincare Vending Solutions
          </h2>
          <p className="text-body-color dark:text-dark-6 text-base">
            Experience the trusted choice of leading companies, Skincare and
            Cosmetic brands etc. Partner with us today for reliablex and convenient
            vending solutions
          </p>
        </motion.div>

        <div className="px-4">
          {/* Adding custom styles to ensure cards are fully visible with dots */}
          <style jsx global>{`
            .trusted-companies-slider {
              padding-bottom: 40px; /* Add space for the dots */
            }
            .trusted-companies-slider .slick-dots {
              bottom: -5px; /* Position dots closer to the slider */
            }
            .trusted-companies-slider .slick-slide {
              padding: 10px 0; /* Add vertical padding to each slide */
            }
            .trusted-companies-slider .slick-list {
              margin: 0 -10px; /* Compensate for slide padding */
              padding-bottom: 15px; /* Extra space at the bottom */
            }
          `}</style>

          <Slider {...settings} className="trusted-companies-slider">
            {trustedCompanies.map((company, index) => (
              <div key={index} className="px-3">
                {/* Increased horizontal padding */}
                <CompanyCard
                  logo={company.image}
                  name={company.title}
                  description={company.content}
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default TrustedCompanies;
