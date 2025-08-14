import Image from 'next/image'

export function BlogCallToAction() {
    return (
        <div className="relative bg-[#E1BEE7]/30">
            <div className="relative h-60 overflow-hidden md:absolute md:left-0 md:h-full md:w-1/3 lg:w-1/2">
                <Image
                    className="h-full w-full object-cover"
                    src="https://images.pexels.com/photos/8376248/pexels-photo-8376248.jpeg"
                    alt="Healthcare transformation"
                    fill
                    style={{ objectFit: 'cover' }}
                />
                <svg
                    viewBox="0 0 926 676"
                    aria-hidden="true"
                    className="absolute -bottom-24 left-24 w-[57.875rem] transform-gpu blur-[118px]"
                >
                    <path
                        fill="url(#60c3c621-93e0-4a09-a0e6-4c228a0116d8)"
                        fillOpacity=".4"
                        d="m254.325 516.708-90.89 158.331L0 436.427l254.325 80.281 163.691-285.15c1.048 131.759 36.144 345.144 168.149 144.613C751.171 125.508 707.17-93.823 826.603 41.15c95.546 107.978 104.766 294.048 97.432 373.585L685.481 297.694l16.974 360.474-448.13-141.46Z"
                    />
                    <defs>
                        <linearGradient
                            id="60c3c621-93e0-4a09-a0e6-4c228a0116d8"
                            x1="926.392"
                            x2="-109.635"
                            y1=".176"
                            y2="321.024"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stopColor="#9C27B0" />
                            <stop offset={1} stopColor="#E1BEE7" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>
            <div className="relative mx-auto my-8 max-w-7xl py-12 sm:py-20 lg:px-8 lg:py-28">
                <div className="pl-6 pr-6 md:ml-auto md:w-2/3 md:pl-16 lg:w-1/2 lg:pl-24 lg:pr-0 xl:pl-32">
                    <h2 className="text-base font-semibold leading-7 text-[#9C27B0]">
                        Want to improve health care with us?
                    </h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Join the Movement
                    </p>
                    <p className="mt-6 text-base leading-7 text-gray-600">
                        Join our movement to support doctors, empower patients, and create lasting change. Together, we
                        can build a better healthcare system for all Canadians.
                    </p>
                    <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                        <a
                            href="mailto:info@coalitionforbetterhealth.ca"
                            className="inline-flex rounded-md bg-[#9C27B0] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#7B1FA2] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9C27B0]"
                        >
                            Join the Coalition
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
