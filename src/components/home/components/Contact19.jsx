"use client";

import React, { useRef } from "react";
import Card from "../../common/Card";
import { motion } from "framer-motion";
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/24/outline";

export function Contact19() {
  const cards = [
    {
      icon: <EnvelopeIcon className="size-12 text-primary" />,
      title: "Email",
      description: "Reach us anytime at our support email address.",
      link: "hello@relume.io",
      href: "mailto:hello@relume.io",
    },
    {
      icon: <PhoneIcon className="size-12 text-primary" />,
      title: "Phone",
      description: "Call us for immediate assistance or inquiries.",
      link: "+41 44 000 0000",
      href: "tel:+41440000000",
    },
    {
      icon: <MapPinIcon className="size-12 text-primary" />,
      title: "Office",
      description: "Visit us at our headquarters for personalized support.",
      link: "456 Example Ave, Zurich, Switzerland",
      href: "geo:47.3769,8.5417",
    },
  ];

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
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <a href={card.href}>
                <Card className="text-center p-6 cursor-pointer hover:shadow-lg transition-shadow duration-300 ease-in-out bg-neutral-bg">
                  <div className="mb-5 lg:mb-6 flex justify-center items-center">
                    {card.icon}
                  </div>
                  <h3 className="font-heading mb-3 text-2xl font-bold text-neutral md:text-3xl lg:mb-4 lg:text-4xl">
                    {card.title}
                  </h3>
                  <p className="mb-5 text-neutral-light md:mb-6">
                    {card.description}
                  </p>
                  <span className="underline text-primary hover:text-primary-dark transition-colors">
                    {card.link}
                  </span>
                </Card>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
