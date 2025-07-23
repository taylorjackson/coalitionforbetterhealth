'use client'

import { useScrollPosition } from '@/hooks/useScrollPosition'

export function Banner() {
    const scrollY = useScrollPosition()

    // Calculate opacity based on scroll position
    // Start fading at 50px scroll, completely hidden at 150px
    const fadeStart = 50
    const fadeEnd = 150
    const opacity = Math.max(0, 1 - (scrollY - fadeStart) / (fadeEnd - fadeStart))

    // Hide banner completely when scrolled past fadeEnd
    const isVisible = scrollY < fadeEnd

    if (!isVisible) {
        return null
    }

    return (
        <div
            className="fixed left-0 right-0 top-0 z-50 max-h-16 transition-opacity duration-300 sm:max-h-10"
            style={{ opacity }}
        >
            <div className="relative isolate flex flex-col items-center gap-x-6 gap-y-1 overflow-hidden bg-gray-50 px-6 py-2.5 sm:flex-row sm:gap-y-0 sm:px-3.5 sm:before:flex-1">
                <div
                    className="absolute left-[max(-7rem,calc(50%-52rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
                    aria-hidden="true"
                >
                    <div
                        className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#ff80b5] to-[#9089fc] opacity-30"
                        style={{
                            clipPath:
                                'polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)',
                        }}
                    />
                </div>
                <div
                    className="absolute left-[max(45rem,calc(50%+8rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
                    aria-hidden="true"
                >
                    <div
                        className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#ff80b5] to-[#9089fc] opacity-30"
                        style={{
                            clipPath:
                                'polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)',
                        }}
                    />
                </div>
                <div className="flex max-w-7xl flex-col flex-wrap items-center gap-y-2 sm:flex-row md:gap-x-[12rem] lg:gap-x-[25rem]  xl:gap-x-[45rem]">
                    <div className="text-center text-sm leading-6 text-gray-900 sm:text-left">
                        <strong className="px-1 font-semibold">125-8120 Cook Rd, Richmond B.C.</strong>
                        <svg
                            viewBox="0 0 2 2"
                            className="mx-2 hidden h-1 w-1 fill-current sm:inline md:mx-4"
                            aria-hidden="true"
                        >
                            <circle cx={1} cy={1} r={1} />
                        </svg>

                        <span className="block px-1 sm:inline">info@coalitionforbetterhealth.ca</span>
                    </div>
                </div>

                <div className="flex flex-1 justify-end"></div>
            </div>
        </div>
    )
}

export function Banner2() {
    return (
        <div className="fixed left-0 right-0 top-0 z-50 max-h-10">
            <div className="relative isolate flex gap-x-6 overflow-hidden bg-gray-50 px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
                <div
                    className="absolute left-[max(-7rem,calc(50%-52rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
                    aria-hidden="true"
                >
                    <div
                        className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#ff80b5] to-[#9089fc] opacity-30"
                        style={{
                            clipPath:
                                'polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)',
                        }}
                    />
                </div>
                <div
                    className="absolute left-[max(45rem,calc(50%+8rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
                    aria-hidden="true"
                >
                    <div
                        className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#ff80b5] to-[#9089fc] opacity-30"
                        style={{
                            clipPath:
                                'polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)',
                        }}
                    />
                </div>
                <div className="absolute flex gap-x-4 gap-y-2">
                    <p className="text-sm leading-6 text-gray-900">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="inline h-4 w-4"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                            />
                        </svg>
                        <strong className="px-1 font-semibold">125-8120 Cook Rd, Richmond B.C.</strong>
                    </p>
                </div>
                <div className="flex flex-1 justify-end"></div>
            </div>
        </div>
    )
}
