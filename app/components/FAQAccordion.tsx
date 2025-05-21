'use client';

import { ChevronDownIcon } from '@heroicons/react/16/solid';
import { useState } from 'react';

const faqs = [
    {
        question: "Why should I hire an event planner?",
        answer: "Hiring an event planner like Stellaux ensures that every detail of your event is meticulously managed, allowing you to enjoy the occasion without stress."
    },
    {
        question: "What types of events do you specialize in?",
        answer: "We specialize in personal celebrations such as proposals, surprises, showers, weddings as well as seminars. We also provide professional ushers and event staffing services for your event."
    },
    {
        question: "How far in advance should I book your services?",
        answer: "We recommend booking as early as possible to secure your preferred date, especially for weddings and seminars."
    },
    {
        question: "Do you offer customizable packages?",
        answer: "Yes, we tailor our services to meet your specific needs and preferences."
    },
    {
        question: "What is your payment and cancellation policy?",
        answer: "A deposit is required to secure your booking. Our cancellation policy varies depending on the event type and timing; please contact us for detailed information."
    },
    {
        question: "Can you work within my budget?",
        answer: "Absolutely. We strive to deliver exceptional experiences that align with your budgetary considerations."
    },
    {
        question: "Do you handle vendor coordination?",
        answer: "Yes, we manage all vendor communications and logistics to ensure a cohesive event."
    },
    {
        question: "Will you be present on the event day?",
        answer: "Yes, our team will be on-site to oversee the event and address any last-minute needs."
    },
    {
        question: "How do I get started?",
        answer: "Contact us through our website or call us directly to schedule a consultation."
    },
    {
        question: "Do you offer services outside Lagos?",
        answer: "Yes, we are available for events across Nigeria and are open to discussing international engagements."
    }
];

export function FAQAccordion() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="space-y-4 max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
                <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                    <button
                        className="w-full flex items-center justify-between px-6 py-4 text-left font-medium font-[Cursive] text-indigo-600 bg-gray-50 hover:bg-gray-100 focus:outline-none"
                        onClick={() => toggleAccordion(index)}
                    >
                        {faq.question}
                        <ChevronDownIcon width={20} height={20} />
                    </button>
                    <div
                        className={`px-6 py-4 bg-indigo-100 transition-all duration-300 ${activeIndex === index ? 'block' : 'hidden'}`}
                    >
                        <p className="font-[Poppins] text-indigo-600">{faq.answer}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}