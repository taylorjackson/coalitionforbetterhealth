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
                    <div className="relative flex items-center justify-end lg:order-first">
                        {/* Main image */}
                        <Image
                            src="https://images.pexels.com/photos/19550907/pexels-photo-19550907.jpeg"
                            alt="Healthcare professionals working together"
                            width={912}
                            height={608}
                            className="w-[40rem] max-w-full rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[48rem]"
                        />
                        {/* Overlay images in a more pleasing collage */}
                        <div className="absolute -left-16 bottom-8 flex flex-col gap-6 sm:gap-8">
                            <Image
                                src="https://images.pexels.com/photos/8830496/pexels-photo-8830496.jpeg"
                                alt="Patient care and support"
                                width={220}
                                height={160}
                                className="w-56 rounded-lg border-4 border-white shadow-lg"
                            />
                        </div>
                        <div className="absolute -right-10 top-56 flex flex-col gap-6 sm:gap-8">
                            <Image
                                src="https://images.pexels.com/photos/6436252/pexels-photo-6436252.jpeg"
                                alt="Medical innovation and technology"
                                width={220}
                                height={160}
                                className="w-56 rounded-lg border-4 border-white shadow-lg"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
