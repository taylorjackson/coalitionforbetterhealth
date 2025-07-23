import { BuildingOffice2Icon, EnvelopeIcon } from '@heroicons/react/24/outline'

export function Location() {
    return (
        <div className="relative isolate" id="contact-us">
            <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
                <div className="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48">
                    <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
                        <h2 className="text-left text-base/7 font-semibold text-[#9C27B0]">Contact Us</h2>
                        <p className="text-balance mt-2 max-w-lg text-left text-3xl font-semibold tracking-tight text-gray-950 sm:text-5xl">
                            Let&apos;s Work Together to Transform Care
                        </p>
                        <p className="mt-6 text-lg leading-8 text-gray-600">
                            We welcome patients, care providers, advocates, researchers, and policymakers to join our
                            Coalition.
                        </p>
                        <dl className="mt-10 space-y-4 text-base leading-7 text-gray-600">
                            <div className="flex gap-x-4">
                                <dt className="flex-none">
                                    <span className="sr-only">Address</span>
                                    <BuildingOffice2Icon className="h-7 w-6 text-gray-400" aria-hidden="true" />
                                </dt>
                                <dd>125-8120 Cook Rd, Richmond B.C. V6Y 1T9</dd>
                            </div>
                            <div className="flex gap-x-4">
                                <dt className="flex-none">
                                    <span className="sr-only">Email</span>
                                    <EnvelopeIcon className="h-7 w-6 text-gray-400" aria-hidden="true" />
                                </dt>
                                <dd>
                                    <a className="hover:text-gray-900" href="mailto:info@coalitionforbetterhealth.ca">
                                        info@coalitionforbetterhealth.ca
                                    </a>
                                </dd>
                            </div>
                        </dl>
                    </div>
                </div>
                <section className="body-font relative w-full text-gray-600">
                    <div className="absolute inset-0 py-24">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2608.809387249246!2d-123.13780152345605!3d49.166226171375456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54860aca94857ad5%3A0x968587937b131ac7!2s8120%20Cook%20Rd%2C%20Richmond%2C%20BC%20V6Y%201T9!5e0!3m2!1sen!2sca!4v1699740536650!5m2!1sen!2sca"
                            width="100%"
                            height="100%"
                            className="rounded-3xl"
                        ></iframe>
                    </div>
                </section>
            </div>
        </div>
    )
}
