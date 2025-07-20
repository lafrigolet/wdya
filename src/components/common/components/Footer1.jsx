"use client";

import React, { useState } from "react";
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
              Subscribe to our newsletter for the latest updates on features and
              releases.
            </p>
            <div className="w-full max-w-md">
              <form
                className="mb-3 grid grid-cols-1 gap-x-4 gap-y-3 sm:grid-cols-[1fr_max-content] md:gap-y-4"
                onSubmit={formState.handleSubmit}
              >
                <input
                  id="email"
                  type="email"
                  placeholder="Your email here"
                  value={formState.email}
                  onChange={formState.handleSetEmail}
                  className="w-full rounded-md border border-neutral-light bg-neutral px-4 py-2 text-white placeholder-neutral-light focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <button
                  type="submit"
                  className="rounded-md bg-primary px-6 py-2 text-white font-semibold shadow-soft hover:bg-primary-dark transition-colors"
                >
                  Subscribe
                </button>
              </form>
              <p className="text-xs text-neutral-light">
                By subscribing, you agree to our Privacy Policy and consent to
                receive updates.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 items-start gap-y-10 sm:grid-cols-2 md:col-span-2 lg:col-span-3 lg:gap-x-8">
            <div className="flex flex-col items-start justify-start">
              <h2 className="mb-3 font-semibold text-white md:mb-4">Useful Links</h2>
              <ul>
                <li className="py-2 text-sm">
                  <a href="#" className="flex items-center gap-3 text-neutral-light hover:text-white transition-colors">
                    <span>Home Page</span>
                  </a>
                </li>
                <li className="py-2 text-sm">
                  <a href="#" className="flex items-center gap-3 text-neutral-light hover:text-white transition-colors">
                    <span>About Us</span>
                  </a>
                </li>
                <li className="py-2 text-sm">
                  <a href="#" className="flex items-center gap-3 text-neutral-light hover:text-white transition-colors">
                    <span>Contact Us</span>
                  </a>
                </li>
                <li className="py-2 text-sm">
                  <a href="#" className="flex items-center gap-3 text-neutral-light hover:text-white transition-colors">
                    <span>Services</span>
                  </a>
                </li>
                <li className="py-2 text-sm">
                  <a href="#" className="flex items-center gap-3 text-neutral-light hover:text-white transition-colors">
                    <span>Blog Posts</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col items-start justify-start">
              <h2 className="mb-3 font-semibold text-white md:mb-4">Connect With Us</h2>
              <ul>
                <li className="py-2 text-sm">
                  <a href="#" className="flex items-center gap-3 text-neutral-light hover:text-white transition-colors">
                    <span>Support</span>
                  </a>
                </li>
                <li className="py-2 text-sm">
                  <a href="#" className="flex items-center gap-3 text-neutral-light hover:text-white transition-colors">
                    <span>Careers</span>
                  </a>
                </li>
                <li className="py-2 text-sm">
                  <a href="#" className="flex items-center gap-3 text-neutral-light hover:text-white transition-colors">
                    <span>FAQs</span>
                  </a>
                </li>
                <li className="py-2 text-sm">
                  <a href="#" className="flex items-center gap-3 text-neutral-light hover:text-white transition-colors">
                    <span>Feedback</span>
                  </a>
                </li>
                <li className="py-2 text-sm">
                  <a href="#" className="flex items-center gap-3 text-neutral-light hover:text-white transition-colors">
                    <span>Events</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col items-start justify-start">
              <h2 className="mb-3 font-semibold text-white md:mb-4">Follow Us</h2>
              <ul className="flex flex-col items-start">
                <li className="py-2 text-sm">
                  <a href="#" className="flex items-center gap-3 text-neutral-light hover:text-white transition-colors">
                    <BiLogoFacebookCircle className="size-6" />
                    <span>Facebook</span>
                  </a>
                </li>
                <li className="py-2 text-sm">
                  <a href="#" className="flex items-center gap-3 text-neutral-light hover:text-white transition-colors">
                    <BiLogoInstagram className="size-6" />
                    <span>Instagram</span>
                  </a>
                </li>
                <li className="py-2 text-sm">
                  <a href="#" className="flex items-center gap-3 text-neutral-light hover:text-white transition-colors">
                    <FaXTwitter className="size-6 p-0.5" />
                    <span>X</span>
                  </a>
                </li>
                <li className="py-2 text-sm">
                  <a href="#" className="flex items-center gap-3 text-neutral-light hover:text-white transition-colors">
                    <BiLogoLinkedinSquare className="size-6" />
                    <span>LinkedIn</span>
                  </a>
                </li>
                <li className="py-2 text-sm">
                  <a href="#" className="flex items-center gap-3 text-neutral-light hover:text-white transition-colors">
                    <BiLogoYoutube className="size-6" />
                    <span>YouTube</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="h-px w-full bg-neutral-light" />
        <div className="flex flex-col-reverse items-start justify-between pt-6 pb-4 text-sm md:flex-row md:items-center md:pt-8 md:pb-0">
          <p className="mt-6 text-neutral-light md:mt-0">© 2024 Relume. All rights reserved.</p>
          <ul className="grid grid-flow-row grid-cols-[max-content] justify-center gap-y-4 text-sm md:grid-flow-col md:gap-x-6 md:gap-y-0">
            <li className="underline text-neutral-light hover:text-white transition-colors">
              <a href="#">Privacy Policy</a>
            </li>
            <li className="underline text-neutral-light hover:text-white transition-colors">
              <a href="#">Terms of Service</a>
            </li>
            <li className="underline text-neutral-light hover:text-white transition-colors">
              <a href="#">Cookie Settings</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
