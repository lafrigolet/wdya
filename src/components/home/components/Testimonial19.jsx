"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@relume_io/relume-ui";
import React, { useEffect, useState } from "react";
import { BiSolidStar } from "react-icons/bi";
import Card from "../../common/Card";

import testimonial1 from "../assets/images/testimonial19-1.jpg";
import testimonial2 from "../assets/images/testimonial19-2.jpg";
import testimonial3 from "../assets/images/testimonial19-3.jpg";
import testimonial4 from "../assets/images/testimonial19-4.jpg";
import testimonial5 from "../assets/images/testimonial19-5.jpg";
import testimonial6 from "../assets/images/testimonial19-6.jpg";

const useCarousel = () => {
  const [api, setApi] = useState();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }
    setCurrent(api.selectedScrollSnap() + 1);
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const handleDotClick = (index) => () => {
    // No TypeScript annotation
    if (api) {
      api.scrollTo(index);
    }
  };

  const dotClassName = (index) => {
    return `mx-[3px] inline-block size-2 rounded-full ${
      current === index + 1 ? "bg-black" : "bg-neutral-light"
    }`;
  };

  return { api, setApi, current, handleDotClick, dotClassName };
};

export function Testimonial19() {
  const carousel = useCarousel();
  return (
    <section className="bg-white py-16 md:py-24 lg:py-28">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-20">
          <h2 className="font-heading text-4xl font-bold text-neutral mb-5 md:text-6xl lg:text-7xl">
            Customer Testimonials
          </h2>
          <p className="text-lg text-neutral-light">
            Exceptional service and outstanding results every time!
          </p>
        </div>
        <Carousel
          setApi={carousel.setApi}
          opts={{ loop: true, align: "start" }}
          className="overflow-hidden"
        >
          <div className="relative">
            <CarouselContent className="ml-0 md:mx-3.5">
              <CarouselItem className="pl-0 md:basis-1/2 md:px-4 lg:basis-1/3">
                <Card className="flex w-full flex-col items-start justify-between p-6 md:p-8 bg-white rounded-xl shadow-card">
                  <div className="mb-5 flex md:mb-6 text-secondary">
                    <BiSolidStar className="size-6" />
                    <BiSolidStar className="size-6" />
                    <BiSolidStar className="size-6" />
                    <BiSolidStar className="size-6" />
                    <BiSolidStar className="size-6" />
                  </div>
                  <p className="text-lg text-neutral">
                    "The team's expertise transformed our project beyond
                    expectations."
                  </p>
                  <div className="mt-5 flex w-full flex-col items-start gap-4 md:mt-6 md:w-auto md:flex-row md:items-center">
                    <div>
                      <img
                        src={testimonial1}
                        alt="Testimonial avatar 1"
                        className="size-12 min-h-12 min-w-12 rounded-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-semibold text-neutral">Anna Müller</p>
                      <p className="text-neutral-light">Project Manager, TechCorp</p>
                    </div>
                  </div>
                </Card>
              </CarouselItem>
              <CarouselItem className="pl-0 md:basis-1/2 md:px-4 lg:basis-1/3">
                <Card className="flex w-full flex-col items-start justify-between p-6 md:p-8 bg-white rounded-xl shadow-card">
                  <div className="mb-5 flex md:mb-6 text-secondary">
                    <BiSolidStar className="size-6" />
                    <BiSolidStar className="size-6" />
                    <BiSolidStar className="size-6" />
                    <BiSolidStar className="size-6" />
                    <BiSolidStar className="size-6" />
                  </div>
                  <p className="text-lg text-neutral">
                    "The team's expertise transformed our project beyond
                    expectations."
                  </p>
                  <div className="mt-5 flex w-full flex-col items-start gap-4 md:mt-6 md:w-auto md:flex-row md:items-center">
                    <div>
                      <img
                        src={testimonial2}
                        alt="Testimonial avatar 1"
                        className="size-12 min-h-12 min-w-12 rounded-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-semibold text-neutral">Anna Müller</p>
                      <p className="text-neutral-light">Project Manager, TechCorp</p>
                    </div>
                  </div>
                </Card>
              </CarouselItem>
              <CarouselItem className="pl-0 md:basis-1/2 md:px-4 lg:basis-1/3">
                <Card className="flex w-full flex-col items-start justify-between p-6 md:p-8 bg-white rounded-xl shadow-card">
                  <div className="mb-5 flex md:mb-6 text-secondary">
                    <BiSolidStar className="size-6" />
                    <BiSolidStar className="size-6" />
                    <BiSolidStar className="size-6" />
                    <BiSolidStar className="size-6" />
                    <BiSolidStar className="size-6" />
                  </div>
                  <p className="text-lg text-neutral">
                    "The team's expertise transformed our project beyond
                    expectations."
                  </p>
                  <div className="mt-5 flex w-full flex-col items-start gap-4 md:mt-6 md:w-auto md:flex-row md:items-center">
                    <div>
                      <img
                        src={testimonial3}
                        alt="Testimonial avatar 1"
                        className="size-12 min-h-12 min-w-12 rounded-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-semibold text-neutral">Anna Müller</p>
                      <p className="text-neutral-light">Project Manager, TechCorp</p>
                    </div>
                  </div>
                </Card>
              </CarouselItem>
              <CarouselItem className="pl-0 md:basis-1/2 md:px-4 lg:basis-1/3">
                <Card className="flex w-full flex-col items-start justify-between p-6 md:p-8 bg-white rounded-xl shadow-card">
                  <div className="mb-5 flex md:mb-6 text-secondary">
                    <BiSolidStar className="size-6" />
                    <BiSolidStar className="size-6" />
                    <BiSolidStar className="size-6" />
                    <BiSolidStar className="size-6" />
                    <BiSolidStar className="size-6" />
                  </div>
                  <p className="text-lg text-neutral">
                    "The team's expertise transformed our project beyond
                    expectations."
                  </p>
                  <div className="mt-5 flex w-full flex-col items-start gap-4 md:mt-6 md:w-auto md:flex-row md:items-center">
                    <div>
                      <img
                        src={testimonial4}
                        alt="Testimonial avatar 1"
                        className="size-12 min-h-12 min-w-12 rounded-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-semibold text-neutral">Anna Müller</p>
                      <p className="text-neutral-light">Project Manager, TechCorp</p>
                    </div>
                  </div>
                </Card>
              </CarouselItem>
              <CarouselItem className="pl-0 md:basis-1/2 md:px-4 lg:basis-1/3">
                <Card className="flex w-full flex-col items-start justify-between p-6 md:p-8 bg-white rounded-xl shadow-card">
                  <div className="mb-5 flex md:mb-6 text-secondary">
                    <BiSolidStar className="size-6" />
                    <BiSolidStar className="size-6" />
                    <BiSolidStar className="size-6" />
                    <BiSolidStar className="size-6" />
                    <BiSolidStar className="size-6" />
                  </div>
                  <p className="text-lg text-neutral">
                    "The team's expertise transformed our project beyond
                    expectations."
                  </p>
                  <div className="mt-5 flex w-full flex-col items-start gap-4 md:mt-6 md:w-auto md:flex-row md:items-center">
                    <div>
                      <img
                        src={testimonial5}
                        alt="Testimonial avatar 1"
                        className="size-12 min-h-12 min-w-12 rounded-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-semibold text-neutral">Anna Müller</p>
                      <p className="text-neutral-light">Project Manager, TechCorp</p>
                    </div>
                  </div>
                </Card>
              </CarouselItem>
              <CarouselItem className="pl-0 md:basis-1/2 md:px-4 lg:basis-1/3">
                <Card className="flex w-full flex-col items-start justify-between p-6 md:p-8 bg-white rounded-xl shadow-card">
                  <div className="mb-5 flex md:mb-6 text-secondary">
                    <BiSolidStar className="size-6" />
                    <BiSolidStar className="size-6" />
                    <BiSolidStar className="size-6" />
                    <BiSolidStar className="size-6" />
                    <BiSolidStar className="size-6" />
                  </div>
                  <p className="text-lg text-neutral">
                    "The team's expertise transformed our project beyond
                    expectations."
                  </p>
                  <div className="mt-5 flex w-full flex-col items-start gap-4 md:mt-6 md:w-auto md:flex-row md:items-center">
                    <div>
                      <img
                        src={testimonial6}
                        alt="Testimonial avatar 1"
                        className="size-12 min-h-12 min-w-12 rounded-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-semibold text-neutral">Anna Müller</p>
                      <p className="text-neutral-light">Project Manager, TechCorp</p>
                    </div>
                  </div>
                </Card>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex md:size-12 lg:size-14" />
            <CarouselNext className="hidden md:flex md:size-12 lg:size-14" />
          </div>
          <div className="mt-[30px] flex items-center justify-center md:mt-[46px]">
            <button
              onClick={carousel.handleDotClick(0)}
              className={carousel.dotClassName(0)}
            />
            <button
              onClick={carousel.handleDotClick(1)}
              className={carousel.dotClassName(1)}
            />
            <button
              onClick={carousel.handleDotClick(2)}
              className={carousel.dotClassName(2)}
            />
            <button
              onClick={carousel.handleDotClick(3)}
              className={carousel.dotClassName(3)}
            />
            <button
              onClick={carousel.handleDotClick(4)}
              className={carousel.dotClassName(4)}
            />
            <button
              onClick={carousel.handleDotClick(5)}
              className={carousel.dotClassName(5)}
            />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
