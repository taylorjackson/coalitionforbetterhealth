export function CallToAction() {
  return (
    <div className="relative bg-[#E1BEE7]/30">
      <div className="relative h-80 overflow-hidden md:absolute md:left-0 md:h-full md:w-1/3 lg:w-1/2">
        <img
          className="h-full w-full object-cover"
          src="https://imgs.search.brave.com/UuhUsidhsCzMkcOcMVKiA68SpevXD7Ovo_qBXljIpCg/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE1/MzI5Mzg5MTEwNzkt/MWIwNmFjN2NlZWM3/P2l4bGliPXJiLTQu/MC4zJml4aWQ9TTN3/eE1qQTNmREI4TUh4/elpXRnlZMmg4Tkh4/OFpHOWpkRzl5SlRJ/d1kyOXVjM1ZzZEh4/bGJud3dmSHd3Zkh4/OE1BPT0mdz0xMDAw/JnE9ODA"
          alt=""
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
      <div className="relative mx-auto my-12 max-w-7xl py-24 sm:py-36 lg:px-8 lg:py-44">
        <div className="pl-6 pr-6 md:ml-auto md:w-2/3 md:pl-16 lg:w-1/2 lg:pl-24 lg:pr-0 xl:pl-32">
          <h2 className="text-base font-semibold leading-7 text-[#9C27B0]">
            Award winning medical staff
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            We’re here to help
          </p>
          <p className="mt-6 text-base leading-7 text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas
            tempus tellus etiam sed. Quam a scelerisque amet ullamcorper eu enim
            et fermentum, augue. Aliquet amet volutpat quisque ut interdum
            tincidunt duis.
          </p>
          <div className="mt-8">
            <a
              href="#"
              className="inline-flex rounded-md bg-[#9C27B0] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Visit our clinic
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
