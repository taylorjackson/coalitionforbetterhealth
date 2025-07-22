import { UserGroupIcon, DocumentTextIcon, AcademicCapIcon, BeakerIcon } from '@heroicons/react/24/outline'

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
                            <div className="relative min-h-[30rem] w-full grow [container-type:inline-size] max-lg:mx-auto max-lg:max-w-sm">
                                <div className="absolute inset-x-10 bottom-0 top-10 overflow-hidden rounded-t-[12cqw] border-x-[3cqw] border-t-[3cqw] border-gray-700 bg-gray-900 shadow-2xl">
                                    <div className="flex h-full items-center justify-center">
                                        <UserGroupIcon className="h-32 w-32 text-white/20" />
                                    </div>
                                </div>
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
                            <div className="flex flex-1 items-center justify-center px-8 max-lg:pb-12 max-lg:pt-10 sm:px-10 lg:pb-2">
                                <DocumentTextIcon className="h-24 w-24 text-[#9C27B0]/20" />
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
                            <div className="flex flex-1 items-center [container-type:inline-size] max-lg:py-6 lg:pb-2">
                                <AcademicCapIcon className="h-[min(152px,40cqw)] text-[#9C27B0]/20" />
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
                            <div className="relative min-h-[30rem] w-full grow">
                                <div className="absolute bottom-0 left-10 right-0 top-10 overflow-hidden rounded-tl-xl bg-gray-900 shadow-2xl outline outline-white/10">
                                    <div className="flex bg-gray-900 outline outline-white/5">
                                        <div className="-mb-px flex text-sm/6 font-medium text-gray-400">
                                            <div className="border-b border-r border-b-white/20 border-r-white/10 bg-white/5 px-4 py-2 text-white">
                                                Research
                                            </div>
                                            <div className="border-r border-gray-600/10 px-4 py-2">Innovation</div>
                                        </div>
                                    </div>
                                    <div className="flex h-full items-center justify-center px-6 pb-14 pt-6">
                                        <BeakerIcon className="h-32 w-32 text-white/20" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="pointer-events-none absolute inset-px rounded-lg shadow outline outline-black/5 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]" />
                    </div>
                </div>
            </div>
        </div>
    )
}
