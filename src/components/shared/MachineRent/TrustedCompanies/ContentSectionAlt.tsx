"use client";

import React from "react";
import { motion } from "framer-motion";

export default function ContentSectionAlt() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 dark:bg-dark overflow-hidden">
      <div className="mx-auto container px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 sm:gap-12 md:gap-16 lg:gap-12 xl:gap-20 lg:grid-cols-2">
          <motion.div
            className="w-full  lg:pl-10 order-2 lg:order-1"
            initial={{ opacity: 0, y: 30, x: 0 }}
            whileInView={{ opacity: 1, y: 0, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div>
              <motion.span
                className="mb-4 sm:mb-5 block text-lg sm:text-xl font-semibold text-dark dark:text-white"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                Vending Machines as a Smart Investment
              </motion.span>
              <motion.h2
                className="mb-4 sm:mb-5 text-2xl sm:text-3xl font-bold !leading-tight text-dark sm:text-4xl md:text-5xl dark:text-white"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                Cost-Effectiveness
              </motion.h2>
              <motion.p
                className="mb-6 sm:mb-9 text-base sm:text-lg text-body-color dark:text-dark-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                Enhance your workspace with cost-effective vending machines with
                Low Maintenance-offering convenience, satisfaction, and
                hassle-free upkeep with refills and repairs handled.
              </motion.p>
              <motion.button
                className="inline-flex items-center justify-center rounded-lg bg-green-700 px-5 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base font-medium text-white duration-200 hover:bg-green-800"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                Contact Us
              </motion.button>
            </div>
          </motion.div>
          <motion.div
            className="w-full order-1 lg:order-2"
            initial={{ opacity: 0, y: -30, x: 0 }}
            whileInView={{ opacity: 1, y: 0, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="z-10">
              <motion.div
                className="shadow-lg rounded-lg overflow-hidden"
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300 }}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
              >
                <img
                  src="https://cdn.abacus.ai/images/d6a5a6f4-e71d-43b9-b33e-18c3ea5aabd1.png"
                  alt="AI Skincare Vending Machine - Cost Effective"
                  className="w-full h-auto aspect-[4/3] sm:aspect-[4/3] md:aspect-[4/3] lg:aspect-auto object-cover object-center rounded-lg"
                  loading="lazy"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
