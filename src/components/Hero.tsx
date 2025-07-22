'use client'

import Image from 'next/image'
import { useScrollPosition } from '@/hooks/useScrollPosition'

export function Hero() {
    const scrollY = useScrollPosition()

    // Calculate padding based on header position
    // Banner height is ~40px (max-h-10), header is ~80px (p-6 = 48px + content)
    const fadeEnd = 150
    const isBannerVisible = scrollY < fadeEnd
    const paddingTop = isBannerVisible ? '7.5rem' : '4.5rem' // Banner + header when visible, just header when hidden

    return (
        <div className="bg-white" style={{ paddingTop }}>
            <div className="relative">
                <div className="mx-auto max-w-7xl">
                    <div className="relative z-10 pt-4 lg:w-full lg:max-w-2xl">
                        <svg
                            viewBox="0 0 100 100"
                            preserveAspectRatio="none"
                            aria-hidden="true"
                            className="absolute inset-y-0 right-12 hidden h-full w-96 translate-x-1/2 transform fill-white lg:block"
                        >
                            <polygon points="0,0 100,0 50,100 0,100" />
                        </svg>

                        <div className="relative px-6 py-20 sm:py-32 lg:px-8 lg:py-40 lg:pr-0">
                            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
                                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                                    Transforming Health Care in BC & Canada
                                </h1>
                                <p className="relative mt-6 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none">
                                    Leading system-wide reform to save lives, empower patients, and support doctors
                                    through innovation and collaboration.
                                </p>
                                <div className="mt-10 flex items-center gap-x-6">
                                    <a
                                        href="#secondary-features"
                                        className="rounded-md bg-[#9C27B0] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#7B1FA2] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9C27B0]"
                                    >
                                        Explore Our Approach
                                    </a>
                                    <a
                                        href="mailto:info@coalitionforbetterhealth.ca"
                                        className="text-sm/6 font-semibold text-gray-900"
                                    >
                                        Get Involved <span aria-hidden="true">→</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hidden bg-gray-50 lg:absolute lg:inset-y-0 lg:right-0 lg:block lg:w-1/2">
                    <Image
                        alt="Healthcare professionals working together"
                        src="https://images.pexels.com/photos/8376248/pexels-photo-8376248.jpeg"
                        className="h-full w-full object-cover"
                        fill
                    />
                </div>
            </div>
        </div>
    )
}
