'use client';

import { useTranslation } from 'react-i18next';
import { Button, useMediaQuery } from "@relume_io/relume-ui";
import {
  CubeIcon,
  SparklesIcon,
  ArrowUpRightIcon,
  ChartBarIcon,
  StarIcon,
  TrophyIcon,
  BuildingOfficeIcon,
  GlobeAltIcon,
  QuestionMarkCircleIcon,
  NewspaperIcon,
  BookOpenIcon,
  ChatBubbleLeftRightIcon,
  FaceSmileIcon,
  PhotoIcon,
  FolderOpenIcon,
  ShareIcon,
  AtSymbolIcon,
  EnvelopeIcon,
  LifebuoyIcon,
  PhoneIcon,
  BriefcaseIcon,
  UserGroupIcon,
  ShieldCheckIcon,
  FingerPrintIcon,
  DocumentTextIcon,
  MapIcon,
  GlobeAmericasIcon,
  MapPinIcon,
  UserPlusIcon,
  ArrowRightOnRectangleIcon,
} from "@heroicons/react/24/outline";


import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { RxChevronDown } from "react-icons/rx";

import logopng from "../assets/images/wdya_logo_bg_transparent_192.png";

const useRelume = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);
  const openOnMobileDropdownMenu = () => {
    setIsDropdownOpen((prev) => !prev);
  };
  
  const animateMobileMenu = isMobileMenuOpen ? "open" : "close";
  const animateMobileMenuButtonSpan = isMobileMenuOpen
    ? ["open", "rotatePhase"]
    : "closed";
  const animateDropdownMenu = isDropdownOpen ? "open" : "close";
  const animateDropdownMenuIcon = isDropdownOpen ? "rotated" : "initial";
  return {
    toggleMobileMenu,
    openOnMobileDropdownMenu,
    animateMobileMenu,
    animateMobileMenuButtonSpan,
    animateDropdownMenu,
    animateDropdownMenuIcon,
  };
};

const dropdown = [
  {title: 'Explore Our Packages',
   items: [
     {icon: CubeIcon, title: 'Starter Package', description: 'Perfect for small projects and startups.'},
     {icon: SparklesIcon, title: 'Growth Package', description: 'Ideal for growing businesses and expanding needs.'},
     {icon: ArrowUpRightIcon, title: 'Pro Package', description: 'Comprehensive solutions for established companies.'},
     {icon: BuildingOfficeIcon, title: 'Enterprise Package', description: 'Custom solutions tailored to your business.'},
   ]
  },
  {
    title: 'Additional Resources',
    items: [
      {icon: QuestionMarkCircleIcon, title: 'FAQs', description: 'Find answers to common questions here.'},
      {icon: NewspaperIcon, title: 'Blog', description: 'Insights and tips from our experts.'},
      {icon: ChatBubbleLeftRightIcon, title:'Testimonials', description: 'Hear from our satisfied clients.'},
      {icon: FolderOpenIcon, title: 'Portfolio', description: 'Showcasing our successful projects.'},
    ]
  },
  {
    title: 'Connect With Us',
    items: [
      {icon: ShareIcon, title: 'Social Media', description: 'Follow us for updates and news.'},
      {icon: EnvelopeIcon, title: 'Newsletter', description: 'Subscribe for the latest updates.'},
      {icon: LifebuoyIcon, title: 'Support', description: "We're here to help you."},
      {icon: BriefcaseIcon, title: 'Careers', description: 'Join our talented team.'},
    ]
  },
  {
    title: 'Legal Information',
    items: [
      {icon: ShieldCheckIcon, title: 'Privacy Policy', description: 'Read our privacy practices.'},
      {icon: DocumentTextIcon, title: 'Terms of Service', description: 'Understand our service terms.'},
      {icon: MapIcon, title: 'Site Map', description: 'Navigate our website easily.'},
      {icon: PhoneIcon, title: 'Contact Info', description: 'Get in touch with us.'},
    ]
  }
]

export function Navbar7() {
  const { t, i18n } = useTranslation();
  const useActive = useRelume();
  return (
    <section className="sticky top-0 z-50 flex min-h-16 w-full items-center border-b border-neutral-light bg-neutral-bg px-[5%] md:min-h-18">
      <div className="mx-auto flex size-full max-w-full items-center justify-between">
        <a href="#">
          <img
            src={logopng}
            alt="Logo image"
          />
        </a>
        <div className="absolute hidden h-screen overflow-auto border-b border-neutral-light bg-neutral-bg px-[5%] pt-4 pb-24 md:pb-0 lg:static lg:ml-6 lg:flex lg:h-auto lg:flex-1 lg:items-center lg:justify-between lg:border-none lg:bg-none lg:px-0 lg:pt-0">
          <div className="flex flex-col items-center lg:flex-row">
            <a
              href="#"
              className="relative block w-auto py-3 text-neutral hover:text-primary transition-colors lg:inline-block lg:px-4 lg:py-6 lg:text-base font-sans"
            >
              {t('home_page')}
            </a>
            <a
              href="#"
              className="relative block w-auto py-3 text-neutral hover:text-primary transition-colors lg:inline-block lg:px-4 lg:py-6 lg:text-base font-sans"
            >
              {t('about_us')}
            </a>
            <a
              href="#"
              className="relative block w-auto py-3 text-neutral hover:text-primary transition-colors lg:inline-block lg:px-4 lg:py-6 lg:text-base font-sans"
            >
              {t('our_services')}
            </a>
            <div>
              <button
                className="relative flex w-full items-center justify-between py-3 text-md whitespace-nowrap lg:w-auto lg:justify-start lg:gap-2 lg:px-4 lg:py-6 lg:text-base"
                onClick={useActive.openOnMobileDropdownMenu}
              >
                <span>{t('contact_us')}</span>
                <motion.span
                  animate={useActive.animateDropdownMenuIcon}
                  variants={{
                    rotated: { rotate: 180 },
                    initial: { rotate: 0 },
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <RxChevronDown />
                </motion.span>
              </button>
              <AnimatePresence>
                <motion.nav
                  variants={{
                    open: {
                      opacity: 1,
                      height: "var(--height-open, auto)",
                      display: "block",
                    },
                    close: {
                      opacity: 0,
                      height: "var(--height-close, 0)",
                      display: "none",
                    },
                  }}
                  animate={useActive.animateDropdownMenu}
                  initial="close"
                  exit="close"
                  transition={{ duration: 0.2 }}
                  className="top-full bottom-auto left-0 w-full max-w-full min-w-full overflow-hidden bg-neutral-bg lg:absolute lg:w-screen lg:border-b lg:border-neutral-light lg:px-[5%] lg:[--height-close:auto]"
                >
                  <div className="mx-auto flex size-full max-w-full items-center justify-between">
                    <div className="flex w-full flex-col lg:flex-row">
                      <div className="grid flex-1 grid-cols-1 content-start items-start gap-x-8 gap-y-6 py-4 md:grid-cols-2 md:py-8 lg:auto-cols-fr lg:grid-cols-4 lg:content-stretch lg:items-stretch lg:gap-y-0">
                        {
                          dropdown.map(e => 
                            <div className="grid auto-cols-fr grid-cols-1 grid-rows-[max-content_max-content_max-content_max-content_max-content] gap-y-2 md:gap-y-4">
                              <h4 className="text-sm leading-[1.3] font-heading font-semibold">
                                {e.title}
                              </h4>
                              {e.items.map(i=> 
                                <a
                                  href="#"
                                  className="grid w-full auto-cols-fr grid-cols-[max-content_1fr] items-start gap-x-3 py-2"
                                >
                                  <div className="flex size-6 flex-col items-center justify-center">
                                    <i.icon className="size-6 shrink-0 text-primary" />
                                  </div>
                                  <div className="flex flex-col items-start justify-center">
                                    <h5 className="font-semibold">{i.title}</h5>
                                    <p className="hidden text-sm md:block">
                                      {i.description}
                                    </p>
                                  </div>
                                </a>
                              )}
                            </div>
                          )}
                      </div>
                    </div>
                  </div>
                  <div className="relative mb-6 flex w-full flex-col items-start justify-between p-6 sm:items-center lg:mb-0 lg:flex-row lg:px-0 lg:py-4">
                    <div className="absolute top-0 -right-[50vw] bottom-0 -left-[50vw] w-[200vw] bg-background-secondary" />
                    <div className="relative mb-4 grid auto-cols-fr grid-cols-[max-content] grid-rows-[auto_auto] items-center gap-x-2 gap-y-4 lg:mb-0 lg:flex lg:items-center">
                      <p>
                        Ready to get started?
                        <a href="#" className="ml-1 underline">
                          Sign up for free
                        </a>
                      </p>
                    </div>
                    <div className="relative flex w-full flex-col gap-6 sm:w-auto sm:flex-row">
                      <Button
                        title="Join"
                        variant="link"
                        size="link"
                      >
                        <UserPlusIcon className="size-6 shrink-0 text-primary" />
                        Join
                      </Button>
                      <Button
                        title="Login"
                        variant="link"
                        size="link"
                      >
                        <ArrowRightOnRectangleIcon className="size-6 shrink-0 text-primary" />
                        Login
                      </Button>
                    </div>
                  </div>
                </motion.nav>
              </AnimatePresence>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Button title="English" variant="secondary" size="sm" className="rounded-md border border-primary text-primary px-6 py-3 font-semibold hover:bg-primary-light hover:text-white transition-colors" onClick={() => i18n.changeLanguage('en')}>
              EN
            </Button>
            <Button title="Español" variant="secondary" size="sm" className="rounded-md border border-primary text-primary px-6 py-3 font-semibold hover:bg-primary-light hover:text-white transition-colors" onClick={() => i18n.changeLanguage('es')}>
              ES
            </Button>
            <Button title="Help" variant="secondary" size="sm" className="rounded-md border border-primary text-primary px-6 py-3 font-semibold hover:bg-primary-light hover:text-white transition-colors">
              {t('help')}
            </Button>
            <Button title="Chat" size="sm" className="rounded-md border border-primary bg-primary px-6 py-3 text-white font-semibold shadow-soft hover:bg-primary-dark transition-colors">
              {t('chat')}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
