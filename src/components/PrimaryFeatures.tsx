import { UserGroupIcon, HeartIcon, LightBulbIcon, StarIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'

const features = [
    {
        name: 'Excellence',
        description: 'We pursue the highest standards of performance in all areas.',
        icon: StarIcon,
    },
    {
        name: 'Care',
        description: 'Compassion and respect are at the heart of our work.',
        icon: HeartIcon,
    },
    {
        name: 'Innovation',
        description: 'We champion creativity and continuous improvement.',
        icon: LightBulbIcon,
    },
]

export function PrimaryFeatures() {
    return (
        <div className="bg-[#E1BEE7]/30 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                    <div className="lg:ml-auto lg:pl-4 lg:pt-4">
                        <div className="lg:max-w-lg">
                            <h2 className="text-base font-semibold leading-7 text-[#9C27B0]">About Us</h2>
                            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                                Citizen-Led Health Care Transformation
                            </p>
                            <p className="mt-6 text-lg leading-8 text-gray-600">
                                We are a citizen-led organization committed to resuscitating health care by empowering
                                patients and supporting doctors. We believe that a sustainable, integrated, and learning
                                health system is essential to building healthier communities across Canada.
                            </p>

                            <div className="mt-10">
                                <a
                                    href="/ourframework"
                                    className="rounded-md bg-[#9C27B0] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#7B1FA2] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9C27B0]"
                                >
                                    Learn More
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="relative flex items-start justify-end lg:order-first">
                        <Image
                            src="https://quanticalabs.com/wp_themes/medicenter-dentist/files/2021/05/image_01.jpg"
                            alt="Healthcare professionals working together"
                            width={912}
                            height={608}
                            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
                        />
                        <Image
                            src="https://quanticalabs.com/wp_themes/medicenter-dentist/files/2021/05/image_02.jpg"
                            alt="Patient care and support"
                            width={320}
                            height={240}
                            className="absolute -left-12 bottom-0 w-[20rem] rounded-lg shadow-lg"
                        />
                        <Image
                            src="https://quanticalabs.com/wp_themes/medicenter-dentist/files/2021/05/image_03.jpg"
                            alt="Medical innovation and technology"
                            width={320}
                            height={240}
                            className="absolute -bottom-48 -right-12 w-[20rem] rounded-lg shadow-lg"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
