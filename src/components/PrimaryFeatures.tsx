import { UserGroupIcon, HeartIcon } from '@heroicons/react/20/solid'

const features = [
  {
    name: 'Our Mission',
    description:
      'Our mission is constantly improve our qualifications to be able to heal according to global standards.',
    icon: HeartIcon,
  },
  {
    name: 'Great Experience',
    description:
      'Thanks to our experience, we have gained what is most valuable, i.e. patient trust and their positive recommendations.',
    icon: UserGroupIcon,
  },
]

export function PrimaryFeatures() {
  return (
    <div className=" bg-[#E1BEE7]/30 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:ml-auto lg:pl-4 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-[#9C27B0]">
                Dear patient
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                A step to better care which involves good doctors
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                This can be a long section describing or a direct message to
                your audience like why the patient matters or something like
                that. This can be a long section describing or a direct message
                to your audience like why the patient matters or something like
                that.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon
                        className="absolute left-1 top-1 h-6 w-6 text-[#9C27B0]"
                        aria-hidden="true"
                      />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <div className="relative flex items-start justify-end lg:order-first">
            <img
              src="https://quanticalabs.com/wp_themes/medicenter-dentist/files/2021/05/image_01.jpg"
              alt="Product screenshot"
              className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
            />
            <img
              src="https://quanticalabs.com/wp_themes/medicenter-dentist/files/2021/05/image_02.jpg"
              alt="Second Image Description"
              className="absolute -left-12 bottom-0 w-[20rem] rounded-lg shadow-lg"
            />
            <img
              src="https://quanticalabs.com/wp_themes/medicenter-dentist/files/2021/05/image_03.jpg"
              alt="Third Image Description"
              className="absolute -bottom-48 -right-12 w-[20rem] rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
