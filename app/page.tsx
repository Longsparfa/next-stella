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
      <nav className="bg-indigo-100 shadow-sm sticky top-0 z-10 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link href={'/'} className="hidden sm:block font-[Didot] text-xl font-bold text-indigo-600">Stellaux Global</Link>
            </div>
            <div className="flex items-center space-x-6 sm:space-x-8 overflow-hidden">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="font-[Manrope] text-indigo-600 hover:text-gray-700 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <Button
                asLink={true}
                href="/book"
                variant="primary"
                className="px-4 py-2 font-[Manrope] text-sm text-center"
              >
                Book Now
              </Button>
            </div>
            <div className='hidden sm:hidden' onClick={toggleMenu}>
              <span className='flex justify-end pt-4 mb-4'>
                {showMenu ? <XMarkIcon className='h-12 w-12 text-gray-700' /> : <Bars2Icon className='w-12 h-12 text-gray-700' />}
              </span>
              {showMenu && <div className="bg-indigo-600 flex flex-col items-center rounded-md gap-4 space-x-8 py-4 pl-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="font-[Manrope] text-gray-100 text-center hover:text-indigo-600 transition-colors"
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

      <section className="relative h-screen flex items-center justify-center">
        <Image
          src={heroImage}
          alt="Stellaux Global Event"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="font-[Inter] text-4xl md:text-6xl font-bold mb-6">
            Welcome to Stellaux Global
          </h1>
          <p className="font-[Poppins] text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Where we transform ordinary days into unforgettable memories.
          </p>
          <Button asLink href="/book" variant="primary" size="lg" className='font-[Manrope]'>
            Book Your Event
          </Button>
        </div>
      </section>

      <section className="py-20 bg-indigo-600" id='about'>
        <div className="container mx-auto px-4">
          <h2 className="font-[Inter] text-3xl font-bold text-center text-white mb-12">About Us</h2>
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
            <div className='font-[Poppins] text-lg text-center text-white'>
              <p className=" mb-6">
                Imagine a radiant bride stepping into a moment of bliss with her prince charming -
                the perfect wedding, just as she envisioned.
              </p>
              <p className=" mb-6">
                At Stellaux, our mission transcends planning and managing events; we are dedicated
                to crafting memories that you&apos;ll cherish forever.
              </p>
              <p className="mb-6">
                From romantic proposals to joyful baby showers, stylish weddings to heartfelt
                surprises, we bring your vision to life.
              </p>
              <p className='mb-6'>Step into a world where every detail is curated to perfection. At Stellaux Events, we specialize in transforming your visions into memorable experiences. Our expertise spans a diverse range of events, including Social gatherings, corporate functions, entertainment showcases, fashion events, networking meetups, experiential activations, and educational seminars.</p>
              <p className='mb-6'>Why Choose Us?<br />Because we don&apos;t just plan events, we craft experiences. Our dedicated team is committed to excellence, ensuring that every aspect of your event is meticulously planned and flawlessly executed. We thrive on bringing your unique vision to life, creating events that leave a lasting impression.</p>
              <p>Ready to Elevate Your Event?<br />Let&apos;s turn your ideas into reality. Book a consultation with us today, and embark on a journey to create an event that transcends the ordinary. </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-indigo-100" id='services'>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-[Inter] font-bold text-center text-indigo-600 mb-12">Our Services</h2>
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


      <section className="py-20 bg-indigo-600" id='faqs'>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-[Inter] font-bold text-center text-white mb-12">Frequently Asked Questions</h2>
          <FAQAccordion />
        </div>
      </section>

      <footer className="bg-indigo-100 ">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <div className="space-y-8 xl:col-span-1">
              <Image src="/logo.png" alt="" width={100} height={100} />

            </div>
            <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
              {footerData.map((section) => (
                <div key={section.title} className="md:grid md:grid-cols-2 md:gap-8">
                  <div>
                    <h3 className="text-sm font-[Inter] font-semibold text-indigo-600 tracking-wider uppercase">
                      {section.title}
                    </h3>
                    <div className="flex flex-col mt-4 space-y-4">
                      {section.links.map((link: NavLink) => (
                        <Link
                          key={link.name}
                          href={link.href}
                          className="font-[Manrope] text-base text-indigo-700 hover:text-indigo-300 transition-colors"
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
            <p className="font-[Poppins] text-base text-indigo-600 xl:text-center">
              &copy; {new Date().getFullYear()} Stellaux Global. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}