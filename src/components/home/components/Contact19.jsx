"use client";

import React, { useRef } from "react";
import Card from "../../common/Card";
import { motion } from "framer-motion";
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/24/outline";

export function Contact19() {
  return (
    <section className="bg-white py-16 md:py-24 lg:py-28">
      <div className="container mx-auto px-4">
        <div className="mb-12 max-w-lg text-center mx-auto md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold text-primary md:mb-4">Connect</p>
          <h2 className="font-heading mb-5 text-4xl font-bold text-neutral md:mb-6 md:text-6xl lg:text-7xl">
            Get in Touch
          </h2>
          <p className="text-lg text-neutral-light">
            We’re here to help you with your inquiries.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-x-12 gap-y-12 md:grid-cols-3 md:gap-y-16">
          <motion.div
            className="flex flex-col text-center p-6 bg-neutral-bg rounded-xl shadow-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <a href="mailto:hello@relume.io">
              <Card className="text-center p-6 cursor-pointer hover:shadow-lg transition-shadow duration-300 ease-in-out bg-neutral-bg">
                <div className="mb-5 lg:mb-6 flex justify-center items-center">
                  <EnvelopeIcon className="size-12 text-primary" />
                </div>
                <h3 className="font-heading mb-3 text-2xl font-bold text-neutral md:text-3xl lg:mb-4 lg:text-4xl">
                  Email
                </h3>
                <p className="mb-5 text-neutral-light md:mb-6">
                  Reach us anytime at our support email address.
                </p>
                <span className="underline text-primary hover:text-primary-dark transition-colors">
                  hello@relume.io
                </span>
              </Card>
            </a>
          </motion.div>
          <motion.div
            className="flex flex-col text-center p-6 bg-neutral-bg rounded-xl shadow-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <a href="tel:+41440000000">
              <Card className="text-center p-6 cursor-pointer hover:shadow-lg transition-shadow duration-300 ease-in-out bg-neutral-bg">
                <div className="mb-5 lg:mb-6 flex justify-center items-center">
                  <PhoneIcon className="size-12 text-primary" />
                </div>
                <h3 className="font-heading mb-3 text-2xl font-bold text-neutral md:text-3xl lg:mb-4 lg:text-4xl">
                  Phone
                </h3>
                <p className="mb-5 text-neutral-light md:mb-6">
                  Call us for immediate assistance or inquiries.
                </p>
                <span className="underline text-primary hover:text-primary-dark transition-colors">
                  +41 44 000 0000
                </span>
              </Card>
            </a>
          </motion.div>
          <motion.div
            className="flex flex-col text-center p-6 bg-neutral-bg rounded-xl shadow-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card className="text-center p-6 cursor-pointer hover:shadow-lg transition-shadow duration-300 ease-in-out bg-neutral-bg">
              <a href="geo:47.3769,8.5417">
                <div className="mb-5 lg:mb-6 flex justify-center items-center">
                  <MapPinIcon className="size-12 text-primary" />
                </div>
                <h3 className="font-heading mb-3 text-2xl font-bold text-neutral md:text-3xl lg:mb-4 lg:text-4xl">
                  Office
                </h3>
                <p className="mb-5 text-neutral-light md:mb-6">
                  Visit us at our headquarters for personalized support.
                </p>
                <span className="underline text-primary hover:text-primary-dark transition-colors">
                  456 Example Ave, Zurich, Switzerland
                </span>
              </a>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
