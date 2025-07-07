"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import ContactFormModal from "../../ContactFormModal/ContactFormModal";

const MachineRentBanner = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <div className="relative py-12 px-4 lg:pb-[110px] lg:pt-[90px] bg-gradient-to-br from-blue-50 via-white to-green-50 overflow-hidden">
        {/* Animated Background Elements */}
        <motion.div
          className="absolute left-0 top-0 -z-10 h-full w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="absolute left-20 top-20 h-40 w-40 rounded-full bg-green-100"
            animate={{
              x: [0, 30, 0],
              y: [0, 15, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
          <motion.div
            className="absolute right-40 bottom-20 h-40 w-40 rounded-full bg-blue-50 opacity-70"
            animate={{
              x: [0, -40, 0],
              y: [0, 20, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatType: "reverse",
              delay: 1,
            }}
          />
        </motion.div>

        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <motion.div
                className="mb-12 lg:mb-0"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h2 className="mb-5 text-3xl sm:text-4xl font-bold !leading-[1.208] text-dark dark:text-white lg:text-[40px] xl:text-[45px]">
                  Smart <span className="text-green-700">Ai Skincare <br/> Vending Machine </span> for a <br/>Better Workplace
                </h2>
                <p className="mb-8 max-w-[485px] text-base text-body-color dark:text-dark-6">
                  A Smart AI Skincare Vending Machine analyzes employees' skin
                  conditions using artificial intelligence and dispenses
                  personalized skincare products on-demand.
                </p>
                <motion.button
                  className="inline-flex items-center justify-center rounded-lg bg-green-700 px-6 py-3 text-base font-medium text-white duration-200 hover:bg-green-800"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={openModal}
                >
                  Get Vending Machine
                </motion.button>
              </motion.div>
            </div>
            <div className="w-full px-4 lg:w-1/2">
              <motion.div
                className="-mx-2 flex flex-wrap sm:-mx-4"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <div className="w-1/2 px-2 sm:px-4">
                  <motion.div
                    className="mb-4 h-[220px] sm:h-[256px] md:h-[320px] lg:h-[332px] xl:h-[442px] overflow-hidden rounded-lg shadow-md"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.img
                      src="https://cdn.tailgrids.com/assets/images/marketing/hero/hero-12/image-1.jpg"
                      alt="vending machine"
                      className="h-full w-full object-cover object-center hover:scale-110 transition-transform duration-700"
                      initial={{ scale: 1.1 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 1 }}
                    />
                  </motion.div>
                </div>
                <div className="w-1/2 px-2 sm:px-4">
                  <motion.div
                    className="mb-4 h-[105px] sm:h-[120px] md:h-[150px] lg:h-[150px] xl:h-[205px] overflow-hidden rounded-lg shadow-md"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.img
                      src="https://cdn.tailgrids.com/assets/images/marketing/hero/hero-12/image-2.jpg"
                      alt="vending machine detail"
                      className="h-full w-full object-cover object-center hover:scale-110 transition-transform duration-700"
                      initial={{ scale: 1.1 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 1, delay: 0.2 }}
                    />
                  </motion.div>
                  <motion.div
                    className="h-[105px] sm:h-[120px] md:h-[150px] lg:h-[150px] xl:h-[205px] overflow-hidden rounded-lg shadow-md"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.img
                      src="https://cdn.tailgrids.com/assets/images/marketing/hero/hero-12/image-3.jpg"
                      alt="vending machine interface"
                      className="h-full w-full object-cover object-center hover:scale-110 transition-transform duration-700"
                      initial={{ scale: 1.1 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 1, delay: 0.4 }}
                    />
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form Modal */}
      <ContactFormModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
};

export default MachineRentBanner;
