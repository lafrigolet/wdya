"use client";

import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  BiLogoFacebookCircle,
  BiLogoInstagram,
  BiLogoLinkedinSquare,
  BiLogoYoutube,
} from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";
import logopng from "../assets/images/wdya_logo_bg_transparent_192.png";

const useForm = () => {
  const [email, setEmail] = useState("");
  const handleSetEmail = (event) => {
    setEmail(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ email });
  };
  return {
    email,
    handleSetEmail,
    handleSubmit,
  };
};

export function Footer1() {
  const formState = useForm();
  const { t } = useTranslation();
  return (
    <footer className="bg-neutral py-12 md:py-18 lg:py-20 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 pb-12 md:grid-cols-3 lg:grid-cols-4 lg:pb-20">
          <div className="flex flex-col">
            <a href="#" className="mb-5 md:mb-6">
              <img
                src={logopng}
                alt="Logo image"
                className="inline-block"
              />
            </a>
            <p className="mb-5 text-neutral-light md:mb-6">
              {t('footer1.newsletterDescription')}
            </p>
            <div className="w-full max-w-md">
              <form
                className="mb-3 grid grid-cols-1 gap-x-4 gap-y-3 sm:grid-cols-[1fr_max-content] md:gap-y-4"
                onSubmit={formState.handleSubmit}
              >
                <input
                  id="email"
                  type="email"
                  placeholder={t('footer1.emailPlaceholder')}
                  value={formState.email}
                  onChange={formState.handleSetEmail}
                  className="w-full rounded-md border border-neutral-light bg-neutral px-4 py-2 text-white placeholder-neutral-light focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <button
                  type="submit"
                  className="rounded-md bg-primary px-6 py-2 text-white font-semibold shadow-soft hover:bg-primary-dark transition-colors"
                >
                  {t('footer1.subscribeButton')}
                </button>
              </form>
              <p className="text-xs text-neutral-light">
                {t('footer1.privacyConsent')}
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 items-start gap-y-10 sm:grid-cols-2 md:col-span-2 lg:col-span-3 lg:gap-x-8">
            <div className="flex flex-col items-start justify-start">
              <h2 className="mb-3 font-semibold text-white md:mb-4">{t('footer1.usefulLinks')}</h2>
              <ul>
                <li className="py-2 text-sm">
                  <a href="#" className="flex items-center gap-3 text-neutral-light hover:text-white transition-colors">
                    <span>{t('footer1.homePage')}</span>
                  </a>
                </li>
                <li className="py-2 text-sm">
                  <a href="#" className="flex items-center gap-3 text-neutral-light hover:text-white transition-colors">
                    <span>{t('footer1.aboutUs')}</span>
                  </a>
                </li>
                <li className="py-2 text-sm">
                  <a href="#" className="flex items-center gap-3 text-neutral-light hover:text-white transition-colors">
                    <span>{t('footer1.contactUs')}</span>
                  </a>
                </li>
                <li className="py-2 text-sm">
                  <a href="#" className="flex items-center gap-3 text-neutral-light hover:text-white transition-colors">
                    <span>{t('footer1.services')}</span>
                  </a>
                </li>
                <li className="py-2 text-sm">
                  <a href="#" className="flex items-center gap-3 text-neutral-light hover:text-white transition-colors">
                    <span>{t('footer1.blogPosts')}</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col items-start justify-start">
              <h2 className="mb-3 font-semibold text-white md:mb-4">{t('footer1.connectWithUs')}</h2>
              <ul>
                <li className="py-2 text-sm">
                  <a href="#" className="flex items-center gap-3 text-neutral-light hover:text-white transition-colors">
                    <span>{t('footer1.support')}</span>
                  </a>
                </li>
                <li className="py-2 text-sm">
                  <a href="#" className="flex items-center gap-3 text-neutral-light hover:text-white transition-colors">
                    <span>{t('footer1.careers')}</span>
                  </a>
                </li>
                <li className="py-2 text-sm">
                  <a href="#" className="flex items-center gap-3 text-neutral-light hover:text-white transition-colors">
                    <span>{t('footer1.faqs')}</span>
                  </a>
                </li>
                <li className="py-2 text-sm">
                  <a href="#" className="flex items-center gap-3 text-neutral-light hover:text-white transition-colors">
                    <span>{t('footer1.feedback')}</span>
                  </a>
                </li>
                <li className="py-2 text-sm">
                  <a href="#" className="flex items-center gap-3 text-neutral-light hover:text-white transition-colors">
                    <span>{t('footer1.events')}</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col items-start justify-start">
              <h2 className="mb-3 font-semibold text-white md:mb-4">{t('footer1.followUs')}</h2>
              <ul className="flex flex-col items-start">
                <li className="py-2 text-sm">
                  <a href="#" className="flex items-center gap-3 text-neutral-light hover:text-white transition-colors">
                    <BiLogoFacebookCircle className="size-6" />
                    <span>{t('footer1.facebook')}</span>
                  </a>
                </li>
                <li className="py-2 text-sm">
                  <a href="#" className="flex items-center gap-3 text-neutral-light hover:text-white transition-colors">
                    <BiLogoInstagram className="size-6" />
                    <span>{t('footer1.instagram')}</span>
                  </a>
                </li>
                <li className="py-2 text-sm">
                  <a href="#" className="flex items-center gap-3 text-neutral-light hover:text-white transition-colors">
                    <FaXTwitter className="size-6 p-0.5" />
                    <span>{t('footer1.x')}</span>
                  </a>
                </li>
                <li className="py-2 text-sm">
                  <a href="#" className="flex items-center gap-3 text-neutral-light hover:text-white transition-colors">
                    <BiLogoLinkedinSquare className="size-6" />
                    <span>{t('footer1.linkedin')}</span>
                  </a>
                </li>
                <li className="py-2 text-sm">
                  <a href="#" className="flex items-center gap-3 text-neutral-light hover:text-white transition-colors">
                    <BiLogoYoutube className="size-6" />
                    <span>{t('footer1.youtube')}</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="h-px w-full bg-neutral-light" />
        <div className="flex flex-col-reverse items-start justify-between pt-6 pb-4 text-sm md:flex-row md:items-center md:pt-8 md:pb-0">
          <p className="mt-6 text-neutral-light md:mt-0">{t('footer1.copyright')}</p>
          <ul className="grid grid-flow-row grid-cols-[max-content] justify-center gap-y-4 text-sm md:grid-flow-col md:gap-x-6 md:gap-y-0">
            <li className="underline text-neutral-light hover:text-white transition-colors">
              <a href="#">{t('footer1.privacyPolicy')}</a>
            </li>
            <li className="underline text-neutral-light hover:text-white transition-colors">
              <a href="#">{t('footer1.termsOfService')}</a>
            </li>
            <li className="underline text-neutral-light hover:text-white transition-colors">
              <a href="#">{t('footer1.cookieSettings')}</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
