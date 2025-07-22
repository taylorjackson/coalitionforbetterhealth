const timeline = [
    {
        name: 'Organization Founded',
        description:
            'A group of passionate healthcare professionals came together to address the growing challenges in our healthcare system, driven by a shared vision of patient-centered care.',
        date: 'Mar 2023',
        dateTime: '2023-03',
    },
    {
        name: 'Community Stakeholder Engagement',
        description:
            'Launched extensive consultations with patients, families, healthcare providers, and community leaders across BC to understand local healthcare needs and priorities.',
        date: 'Jun 2023',
        dateTime: '2023-06',
    },
    {
        name: 'Grassroots Movement Begins',
        description:
            'Started building a grassroots network of supporters, hosting community forums, and developing our integrated model of care based on stakeholder feedback.',
        date: 'Sep 2023',
        dateTime: '2023-09',
    },
    {
        name: 'Official Community Launch',
        description:
            'Formally launched our organization with a comprehensive framework for healthcare transformation, ready to advocate for systemic change across Canada.',
        date: 'Jan 2024',
        dateTime: '2024-01',
    },
]

export function Team() {
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl sm:text-center">
                    <p className="text-base/7 font-semibold text-[#9C27B0]">Our Story</p>
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        A Grassroots Movement
                    </h2>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        From grassroots beginnings to a movement for healthcare transformation across Canada.
                    </p>
                </div>
                <div className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-8 overflow-hidden lg:mx-0 lg:max-w-none lg:grid-cols-4">
                    {timeline.map(item => (
                        <div key={item.name}>
                            <time
                                dateTime={item.dateTime}
                                className="flex items-center text-sm/6 font-semibold text-[#9C27B0]"
                            >
                                <svg viewBox="0 0 4 4" aria-hidden="true" className="mr-4 h-1 w-1 flex-none">
                                    <circle r={4} cx={2} cy={2} fill="currentColor" />
                                </svg>
                                {item.date}
                                <div
                                    aria-hidden="true"
                                    className="absolute -ml-2 h-px w-screen -translate-x-full bg-gray-900/10 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0"
                                />
                            </time>
                            <p className="mt-6 text-lg/8 font-semibold tracking-tight text-gray-900">{item.name}</p>
                            <p className="mt-1 text-base/7 text-gray-600">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
