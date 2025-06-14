import BookingForm from '@/app/components/BookingForm';
import { Metadata } from 'next';


export const metadata: Metadata = {
    title: 'Book Your Event | Stellaux Global',
    description: 'Schedule your consultation with our event planning team',
};

export default function BookPage() {
    return (
        <>
            <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12">
                <div className="container bg-indigo-100 mx-auto py-6 px-4 max-w-4xl">
                    <div className="text-center mb-12">
                        <h1 className="text-3xl font-[Inter] text-gray-700 font-extrabold mb-4">Book Your Event</h1>
                        <p className="font-[Poppins] text-lg text-center text-gray-600 max-w-2xl mx-auto">
                            We&apos;re thrilled at the prospect of making your event truly special. To begin, please
                            complete our consultation form. This will help us understand your needs and
                            preferences, ensuring we craft an experience that reflects your unique vision.
                        </p>
                        <p className="font-[Poppins] text-lg text-gray-600 max-w-2xl mx-auto mt-4">
                            Let&apos;s create unforgettable memories together.
                        </p>
                    </div>

                    <div className="bg-white p-8 rounded-lg shadow-lg">
                        <BookingForm />
                    </div>
                </div>
            </main>
        </>
    );
}