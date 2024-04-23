import { CloudArrowUpIcon, LockClosedIcon } from '@heroicons/react/20/solid'
import { motion } from "framer-motion";
import Buttons from "./Appbuttons";

const features = [
  {
    name: 'Push to deploy.',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'SSL certificates.',
    description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
    icon: LockClosedIcon,
  },
]



export default function Hero() {
  return (
    <div className="overflow-hidden bg-white py-5 sm:pt-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base text-center md:text-left font-semibold leading-7 text-sky-600">Estudia faster</h2>
              <p className="mt-2 text-3xl font-bold text-center md:text-left tracking-tight text-gray-900 sm:text-4xl">SwiftStudy</p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque,
                iste dolor cupiditate blanditiis ratione.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon className="absolute left-1 top-1 h-5 w-5 text-sky-600" aria-hidden="true"/>
                      {feature.name}
                    </dt>{''}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
              <Buttons />
            </div>
          </div>
          <img
            src="src/assets/test1.png"
            alt="Product screenshot"
            className="w-[48rem] max-w-full rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
            width={2432}
            height={1442}
          />
        </div>
      </div>
    </div>
  )
}
