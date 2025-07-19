"use client";

import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";
import React from "react";

const faqs = [
  {
    question: "What services do you offer?",
    answer: "We provide a range of services including React development, SEO optimization, and technical consulting. Our packages are designed to meet various needs, from startups to enterprises. Each service is tailored to ensure optimal performance and user satisfaction.",
  },
  {
    question: "How is pricing structured?",
    answer: "Our pricing is based on hourly packages, offering flexibility for different project scopes. The Starter package begins at 950 CHF for 10 hours, while larger projects can be customized. This structure ensures you only pay for what you need.",
  },
  {
    question: "Is multilingual support available?",
    answer: "Yes, we offer bilingual support in Spanish and English. Our team is equipped to assist clients in both languages, ensuring clear communication. We also plan to expand support to additional languages in the future.",
  },
  {
    question: "How can I contact you?",
    answer: "You can reach us through our contact form, email, or via WhatsApp/Telegram. We are here to assist you with any inquiries or quotes you may need. Our team is ready to respond promptly.",
  },
  {
    question: "What is your response time?",
    answer: "We strive to respond to all inquiries within 24 hours. Our goal is to provide timely support to ensure your projects stay on track. Your satisfaction is our priority.",
  },
];

export function Faq5() {
  return (
    <section className="bg-white py-16 md:py-24 lg:py-28">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-heading text-4xl font-bold text-neutral mb-8 text-center">
            Frequently asked questions
          </h2>
          <dl className="space-y-6">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="p-6 bg-neutral-bg rounded-xl shadow-soft">
                {({ open }) => (
                  <>
                    <dt>
                      <DisclosureButton className="flex w-full items-start justify-between text-left text-neutral">
                        <span className="text-lg font-semibold leading-7">
                          {faq.question}
                        </span>
                        <span className="ml-6 flex h-7 items-center">
                          {open ? (
                            <MinusSmallIcon
                              className="h-6 w-6 text-primary"
                              aria-hidden="true"
                            />
                          ) : (
                            <PlusSmallIcon
                              className="h-6 w-6 text-primary"
                              aria-hidden="true"
                            />
                          )}
                        </span>
                      </DisclosureButton>
                    </dt>
                    <DisclosurePanel as="dd" className="mt-2 pr-12">
                      <p className="text-base leading-7 text-neutral-light">
                        {faq.answer}
                      </p>
                    </DisclosurePanel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
        <div className="mt-12 text-center">
          <h4 className="font-heading text-2xl font-bold text-neutral mb-4">
            Still have questions?
          </h4>
          <p className="text-lg text-neutral-light mb-8">We're here to help!</p>
          <button className="rounded-md border border-primary text-primary px-6 py-3 font-semibold hover:bg-primary-light hover:text-white transition-colors">
            Contact
          </button>
        </div>
      </div>
    </section>
  );
}
