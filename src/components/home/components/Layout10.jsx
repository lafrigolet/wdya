"use client";

import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout10() {
  return (
    <section className="bg-white py-16 md:py-24 lg:py-28">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 items-center gap-y-12 md:grid-cols-2 md:gap-x-12 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold text-primary md:mb-4">Toggle</p>
            <h1 className="font-heading text-4xl font-bold text-neutral mb-6 md:text-6xl lg:text-7xl">
              Experience Seamless Dark & Light Mode
            </h1>
            <p className="mb-6 text-lg text-neutral-light md:mb-8">
              Easily switch between dark and light modes to suit your
              preference. Our system automatically detects your theme settings
              for a personalized experience.
            </p>
            <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
              <div>
                <div className="mb-3 md:mb-4">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                    className="size-12"
                    alt="Relume logo 1"
                  />
                </div>
                <h6 className="mb-3 text-xl font-bold text-neutral md:mb-4">
                  Automatic Detection
                </h6>
                <p className="text-neutral-light">
                  Enjoy a user-friendly interface that adapts to your system
                  theme effortlessly.
                </p>
              </div>
              <div>
                <div className="mb-3 md:mb-4">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                    className="size-12"
                    alt="Relume logo 1"
                  />
                </div>
                <h6 className="mb-3 text-xl font-bold text-neutral md:mb-4">
                  Manual Toggle
                </h6>
                <p className="text-neutral-light">
                  Switch modes anytime with our easy-to-use manual toggle
                  feature.
                </p>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <button className="rounded-md border border-primary text-primary px-6 py-3 font-semibold hover:bg-primary-light hover:text-white transition-colors">
                Learn More
              </button>
              <button className="text-primary flex items-center gap-2 font-semibold hover:text-primary-dark transition-colors">
                Sign Up <RxChevronRight className="size-5" />
              </button>
            </div>
          </div>
          <div>
            <img
              src="/assets/images/layout10.jpg"
              className="w-full rounded-xl shadow-card object-cover"
              alt="Dark and Light Mode"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
