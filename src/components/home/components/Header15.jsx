"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

import header15jpg from "../assets/images/header15.jpg";

export function Header15() {
  const { t } = useTranslation();
  return (
    <section className="bg-white py-16 md:py-24 lg:py-28">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 items-center gap-x-12 gap-y-8 md:grid-cols-2 lg:gap-x-20">
          <div>
            <h1 className="font-heading text-5xl font-bold text-neutral md:text-7xl lg:text-8xl">
              {t('header15.title')}
            </h1>
          </div>
          <div>
            <p className="text-lg text-neutral-light">
              {t('header15.description')}
            </p>
            <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
              <button className="rounded-md bg-primary px-6 py-3 text-white font-semibold shadow-soft hover:bg-primary-dark transition-colors">
                {t('header15.hireButton')}
              </button>
              <button className="rounded-md border border-primary text-primary px-6 py-3 font-semibold hover:bg-primary-light hover:text-white transition-colors">
                {t('header15.learnMoreButton')}
              </button>
            </div>
          </div>
        </div>
        <div className="mt-12">
          <motion.img
            src={header15jpg}
            className="w-full rounded-xl shadow-card object-cover"
            alt="Web Development Partner"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />
        </div>
      </div>
    </section>
  );
}
