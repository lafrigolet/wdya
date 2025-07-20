"use client";

import React from "react";

import cta1jpg from "../assets/images/cta1.png";

export function Cta1() {
  return (
    <section className="bg-white py-16 md:py-24 lg:py-28">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 items-center gap-x-20 gap-y-12 md:gap-y-16 lg:grid-cols-2">
          <div>
            <h2 className="font-heading text-4xl font-bold text-neutral md:text-6xl lg:text-7xl">
              Unlock Your Perfect Package Today
            </h2>
            <p className="mt-4 text-lg text-neutral-light">
              Explore our tailored packages designed to elevate your web
              development experience and boost your business.
            </p>
            <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
              <button className="rounded-md bg-primary px-6 py-3 text-white font-semibold shadow-soft hover:bg-primary-dark transition-colors">
                Hire
              </button>
              <button className="rounded-md border border-primary text-primary px-6 py-3 font-semibold hover:bg-primary-light hover:text-white transition-colors">
                Learn More
              </button>
            </div>
          </div>
          <div className="hidden lg:block">
            <img
              src={cta1jpg}
              className="w-full rounded-xl shadow-card object-cover"
              alt="Unlock Your Perfect Package"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
