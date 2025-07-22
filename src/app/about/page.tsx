'use client'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Banner } from '@/components/Banner'
import Image from 'next/image'

const stats = [
    { label: 'Patients served annually', value: '10,000+' },
    { label: 'Healthcare providers supported', value: '500+' },
    { label: 'Communities impacted', value: '50+' },
]

const values = [
    {
        name: 'Excellence',
        description:
            'We pursue the highest standards of performance in all areas of healthcare delivery and system transformation.',
    },
    {
        name: 'Care',
        description:
            'Compassion and respect are at the heart of our work. We center the needs of patients and communities in everything we do.',
    },
    {
        name: 'Innovation',
        description:
            'We champion creativity and continuous improvement to transform how care is delivered and build better health systems.',
    },
    {
        name: 'Collaboration',
        description:
            'We believe in the power of collaborative leadership, bringing together patients, providers, and communities to drive change.',
    },
    {
        name: 'Empowerment',
        description:
            'We empower patients to take control of their health and support doctors to deliver the best possible care.',
    },
    {
        name: 'Community-Centered',
        description:
            'We build healthy communities by addressing urgent needs and creating sustainable, people-centered health systems.',
    },
]

const team = [
    {
        name: 'Dr. Sarah Johnson',
        role: 'Founding Member & Medical Director',
        imageUrl:
            'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    },
    {
        name: 'Michael Chen',
        role: 'Patient Advocate & Community Liaison',
        imageUrl:
            'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    },
    {
        name: 'Dr. Emily Rodriguez',
        role: 'Healthcare Policy Advisor',
        imageUrl:
            'https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    },
    {
        name: 'David Thompson',
        role: 'System Transformation Lead',
        imageUrl:
            'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    },
    {
        name: 'Lisa Park',
        role: 'Patient Experience Coordinator',
        imageUrl:
            'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    },
    {
        name: 'Dr. James Wilson',
        role: 'Clinical Innovation Director',
        imageUrl:
            'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    },
]

const footerNavigation = {
    main: [
        { name: 'About', href: '/about' },
        { name: 'Resources', href: '#' },
        { name: 'Contact', href: '#' },
        { name: 'Privacy', href: '#' },
        { name: 'Terms', href: '#' },
    ],
}

export default function AboutPage() {
    return (
        <div className="bg-white">
            <Banner />
            <Header />
            <main className="isolate">
                {/* Hero section */}
                <div className="relative isolate -z-10">
                    <svg
                        aria-hidden="true"
                        className="absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-gray-200 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]"
                    >
                        <defs>
                            <pattern
                                x="50%"
                                y={-1}
                                id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84"
                                width={200}
                                height={200}
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
                            fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)"
                            width="100%"
                            height="100%"
                            strokeWidth={0}
                        />
                    </svg>
                    <div
                        aria-hidden="true"
                        className="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
                    >
                        <div
                            style={{
                                clipPath:
                                    'polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)',
                            }}
                            className="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
                        />
                    </div>
                    <div className="overflow-hidden">
                        <div className="mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32">
                            <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
                                <div className="relative w-full lg:max-w-xl lg:shrink-0 xl:max-w-2xl">
                                    <h1 className="text-pretty text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
                                        Who We Are
                                    </h1>
                                    <p className="text-pretty mt-8 text-lg font-medium text-gray-500 sm:max-w-md sm:text-xl/8 lg:max-w-none">
                                        The Coalition for Better Health Care Society is a citizen-driven initiative
                                        founded to address the urgent crisis in Canada&apos;s health care system. We
                                        believe in collaborative leadership to transform how care is
                                        delivered—empowering patients, supporting providers, and centering the
                                        community.
                                    </p>
                                </div>
                                <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
                                    <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                                        <div className="relative">
                                            <Image
                                                alt=""
                                                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
                                                width={176}
                                                height={264}
                                                className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                                            />
                                            <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                                        </div>
                                    </div>
                                    <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                                        <div className="relative">
                                            <Image
                                                alt=""
                                                src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
                                                width={176}
                                                height={264}
                                                className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                                            />
                                            <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                                        </div>
                                        <div className="relative">
                                            <Image
                                                alt=""
                                                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-x=.4&w=396&h=528&q=80"
                                                width={176}
                                                height={264}
                                                className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                                            />
                                            <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                                        </div>
                                    </div>
                                    <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                                        <div className="relative">
                                            <Image
                                                alt=""
                                                src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=left&w=400&h=528&q=80"
                                                width={176}
                                                height={264}
                                                className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                                            />
                                            <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                                        </div>
                                        <div className="relative">
                                            <Image
                                                alt=""
                                                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
                                                width={176}
                                                height={264}
                                                className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                                            />
                                            <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mission & Vision section */}
                <div className="mx-auto -mt-12 max-w-7xl px-6 sm:mt-0 lg:px-8 xl:-mt-8">
                    <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
                        <h2 className="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                            Our Mission
                        </h2>
                        <div className="mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row">
                            <div className="lg:w-full lg:max-w-2xl lg:flex-auto">
                                <p className="text-xl/8 text-gray-600">
                                    We are citizens committed to improving health care by leading system transformation
                                    to save lives and resuscitate health care in BC and Canada.
                                </p>
                                <p className="mt-10 max-w-xl text-base/7 text-gray-700">
                                    We empower patients and support doctors to deliver quality care through a
                                    collaborative network with service and advocacy to meet urgent needs and build
                                    healthy communities.
                                </p>
                            </div>
                            <div className="lg:flex lg:flex-auto lg:justify-center">
                                <dl className="w-64 space-y-8 xl:w-80">
                                    {stats.map(stat => (
                                        <div key={stat.label} className="flex flex-col-reverse gap-y-4">
                                            <dt className="text-base/7 text-gray-600">{stat.label}</dt>
                                            <dd className="text-5xl font-semibold tracking-tight text-gray-900">
                                                {stat.value}
                                            </dd>
                                        </div>
                                    ))}
                                </dl>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Vision section */}
                <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:mx-0">
                        <h2 className="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                            Our Vision
                        </h2>
                        <p className="mt-6 text-xl/8 text-gray-600">Best care for all in a Learning Health System.</p>
                        <p className="mt-4 text-lg/8 text-gray-600">
                            We envision a future where high-performing, people-centered health systems deliver
                            accessible, evidence-based, and sustainable care.
                        </p>
                    </div>
                </div>

                {/* Image section */}
                <div className="mt-32 sm:mt-40 xl:mx-auto xl:max-w-7xl xl:px-8">
                    <Image
                        alt=""
                        src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
                        width={2832}
                        height={1133}
                        className="aspect-[5/2] w-full object-cover xl:rounded-3xl"
                    />
                </div>

                {/* Values section */}
                <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:mx-0">
                        <h2 className="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                            Our Values
                        </h2>
                        <p className="mt-6 text-lg/8 text-gray-600">
                            Our core values guide everything we do as we work to transform healthcare delivery and build
                            better communities.
                        </p>
                    </div>
                    <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base/7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                        {values.map(value => (
                            <div key={value.name}>
                                <dt className="font-semibold text-gray-900">{value.name}</dt>
                                <dd className="mt-1 text-gray-600">{value.description}</dd>
                            </div>
                        ))}
                    </dl>
                </div>

                {/* Team section */}
                <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-48 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:mx-0">
                        <h2 className="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                            Our Team
                        </h2>
                        <p className="mt-6 text-lg/8 text-gray-600">
                            We&apos;re a dynamic group of individuals who are passionate about transforming healthcare
                            and dedicated to delivering the best results for our communities.
                        </p>
                    </div>
                    <ul
                        role="list"
                        className="mx-auto mt-20 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-16 text-center sm:grid-cols-3 md:grid-cols-4 lg:mx-0 lg:max-w-none lg:grid-cols-3 xl:grid-cols-6"
                    >
                        {team.map(person => (
                            <li key={person.name}>
                                <Image
                                    alt=""
                                    src={person.imageUrl}
                                    width={96}
                                    height={96}
                                    className="size-24 mx-auto rounded-full"
                                />
                                <h3 className="mt-6 text-base/7 font-semibold tracking-tight text-gray-900">
                                    {person.name}
                                </h3>
                                <p className="text-sm/6 text-gray-600">{person.role}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </main>

            <div className="mt-24 sm:mt-32">
                <Footer />
            </div>
        </div>
    )
}
