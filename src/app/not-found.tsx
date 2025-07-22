import { SlimLayout } from '@/components/SlimLayout'

export default function NotFound() {
    return (
        <SlimLayout>
            <div className="mt-20 text-center">
                <p className="text-6xl font-bold text-[#9C27B0]">404</p>
                <h1 className="mt-6 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">Page Not Found</h1>
                <p className="mt-4 text-lg leading-8 text-gray-600">
                    We couldn&apos;t find the page you&apos;re looking for. Let&apos;s get you back to transforming
                    healthcare in BC & Canada.
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                    <a
                        href="/"
                        className="rounded-md bg-[#9C27B0] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#7B1FA2] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9C27B0]"
                    >
                        Return Home
                    </a>
                    <a href="mailto:drcwang@icloud.com" className="text-sm font-semibold leading-6 text-gray-900">
                        Contact Us <span aria-hidden="true">→</span>
                    </a>
                </div>
            </div>
        </SlimLayout>
    )
}
