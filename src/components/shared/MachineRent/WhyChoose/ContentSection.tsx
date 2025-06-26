"use client";

import React from "react";
import { motion } from "framer-motion";
import { CreditCard, Wallet, Plus, Phone, Shield } from "lucide-react";

export default function WhyChoose() {
  return (
    <section className="bg-gray-50 py-12 sm:py-16 lg:py-[120px] dark:bg-dark overflow-hidden">
      <div className="container mx-auto">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full px-4">
            <motion.div
              className="mx-auto mb-10 sm:mb-12 lg:mb-[60px] max-w-3xl text-center px-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-primary mb-2 block text-base sm:text-lg font-semibold">
                Our Trusted Partners
              </span>
              <h2 className="text-dark mb-3 text-2xl sm:text-3xl leading-[1.208] font-bold sm:text-4xl md:text-[40px]">
                Why Choose AI Skincare Vending Solutions?
              </h2>
              <p className="text-body-color text-sm sm:text-base dark:text-dark-6">
                Boost employee satisfaction with our 24/7 AI Skincare Vending
                Solutions offering Skincare products.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="mx-auto  pb-30 container px-4 sm:px-6">
        <div className="grid items-center gap-8 sm:gap-10 lg:gap-12 lg:grid-cols-2 xl:gap-24">
          <motion.div
            className="w-full"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="relative z-10 pl-5 pt-5 sm:pl-8 sm:pt-8 lg:pl-10 lg:pt-10">
              <motion.div
                className="absolute left-0 top-0 -z-10 aspect-[430/508] w-full max-w-[430px] bg-purple-light-3"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              ></motion.div>
              <motion.div
                className="shadow-lg"
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img
                  src="https://cdn.abacus.ai/images/d6a5a6f4-e71d-43b9-b33e-18c3ea5aabd1.png"
                  alt="about image"
                  className="w-full h-100 rounded-lg" /* Added width, height auto and border radius */
                />
              </motion.div>
            </div>
          </motion.div>
          <motion.div
            className="w-full"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
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
                Refreshments at Your Fingertips, Day or Night
              </motion.span>
              <motion.h2
                className="mb-4 sm:mb-5 text-2xl sm:text-3xl font-bold !leading-tight text-dark sm:text-4xl md:text-5xl dark:text-white"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <span className="text-green-700">
                  Premium Skincare Products.
                </span>{" "}
                Vending Machine
                <span className="block mt-1 sm:mt-0 sm:inline"> Service</span>
              </motion.h2>
              <motion.p
                className="mb-6 sm:mb-9 text-base sm:text-lg text-body-color dark:text-dark-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                Our vending machines offer 24/7 access to Skincare products,
                ensuring your team stays energized, productive, and satisfied.
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
        </div>
      </div>
      <section className="pb-12 sm:pb-16 dark:bg-dark overflow-hidden">
        <div className="mx-auto container px-4 sm:px-6">
          <div className="grid items-center gap-8 sm:gap-10 lg:gap-12 lg:grid-cols-2 xl:gap-24">
            <motion.div
              className="w-full pl-10"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
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
                  Most Advanced Technologies
                </motion.h2>
                <motion.p
                  className="mb-6 sm:mb-9 text-base sm:text-lg text-body-color dark:text-dark-6"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  AI Skincare vending machines use advanced technology for real-time
                  tracking, seamless payments, and efficient, hassle-free operations.
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
              className="w-full"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="relative z-10 pl-5 pt-5 sm:pl-8 sm:pt-8 lg:pl-10 lg:pt-10">
                <motion.div
                  className="absolute left-0 top-0 -z-10 aspect-[430/508] w-full max-w-[430px] bg-purple-light-3"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                ></motion.div>
                <motion.div
                  className="shadow-lg"
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <img
                    src="https://cdn.abacus.ai/images/d6a5a6f4-e71d-43b9-b33e-18c3ea5aabd1.png"
                    alt="about image"
                    className="w-full h-100 rounded-lg"
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Payment Methods Section */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold text-gray-800 mb-4">
              Pay Your Way<span className="text-green-600">—</span>We Support All <br/>Major Payment Methods
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Seamless Transactions, Anytime
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* UPI Payment Option */}
            <motion.div
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <div className="bg-blue-50 p-3 rounded-lg mr-4">
                      <Phone className="h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">UPI</h3>
                  </div>
                  <motion.div whileHover={{ rotate: 180 }} transition={{ duration: 0.3 }}>
                    <Plus className="h-5 w-5 text-gray-400" />
                  </motion.div>
                </div>
                <div className="flex flex-wrap items-center gap-4 mt-6">
                  <img src="/images/payment/gpay.png" alt="Google Pay" className="h-8" />
                  <img src="/images/payment/phonepe.png" alt="PhonePe" className="h-8" />
                  <img src="/images/payment/paytm.png" alt="Paytm" className="h-8" />
                </div>
              </div>
            </motion.div>

            {/* Credit/Debit Card Option */}
            <motion.div
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -5 }}
            >
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <div className="bg-purple-50 p-3 rounded-lg mr-4">
                      <CreditCard className="h-6 w-6 text-purple-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">Credit/Debit Card</h3>
                  </div>
                  <motion.div whileHover={{ rotate: 180 }} transition={{ duration: 0.3 }}>
                    <Plus className="h-5 w-5 text-gray-400" />
                  </motion.div>
                </div>
                <div className="flex flex-wrap items-center gap-4 mt-6">
                  <img src="/images/payment/mastercard.png" alt="Mastercard" className="h-8" />
                  <img src="/images/payment/visa.png" alt="Visa" className="h-8" />
                  <img src="/images/payment/rupay.png" alt="RuPay" className="h-8" />
                </div>
              </div>
            </motion.div>

            {/* Wallet Option */}
            <motion.div
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ y: -5 }}
            >
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <div className="bg-green-50 p-3 rounded-lg mr-4">
                      <Wallet className="h-6 w-6 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">Wallet</h3>
                  </div>
                  <motion.div whileHover={{ rotate: 180 }} transition={{ duration: 0.3 }}>
                    <Plus className="h-5 w-5 text-gray-400" />
                  </motion.div>
                </div>
                <div className="flex flex-wrap items-center gap-4 mt-6">
                  <img src="/images/payment/paytm.png" alt="Paytm" className="h-8" />
                  <img src="/images/payment/mobikwik.png" alt="Mobikwik" className="h-8" />
                  <img src="/images/payment/amazonpay.png" alt="Amazon Pay" className="h-8" />
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div 
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className="inline-flex items-center justify-center p-4 bg-white rounded-lg shadow border border-gray-100">
              <Shield className="h-6 w-6 text-green-600 mr-2" />
              <span className="text-gray-700 font-medium">Secure Payment Processing</span>
            </div>
          </motion.div>
        </div>
      </section>
    </section>
  );
}
