"use client";

import React from "react";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


// Main TrustedCompanies component
const TrustedCompanies = () => {
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
            Why Choose AI Skincare <br/> Vending Solutions?
          </h2>
          <p className="text-body-color dark:text-dark-6 text-base">
            Experience the trusted choice of leading companies, Skincare and
            Cosmetic brands etc. Partner with us today for reliablex and
            convenient vending solutions
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustedCompanies;
