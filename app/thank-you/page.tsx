import Link from 'next/link';
import { Metadata } from 'next';
import { CheckCircleIcon } from '@heroicons/react/16/solid';




export const metadata: Metadata = {
  title: 'Thank You | Stellaux Global',
  description: 'Thank you for your booking request',
};

export default function ThankYouPage() {
  return (
    <div className="bg-white min-h-screen px-4 py-16 sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8">
      <div className="max-w-max mx-auto">
        <div className="text-center">
          <CheckCircleIcon className="mx-auto h-12 w-12 text-green-500" />
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Thank you for your booking!
          </h1>
          <p className="mt-6 text-base leading-7 text-gray-600 max-w-2xl mx-auto">
            We&apos;ve received your booking request and will contact you within 24 hours to confirm details.
            A confirmation email has been sent to your inbox. If you don&apos;t see it, please check your spam folder.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Go back home
            </Link>
            <Link
              href="/book"
              className="text-sm font-semibold text-gray-900 hover:text-indigo-500"
            >
              Make another booking <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>

        <div className="mt-16 border-t border-gray-200 pt-8">
          <h2 className="text-sm font-semibold text-gray-900">Need immediate assistance?</h2>
          <div className="mt-4 flex flex-col sm:flex-row gap-4">
            <div className="flex-auto">
              <div className="text-sm leading-6 text-gray-600">
                <p className="font-medium text-gray-900">Email us</p>
                <p className="mt-1">stellaigwe99@gmail.com</p>
              </div>
            </div>
            <div className="flex-auto">
              <div className="text-sm leading-6 text-gray-600">
                <p className="font-medium text-gray-900">Call us</p>
                <p className="mt-1">+234 90 2928-6664</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}