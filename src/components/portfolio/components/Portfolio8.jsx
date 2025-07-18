"use client";

import { Badge, Button, Card } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Portfolio8() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto mb-12 max-w-lg text-center md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">Portfolio</p>
          <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            Our Featured Projects
          </h2>
          <p className="md:text-md">Explore our innovative web solutions.</p>
        </div>
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 md:gap-y-16 lg:gap-x-12">
          <Card>
            <div>
              <a href="#">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  className="w-full object-cover"
                  alt="Relume placeholder image"
                />
              </a>
            </div>
            <div className="px-5 py-6 sm:px-6">
              <h3 className="mb-2 text-xl font-bold md:text-2xl">
                <a href="#">E-commerce Platform</a>
              </h3>
              <p>A robust online store for seamless shopping experiences.</p>
              <div className="mt-3 flex flex-wrap gap-2 md:mt-4">
                <Badge>
                  <a href="#">E-commerce</a>
                </Badge>
                <Badge>
                  <a href="#">React</a>
                </Badge>
                <Badge>
                  <a href="#">Responsive Design</a>
                </Badge>
              </div>
              <Button
                title="View project"
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
                className="mt-5 md:mt-6"
              >
                <a href="#">View project</a>
              </Button>
            </div>
          </Card>
          <Card>
            <div>
              <a href="#">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  className="w-full object-cover"
                  alt="Relume placeholder image"
                />
              </a>
            </div>
            <div className="px-5 py-6 sm:px-6">
              <h3 className="mb-2 text-xl font-bold md:text-2xl">
                <a href="#">Corporate Website</a>
              </h3>
              <p>A modern site showcasing corporate services and values.</p>
              <div className="mt-3 flex flex-wrap gap-2 md:mt-4">
                <Badge>
                  <a href="#">Corporate</a>
                </Badge>
                <Badge>
                  <a href="#">SEO Optimized</a>
                </Badge>
                <Badge>
                  <a href="#">User Friendly</a>
                </Badge>
              </div>
              <Button
                title="View project"
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
                className="mt-5 md:mt-6"
              >
                <a href="#">View project</a>
              </Button>
            </div>
          </Card>
        </div>
        <div className="mt-12 flex justify-center md:mt-18 lg:mt-20">
          <Button title="View all" variant="secondary" size="primary">
            View all
          </Button>
        </div>
      </div>
    </section>
  );
}
