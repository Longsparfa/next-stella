"use client"

import Link from 'next/link';
import { navLinks, footerData } from '@/app/lib/constants';
import { Button } from '@/app/components/UI/Button';
import { NavLink } from '@/app/lib/types';
import Image from 'next/image';
import heroImage from '@/public/trad-couple.jpeg'
import weddingImage from '@/public/bride.jpeg'
import { ServiceCard } from './components/ServiceCard';
import { FAQAccordion } from './components/FAQAccordion';
import { useState } from 'react';
import { Bars2Icon, XMarkIcon } from '@heroicons/react/16/solid';


export default function Home() {
  const [showMenu, setShowMenu] = useState(false)

  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }
  return (
    <>
      <nav className="bg-white shadow-sm sticky top-0 z-10 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link href={'/'} className="text-xl font-bold text-indigo-600">Stellaux Global</Link>
            </div>
            <div className="hidden sm:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-700 hover:text-indigo-600 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <Button
                asLink={true}
                href="/book"
                variant="primary"
                className="px-4 py-2 text-sm"
              >
                Book Now
              </Button>
            </div>
            <div className='sm:hidden' onClick={toggleMenu}>
              <span className='flex justify-end pt-4 mb-4'>
                {showMenu ? <XMarkIcon className='h-12 w-12 text-gray-700' /> : <Bars2Icon className='w-12 h-12 text-gray-700' />}
              </span>
              {showMenu && <div className="bg-indigo-600 flex flex-col items-center rounded-md gap-4 space-x-8 py-4 pl-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-gray-100 text-center hover:text-indigo-600 transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
                <Button
                  asLink={true}
                  href="/book"
                  variant="primary"
                  className="px-4 py-2 text-sm"
                >
                  Book Now
                </Button>
              </div>}
            </div>
          </div>
        </div>
      </nav>

      {/* <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
          <span className="block">Exceptional Events</span>
          <span className="block text-indigo-600">Extraordinary Experiences</span>
        </h1>
        <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          Let us handle the details while you enjoy your special occasion.
        </p>
        <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8 gap-4">
          <Button
            asLink={true}
            href="/book"
            variant="primary"
            size="lg"
            className="w-full sm:w-auto"
          >
            Book Your Event
          </Button>
          <Button
            asLink={true}
            href="#services"
            variant="secondary"
            size="lg"
            className="w-full sm:w-auto mt-4 sm:mt-0"
          >
            Our Services
          </Button>
        </div>
      </section> */}
      <section className="relative h-screen flex items-center justify-center">
        <Image
          src={heroImage}
          alt="Stellaux Global Event"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Welcome to Stellaux Global
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Where we transform ordinary days into unforgettable memories.
          </p>
          <Button asLink href="/book" variant="primary" size="lg">
            Book Your Event
          </Button>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-white to-gray-50" id='about'>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-indigo-600 mb-12">About Us</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src={weddingImage}
                alt="Wedding Planning"
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </div>
            <div>
              <p className="text-lg text-gray-400 mb-6">
                Imagine a radiant bride stepping into a moment of bliss with her prince charming -
                the perfect wedding, just as she envisioned.
              </p>
              <p className="text-lg text-gray-400 mb-6">
                At Stellaux, our mission transcends planning and managing events; we are dedicated
                to crafting memories that you&apos;ll cherish forever.
              </p>
              <p className="text-lg text-gray-400">
                From romantic proposals to joyful baby showers, stylish weddings to heartfelt
                surprises, we bring your vision to life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* <section id="services" className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
              Services
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Everything you need for your perfect event
            </p>
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature) => (
                <div key={feature.name} className="pt-6">
                  <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8 h-full hover:shadow-md transition-shadow">
                    <div className="-mt-6">
                      <Icon name={feature.icon} className="inline-flex items-center justify-center p-3 bg-indigo-500 rounded-md shadow-lg text-2xl" />
                      <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                        {feature.name}
                      </h3>
                      <p className="mt-5 text-base text-gray-500">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section> */}
      <section className="py-20 bg-white" id='services'>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-indigo-600 mb-12">Our Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceCard
              title="Social Events"
              icon="🎉"
              items={['Birthdays', 'Engagement Proposals', 'Weddings', 'Bridal & Baby Showers']}
            />
            <ServiceCard
              title="Corporate Events"
              icon="💼"
              items={['Conferences', 'Seminars', 'Product Launches', 'Gala Dinner']}
            />
            <ServiceCard
              title="Fashion Events"
              icon="👗"
              items={['Fashion Shows', 'Model Castings', 'Runway Productions']}
            />
            <ServiceCard
              title="Event Support"
              icon="👥"
              items={['Professional Ushers', 'Event Staffing', 'Logistics Management']}
            />
          </div>
        </div>
      </section>

      {/* <section className="bg-indigo-700">
        <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            <span className="block">Ready to plan your event?</span>
            <span className="block">Book your consultation today.</span>
          </h2>
          <Button
            asLink={true}
            href="/book"
            variant="white"
            size="md"
            className="mt-8"
          >
            Get Started
          </Button>
        </div>
      </section> */}
      <section className="py-20 bg-gray-50" id='faqs'>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-indigo-600 mb-12">Frequently Asked Questions</h2>
          <FAQAccordion />
        </div>
      </section>

      <footer className="bg-gray-800">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <div className="space-y-8 xl:col-span-1">
              <Image src="/logo.png" alt="" width={100} height={100} />
              {/* <span className="text-xl font-bold text-white">Stellaux Global</span> */}
              <p className="text-gray-300 text-base">
                Creating unforgettable experiences since 2010.
              </p>
            </div>
            <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
              {footerData.map((section) => (
                <div key={section.title} className="md:grid md:grid-cols-2 md:gap-8">
                  <div>
                    <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">
                      {section.title}
                    </h3>
                    <div className="flex flex-col mt-4 space-y-4">
                      {section.links.map((link: NavLink) => (
                        <Link
                          key={link.name}
                          href={link.href}
                          className="text-base text-gray-400 hover:text-white transition-colors"
                        >
                          {link.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-12 border-t border-gray-700 pt-8">
            <p className="text-base text-gray-400 xl:text-center">
              &copy; {new Date().getFullYear()} Stellaux Global. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}