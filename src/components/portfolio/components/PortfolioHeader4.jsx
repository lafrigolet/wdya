"use client";

import { Badge } from "@relume_io/relume-ui";
import React from "react";

export function PortfolioHeader4() {
  return (
    <section id="relume" className="relative px-[5%]">
      <div className="absolute inset-0 z-0">
        <img
          src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
          alt="Relume placeholder image 1"
          className="size-full object-cover"
        />
        <span className="absolute inset-0 z-10 bg-black/50" />
      </div>
      <div className="relative z-10 flex min-h-svh items-center justify-center">
        <div className="max-w-lg py-16 text-center">
          <h1 className="mb-5 text-6xl font-bold text-text-alternative md:mb-6 md:text-9xl lg:text-10xl">
            Innovative Web Solutions
          </h1>
          <p className="text-text-alternative md:text-md">
            Explore our diverse portfolio showcasing cutting-edge web
            development projects tailored for various industries.
          </p>
          <div className="mt-5 flex flex-wrap justify-center gap-2 md:mt-6">
            <Badge>
              <a href="#">Web Development</a>
            </Badge>
            <Badge>
              <a href="#">UI/UX Design</a>
            </Badge>
            <Badge>
              <a href="#">SEO Optimization</a>
            </Badge>
          </div>
        </div>
      </div>
    </section>
  );
}
