import BookingForm from '@/app/components/BookingForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Book Your Event | Stella Events',
    description: 'Schedule your consultation with our event planning team',
};

export default function BookPage() {
    return (
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center mb-12">
                <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                    Book Your Event
                </h1>
                <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
                    Complete the form below and we`&apos;`ll contact you within 24 hours
                </p>
            </div>

            <div className="bg-white shadow-xl rounded-lg overflow-hidden max-w-3xl mx-auto">
                <BookingForm />
            </div>
        </main>
    );
}