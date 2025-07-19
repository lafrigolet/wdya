"use client";

import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline'
import React from 'react';

const features = [
  {
    name: 'Expert React Development',
    description:
      'Leverage the power of React to build dynamic and responsive web applications.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'SEO Optimization',
    description:
      'Optimize your website to rank higher and attract more visitors.',
    icon: LockClosedIcon,
  },
  {
    name: 'Maintenance and Support',
    description:
      'Ensure your website runs smoothly with our ongoing maintenance services.',
    icon: ArrowPathIcon,
  },
  {
    name: 'Advanced security',
    description:
      'We take security seriously and implement the best practices to protect your data.',
    icon: FingerPrintIcon,
  },
  {
    name: 'Dark & Light Mode',
    description:
    'Automatic detection and/or manual toggle',
    icon: LockClosedIcon,
  },
]

export function Layout241() {
  return (
    <section className="bg-white py-16 md:py-24 lg:py-28">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">Services</h2>
          <p className="mt-2 font-heading text-4xl font-bold tracking-tight text-neutral sm:text-5xl">
            Our Comprehensive Web Development Solutions
          </p>
          <p className="mt-6 text-lg leading-8 text-neutral-light">
            We offer a range of services tailored to meet your web development needs. From React development to SEO
            optimization, we ensure your online presence is robust and effective.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4 justify-items-center">
            {features.map((feature) => (
              <a key={feature.name} href="#" className="group relative flex flex-col p-6 bg-neutral-bg rounded-xl shadow-card hover:shadow-lg transition-shadow duration-300">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-neutral">
                  <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-primary">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-neutral-light">
                  <p className="flex-auto">{feature.description}</p>
                  <p className="mt-6 text-sm font-semibold leading-6 text-primary group-hover:text-primary-dark">
                    Learn more <span aria-hidden="true">→</span>
                  </p>
                </dd>
              </a>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
