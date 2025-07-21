"use client";

import { Disclosure, DisclosureButton } from "@headlessui/react";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";
import React from "react";
import { useTranslation } from "react-i18next";
import { AnimatePresence, motion } from "framer-motion";


export function Faq5() {
  const { t } = useTranslation();

  const faqs = [
    {
      question: t('faq5.question1'),
      answer: t('faq5.answer1'),
    },
    {
      question: t('faq5.question2'),
      answer: t('faq5.answer2'),
    },
    {
      question: t('faq5.question3'),
      answer: t('faq5.answer3'),
    },
    {
      question: t('faq5.question4'),
      answer: t('faq5.answer4'),
    },
    {
      question: t('faq5.question5'),
      answer: t('faq5.answer5'),
    },
  ];
  
  return (
    <section className="bg-white py-16 md:py-24 lg:py-28">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-heading text-4xl font-bold text-neutral mb-8 text-center">
            {t('faq5.title')}
          </h2>
          <dl className="space-y-6">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="p-6 bg-neutral-bg rounded-xl shadow-soft">
                {({ open }) => (
                  <>
                    <dt className="cursor-pointer">
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
                    <AnimatePresence initial={false}>
                      {open && (
                        <motion.dd
                          key="content"
                          initial="collapsed"
                          animate="open"
                          exit="collapsed"
                          variants={{
                            open: { opacity: 1, height: "auto" },
                            collapsed: { opacity: 0, height: 0 }
                          }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="mt-2 pr-12 overflow-hidden"
                        >
                          <p className="text-base leading-7 text-neutral-light">
                            {faq.answer}
                          </p>
                        </motion.dd>
                      )}
                    </AnimatePresence>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
        <div className="mt-12 text-center">
          <h4 className="font-heading text-2xl font-bold text-neutral mb-4">
            {t('faq5.stillHaveQuestions')}
          </h4>
          <p className="text-lg text-neutral-light mb-8">{t('faq5.hereToHelp')}</p>
          <button className="rounded-md border border-primary text-primary px-6 py-3 font-semibold hover:bg-primary-light hover:text-white transition-colors">
            {t('faq5.contactButton')}
          </button>
        </div>
      </div>
    </section>
  );
}
