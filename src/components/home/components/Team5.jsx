"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { BiLogoDribbble, BiLogoLinkedinSquare } from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";

import teamHeadshot1 from "../assets/images/team_headshot_1.jpg";
import teamHeadshot2 from "../assets/images/team_headshot_2.jpg";
import teamHeadshot3 from "../assets/images/team_headshot_3.jpg";
import teamHeadshot4 from "../assets/images/team_headshot_4.jpg";
import teamHeadshot5 from "../assets/images/team_headshot_5.jpg";
import teamHeadshot6 from "../assets/images/team_headshot_6.jpg";

export function Team5() {
  const { t } = useTranslation();
  const members = [
    {
      pic: teamHeadshot1,
      name: t('team5.member1Name'),
      position: t('team5.member1Position'),
      description: t('team5.member1Description'),
    },
    {
      pic: teamHeadshot2,
      name: t('team5.member2Name'),
      position: t('team5.member2Position'),
      description: t('team5.member2Description'),
    },
    {
      pic: teamHeadshot3,
      name: t('team5.member3Name'),
      position: t('team5.member3Position'),
      description: t('team5.member3Description'),
    },
    {
      pic: teamHeadshot4,
      name: t('team5.member4Name'),
      position: t('team5.member4Position'),
      description: t('team5.member4Description'),
    },
    {
      pic: teamHeadshot5,
      name: t('team5.member5Name'),
      position: t('team5.member5Position'),
      description: t('team5.member5Description'),
    },
    {
      pic: teamHeadshot6,
      name: t('team5.member6Name'),
      position: t('team5.member6Position'),
      description: t('team5.member6Description'),
      alt: t('team5.member6Alt'),
    },
  ];

  return (
    <section className="bg-white py-16 md:py-24 lg:py-28">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-12 max-w-lg text-center md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold text-primary md:mb-4">Meet</p>
          <h2 className="font-heading mb-5 text-4xl font-bold text-neutral md:mb-6 md:text-6xl lg:text-7xl">
            Our Team
          </h2>
          <p className="text-lg text-neutral-light">
            Dedicated professionals committed to your success.
          </p>
        </div>
        <div className="grid grid-cols-1 items-start justify-center gap-x-8 gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
          {members.map((member, index) => (
            <motion.div
              key={member.name}
              className="flex flex-col text-center p-6 bg-neutral-bg rounded-xl shadow-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: (index + 1) * 0.1 }}
            >
              <div className="mb-5 md:mb-6">
                <img
                  src={member.pic}
                  alt={member.alt || `Headshot of ${member.name}`}
                  className="size-20 min-h-20 min-w-20 rounded-full object-cover mx-auto"
                />
              </div>
              <div className="mb-3 md:mb-4">
                <h5 className="font-semibold text-neutral text-lg md:text-xl">
                  {member.name}
                </h5>
                <h6 className="text-neutral-light md:text-md">{member.position}</h6>
              </div>
              <p className="text-neutral-light">{member.description}</p>
              <div className="mt-6 grid grid-flow-col grid-cols-[max-content] gap-3.5 self-center text-primary">
                <a href="#" onClick={(e) => e.preventDefault()}>
                  <BiLogoLinkedinSquare className="size-6" />
                </a>
                <a href="#" onClick={(e) => e.preventDefault()}>
                  <FaXTwitter className="size-6 p-0.5" />
                </a>
                <a href="#" onClick={(e) => e.preventDefault()}>
                  <BiLogoDribbble className="size-6" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="mx-auto mt-14 w-full max-w-md text-center md:mt-20 lg:mt-24">
          <h4 className="font-heading mb-3 text-2xl font-bold text-neutral md:mb-4 md:text-3xl lg:text-4xl">
            Open Positions
          </h4>
          <p className="text-neutral-light md:text-md">Check out our current job openings!</p>
          <div className="mt-6 flex items-center justify-center gap-x-4 text-center md:mt-8">
            <button className="rounded-md bg-primary px-6 py-3 text-white font-semibold shadow-soft hover:bg-primary-dark transition-colors">
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
