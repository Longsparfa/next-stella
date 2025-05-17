import BookingForm from '@/app/components/BookingForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Book Your Event | Stellaux Global',
    description: 'Schedule your consultation with our event planning team',
};

export default function BookPage() {
    return (
        <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="text-center mb-12">
                    <h1 className="text-3xl text-indigo-600 font-bold mb-4">Book Your Event</h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        We&apos;re thrilled at the prospect of making your event truly special. To begin, please
                        complete our consultation form. This will help us understand your needs and
                        preferences, ensuring we craft an experience that reflects your unique vision.
                    </p>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-4">
                        Let&apos;s create unforgettable memories together.
                    </p>
                </div>

                <div className="bg-white p-8 rounded-lg shadow-lg">
                    <BookingForm />
                </div>
            </div>
        </main>
        // <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        //     <div className="text-center mb-12">
        //         <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
        //             Book Your Event
        //         </h1>
        //         <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
        //             Complete the form below and we`&apos;`ll contact you within 24 hours
        //         </p>
        //     </div>

        //     <div className="bg-white shadow-xl rounded-lg overflow-hidden max-w-3xl mx-auto">
        //         <BookingForm />
        //     </div>
        // </main>
    );
}