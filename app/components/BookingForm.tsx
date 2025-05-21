'use client';

import { useState, FormEvent, ChangeEvent } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/app/components/UI/Button';
import { Icon } from '@/app/components/UI/Icon';
import { BookingFormData } from '@/app/lib/types';



const eventTypes = [
    //Social Events
    { value: '', label: 'Select an event type' },
    { value: 'birthday', label: 'Birthday Party' },
    { value: 'engagement', label: 'Engagement Proposal' },
    { value: 'wedding', label: 'Wedding' },
    { value: 'bridal-shower', label: 'Bridal Shower' },
    { value: 'baby-shower', label: 'Baby Shower' },

    // Corporate Events
    { value: 'conference', label: 'Conference', },
    { value: 'seminar', label: 'Seminar', },
    { value: 'product-launch', label: 'Product Launch', },
    { value: 'gala', label: 'Gala Dinner', },

    // Fashion Events
    { value: 'fashion-show', label: 'Fashion Show', },
    { value: 'model-casting', label: 'Model Casting', },
    { value: 'runway-production', label: 'Runway Production', },

    // Event Support
    { value: 'ushers', label: 'Professional Ushers', },
    { value: 'event-staff', label: 'Event Staffing', },
    { value: 'logistics', label: 'Logistics Management' },
];

const guestOptions = [
    { value: '', label: 'Select' },
    { value: '1-20', label: '1-20' },
    { value: '21-50', label: '21-50' },
    { value: '51-100', label: '51-100' },
    { value: '101-200', label: '101-200' },
    { value: '200+', label: '200+' },
];

export default function BookingForm() {
    const router = useRouter();
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const [formData, setFormData] = useState<BookingFormData>({
        name: '',
        email: '',
        phone: '',
        eventType: '',
        eventDate: '',
        guests: '',
        message: ''
    });

    const handleChange = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev: BookingFormData) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        if (!formData.name || !formData.email || !formData.eventType || !formData.eventDate) {
            alert('Please fill in all required fields');
            setIsSubmitting(false);
            return;
        }

        try {
            const response = await fetch('https://formsubmit.co/ajax/stellaigwe99@gmail.com', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    ...formData,
                    _subject: `New Booking Request from ${formData.name}`,
                    _template: 'table',
                    _autoresponse: `Thank you for your booking request, ${formData.name}! We'll contact you shortly.`,
                    _next: `${window.location.origin}/thank-you`
                })
            });

            if (response.ok) {
                router.push('/thank-you');
            } else {
                throw new Error('Form submission failed');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('There was an error submitting your form. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="divide-y divide-gray-200">
            <div className="px-6 py-5">
                <h3 className="text-xl font-[Inter] font-medium text-gray-900">Event Information</h3>
            </div>

            <div className="px-6 py-5 space-y-8">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div>
                        <label htmlFor="name" className="block text-lg font-[Inter] font-bold text-gray-700">
                            Full Name <span className='text-red-500 text-xl'>*</span>
                        </label>
                        <div className="mt-1 relative rounded-md shadow-sm">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Icon name="👤" className="h-5 w-5 text-gray-400" />
                            </div>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="font-[Poppins] focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md py-2"
                                required
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-lg font-[Inter] font-bold text-gray-700">
                            Email Address <span className='text-red-500 text-xl'>*</span>
                        </label>
                        <div className="mt-1 relative rounded-md shadow-sm">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Icon name="✉️" className="h-5 w-5 text-gray-400" />
                            </div>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="font-[Poppins] focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md py-2"
                                required
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="phone" className="block text-lg font-[Inter] font-bold text-gray-700">
                            Phone Number
                        </label>
                        <div className="mt-1 relative rounded-md shadow-sm">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Icon name="📞" className="h-5 w-5 text-gray-400" />
                            </div>
                            <input
                                type="tel"
                                name="phone"
                                id="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className="font-[Poppins] focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md py-2"
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="eventType" className="block text-lg font-[Inter] font-bold text-gray-700">
                            Event Type <span className='text-red-500 text-xl'>*</span>
                        </label>
                        <select
                            id="eventType"
                            name="eventType"
                            value={formData.eventType}
                            onChange={handleChange}
                            className="mt-1 font-[Poppins] text-gray-700 block w-full pl-3 pr-10 py-2 border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                            required
                        >
                            {eventTypes.map((option) => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <label htmlFor="eventDate" className="block text-lg font-[Inter] font-bold text-gray-700">
                            Event Date <span className='text-red-500 text-xl'>*</span>
                        </label>
                        <div className="mt-1 relative rounded-md shadow-sm">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Icon name="📅" className="h-5 w-5 text-gray-400" />
                            </div>
                            <input
                                type="date"
                                name="eventDate"
                                id="eventDate"
                                value={formData.eventDate}
                                onChange={handleChange}
                                className="font-[Poppins] text-gray-700 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md py-2"
                                required
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="guests" className="block text-lg font-[Inter] font-bold text-gray-700">
                            Estimated Guests
                        </label>
                        <select
                            id="guests"
                            name="guests"
                            value={formData.guests}
                            onChange={handleChange}
                            className="font-[Poppins] text-gray-700 mt-1 block w-full pl-3 pr-10 py-2 border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                        >
                            {guestOptions.map((option) => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                <div>
                    <label htmlFor="message" className="block text-lg font-[Inter] font-bold text-gray-700">
                        Additional Details
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        className="shadow-sm text-gray-700 focus:ring-indigo-500 focus:border-indigo-500 font-[Poppins] mt-1 block w-full sm:text-sm border border-gray-300 rounded-md p-2"
                        placeholder="Tell us about your event needs..."
                    />
                </div>
            </div>

            <div className="px-6 py-4 bg-gray-50 flex justify-end">
                <Button
                    type="submit"
                    variant="primary"
                    disabled={isSubmitting}
                    className="font-[Manrope] px-4 py-2 text-sm"
                >
                    {isSubmitting ? 'Processing...' : 'Submit Booking Request'}
                </Button>
            </div>
        </form>
    );
}