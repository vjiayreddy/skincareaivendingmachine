"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import ContactFormModal from "../ContactFormModal/ContactFormModal";
import DotsComponent from "./Dots";

const DiscoverMachine = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <>
      <section className="relative z-10 bg-neutral-900 overflow-hidden">
        <div className="left-0 top-0 h-[300px] md:h-[400px] lg:h-full lg:absolute lg:w-1/2">
          <img
            src="/images/discover1.png"
            alt="AI Skincare vending machine"
            className="h-full w-full object-cover object-center"
            loading="lazy"
          />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="-mx-4 flex flex-wrap lg:justify-end">
            <div className="w-full px-4 lg:w-1/2">
              <div className="py-10 md:py-16 lg:py-[120px] lg:px-0 xl:px-10 2xl:px-20">
                <span className="mb-3 sm:mb-4 block text-base sm:text-lg font-medium text-green-400">
                  We are creative team
                </span>
                <h2 className="mb-4 sm:mb-5 lg:mb-6 text-2xl sm:text-3xl font-bold text-white md:text-4xl lg:text-[40px]/[48px]">
                Discover Convenience and
                Choice with <span className="text-green-400">AI Skincare vending </span>machine
                </h2>
                <p className="mb-8 sm:mb-10 lg:mb-12 text-sm sm:text-base leading-relaxed text-white">
                  Experience 24/7 access to a diverse selection of snacks and
                  drinks with Daalchini's modern digital vending machine
                  network.
                </p>
                <motion.button
                  onClick={openModal}
                  className="inline-block border border-transparent bg-white px-5 sm:px-7 py-2 sm:py-3 text-sm sm:text-base font-medium text-dark transition hover:bg-opacity-90 rounded-md"
                  whileHover={{ scale: 1.05 }}
                  animate={{
                    scale: [1, 1.05, 1],
                    boxShadow: [
                      "0px 0px 0px rgba(0, 0, 0, 0)",
                      "0px 0px 15px rgba(74, 222, 128, 0.5)",
                      "0px 0px 0px rgba(0, 0, 0, 0)"
                    ]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "loop"
                  }}
                >
                  Request to callback
                </motion.button>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden sm:block">
          <span className="absolute right-4 top-4 z-[-1]">
           <DotsComponent/>
          </span>
        </div>
      </section>

      {/* Contact Form Modal */}
      <ContactFormModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
};

export default DiscoverMachine;
