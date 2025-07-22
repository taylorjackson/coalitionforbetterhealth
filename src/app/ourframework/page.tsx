'use client'

import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { CallToAction } from '@/components/CallToAction'
import { Banner } from '@/components/Banner'
import {
    UserGroupIcon,
    HeartIcon,
    TruckIcon,
    BuildingOfficeIcon,
    UserIcon,
    BeakerIcon,
    BoltIcon,
    HomeIcon,
    CogIcon,
    ShieldCheckIcon,
    AcademicCapIcon,
    DocumentTextIcon,
    UserGroupIcon as TeamIcon,
    HeartIcon as PatientIcon,
    ChartBarIcon,
    EyeIcon,
    WrenchScrewdriverIcon,
    GlobeAltIcon,
    BookOpenIcon,
    TruckIcon as TransportIcon,
    HomeIcon as HousingIcon,
    LightBulbIcon,
    ChartPieIcon,
    ClipboardDocumentCheckIcon,
    ClockIcon,
} from '@heroicons/react/24/outline'

const pillars = [
    {
        name: 'Primary Care',
        description: 'The foundation of our healthcare system, providing continuous, comprehensive care.',
        icon: UserIcon,
        items: [
            'Family doctors in team-based networks',
            'First point of contact for ongoing care',
            'Continuous, coordinated, and comprehensive',
            'Longitudinal relationships',
            'Holistic, community-focused approach',
            'Strong doctor–patient relationships',
        ],
    },
    {
        name: 'Specialty Care',
        description: 'Specialized medical expertise and advanced diagnostic services.',
        icon: BeakerIcon,
        items: [
            'Specialist consultants & care teams',
            'Hospital & community-based services',
            'Diagnostic testing and advanced imaging',
            'Interdisciplinary collaboration',
        ],
    },
    {
        name: 'Acute Care',
        description: 'Emergency and critical care services for urgent health needs.',
        icon: BoltIcon,
        items: [
            'Emergency and urgent care',
            'Hospital-based response for critical needs',
            'Diagnostic imaging and triage',
            'Seamless coordination with other care pillars',
        ],
    },
    {
        name: 'Community Programs',
        description: 'Comprehensive support services and community-based care.',
        icon: HomeIcon,
        items: [
            'Allied health professionals',
            'Pharmacists, social workers, long-term care',
            'Home care support',
            'Culturally and regionally relevant services',
        ],
    },
]

const enablers = [
    {
        name: 'Shared patient records and summaries',
        description:
            'Comprehensive health information accessible to all care providers, ensuring continuity and coordination across the healthcare journey.',
        icon: DocumentTextIcon,
    },
    {
        name: 'Seamless collaboration across providers',
        description:
            'Integrated communication systems that enable healthcare teams to work together effectively, sharing insights and coordinating care plans.',
        icon: TeamIcon,
    },
    {
        name: 'Patient and family centered in all decisions',
        description:
            'Active involvement of patients and families in care planning, ensuring their values, preferences, and goals guide all healthcare decisions.',
        icon: PatientIcon,
    },
]

const foundationalSupports = [
    {
        name: 'Preventive care',
        description:
            'Proactive health interventions and screenings to prevent illness and promote wellness before problems arise.',
        icon: EyeIcon,
    },
    {
        name: 'Public health',
        description:
            'Population-level health initiatives and disease prevention strategies that protect and improve community health.',
        icon: ChartBarIcon,
    },
    {
        name: 'Social services',
        description:
            'Support services addressing social determinants of health, including housing assistance, food programs, and social support networks.',
        icon: WrenchScrewdriverIcon,
    },
    {
        name: 'Community resources',
        description:
            'Local health resources, support groups, and community programs that enhance health outcomes and social connection.',
        icon: GlobeAltIcon,
    },
    {
        name: 'Education',
        description:
            'Health literacy programs and educational initiatives that empower individuals to make informed health decisions.',
        icon: BookOpenIcon,
    },
    {
        name: 'Transportation',
        description:
            'Accessible transportation services ensuring patients can reach healthcare appointments and essential services.',
        icon: TransportIcon,
    },
    {
        name: 'Food security',
        description:
            'Programs and services that ensure individuals have reliable access to sufficient, affordable, and nutritious food.',
        icon: HeartIcon,
    },
    {
        name: 'Safe housing',
        description:
            'Stable, affordable, and healthy housing options that provide a foundation for good health and wellbeing.',
        icon: HousingIcon,
    },
]

const learningSystem = [
    {
        name: 'Evidence-based decision-making',
        description:
            'Clinical decisions and system improvements guided by the best available research, data, and clinical expertise.',
        icon: LightBulbIcon,
    },
    {
        name: 'Data-driven learning',
        description:
            'Continuous system improvement through collection, analysis, and application of health data and outcomes.',
        icon: ChartPieIcon,
    },
    {
        name: 'Accountability and transparency',
        description:
            'Clear reporting on system performance, outcomes, and resource allocation to build trust and drive improvement.',
        icon: ClipboardDocumentCheckIcon,
    },
    {
        name: 'Sustainability for the future',
        description:
            'Long-term planning and resource management to ensure the healthcare system can meet future needs effectively.',
        icon: ClockIcon,
    },
]

export default function AdvocacyPage() {
    return (
        <div className="bg-white">
            <Banner />
            <Header />
            <main className="isolate">
                {/* Background grid and blob for entire page */}
                <div className="relative isolate -z-10">
                    <svg className="absolute inset-x-0 top-0 -z-10 h-full w-full stroke-gray-200" aria-hidden="true">
                        <defs>
                            <pattern
                                id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84"
                                width={200}
                                height={200}
                                x="50%"
                                y={-1}
                                patternUnits="userSpaceOnUse"
                            >
                                <path d="M.5 200V.5H200" fill="none" />
                            </pattern>
                        </defs>
                        <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
                            <path
                                d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
                                strokeWidth={0}
                            />
                        </svg>
                        <rect
                            width="100%"
                            height="100%"
                            strokeWidth={0}
                            fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)"
                        />
                    </svg>
                    <div
                        className="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
                        aria-hidden="true"
                    >
                        <div
                            className="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
                            style={{
                                clipPath:
                                    'polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)',
                            }}
                        />
                    </div>
                </div>

                {/* Hero section */}
                <div className="relative isolate">
                    <div className="overflow-hidden">
                        <div className="mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32">
                            <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
                                <div className="relative w-full lg:max-w-xl lg:shrink-0 xl:max-w-2xl">
                                    <h1 className="text-pretty pt-28 text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
                                        Our Framework: The Model of Care
                                    </h1>
                                    <p className="text-pretty mt-8 text-lg font-medium text-gray-500 sm:text-xl/8 lg:max-w-none">
                                        We&apos;ve designed an integrated, patient-centered system grounded in
                                        collaboration, holistic services, and learning at every level. It stands on four
                                        pillars, supported by enablers and foundational services.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Four Pillars section */}
                <div className="py-24 sm:py-32">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="mx-auto max-w-2xl lg:text-center">
                            <h2 className="text-base/7 font-semibold text-[#9C27B0]">Our Framework</h2>
                            <p className="text-pretty lg:text-balance mt-2 text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                                The Four Pillars of Care
                            </p>
                            <p className="mt-6 text-lg/8 text-gray-700">
                                Our integrated healthcare system is built on four foundational pillars that work
                                together to provide comprehensive, patient-centered care.
                            </p>
                        </div>
                        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
                            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                                {pillars.map(pillar => (
                                    <div key={pillar.name} className="relative pl-16">
                                        <dt className="font-semibold text-gray-900">
                                            <div className="absolute left-0 top-0 z-10 flex h-10 w-10 items-center justify-center rounded-lg bg-[#9C27B0]">
                                                <pillar.icon className="h-6 w-6 text-white" />
                                            </div>
                                            {pillar.name}
                                        </dt>
                                        <dd className="mt-1 text-gray-600">{pillar.description}</dd>
                                        <ul className="mt-4 space-y-2">
                                            {pillar.items.map((item, itemIndex) => (
                                                <li
                                                    key={itemIndex}
                                                    className="flex items-start text-base/7 text-gray-600"
                                                >
                                                    <span className="mr-2 mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-[#9C27B0]"></span>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </dl>
                        </div>
                    </div>
                </div>

                {/* Enablers section */}
                <div className="relative py-24 sm:py-32">
                    {/* Reverse blob on left side */}
                    <div
                        className="absolute left-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
                        aria-hidden="true"
                    >
                        <div
                            className="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#9089fc] to-[#ff80b5] opacity-30"
                            style={{
                                clipPath:
                                    'polygon(36.9% 70.5%, 0% 82.9%, 23.4% 97%, 51.6% 100%, 55.4% 95.3%, 45.5% 74.7%, 40.2% 51%, 44.8% 42.2%, 55.6% 42.8%, 72.2% 52.1%, 64.9% 18.5%, 100% 2.3%, 60.8% 0%, 64.8% 18.6%, 2.8% 47.2%, 36.9% 70.5%)',
                            }}
                        />
                    </div>
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="mx-auto max-w-2xl lg:text-center">
                            <h2 className="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                                <div className="flex items-center justify-center gap-3">Enablers of Care</div>
                            </h2>
                            <p className="mt-6 text-lg/8 text-gray-700">
                                These key enablers ensure our healthcare system operates effectively and delivers the
                                best possible care to patients.
                            </p>
                        </div>
                        <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base/7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                            {enablers.map(enabler => (
                                <div key={enabler.name} className="relative pl-12">
                                    <dt className="font-semibold text-gray-900">
                                        <div className="absolute left-0 top-0 z-10 flex h-8 w-8 items-center justify-center rounded-lg bg-[#9C27B0]">
                                            <enabler.icon className="h-5 w-5 text-white" />
                                        </div>
                                        {enabler.name}
                                    </dt>
                                    <dd className="mt-1 text-gray-600">{enabler.description}</dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                </div>

                {/* Foundational Supports section */}
                <div className="py-24 sm:py-32">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="mx-auto max-w-2xl lg:text-center">
                            <h2 className="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                                <div className="flex items-center justify-center gap-3">Foundational Supports</div>
                            </h2>
                            <p className="mt-6 text-lg/8 text-gray-700">
                                To address the root causes of health, we integrate essential services and supports that
                                create the foundation for healthy communities.
                            </p>
                        </div>
                        <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base/7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4">
                            {foundationalSupports.map(support => (
                                <div key={support.name} className="relative pl-12">
                                    <dt className="font-semibold text-gray-900">
                                        <div className="absolute left-0 top-0 z-10 flex h-8 w-8 items-center justify-center rounded-lg bg-[#9C27B0]">
                                            <support.icon className="h-5 w-5 text-white" />
                                        </div>
                                        {support.name}
                                    </dt>
                                    <dd className="mt-1 text-gray-600">{support.description}</dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                </div>

                {/* Learning Health System section */}
                <div className="py-24 sm:py-32">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="mx-auto max-w-2xl lg:text-center">
                            <h2 className="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                                <div className="flex items-center justify-center gap-3">A Learning Health System</div>
                            </h2>
                            <p className="mt-6 text-lg/8 text-gray-700">
                                Our system continuously evolves through data-driven insights and evidence-based
                                improvements to deliver better care.
                            </p>
                        </div>
                        <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base/7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                            {learningSystem.map(item => (
                                <div key={item.name} className="relative pl-12">
                                    <dt className="font-semibold text-gray-900">
                                        <div className="absolute left-0 top-0 z-10 flex h-8 w-8 items-center justify-center rounded-lg bg-[#9C27B0]">
                                            <item.icon className="h-5 w-5 text-white" />
                                        </div>
                                        {item.name}
                                    </dt>
                                    <dd className="mt-1 text-gray-600">{item.description}</dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                </div>

                {/* Call to action section */}
                <CallToAction />
            </main>
            <Footer showBorder={false} />
        </div>
    )
}
