import { UserGroupIcon, DocumentTextIcon, AcademicCapIcon, BeakerIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'

const services = [
    {
        name: 'Empowered Partnerships',
        description:
            'Facilitate collaboration between patients and doctors, enable shared decision-making, and promote long-term health relationships.',
        icon: UserGroupIcon,
        items: [
            'Facilitate collaboration between patients and doctors',
            'Enable shared decision-making',
            'Promote long-term health relationships',
        ],
    },
    {
        name: 'Policy Advocacy',
        description:
            'Champion reforms that drive systemic change, partner with government and health authorities, and ensure accountability and patient safety.',
        icon: DocumentTextIcon,
        items: [
            'Champion reforms that drive systemic change',
            'Partner with government and health authorities',
            'Ensure accountability and patient safety',
        ],
    },
    {
        name: 'Education & Engagement',
        description:
            'Community workshops and public forums, health literacy campaigns, and provider resources and support tools.',
        icon: AcademicCapIcon,
        items: [
            'Community workshops and public forums',
            'Health literacy campaigns',
            'Provider resources and support tools',
        ],
    },
    {
        name: 'Innovation & Research',
        description:
            'Support continuous learning and health system evaluation, and apply data insights to improve quality and equity.',
        icon: BeakerIcon,
        items: [
            'Support continuous learning and health system evaluation',
            'Apply data insights to improve quality and equity',
        ],
    },
]

export function Services() {
    return (
        <div className="bg-[#E1BEE7]/30 py-24 sm:py-32">
            <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
                <h2 className="text-center text-base/7 font-semibold text-[#9C27B0]">What We Deliver</h2>
                <p className="text-balance mx-auto mt-2 max-w-lg text-center text-4xl font-semibold tracking-tight text-gray-950 sm:text-5xl">
                    Comprehensive Healthcare Solutions
                </p>
                <p className="text-balance mx-auto mt-6 max-w-lg text-center text-lg leading-8 text-gray-600">
                    We deliver a range of services designed to transform healthcare delivery, empower patients and
                    providers, and build stronger, healthier communities across Canada.
                </p>
                <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
                    {/* First service - spans 2 rows */}
                    <div className="relative lg:row-span-2">
                        <div className="absolute inset-px rounded-lg bg-white lg:rounded-l-[2rem]" />
                        <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
                            <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                                <div className="flex items-center gap-x-3">
                                    <UserGroupIcon className="h-6 w-6 flex-none text-[#9C27B0]" aria-hidden="true" />
                                    <p className="text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                                        {services[0].name}
                                    </p>
                                </div>
                                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                                    {services[0].description}
                                </p>
                                <ul className="mt-4 space-y-2">
                                    {services[0].items.map((item, index) => (
                                        <li key={index} className="flex items-start">
                                            <span className="mr-3 mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#9C27B0]"></span>
                                            <span className="text-sm text-gray-600">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="relative flex min-h-[20rem] w-full grow items-center justify-center [container-type:inline-size] max-lg:mx-auto max-lg:max-w-sm max-lg:pb-6 max-lg:pt-6">
                                <Image
                                    src="https://images.pexels.com/photos/6146704/pexels-photo-6146704.jpeg"
                                    alt="Team-based primary care"
                                    width={800}
                                    height={600}
                                    className="xxs:max-h-[20rem] h-full w-full max-w-[90%] rounded-[2rem] border border-gray-200 object-cover shadow-lg sm:max-h-[35rem]"
                                />
                            </div>
                        </div>
                        <div className="pointer-events-none absolute inset-px rounded-lg shadow outline outline-black/5 lg:rounded-l-[2rem]" />
                    </div>

                    {/* Second service */}
                    <div className="relative max-lg:row-start-1">
                        <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-t-[2rem]" />
                        <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
                            <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                                <div className="flex items-center gap-x-3">
                                    <DocumentTextIcon className="h-6 w-6 flex-none text-[#9C27B0]" aria-hidden="true" />
                                    <p className="text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                                        {services[1].name}
                                    </p>
                                </div>
                                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                                    {services[1].description}
                                </p>
                            </div>
                            <div className="relative flex min-h-[18rem] w-full grow items-center justify-center [container-type:inline-size] max-lg:mx-auto max-lg:max-w-sm">
                                <Image
                                    src="https://images.pexels.com/photos/8898683/pexels-photo-8898683.jpeg"
                                    alt={services[1].name}
                                    width={600}
                                    height={400}
                                    className="h-full max-h-[14rem] w-full max-w-[90%] rounded-[2rem] border border-gray-200 object-cover shadow-lg"
                                />
                            </div>
                        </div>
                        <div className="pointer-events-none absolute inset-px rounded-lg shadow outline outline-black/5 max-lg:rounded-t-[2rem]" />
                    </div>

                    {/* Third service */}
                    <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
                        <div className="absolute inset-px rounded-lg bg-white" />
                        <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)]">
                            <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                                <div className="flex items-center gap-x-3">
                                    <AcademicCapIcon className="h-6 w-6 flex-none text-[#9C27B0]" aria-hidden="true" />
                                    <p className="text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                                        {services[2].name}
                                    </p>
                                </div>
                                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                                    {services[2].description}
                                </p>
                            </div>
                            <div className="relative flex min-h-[18rem] w-full grow items-center justify-center [container-type:inline-size] max-lg:mx-auto max-lg:max-w-sm">
                                <Image
                                    src="https://images.pexels.com/photos/6129649/pexels-photo-6129649.jpeg"
                                    alt="Learning health system"
                                    width={600}
                                    height={400}
                                    className="h-full max-h-[14rem] w-full max-w-[90%] rounded-[2rem] border border-gray-200 object-cover shadow-lg"
                                />
                            </div>
                        </div>
                        <div className="pointer-events-none absolute inset-px rounded-lg shadow outline outline-black/5" />
                    </div>

                    {/* Fourth service - spans 2 rows */}
                    <div className="relative lg:row-span-2">
                        <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]" />
                        <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
                            <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                                <div className="flex items-center gap-x-3">
                                    <BeakerIcon className="h-6 w-6 flex-none text-[#9C27B0]" aria-hidden="true" />
                                    <p className="text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                                        {services[3].name}
                                    </p>
                                </div>
                                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                                    {services[3].description}
                                </p>
                                <ul className="mt-4 space-y-2">
                                    {services[3].items.map((item, index) => (
                                        <li key={index} className="flex items-start">
                                            <span className="mr-3 mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#9C27B0]"></span>
                                            <span className="text-sm text-gray-600">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="relative flex min-h-[30rem] w-full grow items-center justify-center [container-type:inline-size] max-lg:mx-auto max-lg:max-w-sm max-lg:pb-6 max-lg:pt-6">
                                <Image
                                    src="https://images.pexels.com/photos/7722869/pexels-photo-7722869.jpeg"
                                    alt="Research and innovation"
                                    width={800}
                                    height={600}
                                    className="h-full max-h-[35rem] w-full max-w-[90%] rounded-[2rem] border border-gray-200 object-cover shadow-lg"
                                />
                            </div>
                        </div>
                        <div className="pointer-events-none absolute inset-px rounded-lg shadow outline outline-black/5 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]" />
                    </div>
                </div>
            </div>
        </div>
    )
}
